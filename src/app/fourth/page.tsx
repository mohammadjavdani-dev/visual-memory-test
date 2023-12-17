'use client';

import { useTimer } from "@/hooks";
import { withValidSession } from "@/HOCs";

const FourthSlide = () => {
    useTimer({ slideNumber: 4, destination: '/fifth' });

    return null;
}

export default withValidSession(FourthSlide);