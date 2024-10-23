import styles from './Comment.module.css'

function Comment(props) {
    return (
        <div className={styles.container}>
            <h3 className='extraBold whiteText'>{props.title}</h3>
            <p className='whiteText'>{props.description}</p>
            <img className={styles.stars} src="Expensrol_image\Group 44.svg" />
            <img className={styles.profil} src="Expensrol_image\abstract-user-flat-4 4.svg" />
        </div>
    )
}
export default Comment