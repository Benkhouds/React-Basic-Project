import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

export default function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.data.map((el) => (
        <MeetupItem
          key={el.id}
          id={el.id}
          title={el.title}
          image={el.image}
          address={el.address}
          description={el.description}
        />
      ))}
    </ul>
  )
}
