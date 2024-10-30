
import styles from './Filter.module.css';
import Nav from './Nav.jsx';
import Profil from './Profil.jsx'
import { Link } from 'react-router-dom';

function FilterIncome() {
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
                        <Link to="/FilterExpense" className='custom-link2' ><button className={styles.expense} >Expense</button></Link>
                    </div>
                    <div className={styles.categories}>
                        {/* using for loop select the button selected and give it the class specified */}
                        <ul>
                            <li><button className={styles.selected}> Salary</button></li>
                            <li><button>Gifts</button></li>
                            <li><button>Freelance</button></li>
                            <li><button>Investments</button></li>
                            <li><button>Other incomes</button></li>
                        </ul>
                    </div>
                    <div className={styles.data}>
                        <h2>Category : <span className='blueText'>Food</span></h2>
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>Id</td>
                                <td>Category</td>
                                <td>Description</td>
                                <td>Description</td>
                                <td>Date</td>
                                <td><button><img src="Expensrol_icon\fi-rr-map-marker-minus.svg" /><span className={styles.delete} Delete></span></button></td>
                            </tr>
                            <tr>
                                <td>Id</td>
                                <td>Category</td>
                                <td>Description</td>
                                <td>Description</td>
                                <td>Date</td>
                                <td><button><img src="Expensrol_icon\fi-rr-map-marker-minus.svg" /><span className={styles.delete} Delete></span></button></td>
                            </tr>
                            <tr>
                                <td>Id</td>
                                <td>Category</td>
                                <td>Description</td>
                                <td>Description</td>
                                <td>Date</td>
                                <td><button><img src="Expensrol_icon\fi-rr-map-marker-minus.svg" /><span className={styles.delete} Delete></span></button></td>
                            </tr>
                            <tr>
                                <td>Id</td>
                                <td>Category</td>
                                <td>Description</td>
                                <td>Description</td>
                                <td>Date</td>
                                <td><button><img src="Expensrol_icon\fi-rr-map-marker-minus.svg" /><span className={styles.delete} Delete></span></button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterIncome