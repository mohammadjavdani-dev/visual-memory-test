'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface IProps {
    slideNumber: number;
    destination?: string;
}

export const useTimer = (props: IProps): void => {
    const { destination, slideNumber } = props;

    const router = useRouter();

    const [time, setTime] = useState(() => {
        if (typeof window !== 'undefined') {
            const session = window.sessionStorage;
            const currentTest = JSON.parse(session.getItem('tests') as string)[session.getItem('inprogress_test_number') as string];
            return currentTest.slidesTimeout[slideNumber - 1];
        }
        return 0;
    });

    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => {
                setTime(time - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            if (typeof window !== 'undefined') {
                const session = window.sessionStorage;
                if (slideNumber === 8) {
                    if (Number(session.getItem('test_count')) - 1 === Number(session.getItem('inprogress_test_number'))) {
                        router.replace('/submit-results')
                    } else {
                        session.setItem('inprogress_test_number', String(Number(session.getItem('inprogress_test_number')) + 1))
                        router.replace('/first')
                    }
                } else {
                    router.replace(destination as string);
                }
            }
        }
    }, [destination, router, slideNumber, time]);
}