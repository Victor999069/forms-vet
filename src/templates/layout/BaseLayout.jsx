import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const BaseLayout = () => {
    return(
        <>
            <Navbar />
            <main className="main-layout">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default BaseLayout;
