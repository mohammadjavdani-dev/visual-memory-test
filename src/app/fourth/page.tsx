'use client'

import { useTimer } from "@/hooks";

const FourthSlide = () => {
    useTimer({ slideNumber: 4, destination: '/fifth' });

    return null;
}

export default FourthSlide;