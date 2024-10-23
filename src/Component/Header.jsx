import styles from './Header.module.css'

function Header() {

    return (
        <header>
            <div className={styles.header}>
                <img src="EXPENSROL LOGO\SVG\HORIZONTAL WHITE.svg" />
                <button className='extraBold'>Sign in</button>
            </div>
        </header>
    )

}
export default Header