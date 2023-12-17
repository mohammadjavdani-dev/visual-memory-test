'use client';

import { useTimer } from "@/hooks";
import { withValidSession } from "@/HOCs";

const EighthSlide = () => {
    useTimer({ slideNumber: 8 });

    return null;
}

export default withValidSession(EighthSlide);