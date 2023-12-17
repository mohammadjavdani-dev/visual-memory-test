'use client';

import { PlusSign } from "@/components/atoms";
import { SlideContainer } from "@/components/templates";
import { useTimer } from "@/hooks";
import { withValidSession } from "@/HOCs";

const ThirdSlide = () => {
    useTimer({ slideNumber: 3, destination: '/fourth' });

    return <SlideContainer>
        <PlusSign />
    </SlideContainer>
}

export default withValidSession(ThirdSlide);