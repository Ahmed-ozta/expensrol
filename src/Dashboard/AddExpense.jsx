import styles from './Transaction.module.css'
import Nav from './Nav.jsx'
import Profil from './Profil.jsx'

function AddExpense() {

    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.profil}>
                        <Profil />
                    </div>

                    <div className={styles.transaction}>
                        <button className={styles.income2} >Income</button>
                        <button className={styles.expense2} disabled>Expense</button>
                    </div>
                    <div className={styles.inputs2}>
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
                                <input type="submit" value="Add the Expense +" />
                            </form>
                        </div>
                        <div className={styles.img}>
                            <img src="Expensrol_image\App monetization-bro (1) 1.svg" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default AddExpense