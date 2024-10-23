import styles from './Review.module.css'
import Comment from './Comment.jsx'

function Review(){
    return(
        <div className={styles.review}>
            <div className={styles.main}>
                <h2 className='extraBold whiteText'>Review</h2>
                {/* <Comment /> */}
            </div>
        </div>
    )
}
export default Review