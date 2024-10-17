import Link from "next/link";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        {/* header start*/}
        <Link href='/AllCars'>
          <header className="header flex flex-col justify-center pt-2 pb-2 items-center bg-green-200 max-w-[700px] rounded-[8px] m-auto mt-10 max-[768px]:max-w-full">
            <h1 className="font-bold text-[30px]">Develope Cars Page</h1>
            <p className="text-[20px] pt-3">Choose and Buy your car</p>
          </header>
        </Link>
        {/* main page start*/}
        <div className="min-h-[100vh] w-full mt-20 mb-20">{children}</div>
        {/* footer start */}
        <footer className="footer flex justify-center pt-2 pb-2 items-center bg-green-200 rounded-[8px]">
          <h2 className="font-bold text-[20px]">
            Designed by Sajjad Hasani Kakh
          </h2>
        </footer>
      </div>
    </>
  );
};

export default Layout;
