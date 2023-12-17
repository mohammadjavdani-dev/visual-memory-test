'use client';

import { useTimer } from "@/hooks";
import { withValidSession } from "@/HOCs";

const SixthSlide = () => {
    useTimer({ slideNumber: 6, destination: '/seventh' });

    return null;
}

export default withValidSession(SixthSlide);