import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritePage from "./pages/Favorites";
import MainNav from "./components/layout/MainNavigation";

function App() {
  return (
    <div> 
      <MainNav />
      <Switch>
        <Route path = '/' exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path = '/new-meetup'>
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path = '/favorites'>
          <FavoritePage></FavoritePage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
