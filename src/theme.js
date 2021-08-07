import { createTheme } from "@material-ui/core/styles";

const cdrawerWidth = 240;

const theme = createTheme({
  drawerWidth: cdrawerWidth,
  palette: {
    primary: { 500: "#e53935" },
  },
});
export default theme;
