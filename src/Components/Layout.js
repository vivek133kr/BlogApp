

import { useRouter } from "next/router";
import UPSCHeader from "./UPSC/Header/Header";
import UPSCNavbarr from "./UPSC/Navbar/Navbar";
import UPSCFooterr from "./UPSC/Footer/Footer";
import Header from "./Skills/Header/Header";
import Footerr from "./Skills/Footer/Footer";
import Navbarr from "./Skills/Navbar/Navbar";
export default function Layout({ children }) {

  const router = useRouter()
  return (
    <>
      {router.pathname.includes("upsc") ? <UPSCHeader /> : <Header/>}
      {router.pathname.includes("upsc") ? <UPSCNavbarr /> : <Navbarr/>}
      <main>{children}</main>
      {router.pathname.includes("upsc") ? <UPSCFooterr /> : <Footerr/>}
    </>
  );
}
