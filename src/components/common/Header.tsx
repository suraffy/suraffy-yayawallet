import yayawalletLogo from "../../assets/yayawallet logo.svg";

const Header = () => {
  return (
    <div className="shadow">
      <header className="container flex items-center justify-between">
        <img src={yayawalletLogo} width={200} alt="" />

        <ul className="flex gap-x-4 text-lg">
          <li>
            <a href="" className="font-semibold text-blue-800">
              Dashboard
            </a>
          </li>
          <li>
            <a href="">Help&nbsp;Center</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
