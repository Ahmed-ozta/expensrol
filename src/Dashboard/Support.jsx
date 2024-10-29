import styles from './Support.module.css'
import Nav from './Nav.jsx'
import Profil from './Profil.jsx'
function Settings() {

    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.title}>
                        <h1>Settings</h1>
                        <Profil />

                    </div>
                    <hr />
                    <div className={styles.inputs}>
                        <div className={styles.form}>
                            <form>
                                <label>Message</label>
                                <textarea  placeholder="write your nessage here" />
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                        <div className={styles.img}>
                            <img src="Expensrol_image\Admin-bro 1.svg" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Settings