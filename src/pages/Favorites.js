import { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'
import classes from '../components/meetups/MeetupItem.module.css'
export default function FavoritesPage() {
  const { favorites, totalFavorites } = useContext(FavoritesContext)
  let content
  if (totalFavorites === 0) {
    content = (
      <>
        <p>You have no favorites yet. Wanna add some ?</p>
        <Link to="/" className={classes.actions} style={{ padding: 0 }}>
          <button type="submit">Back to all meetups</button>
        </Link>
      </>
    )
  } else {
    content = <MeetupList data={favorites} />
  }
  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  )
}
