import NavBar from "./Header";
import Private from './Private';

const Layout = ({ children }) => {

    return (  
        <Private>
            <NavBar />
            {children}
        </Private>
    );

}

export default Layout;