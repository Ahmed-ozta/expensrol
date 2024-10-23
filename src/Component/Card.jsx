import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.container}>
            <h3>{props.title}</h3>
            <img src={props.image} />
            <p>{props.description}</p>
        </div>
    )
}
export default Card