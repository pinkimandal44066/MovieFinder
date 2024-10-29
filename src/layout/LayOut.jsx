import { Outlet } from 'react-router-dom'
import Navbar from '../components/Homefolder/Navbar'
import Footer from '../components/Homefolder/Footer'
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