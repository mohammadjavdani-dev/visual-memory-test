'use client';

import { withValidSession } from "@/HOCs";

const SubmitResultsPage = () => {

    const submitResults = async () => {
        const session = window.sessionStorage;
        const gender = session.getItem('participant_gender');
        const test_count = Number(session.getItem('test_count'));
        const test_properties = JSON.parse(session.getItem('tests') as string)
            .map((value: any) => {
                const [
                    first_slide_time,
                    second_slide_time,
                    third_slide_time,
                    fourth_slide_time,
                    ,
                    sixth_slide_time,
                    seventh_slide_time,
                    eighth_slide_time
                ] = value.slidesTimeout;
                return ({
                    is_real: value.testType === 'real',
                    test_type: value.secondSlideContent,
                    test_parameter: value.testParametherType,
                    first_slide_time,
                    second_slide_time,
                    third_slide_time,
                    fourth_slide_time,
                    reaction_time: value.reactionTimeInFifthSlide / 1000,
                    sixth_slide_time,
                    seventh_slide_time,
                    eighth_slide_time,
                    has_correct_answer: value.isCorrect
                })
            });

        const response = await fetch('/api/submit-results', {
            method: "POST",
            body: JSON.stringify({
                gender,
                test_count,
                test_properties
            })
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <button onClick={submitResults}>Submit Results!</button>
        </>
    );
}

export default withValidSession(SubmitResultsPage);