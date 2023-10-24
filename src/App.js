import Banner from "./components/Banner";
import Card from "./components/Card";
import Search from "./components/Search";
import "./App.css";
import { SpaceProvider } from "./API/SpaceContext";

function App() {
  return (
    <div className="h-screen ">
      <SpaceProvider>
        <div className="mx-auto max-w-screen-xl">
          <Banner />
          <Search />
          <Card />
        </div>
      </SpaceProvider>
    </div>
  );
}

export default App;
