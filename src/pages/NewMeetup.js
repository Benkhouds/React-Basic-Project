import { useHistory } from 'react-router-dom'
import MeetupForm from '../components/meetups/MeetupForm'
export default function NewMeetupPage() {
  const history = useHistory()
  function postMeetup(meetup) {
    fetch(
      'https://react-academind-82b2b-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(meetup),
      },
    )
      .then(() => history.push('/'))
      .catch((err) => console.log(err))
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <MeetupForm addMeetup={postMeetup} />
    </section>
  )
}
