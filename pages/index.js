import Navbar from "../components/Navbar";
import HeroLayer from "../components/HeroLayer";
import {useSelector} from "react-redux";


const Home = () => {

    const isAuth = useSelector(state=> state.auth.token);

    return (
      <div className="p-0 m-0 box-border w-screen h-screen">
          <Navbar/>
          <HeroLayer/>
      </div>
    );
}

export default Home;
