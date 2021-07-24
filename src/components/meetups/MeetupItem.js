import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
export default function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext)
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)
  function toggleFavoritesStatusHandler() {
    if (!itemIsFavorite) {
      const obj = {
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
      }
      favoriteCtx.addFavorite(obj)
    } else {
      console.log(favoriteCtx)
      favoriteCtx.removeFavorite(props.id)
    }
  }

  return (
    <li className={classes.item} key={props.id}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}
