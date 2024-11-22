import React from "react";
import { Outlet ,useNavigate} from "react-router-dom";
import Header from "../components/Header"; // Example header
import Footer from "../components/Footer"; // Example footer


const AppLayout = () => {
    const navigate = useNavigate();
    if (localStorage.getItem("id"!=null)){
        navigate("/login")}
    
    return (
        <div>
            
            <Header />
            <main>
                <Outlet /> {/* Render nested routes */}
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default AppLayout;
