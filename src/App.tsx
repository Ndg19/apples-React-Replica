import "bootstrap/dist/css/bootstrap.min.css";
import "./commonResource/css/styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppleAlert from "./components/Main/Alert/AppleAlert";
import IpadPro from "./components/Main/IpadPro/IpadPro";
import MackBok from "./components/Main/Mac/MackBok";
import IphonePro from "./components/Main/IphonePro/IphonePro";
import Iphone11 from "./components/Main/Iphone11/Iphone11";
import Tv_Watch from "./components/Main/Tv_Watch/Tv_Watch";
import AppleSpider from "./components/Main/AppleSpider/AppleSpider";

function App() {
  return (
    <>
      <Header />
      <AppleAlert />
      <IpadPro />
      <MackBok />
      <IphonePro />
      <Iphone11 />
      <Tv_Watch />
      <AppleSpider />
      <Footer />
    </>
  );
}

export default App;
