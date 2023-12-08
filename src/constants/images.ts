const IMAGES_PATH = '/assets/images';

// export const IMAGES = [
//     {
//         image_id: 0,
//         image_src: `${IMAGES_PATH}/Robot.jpg`,
//         image_title: 'ربات'
//     }
// ];

type TImages = {
    image_id: number;
    image_src: string;
    image_title: number;
}

export const IMAGES: TImages[] = Array(70).fill(null).map((_: null, key) => ({
    image_id: key + 1,
    image_src: `${IMAGES_PATH}/Robot.jpg`,
    image_title: key + 1
}))

export const CLONED_IMAGES: TImages[] = IMAGES.map(a => { return { ...a } });