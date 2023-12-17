interface IProps {
    array: Array<any>;
    shuffleTimes?: number;
}

export const ShuffleArray = (props: IProps): Array<any> => {

    const shuffleArray = (array: Array<unknown>) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const shuffleArrayMultipleTimes = (props: IProps) => {
        const { array, shuffleTimes = 7 } = props;
        const newArray = [...array];
        for (let i = 0; i < shuffleTimes; i++) {
            shuffleArray(newArray);
        }
        return newArray;
    }

    return shuffleArrayMultipleTimes(props);
}