import { IMAGES, TImages } from "@/constants/images";
import { generateRandomInteger } from "@/utils";

type Props = {
    secondSlideContent: 'image' | 'text';
}

type SingleTest = Props & {
    index: number;
    isCorrect: boolean;
    reactionTimeInFifthSlide: number;
    slidesTimeout: Array<number | string>;
    sourceImageId: null | number;
    targetImageId: null | number;
    testParametherType: 'goal' | 'deflection' | 'neutral';
    testType: 'fake' | 'real';
};

type SingleTestGenerator = (
    params: Pick<SingleTest, 'index' | 'slidesTimeout' | 'testParametherType' | 'testType'>
) => SingleTest;

const REAL_CLONED_IMAGES: TImages[] = IMAGES.map(a => { return { ...a } });
const FAKE_CLONED_IMAGES: TImages[] = IMAGES.map(a => { return { ...a } });

export const GenerateTest = (props: Props): Array<SingleTest> => {
    const { secondSlideContent } = props;

    const singleTestGenerator: SingleTestGenerator = (params) => {
        const { index, slidesTimeout, testParametherType, testType } = params;
        const singleTest: SingleTest = {
            index,
            isCorrect: false,
            reactionTimeInFifthSlide: 0,
            secondSlideContent,
            slidesTimeout,
            sourceImageId: null,
            targetImageId: null,
            testParametherType,
            testType
        }

        if (testParametherType === 'goal') {
            if (testType === 'real') {
                const randomNum = generateRandomInteger(REAL_CLONED_IMAGES.length);
                singleTest.sourceImageId = REAL_CLONED_IMAGES[randomNum].image_id;
                singleTest.targetImageId = REAL_CLONED_IMAGES[randomNum].image_id;
                REAL_CLONED_IMAGES.splice(randomNum, 1);
            } else {
                const randomNum = generateRandomInteger(FAKE_CLONED_IMAGES.length);
                singleTest.sourceImageId = FAKE_CLONED_IMAGES[randomNum].image_id;
                singleTest.targetImageId = FAKE_CLONED_IMAGES[randomNum].image_id;
                FAKE_CLONED_IMAGES.splice(randomNum, 1);
            }
        }

        if (testParametherType === 'deflection') {
            if (testType === 'real') {
                const firstRandomNum = generateRandomInteger(REAL_CLONED_IMAGES.length);
                singleTest.sourceImageId = REAL_CLONED_IMAGES[firstRandomNum].image_id;
                REAL_CLONED_IMAGES.splice(firstRandomNum, 1);
                const secondRandomNum = generateRandomInteger(REAL_CLONED_IMAGES.length);
                singleTest.targetImageId = REAL_CLONED_IMAGES[secondRandomNum].image_id;
                REAL_CLONED_IMAGES.splice(secondRandomNum, 1);
            } else {
                const firstRandomNum = generateRandomInteger(FAKE_CLONED_IMAGES.length);
                singleTest.sourceImageId = FAKE_CLONED_IMAGES[firstRandomNum].image_id;
                FAKE_CLONED_IMAGES.splice(firstRandomNum, 1);
                const secondRandomNum = generateRandomInteger(FAKE_CLONED_IMAGES.length);
                singleTest.targetImageId = FAKE_CLONED_IMAGES[secondRandomNum].image_id;
                FAKE_CLONED_IMAGES.splice(secondRandomNum, 1);
            }
        }

        if (testParametherType === 'neutral') {
            if (testType === 'real') {
                const randomNum = generateRandomInteger(FAKE_CLONED_IMAGES.length);
                singleTest.targetImageId = FAKE_CLONED_IMAGES[randomNum].image_id;
                FAKE_CLONED_IMAGES.splice(randomNum, 1);
            } else {
                const randomNum = generateRandomInteger(FAKE_CLONED_IMAGES.length);
                singleTest.targetImageId = FAKE_CLONED_IMAGES[randomNum].image_id;
                FAKE_CLONED_IMAGES.splice(randomNum, 1);
            }
        }

        return singleTest;
    }

    const fakeTestGenerator = () => {
        return [
            singleTestGenerator({
                index: 0,
                slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                testParametherType: 'goal',
                testType: 'fake'
            }),
            singleTestGenerator({
                index: 1,
                slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                testParametherType: 'goal',
                testType: 'fake'
            }),
            singleTestGenerator({
                index: 2,
                slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                testParametherType: 'deflection',
                testType: 'fake'
            }),
            singleTestGenerator({
                index: 3,
                slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                testParametherType: 'deflection',
                testType: 'fake'
            }),
            singleTestGenerator({
                index: 4,
                slidesTimeout: [2, 0, 0, 0, '', 0, 0, 0],
                testParametherType: 'neutral',
                testType: 'fake'
            }),
            singleTestGenerator({
                index: 5,
                slidesTimeout: [2, 0, 0, 0, '', 0, 0, 0],
                testParametherType: 'neutral',
                testType: 'fake'
            }),
        ];
    }

    const realTestGenerator = () => {
        const realTests = [];
        for (let i = 0; i < 4; i++) {
            const chunk: Array<SingleTest> = [
                singleTestGenerator({
                    index: 18 * i + 6 + 0,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: 'goal',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 1,
                    slidesTimeout: secondSlideContent === 'image' ? [2, 0, 0, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'neutral' : 'deflection',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 2,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: 'goal',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 3,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'deflection' : 'goal',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 4,
                    slidesTimeout: secondSlideContent === 'image' ? [2, 0, 0, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'neutral' : 'deflection',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 5,
                    slidesTimeout: [2, 0, 0, 0, '', 0, 0, 0],
                    testParametherType: 'neutral',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 6,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [2, 0, 0, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'deflection' : 'neutral',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 7,
                    slidesTimeout: secondSlideContent === 'image' ? [2, 0, 0, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'neutral' : 'deflection',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 8,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [2, 0, 0, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'goal' : 'neutral',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 9,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: 'goal',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 10,
                    slidesTimeout: secondSlideContent === 'image' ? [2, 0, 0, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'neutral' : 'deflection',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 11,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'deflection' : 'goal',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 12,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [2, 0, 0, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'deflection' : 'neutral',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 13,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [2, 0, 0, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'goal' : 'neutral',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 14,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: 'deflection',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 15,
                    slidesTimeout: secondSlideContent === 'image' ? [2, 0, 0, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'neutral' : 'deflection',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 16,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [0.5, 1.5, 4, 0, '', 0, 0, 0],
                    testParametherType: 'goal',
                    testType: 'real'
                }),
                singleTestGenerator({
                    index: 18 * i + 6 + 17,
                    slidesTimeout: secondSlideContent === 'image' ? [0.5, 1.5, 2, 0, '', 0, 0, 0] : [2, 0, 0, 0, '', 0, 0, 0],
                    testParametherType: secondSlideContent === 'image' ? 'deflection' : 'neutral',
                    testType: 'real'
                }),
            ];
            realTests.push(chunk);
        }

        return realTests;
    }

    return [
        fakeTestGenerator(),
        ...realTestGenerator()
    ].flat();
}