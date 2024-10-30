import { Link } from 'react-router-dom'
import styles from './SubMain1.module.css'

function SubMain1() {
    return (
        <div className={styles.sub_main}>
            <div className={styles.main}>


                <div className={styles.text}>

                    <h1 className='blueText extraBold'>Take control of your finances with  Expensrol</h1>
                    <h3 className='extraBold'>Organize your own expenses</h3>
                    <p>Manage your money like never before! Our sleek, user-friendly Expensrol helps you stay on top of your spending, set budgets, and track financial goals with ease. Whether you're saving for a dream vacation or managing monthly bills, our app provides real-time insights into your income and expenses.</p>
                    <button className='extraBold'> <Link to="/FormSignUp" className="custom-link">Get Started <span>&#8594;</span></Link></button>
                </div>
                <img className={styles.img} src="Expensrol_image\Manage money-bro (1) 1.svg" />
            </div>
        </div >
    )
}
export default SubMain1