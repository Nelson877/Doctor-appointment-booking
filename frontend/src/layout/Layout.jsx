import Hedaer from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

function Layout() {
  return (
    <>
      <Hedaer />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
