import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <div className={styles.header}>
                <img src="EXPENSROL LOGO\SVG\HORIZONTAL WHITE.svg" />
                <button className='extraBold'><Link to="/FormSignIn" className="custom-link">Sign in</Link></button>
            </div>
        </header>
    )

}
export default Header