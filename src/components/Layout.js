import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => (
    <>
        <NavBar/>
        { children }
    </>
)

export default Layout