import { useRef } from 'react'
import Card from '../ui/Card'
import classes from './MeetupForm.module.css'
export default function MeetupForm(props) {
  const titleInput = useRef()
  const addressInput = useRef()
  const imageInput = useRef()
  const descInput = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      title: titleInput.current.value,
      address: addressInput.current.value,
      image: imageInput.current.value,
      description: descInput.current.value,
    }
    props.addMeetup(data)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title" className={classes.label}>
            Meetup Title:
          </label>
          <input
            className={classes.input}
            type="text"
            id="title"
            ref={titleInput}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address" className={classes.label}>
            Meetup Address:
          </label>
          <input
            className={classes.input}
            type="text"
            id="address"
            ref={addressInput}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image" className={classes.label}>
            Image:
          </label>
          <input
            className={classes.input}
            type="url"
            id="image"
            ref={imageInput}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description" className={classes.label}>
            Meetup Description:
          </label>
          <textarea
            className={classes.textarea}
            id="description"
            rows="5"
            ref={descInput}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  )
}
