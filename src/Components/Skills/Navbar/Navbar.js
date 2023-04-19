import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "@fontsource/sora"
import AddIcon from "@mui/icons-material/Add";
import Nav from "react-bootstrap/Nav";
import SearchIcon from "@mui/icons-material/Search";

import styles from "../../../styles/skills/navbar.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../public/images/logo.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Navbarr() {
  const [expand, setExpand] = useState(false);
 const [showVocab, setShowVocab] = useState(false);
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
              style={{ height: "70px", width: "70px", cursor: "pointer" }}
              onClick={() => router.push("/skills")}
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
                  <p>Grammer</p>

                  <div>
                    <AddIcon />
                  </div>
                </Nav.Item>
                <Nav.Item
                  className={styles.burgerDiv}
                  onClick={() => setShowVocab(!showVocab)}
                >
                  <p>Vocabulary</p>

                  <div>
                    <AddIcon />
                  </div>
                </Nav.Item>
                <Nav.Item className={styles.burgerDiv}>
                  <p>Courses</p>

                  <div>
                    <AddIcon />
                  </div>
                </Nav.Item>
                <Nav.Item className={styles.burgerDiv}>
                  <p>Test your level</p>
                  <div>
                    <AddIcon />
                  </div>
                </Nav.Item>{" "}
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
                  onClick={() => router.push("/skills")}
                  alt="Picture of the author"
                  style={{
                    height: "100%",
                    width: "76px",
                    cursor:"pointer",
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
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Nav.Link
                    href="/skills"
                    style={
                      router.pathname == "/skills"
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
                    href="blog"
                    style={
                      router.pathname.includes("/grammer")
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Grammer
                  </Nav.Link>
                  <Nav.Link
                    href="#Programs"
                    style={
                      router.pathname.includes("/vocab")
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Vocabulary
                  </Nav.Link>
                  <Nav.Link
                    href="#Prelims"
                    style={
                      router.pathname.includes("/course")
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Courses
                  </Nav.Link>
                  <Nav.Link
                    href="#Mains & Interview"
                    style={
                      router.pathname.includes("/test")
                        ? { paddingTop: "0px", color: "#DD4C76" }
                        : { paddingTop: "0px", color: "black" }
                    }
                  >
                    Test your level
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

export default Navbarr;
