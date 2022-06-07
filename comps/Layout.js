import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = ({ children }) => {
    return (  
        <div className="conten">
            <Navbar />
            { children }
            <Footer />  
        </div>
    );
}
 
export default Layout;