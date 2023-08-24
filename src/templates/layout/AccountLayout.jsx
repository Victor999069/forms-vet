import { Outlet } from "react-router-dom";

const AccountLayout = () => {
    return(
        <>
            <main className="account-layout">
                <Outlet />
            </main>
        </>
    );
};

export default AccountLayout;
