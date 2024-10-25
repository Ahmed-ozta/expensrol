import styles from './Nav.module.css';
function Nav(props) {
    return (
        <nav>
            <div className={styles.container}>
                <img className={styles.logo} src="EXPENSROL LOGO\SVG\HORIZONTAL @4x 1.svg" />
                <ul>
                    <li ><a id="selcted"><img src="Expensrol_icon\fi-rs-home (1).svg" />Dashboard</a></li>
                    <hr />
                    <li className={props.prop2}><a><img src="Expensrol_icon\fi-rs-add.svg" />Add transaction</a></li>
                    <li className={props.prop3}><a><img src="Expensrol_icon\fi-rs-chat-arrow-grow.svg" />Filter by categories</a></li>
                    <li className={props.prop4}><a><img src="Expensrol_icon\fi-rs-settings.svg" />Settings</a></li>
                    <li className={props.prop5}><a><img src="Expensrol_icon\fi-rs-sign-in.svg" />Log out</a></li>
                </ul>
                <div className={styles.support}>
                    <img src="Expensrol_image\Active Support-bro 1.svg" />
                    <h3>need help feel <br />free to ask for support</h3>
                    <button>get Support</button>
                </div>
            </div>
        </nav>
    )
}
export default Nav