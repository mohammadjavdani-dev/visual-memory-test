'use client';

import { useRouter } from 'next/navigation';
import { ComponentType, useEffect, useState } from 'react';

export function withValidSession<P>(WrappedComponent: ComponentType<P & {}>) {

    const WrapperComponent = (props: P & {}) => {
        const router = useRouter();
        const [isValidSession, setIsValidSession] = useState(false);

        useEffect(() => {
            if (typeof window !== 'undefined') {
                const session = window.sessionStorage;
                if (!session.getItem('participant_gender') && !session.getItem('tests')) {
                    router.replace('/');
                } else {
                    setIsValidSession(true);
                }
            }
        }, [router]);

        if (!isValidSession) return null;

        return <WrappedComponent {...props} />;
    };

    return WrapperComponent;
}