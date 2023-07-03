import { Outlet } from "react-router-dom";
import FooterSecondary from "../FooterSecondary";

const AccountLayout = () => {
    return(
        <>
            <main className="account-layout">
                <Outlet />
            </main>
            <FooterSecondary />
        </>
    );
};

export default AccountLayout;
