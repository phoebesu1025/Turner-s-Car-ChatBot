import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import FooterNav from "./Components/Footer/FooterNav";
import MainContent from "./Components/MainContent/MainContent";
import SubNav from "./Components/SubNav/SubNav";
import TopNav from "./Components/TopNav/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <SubNav />
      <MainContent />
      <Faq />
      <Footer />
      <FooterNav />
    </>
  );
}

export default App;
