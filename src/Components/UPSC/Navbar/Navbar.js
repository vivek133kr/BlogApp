import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "@fontsource/sora"
import AddIcon from "@mui/icons-material/Add";
import Nav from "react-bootstrap/Nav";
import styles from "../../../styles/upsc/navbar.module.css";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../public/images/logo.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function UPSCNavbarr() {
  const [expand, setExpand] = useState(false);
  const router = useRouter();
 const [windowSize, setWindowSize] = useState({
   width: undefined,
   height: undefined,
 });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOffcanvas = () => {
    setExpand(!expand);
  };

  
  return (
    <>
      <Navbar
        bg="white"
        className="mb-1"
        style={{
          width: "100%",
          backgroundColor: "#F2F2F2",
          paddingTop: "0px",
          marginTop: "0px",
        }}
      >
        <Container
          fluid
          className={styles["mobStyle"]}
          style={{ paddingRight: "4%", paddingLeft: "4%" }}
        >
          <Navbar.Brand className={styles["navbar_brand"]}>
            <SearchIcon style={{ color: "#DD4C76" }} />
          </Navbar.Brand>
          <div>
            <Image
              src={Logo}
              alt="Picture of the author"
              style={{ height: "70px", width: "70px" }}
            />
          </div>
          <button className={styles["hamburger"]} onClick={toggleOffcanvas}>
            <MenuIcon />
          </button>
          <Offcanvas
            style={{ width: "60%" }}
            placement="end"
            show={windowSize.width < 1000 ? expand : false}
            onHide={() => setExpand(false)}
          >
            <Offcanvas.Body>
              <Nav className="justify-center flex-grow-1 pe-3" style={{}}>
                <Nav.Item className={styles.burgerDiv}>
                  <p>Prelims</p>

                  <div>
                    <AddIcon />
                  </div>
                </Nav.Item>
                <Nav.Item className={styles.burgerDiv}>
                  <p>Mains & Interview</p>

                  <div>
                    <AddIcon />
                  </div>
                </Nav.Item>
                <Nav.Item className={styles.burgerDiv}>
                  <p>Current Affairs</p>
                  <div>
                    <AddIcon />
                  </div>
                </Nav.Item>{" "}
                <Nav.Item className={styles.burgerDiv}>
                  <p>Prelims</p>
                  <div>
                    <AddIcon />
                  </div>{" "}
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
        <Container
          className={styles["webNav"]}
          style={{
            backgroundColor: "#F2F2F2",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "137px",
              backgroundColor: "#F2F2F2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Image
                  src={Logo}
                  alt="Picture of the author"
                  style={{
                    height: "100%",
                    width: "76px",

                    padding: "0px",
                    margin: "0px",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                    
                  padding: "0px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <Nav
                  className={`${styles["navItems"]} me-auto`}
                  style={{
                    fontFamily: "Sora",
                    position:"relative",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Nav.Link
                    href="/upsc"
                    style={
                      router.pathname == "/upsc"
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="blog"
                    style={
                      router.pathname.includes("/blog")
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Blogs
                  </Nav.Link>
                  <Nav.Link
                    href="#Programs"
                    style={
                      router.pathname == "/program"
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Programs
                  </Nav.Link>
                  <Nav.Link
                    href="#Prelims"
                    style={
                      router.pathname == "/prelims"
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Prelims
                  </Nav.Link>
                  <Nav.Link
                    href="#Mains & Interview"
                    style={
                      router.pathname == "/mains"
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Mains & Interview
                  </Nav.Link>
                  <Nav.Link
                    href="#Current Affairs"
                    style={
                      router.pathname == "/currentaffairs"
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Current Affairs
                  </Nav.Link>
                  <Nav.Link
                    href="#Check Prep"
                    style={
                      router.pathname == "/checkprep"
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Check Prep
                  </Nav.Link>
                  
                </Nav>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default UPSCNavbarr;
