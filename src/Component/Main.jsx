import SubMain1 from './SubMain1.jsx'
import SubMain2 from './SubMain2.jsx'
import Features from './Features.jsx'
import Review from './Review.jsx'
import SubMain3 from './SubMain3.jsx'


function Main() {

    // fix all the h1 to h2
    return (
        <>
            <SubMain1 />
            <SubMain2 />
            <Features />
            {/* there is an issues in button arrow not respecting the margin  */}
            <Review />
            <SubMain3 />
        </>
    )
}
export default Main