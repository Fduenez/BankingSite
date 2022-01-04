import Navbar from "../components/Navbar";
import HeroLayer from "../components/HeroLayer";
import Login from "../components/Login";


const Home = () => {
  return (
      <div className="p-0 m-0 box-border h-screen w-screen">
          <Navbar/>
          <HeroLayer/>
      </div>
  );
}

export default Home;
