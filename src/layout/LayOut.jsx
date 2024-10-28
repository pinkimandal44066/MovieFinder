import { Outlet } from 'react-router-dom'
import Navbar from '../componants/Homefolder/Navbar'
import Footer from '../componants/Homefolder/Footer'
import ScrollToTop from './ScrollToTop'


const LayOut = () => {
    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayOut