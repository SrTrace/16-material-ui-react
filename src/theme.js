import {createTheme} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500]
        },
    },
    myButton: {
        backgroundColor: "red",
        color: "white",
        border: "1px solid black"
    }
});