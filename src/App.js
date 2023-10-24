import "./App.css";
import { SpaceProvider } from "./API/SpaceContext";
import Layout from "./components/Layout";
function App() {
  return (
    <div className=" h-screen">
      <SpaceProvider>
        <div className=" ">
          <Layout />
        </div>
      </SpaceProvider>
    </div>
  );
}

export default App;
