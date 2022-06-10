// Components
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Search />
        <div>
          <Filters />
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
