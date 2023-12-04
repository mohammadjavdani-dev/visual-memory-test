import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";

export const SlideContainer: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            component="main"
            sx={{
                height: "100%",
                padding: '3rem'
            }}
        >
            {children}
        </Grid>
    )
}