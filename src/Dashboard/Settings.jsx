import styles from './Transaction.module.css'
import Nav from './Nav.jsx'
function Support() {

    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.title}>
                        <h1>Settings</h1>
                        <hr />
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.form}>
                            <form>
                                <label>Username</label>
                                <input type="text" placeholder='write a description' />
                                <label>New password</label>
                                <input type="password" placeholder='New password' />
                                <label>Confirm password</label>
                                <input type="password" placeholder='Confirm password' />
                                <input type="submit" value="Confirmer ✔" />
                            </form>
                        </div>
                        <div className={styles.img}>
                            <img src="Expensrol_image\Usability testing-bro 1.svg" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Support