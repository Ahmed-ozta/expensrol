import styles from './SubMain3.module.css'
import { Link } from 'react-router-dom'

function SubMain3() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2>Your Financial Freedom Starts Here: Simplify Budgeting Today! </h2>
                <button><Link to="/FormSignIn" className="custom-link2">Get Started<span>&#8594;</span></Link></button>
            </div>
        </div>
    )
}
export default SubMain3