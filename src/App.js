import Banner from "./components/Banner";
import Search from "./components/Search";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="h-screen ">
      <div className="mx-auto max-w-screen-xl">
        <Banner />
        <Search />
        <Card />
      </div>
    </div>
  );
}

export default App;
