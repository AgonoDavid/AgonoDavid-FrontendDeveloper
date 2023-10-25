import Banner from "./Banner";
import Search from "./Search";
import Card from "./Card";
import { useContext, useState, useRef } from "react";
import SpaceContext from "../API/SpaceContext";

export default function Layout() {
  const searchRef = useRef(null);

  const handleExploreClick = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { rocketDetails } = useContext(SpaceContext);

  const [menuSelected, setMenuSelected] = useState("");

  const handleOptionChange = (event) => {
    setMenuSelected(event.target.value);
  };

  // to remove duplicate object from the array
  const uniqueCategories = Array.from(
    new Set(rocketDetails.map((item) => item.status))
  );

  const filteredData =
    menuSelected === ""
      ? rocketDetails
      : rocketDetails.filter((item) => item.status === menuSelected);

  return (
    <div className="h-screen ">
      <div className="mx-auto max-w-screen-xl">
        <Banner onExploreClick={handleExploreClick} />
        <div ref={searchRef}>
          <Search
            options={uniqueCategories}
            data={rocketDetails}
            handleOptionChange={handleOptionChange}
            menuSelected={menuSelected}
          />
        </div>
        <Card filteredData={filteredData} />
      </div>
    </div>
  );
}
