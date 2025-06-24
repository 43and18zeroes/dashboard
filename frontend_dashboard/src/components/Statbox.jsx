import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Statbox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100" m="0 30px">
            <Box>
                
            </Box>
        </Box>
    )
}