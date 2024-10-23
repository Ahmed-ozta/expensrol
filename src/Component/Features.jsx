import styles from './Features.module.css'
import Card from './Card.jsx'
function Features() {
    return (
        <div className={styles.features}>
            <div className={styles.main}>
                <h2 className='extraBold'>Features</h2>
                <div className={styles.cards}>
                    <Card className={styles.one} title=" Simple and Intuitive Interface" description="Track your expenses effortlessly with a clean, intuitive interface. Managing your finances has never been easier!" image="Expensrol_image\8179828 1.svg" />
                    <Card className={styles.two} title="Add and Categorize Expenses" description="Log your expenses and categorize them to track where your money goes. Stay organized effortlessly." image="Expensrol_image\10683019 1.svg" />
                    <Card className={styles.three} title=" Real-Time Expense Tracking" description="Instantly see your total spending with real-time updates every time you add or delete an expense." image="Expensrol_image\cost-structure-illustration-download-in-svg-png-gif-file-formats--flow-logo-expense-management-business-pack-illustrations-7595290 1.svg" />
                    <Card className={styles.four} title="Expense Deletion" description="Made a mistake? Easily delete any expense with a click to keep your records accurate." image="Expensrol_image\two-businessman-working-together-illustration-download-in-svg-png-gif-file-formats--collaboration-teamwork-partnership-business-synergy-cooperative-effort-management-pack-illustrations-7989669 1.svg" />
                    <Card className={styles.five} title="Responsive Design" description="Enjoy a smooth experience on any device with our app’s responsive design." image="Expensrol_image\businessmen-climb-up-the-ladder-pie-chart-with-no-space-left-for-women-illustration-download-in-svg-png-gif-file-formats--path-logo-gender-gap-salary-business-project-pack-illustrations-7202303 1.svg" />
                    <Card className={styles.six} title="Local Storage for Data " description="Your data is saved automatically, so it’s always there when you return." image="Expensrol_image\7407585 1.svg" />
                </div>
            </div>
        </div>


    );
}
export default Features;