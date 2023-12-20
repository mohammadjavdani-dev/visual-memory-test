'use client';

import { withValidSession } from "@/HOCs";

const SubmitResultsPage = () => {

    const getResults = async () => {
        const response = await fetch('/api/get-results');
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <button onClick={getResults}>Get Results!</button>
        </>
    );
}

export default withValidSession(SubmitResultsPage);