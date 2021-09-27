import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritePage () {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>You got no fav, yet. Add some!</p>
    } else {
        content =  <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
    }

    return (
        <section>
            <h1>My favorites</h1>
            {content}
        </section>
    );
}

export default FavoritePage;