import Nav from "./Nav";
import Profil from "./Profil";
import styles from './Support.module.css'
function Inbox() {
    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.title}>
                        <h1>Inbox</h1>
                        <Profil />

                    </div>
                    <hr />
                    <div className={styles.respond}>
                        <h2>Team Support</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi aperiam hic facilis asperiores ea, ratione ad earum, rerum dolorem recusandae exercitationem quia fuga distinctio mollitia odio quas magni nam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi aperiam hic facilis asperiores ea, ratione ad earum, rerum dolorem recusandae exercitationem quia fuga distinctio mollitia odio quas magni nam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi aperiam hic facilis asperiores ea, ratione ad earum, rerum dolorem recusandae exercitationem quia fuga distinctio mollitia odio quas magni nam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi aperiam hic facilis asperiores ea, ratione ad earum, rerum dolorem recusandae exercitationem quia fuga distinctio mollitia odio quas magni nam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi aperiam hic facilis asperiores ea, ratione ad earum, rerum dolorem recusandae exercitationem quia fuga distinctio mollitia odio quas magni nam.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Inbox