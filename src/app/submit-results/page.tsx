'use client';

import { withValidSession } from "@/HOCs";

const SubmitResultsPage = () => {
    return <h1>Submit Test Results!</h1>
}

export default withValidSession(SubmitResultsPage);