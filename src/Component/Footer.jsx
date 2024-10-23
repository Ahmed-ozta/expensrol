import styles from './Footer.module.css'
function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <img className={styles.logo} src="EXPENSROL LOGO\SVG\Group 42.svg" />
                <ul>
                    <li><a><img className='socialMedia' src="social media\Social Icons.svg" /></a></li>
                    <li><a><img className='socialMedia' src="social media\Social Icons (1).svg" /></a></li>
                    <li><a><img className='socialMedia' src="social media\Social Icons (2).svg" /></a></li>
                </ul>
                <hr />
                <p className='whiteText'>© 2024 Expensrol. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
export default Footer