import styles from './Transaction.module.css'
import Nav from './Nav.jsx'
import Profil from './Profil.jsx'
import { Link } from 'react-router-dom'

function AddIncome() {

    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.profil}>
                        <Profil />
                    </div>

                    <div className={styles.transaction}>
                        <button className={styles.income} disabled>Income</button>
                        <Link to="/AddExpense" className='custom-link2' ><button className={styles.expense} >Expense</button></Link>
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.form}>
                            <form>
                                <label>Description</label>
                                <input type="text" placeholder='write a description' />
                                <label>Amount</label>
                                <input type="text" placeholder='give the amount' />
                                <label>Category</label>
                                <select>
                                    <option>Choose the Category</option>
                                    <option value={"Food"}>Food</option>
                                    <option value={"Transport"}>Transport</option>
                                    <option value={"Family & friends"}>Family & friends</option>
                                    <option value={"Travel"}>Travel</option>
                                    <option value={"Education"}>Education</option>
                                    <option value={"Shopping"}>Shopping</option>
                                    <option value={"Other expense"}>Other expense</option>
                                </select>
                                <label>Date</label>
                                <input type="date" />
                                <input type="submit" value="Add the income +" />
                            </form>
                        </div>
                        <div className={styles.img}>
                            <img src="Expensrol_image\Top up credit-bro 1.svg" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default AddIncome