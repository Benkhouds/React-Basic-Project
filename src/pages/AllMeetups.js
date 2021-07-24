import { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList'

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [meetupsData, setMeetupsData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://react-academind-82b2b-default-rtdb.firebaseio.com/meetups.json',
    )
      .then((res) => res.json())
      .then((data) => {
        const meetups = []
        console.log(data)
        console.log(Object.keys(data))
        Object.keys(data).forEach((key) => {
          meetups.push({
            id: key,
            ...data[key],
          })
        })

        setIsLoading(false)
        setMeetupsData(meetups)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList data={meetupsData} />
    </section>
  )
}
