'use client';

import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

import { SlideContainer } from "@/components/templates";
import { withValidSession } from "@/HOCs";

const SubmitResultsPage = () => {
    const router = useRouter();
    const [exitFromTest, setExitFromTest] = useState(false);

    const submitResults = async () => {
        const session = window.sessionStorage;
        const gender = session.getItem('participant_gender');
        const test_count = Number(session.getItem('test_count'));
        const tests = JSON.parse(session.getItem('tests') ?? '[]').slice(6).map(value => ({ ...value, index: value.index - 6 }));
        const test_properties = tests
            .map((value) => {
                const [
                    first_slide_time,
                    second_slide_time,
                    third_slide_time,
                    fourth_slide_time,
                    ,
                    sixth_slide_time,
                    seventh_slide_time,
                    eighth_slide_time
                ] = value.slidesTimeout;
                return ({
                    is_real: value.testType === 'real',
                    test_type: value.secondSlideContent,
                    test_parameter: value.testParametherType,
                    first_slide_time,
                    second_slide_time,
                    third_slide_time,
                    fourth_slide_time,
                    reaction_time: value.reactionTimeInFifthSlide / 1000,
                    sixth_slide_time,
                    seventh_slide_time,
                    eighth_slide_time,
                    has_correct_answer: value.isCorrect
                })
            });

        try {
            const response = await fetch('/api/submit-results', {
                method: "POST",
                body: JSON.stringify({
                    gender,
                    test_count,
                    test_properties
                })
            });
            await response.json();
            toast.success("داده‌ها با موفقیت ثبت شدند", {
                autoClose: 2000,
                onClose: () => router.replace('/')
            });
        } catch (error) {
            toast.error("خطا در ثبت نتایج! لطفا پنجره مرورگر را نبندید و پس از بررسی اتصال اینترنت و یا قطع/وصل فیلترشکن مجدد امتحان کنید", {
                autoClose: 10000,
            });
        }
    }

    return (
        <SlideContainer padding="0.5rem">
            <Dialog
                open={exitFromTest}
                onClose={() => setExitFromTest(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        داده‌های شرکت‌کننده فعلی در پایگاه داده <b>ذخیره نشده است</b>! با رفتن به صفحه اصلی این داده‌ها را برای همیشه از دست خواهید داد. آیا ادامه می‌دهید؟
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid item container justifyContent="space-between" alignItems="center">
                        <Button onClick={() => router.replace('/')}>ادامه</Button>
                        <Button onClick={() => setExitFromTest(false)}>انصراف</Button>
                    </Grid>
                </DialogActions>
            </Dialog>
            <Grid container direction="column" justifyContent="center" alignItems="center" rowGap={8}>
                <Typography variant="h1">پایان آزمون</Typography>
                <Grid container justifyContent="center" alignItems="center" columnGap={8}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={submitResults}
                        sx={{ marginY: '0.5rem' }}
                    >
                        <span style={{ lineHeight: '1rem' }}>ثبت نتایج</span>
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="error"
                        onClick={() => setExitFromTest(true)}
                        sx={{ marginY: '0.5rem' }}
                    >
                        <span style={{ lineHeight: '1rem' }}>بازگشت به صفحه اصلی</span>
                    </Button>
                </Grid>
            </Grid>
        </SlideContainer>
    );
}

export default withValidSession(SubmitResultsPage);