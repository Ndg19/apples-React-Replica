import "bootstrap/dist/css/bootstrap.min.css";
import "./commonResource/css/styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppleAlert from "./components/Main/AppleAlert";
import IpadPro from "./components/Main/IpadPro";




function App() {
  return (
    <>
      <Header />
      <AppleAlert />
      <IpadPro />

      <Footer />
    </>
  );
}

export default App;
