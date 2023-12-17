'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { CircularProgress, Typography } from "@mui/material";
import { SlideContainer } from "@/components/templates";
import { IMAGES } from "@/constants/images";
import { useTimer } from "@/hooks";
import { withValidSession } from "@/HOCs";

interface IState {
    secondSlideContent: null | 'image' | 'text';
    testParametherType: null | 'goal' | 'deflection' | 'neutral';
    sourceImageId: null | number;
    isMounted: boolean;
}

const SecondSlide = () => {
    useTimer({ slideNumber: 2, destination: '/third' });

    const [state, setState] = useState<IState>({
        secondSlideContent: null,
        testParametherType: null,
        sourceImageId: null,
        isMounted: false
    });

    const { secondSlideContent, sourceImageId, testParametherType, isMounted } = state;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const session = window.sessionStorage;
            const currentTest = JSON.parse(session.getItem('tests') as string)[session.getItem('inprogress_test_number') as string];
            setState({
                secondSlideContent: currentTest.secondSlideContent,
                testParametherType: currentTest.testParametherType,
                sourceImageId: currentTest.sourceImageId,
                isMounted: true
            });
        }
    }, []);

    const renderConditions = () => {
        if (secondSlideContent === 'image') {
            if (testParametherType === 'goal' || testParametherType === 'deflection') {
                return <Image src={IMAGES[sourceImageId as number].image_src} width="512" height="512" alt="" />;
            }
        }

        if (secondSlideContent === 'text') {
            if (testParametherType === 'goal' || testParametherType === 'deflection') {
                return <Typography variant="h1" sx={{ fontSize: "12rem" }}>{IMAGES[sourceImageId as number].image_title}</Typography>;
            }
        }

        return null;
    }

    return <>
        <SlideContainer>
            {
                !isMounted ?
                    <CircularProgress size={72} /> :
                    renderConditions()
            }
        </SlideContainer>
    </>
}

export default withValidSession(SecondSlide);