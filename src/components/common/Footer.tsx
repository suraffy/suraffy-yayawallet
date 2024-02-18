import yayawalletLogo from "../../assets/yayawallet logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow  m-4 mt-20">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={yayawalletLogo} className="h-8" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#help-center" className="hover:underline me-4 md:me-6">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            &copy; 2024{" "}
            <a
              href="https://suraffy.netlify.app"
              target="_blank"
              className="hover:underline"
            >
              Surafel Araya
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
