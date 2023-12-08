'use client'

import { useTimer } from "@/hooks";

const SixthSlide = () => {
    useTimer({ slideNumber: 6, destination: '/seventh' });

    return null;
}

export default SixthSlide;