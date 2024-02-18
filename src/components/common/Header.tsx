import yayawalletLogo from "../../assets/yayawallet logo.svg";

const Header = () => {
  return (
    <div className="shadow overflow-x-clip">
      <header className="container flex justify-between">
        <img src={yayawalletLogo} width={200} alt="" />

        <ul className="flex text-lg">
          <li className="hover:bg-blue-50 flex items-center">
            <a href="#" className="font-semibold text-blue-800 p-4">
              Dashboard
            </a>
          </li>
          <li className="hover:bg-blue-50 hidden sm:flex items-center">
            <a href="#help-center" className="hover:text-blue-800 p-4">
              Help&nbsp;Center
            </a>
          </li>
          <li className="hover:bg-blue-50 hidden sm:flex items-center">
            <a href="#" className="hover:text-blue-800 p-4">
              Login
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
