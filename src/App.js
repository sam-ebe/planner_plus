import "./App.scss";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Calendar from "./pages/calendar";
import Members from "./pages/members";
import Activities from "./pages/activities";
import Title from "./components/Title";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    [theme.breakpoints.up("sm")]: {
      //marginLeft: theme.drawerWidth,
      //width: `calc(100% - ${theme.drawerWidth}px)`,
      //hardcoded values, find how to add it to global theme.js and make use of drawerWidth instead
      marginLeft: 240,
      width: `calc(100% - 240px)`,
    },
  },
}));
function App() {
  const classes = useStyles();

  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/calendar", name: "Calendar", Component: Calendar },
    { path: "/members", name: "Members", Component: Members },
    { path: "/activities", name: "Activities", Component: Activities },
  ];
  const pages = routes.map(({ path, name, Component }, index) => {
    return (
      <Route key={name + index} path={path} exact>
        <div className="page">
          {console.log()}
          <Title name={name} />
          <Component />
        </div>
      </Route>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation routes={routes} />
      <main className={classes.pageContainer}>
        <div
          style={{
            marginTop: 70,
          }}
        >
          {pages}
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
