import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

const BaseLayout = () => {
    return(
        <>
            <Navbar />
            <main className="main-layout">
                <Sidebar />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default BaseLayout;
