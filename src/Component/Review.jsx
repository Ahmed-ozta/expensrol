import styles from './Review.module.css'
import Comment from './Comment.jsx'
import { useCallback, useEffect, useState } from 'react'

function Review() {
    const [render, setRender] = useState(0);
    const [windowWidth, setWidth] = useState(window.innerWidth); 
    const [index, setIndex] = useState(1);
    function section() {
        if (window.innerWidth > 1200) {
            return (

                Array.from({ length: 3 }, (_, i) => {
                    const commentIndex = index + i;
                    if (commentIndex < list_comment.length) {
                        return (
                            <Comment
                                key={commentIndex}
                                title={list_comment[commentIndex].title}
                                description={list_comment[commentIndex].description}
                            />
                        );
                    }
                    return null;
                })

            );
        }
        else if (window.innerWidth > 837) {
            return (

                Array.from({ length: 2 }, (_, i) => {
                    const commentIndex = index + i;
                    if (commentIndex < list_comment.length) {
                        return (
                            <Comment
                                key={commentIndex}
                                title={list_comment[commentIndex].title}
                                description={list_comment[commentIndex].description}
                            />
                        );
                    }
                    return null;
                })

            );
        }
        else {
            return (

                Array.from({ length: 1 }, (_, i) => {
                    const commentIndex = index + i;
                    if (commentIndex < list_comment.length) {
                        return (
                            <Comment
                                key={commentIndex}
                                title={list_comment[commentIndex].title}
                                description={list_comment[commentIndex].description}
                            />
                        );
                    }
                    return null;
                })

            );
        }
    }


    // useEffect(() => {
    //     window.addEventListener('resize', () => setWidth(window.innerWidth) );
    // }, [])
    return (

        <div className={styles.review}>
            <div className={styles.main}>
                <h2 className='extraBold whiteText'>Review</h2>
                <div className={styles.commentSection}>
                    <button >&lt;</button>
                    <span className="reviewBlock"><Comment  title="“A Game Changer for My Budgeting!”" description='"This app has completely changed how I manage my finances. The real-time tracking feature keeps me accountable"' /></span>
                    <span className="reviewBlock"><Comment title="“Perfect for Beginners”" description='"As someone who is new to budgeting, I found this app very user-friendly. Adding expenses is straightforward, and the total calculation is automatic"' /></span>
                    <span className="reviewBlock"><Comment title="“Great for On-the-Go Tracking!”" description="'I love how responsive this app is on my phone! It’s perfect for quickly logging expenses while I'm out shopping. The local storage feature is also a nice touch'" /></span>
                    <span className="reviewBlock"><Comment title="“The Perfect Tool for Expense Tracking!”" description='I love how simple it is to categorize my expenses and see where my money is going. It’s a must-have for anyone serious about budgeting!"' /></span>
                    <span className="reviewBlock"><Comment title="“User-Friendly and Efficient!”" description=' "This app makes budgeting easy and fun. The interface is intuitive, and I love the insights it provides into my spending habits."' /></span>

                    <button>&gt;</button>
                </div>
            </div>
            {console.log(document.querySelectorAll("reviewBlock");)}
        </div>
    )
}
export default Review