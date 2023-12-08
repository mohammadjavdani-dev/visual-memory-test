export const generateRandomInteger = (max: number) => {
    const randomFloat = Math.random();
    const scaledRandom = Math.floor(randomFloat * max);
    return scaledRandom;
}