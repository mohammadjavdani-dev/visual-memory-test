import { CSSProperties, FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";

interface IProps extends PropsWithChildren {
    padding?: CSSProperties['padding'];
}

export const SlideContainer: FC<IProps> = (props) => {
    const { children, padding = "3rem" } = props;
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            component="main"
            sx={{
                height: "100%",
                padding
            }}
        >
            {children}
        </Grid>
    )
}