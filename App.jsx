import ArticlesHome from "./components/ArticlesHome";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ArticlesHome />
      </main>
      <Footer />
    </>
  );
}

export default App;