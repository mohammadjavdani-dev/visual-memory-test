'use client';

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, CircularProgress, Grid, Paper, Table, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import { SlideContainer } from "@/components/templates";
import { theme } from "@/theme";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const TABLE_HEADS = [
    'کد شرکت‌کننده',
    'جنسیت',
    'شماره آزمون',
    'نوع آزمون',
    'محتوای اسلاید 2',
    'مولفه آزمون',
    'زمان واکنش',
    'پاسخ',
    'زمان اسلاید 1',
    'زمان اسلاید 2',
    'زمان اسلاید 3',
    'زمان اسلاید 4',
    'زمان اسلاید 6',
    'زمان اسلاید 7',
    'زمان اسلاید 8',
];

const GoToHomeButton = () => {
    const router = useRouter();
    return <Button
        type="button"
        variant="contained"
        color="error"
        onClick={() => router.replace('/')}
        sx={{ marginY: '0.5rem' }}
    >
        <span style={{ lineHeight: '1rem' }}>بازگشت به صفحه اصلی</span>
    </Button>;
}

const GetResultsPage = () => {
    const [results, setResults] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/get-results');
                const data = await response.json();
                const results = data.data.map((value) => ({
                    id: value.id,
                    gender: value.gender,
                    detail: value.test_properties ? value.test_properties.map((property, index) => ({
                        test_id: `${value.gender.charAt(0).toUpperCase()}${value.id}_${index + 1}`,
                        ...property
                    })) : []
                }));
                setResults(results);
            } catch (error) {
                setResults([]);
                toast.error("خطا در برقراری ارتباط با سرور! لطفا صفحه را رفرش کنید", {
                    autoClose: 5000,
                });
            }
        })();
    }, []);

    return (
        <SlideContainer padding="0.5rem">
            {
                !results ?
                    <CircularProgress size={72} /> :
                    (Array.isArray(results) && !results.length ?
                        <Grid container direction="column" alignItems="center" rowGap={4}>
                            <Typography variant="h1">داده‌ای یافت نشد!</Typography>
                            <GoToHomeButton />
                        </Grid>
                        :
                        <Grid container direction="column" alignItems="center" rowGap={4}>
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {
                                                TABLE_HEADS.map((value, key) => (
                                                    <StyledTableCell key={key} align="center">{value}</StyledTableCell>
                                                ))
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {results.map((value, key) => (
                                            <Fragment key={key}>
                                                <TableRow sx={{ backgroundColor: key % 2 === 1 ? theme.palette.action.hover : 'inherit' }}>
                                                    <TableCell align="center" rowSpan={value.detail.length + 1}>
                                                        {value.id}
                                                    </TableCell>
                                                    <TableCell align="center" rowSpan={value.detail.length + 1}>
                                                        {value.gender === 'male' ? "آقا" : "خانم"}
                                                    </TableCell>
                                                </TableRow>
                                                {value.detail.map((detail, detailKey, originalArray) => (
                                                    <Fragment key={detailKey}>
                                                        <TableRow sx={{ backgroundColor: (originalArray.length > 1 && detailKey % 2 === 1) || (originalArray.length === 1 && key % 2 === 1) ? theme.palette.action.hover : 'inherit' }}>
                                                            <TableCell align="center">{detail.test_id}</TableCell>
                                                            <TableCell align="center">{detail.is_real ? 'واقعی' : 'امتحانی'}</TableCell>
                                                            <TableCell align="center">{detail.test_type === 'image' ? 'تصویری' : 'متنی'}</TableCell>
                                                            <TableCell align="center">
                                                                {
                                                                    {
                                                                        'goal': 'هدف',
                                                                        'deflection': 'انحرافی',
                                                                        'neutral': 'خنثی'
                                                                    }[detail.test_parameter]
                                                                }
                                                            </TableCell>
                                                            <TableCell align="center">{detail.reaction_time} ثانیه</TableCell>
                                                            <TableCell align="center">{detail.has_correct_answer ? 'صحیح' : 'غلط'}</TableCell>
                                                            <TableCell align="center">{detail.first_slide_time} ثانیه</TableCell>
                                                            <TableCell align="center">{detail.second_slide_time} ثانیه</TableCell>
                                                            <TableCell align="center">{detail.third_slide_time} ثانیه</TableCell>
                                                            <TableCell align="center">{detail.fourth_slide_time} ثانیه</TableCell>
                                                            <TableCell align="center">{detail.sixth_slide_time} ثانیه</TableCell>
                                                            <TableCell align="center">{detail.seventh_slide_time} ثانیه</TableCell>
                                                            <TableCell align="center">{detail.eighth_slide_time} ثانیه</TableCell>
                                                        </TableRow>
                                                    </Fragment>
                                                ))}
                                            </Fragment>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                            <GoToHomeButton />
                        </Grid>
                    )
            }
        </SlideContainer>
    );
}

export default GetResultsPage;