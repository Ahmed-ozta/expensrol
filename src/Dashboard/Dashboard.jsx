import styles from './Dashboard.module.css'

import Nav from './Nav.jsx'

function Dashboard() {
    // the th of tables should sort the elements 
    return (

        <div className={styles.container}>
            <Nav />
            <div className={styles.main}>
                <div className={styles.subMain}>
                    <div className={styles.header}>
                        <div className={styles.search}>
                            <img src="Expensrol_image\Search_Magnifying_Glass.svg" />
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className={styles.profil}>
                            <img src="Expensrol_image\abstract-user-flat-4 4.svg" /><p>Username</p>
                        </div>
                    </div>
                    <div className={styles.dataContainer}>
                        <div className={styles.data}>
                            <div className={styles.balance}><h2>Current balance :</h2><p>12/01/2024</p><h3>1200.00 MAD</h3></div>
                            <div className={styles.income}><h2>Total income : </h2><p>12/01/2024</p><h3>10000.00 MAD</h3></div>
                            <div className={styles.expense}><h2>Total expenses : </h2><p>12/01/2024 </p><h3>-8800.00 MAD   </h3> </div>
                        </div>
                        <div className={styles.mainImg}>
                            <img src="Expensrol_image\Money income-bro 1.svg" />
                        </div>
                    </div>
                    <div className={styles.transaction}>
                        <h2>Table of transactions</h2>
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Description</th>
                                <th>Date</th>
                            </tr>
                            <tr>
                                <td>Id</td>
                                <td>Category</td>
                                <td>Description</td>
                                <td>Description</td>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>Id</td>
                                <td>Category</td>
                                <td>Description</td>
                                <td>Description</td>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>Id</td>
                                <td>Category</td>
                                <td>Description</td>
                                <td>Description</td>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>Id</td>
                                <td>Category</td>
                                <td>Description</td>
                                <td>Description</td>
                                <td>Date</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard