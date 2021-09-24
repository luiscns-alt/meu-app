import { styled } from "@mui/system";
import { Button } from "@mui/material";

const minhaCor = "blue";

export const MinhaDiv = styled("div")`
  color: ${({theme}) => {
    return theme.palette.primary.dark;
    }};
`;


export const MeuBotao = styled(Button)`
    background-color: aquamarine;

    &.MuiButton-root{
        color: red;
    }
`;