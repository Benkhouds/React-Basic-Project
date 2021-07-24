import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
})
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([])

  function addFavoriteHandler(meetup) {
    setUserFavorites((prevUserFavorites) => [meetup, ...prevUserFavorites])
  }
  function removeFavoriteHandler(meetupID) {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.filter(({ id }) => id !== meetupID),
    )
  }
  function itemIsFavoriteHandler(meetupID) {
    return userFavorites.some(({ id }) => id === meetupID)
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  }
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
