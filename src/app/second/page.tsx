import Image from "next/image";
import { Typography } from "@mui/material";
import { SlideContainer } from "@/components/templates";
import { IMAGES } from "@/constants/images";

const SecondSlide = () => {
    return <SlideContainer>
        {
            false ?
                <Typography variant="h1" sx={{ fontSize: "12rem" }}>{IMAGES[0].image_title}</Typography>
                :
                <Image src={IMAGES[0].image_src} width="512" height="512" alt="" />
        }
    </SlideContainer>
}

export default SecondSlide;