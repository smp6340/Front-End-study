import Header from "../Header/index";

const Layout = ({children}) => {
    return(
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Layout;