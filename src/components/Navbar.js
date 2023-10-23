import logo from "../images/SpaceX_Logo_Black.png";

function Navbar() {
  return (
    <div className=" py-4 w-1/2">
      <img src={logo} alt="logo" className=" w-32" />
    </div>
  );
}

export default Navbar;
