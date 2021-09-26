import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritePage from "./pages/Favorites";

function App() {
  return (
    <div> 
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
