'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { SlideContainer } from "@/components/templates";
import { IMAGES, TImages } from "@/constants/images";
import { withValidSession } from "@/HOCs";
import { ShuffleArray } from "@/utils";

interface IState {
    targetImageId: null | number;
    isMounted: boolean;
}

const FifthSlide = () => {
    const router = useRouter();
    const [shuffledArray, setShuffledArray] = useState<null | TImages[]>(null);
    const [initialTime, setInitialTime] = useState<null | number>(null);
    const [state, setState] = useState<IState>({
        targetImageId: null,
        isMounted: false
    });

    const { targetImageId, isMounted } = state;

    const handleSelectImage = (imageId: number) => {
        if (typeof window !== 'undefined') {
            const spentTime = Date.now() - (initialTime as number);
            const session = window.sessionStorage;
            const tests = JSON.parse(session.getItem('tests') as string);
            const currentTest = session.getItem('inprogress_test_number') as string;
            tests[currentTest].isCorrect = imageId === targetImageId;
            tests[currentTest].reactionTimeInFifthSlide = spentTime;
            session.setItem('tests', JSON.stringify(tests));
            router.replace('/sixth');
        }
    }

    useEffect(() => {
        if (!shuffledArray) {
            setShuffledArray(ShuffleArray({ array: IMAGES }));
            setInitialTime(Date.now())
        } else {
            if (typeof window !== 'undefined') {
                const session = window.sessionStorage;
                const currentTest = JSON.parse(session.getItem('tests') as string)[session.getItem('inprogress_test_number') as string];
                setState({
                    targetImageId: currentTest.targetImageId,
                    isMounted: true
                });
            }
        }
    }, [shuffledArray]);

    return <SlideContainer padding="0.5rem">
        {
            !shuffledArray || !isMounted ?
                <CircularProgress size={72} /> :
                <Grid container direction='column' alignItems="center">
                    <Typography variant="h1" sx={{ color: '#006400', fontSize: '3.5rem' }}>{IMAGES[targetImageId as number].image_title}</Typography>
                    <Grid sx={{ width: '1260px', height: '540px', marginTop: '1rem' }}>
                        <Grid container sx={{ width: '100%', height: '100%' }}>
                            {
                                shuffledArray.map((value: any) => (
                                    <Grid onClick={() => handleSelectImage(value.image_id)} key={value.image_id} container justifyContent="center" alignItems="center" sx={{ width: 90, height: 90, cursor: 'pointer' }}>
                                        <Image src={value.image_src} width={80} height={80} alt="" />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
        }
    </SlideContainer >
}

export default withValidSession(FifthSlide);