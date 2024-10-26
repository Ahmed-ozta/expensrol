import styles from './Dashboard.module.css'

import Nav from './Nav.jsx'

function Dashboard() {
    return (

        <>
            <Nav />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.search}>
                            <img src="" /><input type="text" placeholder='Search' />
                        </div>
                        <div className={styles.profil}>
                            <img srx="" /><p>Username</p>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.data}>
                            <div className={styles.balance}><h2>Current balance :</h2><p>2024</p><h3>1200.00 MAD</h3></div>
                            <div className={styles.expense}><h2>Total income : </h2><p>2024</p><h3>10000.00 MAD</h3></div>
                            <div className={styles.expense}><h2>Total expenses : </h2><p>2024</p><h3>-8800.00 MAD   </h3> </div>
                        </div>
                        <div className={styles.mainImg}>
                            <img src=""/>
                        </div>
                    </div>
                    <div className={styles.transaction}>
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

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard