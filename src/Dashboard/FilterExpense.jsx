
import styles from './Filter.module.css';
import Nav from './Nav.jsx';
import Profil from './Profil.jsx'
import { Link } from 'react-router-dom';

function FilterExpense() {
    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.profil}>
                        <Profil />
                    </div>

                    <div className={styles.transaction}>
                        <Link to="/FilterIncome" className='custom-link2' ><button className={styles.income2} >Income</button></Link>
                        <button className={styles.expense2} disabled>Expense</button>
                    </div>
                    <div className={styles.categories}>
                        {/* using for loop select the button selected and give it the class specified */}
                        <ul>
                            <li><button className={styles.selected}> Food</button></li>
                            <li><button>Transport</button></li>
                            <li><button>Family & friends</button></li>
                            <li><button>Travel</button></li>
                            <li><button>Education</button></li>
                            <li><button>Shoppings</button></li>
                            <li><button> Other expense</button></li>
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
export default FilterExpense