import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const navigation = useNavigation;
const Home = () => {
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading"?
                <p>Loading...</p> :
                <Outlet></Outlet>

            }
            <Footer></Footer>
        </div>
    );
};

export default Home;