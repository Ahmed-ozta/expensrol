import styles from './FormSignUp.module.css'

function FormSignUp() {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.data}>
                    <h1>Start Your Journey to Financial Control with Expensrol</h1>
                    <p>Join Expensrol today and start managing your expenses effortlessly.
                        Track, categorize, and stay on top of your budget with just a few clicks. Take charge of your money and reach your financial goals.</p>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confirm Password' />
                </div>
                <div className={styles.image}>
                    <img src="Expensrol_image\Revenue-bro 1.svg" />
                </div>


            </div>
        </main>
    )
}
export default FormSignUp