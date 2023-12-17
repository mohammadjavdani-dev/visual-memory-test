'use client';

import { PlusSign } from "@/components/atoms";
import { SlideContainer } from "@/components/templates";
import { useTimer } from "@/hooks";
import { withValidSession } from "@/HOCs";

const FirstSlide = () => {
    useTimer({ slideNumber: 1, destination: '/second' });

    return <SlideContainer>
        <PlusSign />
    </SlideContainer>
}

export default withValidSession(FirstSlide);