import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../components/sidebar/Sidebar";

const BaseLayout = () => {
    return(
        <>
            <Navbar />
            <main className="main-layout">
                <Breadcrumb />
                <Sidebar />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default BaseLayout;
