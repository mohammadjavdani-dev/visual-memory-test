const IMAGES_PATH = '/assets/images';

export type TImagesWithoutId = {
    image_src: string;
    image_title: string;
}

export type TImages = TImagesWithoutId & {
    image_id: number;
}

const IMAGES_WITHOUT_ID: TImagesWithoutId[] = [
    {
        image_src: `${IMAGES_PATH}/airplane.png`,
        image_title: "هواپیما"
    },
    {
        image_src: `${IMAGES_PATH}/apple.png`,
        image_title: "سیب"
    },
    {
        image_src: `${IMAGES_PATH}/baby-bottle.png`,
        image_title: "شیشه شیر"
    },
    {
        image_src: `${IMAGES_PATH}/baguette.png`,
        image_title: "نان باگت"
    },
    {
        image_src: `${IMAGES_PATH}/bicycle.png`,
        image_title: "دوچرخه"
    },
    {
        image_src: `${IMAGES_PATH}/birthday-cake.png`,
        image_title: "کیک تولد"
    },
    {
        image_src: `${IMAGES_PATH}/boat.png`,
        image_title: "قایق"
    },
    {
        image_src: `${IMAGES_PATH}/bone.png`,
        image_title: "استخوان"
    },
    {
        image_src: `${IMAGES_PATH}/boot.png`,
        image_title: "چکمه"
    },
    {
        image_src: `${IMAGES_PATH}/brush.png`,
        image_title: "قلم نقاشی"
    },
    {
        image_src: `${IMAGES_PATH}/bucket.png`,
        image_title: "سطل آب"
    },
    {
        image_src: `${IMAGES_PATH}/butterfly.png`,
        image_title: "پروانه"
    },
    {
        image_src: `${IMAGES_PATH}/calculator.png`,
        image_title: "ماشین حساب"
    },
    {
        image_src: `${IMAGES_PATH}/camera.png`,
        image_title: "دوربین عکاسی"
    },
    {
        image_src: `${IMAGES_PATH}/candy.png`,
        image_title: "شکلات"
    },
    {
        image_src: `${IMAGES_PATH}/cap.png`,
        image_title: "کلاه کپ"
    },
    {
        image_src: `${IMAGES_PATH}/car.png`,
        image_title: "ماشین"
    },
    {
        image_src: `${IMAGES_PATH}/carrot.png`,
        image_title: "هویج"
    },
    {
        image_src: `${IMAGES_PATH}/cassette-tape.png`,
        image_title: "نوار کاست"
    },
    {
        image_src: `${IMAGES_PATH}/cat.png`,
        image_title: "گربه"
    },
    {
        image_src: `${IMAGES_PATH}/chair.png`,
        image_title: "صندلی"
    },
    {
        image_src: `${IMAGES_PATH}/cheese.png`,
        image_title: "پنیر"
    },
    {
        image_src: `${IMAGES_PATH}/cherry.png`,
        image_title: "گیلاس"
    },
    {
        image_src: `${IMAGES_PATH}/clothes-hanger.png`,
        image_title: "چوب لباسی"
    },
    {
        image_src: `${IMAGES_PATH}/comb.png`,
        image_title: "شانه مو"
    },
    {
        image_src: `${IMAGES_PATH}/diamond.png`,
        image_title: "الماس"
    },
    {
        image_src: `${IMAGES_PATH}/dog.png`,
        image_title: "سگ"
    },
    {
        image_src: `${IMAGES_PATH}/elephant.png`,
        image_title: "فیل"
    },
    {
        image_src: `${IMAGES_PATH}/eye.png`,
        image_title: "چشم"
    },
    {
        image_src: `${IMAGES_PATH}/fan.png`,
        image_title: "پنکه"
    },
    {
        image_src: `${IMAGES_PATH}/fish-bowl.png`,
        image_title: "تنگ ماهی"
    },
    {
        image_src: `${IMAGES_PATH}/flashlight.png`,
        image_title: "چراغ قوه"
    },
    {
        image_src: `${IMAGES_PATH}/flower.png`,
        image_title: "گل"
    },
    {
        image_src: `${IMAGES_PATH}/fridge.png`,
        image_title: "فریزر"
    },
    {
        image_src: `${IMAGES_PATH}/game-controller.png`,
        image_title: "دسته بازی"
    },
    {
        image_src: `${IMAGES_PATH}/girl.png`,
        image_title: "دختر"
    },
    {
        image_src: `${IMAGES_PATH}/glasses.png`,
        image_title: "عینک"
    },
    {
        image_src: `${IMAGES_PATH}/globe.png`,
        image_title: "کره جغرافیایی"
    },
    {
        image_src: `${IMAGES_PATH}/guitar.png`,
        image_title: "گیتار"
    },
    {
        image_src: `${IMAGES_PATH}/hair-dryer.png`,
        image_title: "سشوار"
    },
    {
        image_src: `${IMAGES_PATH}/hammer.png`,
        image_title: "چکش"
    },
    {
        image_src: `${IMAGES_PATH}/hand.png`,
        image_title: "دست"
    },
    {
        image_src: `${IMAGES_PATH}/headphones.png`,
        image_title: "هدفون"
    },
    {
        image_src: `${IMAGES_PATH}/helicopter.png`,
        image_title: "هلیکوپتر"
    },
    {
        image_src: `${IMAGES_PATH}/hourglass.png`,
        image_title: "ساعت شنی"
    },
    {
        image_src: `${IMAGES_PATH}/house.png`,
        image_title: "خانه"
    },
    {
        image_src: `${IMAGES_PATH}/ice-cream.png`,
        image_title: "بستنی"
    },
    {
        image_src: `${IMAGES_PATH}/iron.png`,
        image_title: "اتو لباس"
    },
    {
        image_src: `${IMAGES_PATH}/jacket.png`,
        image_title: "ژاکت"
    },
    {
        image_src: `${IMAGES_PATH}/key.png`,
        image_title: "کلید"
    },
    {
        image_src: `${IMAGES_PATH}/kite.png`,
        image_title: "بادبادک"
    },
    {
        image_src: `${IMAGES_PATH}/knife.png`,
        image_title: "چاقو"
    },
    {
        image_src: `${IMAGES_PATH}/ladder.png`,
        image_title: "نردبان"
    },
    {
        image_src: `${IMAGES_PATH}/lamp.png`,
        image_title: "لامپ"
    },
    {
        image_src: `${IMAGES_PATH}/lantern.png`,
        image_title: "فانوس"
    },
    {
        image_src: `${IMAGES_PATH}/leaf.png`,
        image_title: "برگ"
    },
    {
        image_src: `${IMAGES_PATH}/letter.png`,
        image_title: "پاکت نامه"
    },
    {
        image_src: `${IMAGES_PATH}/lock.png`,
        image_title: "قفل"
    },
    {
        image_src: `${IMAGES_PATH}/magnet.png`,
        image_title: "آهن ربا"
    },
    {
        image_src: `${IMAGES_PATH}/magnifier.png`,
        image_title: "ذره بین"
    },
    {
        image_src: `${IMAGES_PATH}/medicine.png`,
        image_title: "دارو"
    },
    {
        image_src: `${IMAGES_PATH}/milk.png`,
        image_title: "شیر پاکتی"
    },
    {
        image_src: `${IMAGES_PATH}/mixer-blender.png`,
        image_title: "مخلوط کن"
    },
    {
        image_src: `${IMAGES_PATH}/monkey.png`,
        image_title: "میمون"
    },
    {
        image_src: `${IMAGES_PATH}/moon.png`,
        image_title: "ماه"
    },
    {
        image_src: `${IMAGES_PATH}/mouse.png`,
        image_title: "موش"
    },
    {
        image_src: `${IMAGES_PATH}/orange.png`,
        image_title: "پرتقال"
    },
    {
        image_src: `${IMAGES_PATH}/pants.png`,
        image_title: "شلوار"
    },
    {
        image_src: `${IMAGES_PATH}/pistol.png`,
        image_title: "تفنگ"
    },
    {
        image_src: `${IMAGES_PATH}/pizza.png`,
        image_title: "پیتزا"
    },
    {
        image_src: `${IMAGES_PATH}/pot.png`,
        image_title: "قابلمه"
    },
    {
        image_src: `${IMAGES_PATH}/pumpkin.png`,
        image_title: "کدو تنبل"
    },
    {
        image_src: `${IMAGES_PATH}/rocket.png`,
        image_title: "موشک"
    },
    {
        image_src: `${IMAGES_PATH}/ruler.png`,
        image_title: "خط‌کش"
    },
    {
        image_src: `${IMAGES_PATH}/safety-pin.png`,
        image_title: "سنجاق قفلی"
    },
    {
        image_src: `${IMAGES_PATH}/sandals.png`,
        image_title: "دمپایی"
    },
    {
        image_src: `${IMAGES_PATH}/sandwich.png`,
        image_title: "ساندویچ"
    },
    {
        image_src: `${IMAGES_PATH}/school-bus.png`,
        image_title: "اتوبوس"
    },
    {
        image_src: `${IMAGES_PATH}/scissors.png`,
        image_title: "قیچی"
    },
    {
        image_src: `${IMAGES_PATH}/scooter.png`,
        image_title: "اسکوتر"
    },
    {
        image_src: `${IMAGES_PATH}/sewing-machine.png`,
        image_title: "چرخ خیاطی"
    },
    {
        image_src: `${IMAGES_PATH}/shovel.png`,
        image_title: "بیل"
    },
    {
        image_src: `${IMAGES_PATH}/snowman.png`,
        image_title: "آدم برفی"
    },
    {
        image_src: `${IMAGES_PATH}/socks.png`,
        image_title: "جوراب"
    },
    {
        image_src: `${IMAGES_PATH}/spatula.png`,
        image_title: "کفگیر"
    },
    {
        image_src: `${IMAGES_PATH}/star.png`,
        image_title: "ستاره"
    },
    {
        image_src: `${IMAGES_PATH}/suitcase.png`,
        image_title: "چمدان"
    },
    {
        image_src: `${IMAGES_PATH}/sun.png`,
        image_title: "خورشید"
    },
    {
        image_src: `${IMAGES_PATH}/syringe.png`,
        image_title: "آمپول"
    },
    {
        image_src: `${IMAGES_PATH}/teapot.png`,
        image_title: "قوری"
    },
    {
        image_src: `${IMAGES_PATH}/teddy-bear.png`,
        image_title: "خرس"
    },
    {
        image_src: `${IMAGES_PATH}/telescope.png`,
        image_title: "تلسکوپ"
    },
    {
        image_src: `${IMAGES_PATH}/tree.png`,
        image_title: "درخت"
    },
    {
        image_src: `${IMAGES_PATH}/turtle.png`,
        image_title: "لاک پشت"
    },
    {
        image_src: `${IMAGES_PATH}/umbrella.png`,
        image_title: "چتر"
    },
    {
        image_src: `${IMAGES_PATH}/washing-machine.png`,
        image_title: "ماشین لباسشویی"
    },
    {
        image_src: `${IMAGES_PATH}/water-tap.png`,
        image_title: "شیر آب"
    },
    {
        image_src: `${IMAGES_PATH}/watermelon.png`,
        image_title: "هندوانه"
    }
];

export const IMAGES = IMAGES_WITHOUT_ID.map((value, key) => ({
    image_id: key,
    ...value
}));