import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
function Nav(props) {
    const classname = props.classname
    return (
        <nav>
            <div className={styles.container}>
                <img className={styles.logo} src="EXPENSROL LOGO/SVG/HORIZONTAL @4x 1.svg" />
                <ul>
                    <li ><Link to="/Dashboard" className="custom-link3"><img src="Expensrol_icon/fi-rs-home (1).svg" />Dashboard</Link></li>
                    <hr />
                    <li><Link to="/AddExpense" className="custom-link3"><img src="..\Expensrol_icon/fi-rs-add.svg" />Add transaction</Link></li>
                    <li><Link to="/FilterIncome" className="custom-link3"><img src="Expensrol_icon/fi-rs-chat-arrow-grow.svg" />Filter by categories</Link></li>
                    <li><Link to="/Settings" className="custom-link3"><img src="Expensrol_icon/fi-rs-settings.svg" />Settings</Link></li>
                    <li><Link to="/" className="custom-link3"><img src="Expensrol_icon/fi-rs-sign-in.svg" />Log out</Link></li>
                </ul>
                <div className={styles.support}>
                    <img src="Expensrol_image\Active Support-bro 1.svg" className={classname} />
                    <h3>need help feel <br />free to ask for support</h3>
                    <button><Link to="/Support" className='custom-link'>get Support</Link></button>
                </div>
            </div>
            {/* the code for small devices */}
            <div className={styles.smallContainer}>
                <img className={styles.logo} src="EXPENSROL LOGO/SVG/ICON.svg" />
                <ul>
                    <li ><a id="selcted"><img src="Expensrol_icon/fi-rs-home (1).svg" /></a></li>
                    <li className={props.prop2}><Link to="/AddExpense" className="custom-link3"><img src="Expensrol_icon\fi-rs-add.svg" /></Link></li>
                    <li className={props.prop3}><a><img src="Expensrol_icon/fi-rs-chat-arrow-grow.svg" /></a></li>
                    <li className={props.prop4}><a><img src="Expensrol_icon/fi-rs-settings.svg" /></a></li>
                    <li className={props.prop5}><a><img src="Expensrol_icon/fi-rs-sign-in.svg" /></a></li>
                </ul>
                <div className={styles.support}>
                    <button>get Support</button>
                </div>
            </div>
        </nav>

    )
}
export default Nav