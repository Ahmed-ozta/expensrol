
import { useState } from 'react';
import styles from './FormSignIn.module.css'
function FormSignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (

        <main>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src="Expensrol_image\Computer login-bro 1.svg" />
                </div>

                <div className={styles.container}>
                    <div className={styles.data}>
                        <h1 className='extraBold blueText'>Welcome Back to Expensrol!</h1>
                        <p>We're thrilled to see you again! Your journey to financial control continues here. Sign in to access your account, track your expenses, and manage your budget effortlessly. Let’s make your financial goals a reality</p>
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <a className={styles.links} href="">I don’t have an account.</a>
                        <button>Create an account</button>
                    </div>


                </div>
            </div>
        </main>
    )

}
export default FormSignIn