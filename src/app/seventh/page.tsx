'use client'

import { PlusSign } from "@/components/atoms";
import { SlideContainer } from "@/components/templates";
import { useTimer } from "@/hooks";

const SeventhSlide = () => {
    useTimer({ slideNumber: 7, destination: '/eighth' });

    return <SlideContainer>
        <PlusSign />
    </SlideContainer>
}

export default SeventhSlide;