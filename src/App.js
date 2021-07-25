import './App.css';
import Navigation from "./components/Navigation";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import Calendar from "./pages/calendar";
import Members from "./pages/members";
import Activities from "./pages/activities";
function App() {

const routes = [
  {path: '/home', name: 'Home', Component: Home},
  {path: '/calendar', name: 'Calendar', Component: Calendar},
  {path: '/members', name: 'Members', Component: Members},
  {path: '/activities', name: 'Activities', Component: Activities}
]

const listRoutes = routes.map(({path, name, Component}, index) => {
    return (      
      <Route key={name+index} path={path} exact>
        <div className="page">
          {console.log()}
          <Component/>
        </div>
      </Route>
  )
});

  return (
    <>
      <Navigation routes={routes}/>
      <div className="container">
        {listRoutes}
      </div>
    </>
  );
}

export default App;
