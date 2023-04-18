import React from 'react'
import Image from "next/image";
import Book from "../../../../public/images/book.png";

import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../public/images/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../../../styles/upsc/footer.module.css"
function UPSCFooterr() {
  return (
    <div className={styles.head}>
      <div style={{ width: "90%" }}>
        <div>
          <Image
            src={Logo}
            alt="Picture of the author"
            style={{ height: "70px", width: "70px" }}
          />
          <p className={`${styles["pStyle"]} mt-2 `}>Connect With Us</p>
          <p className={`${styles["pStyles"]} mt-2 `}>
            <span
              style={{ marginRight: "10px" }}
              className={`${styles["pStyle"]}`}
            >
              <EmailIcon />
            </span>
            Email
          </p>
          <p className={`${styles["pStyles"]} mt-2 `}>
            <span
              style={{ marginRight: "10px" }}
              className={`${styles["pStyle"]}`}
            >
              <PhoneIcon />
            </span>
            Contact
          </p>{" "}
        </div>
      </div>

      <div
        style={{
          borderBottom: "1px solid white",
          color: "white",
          width: "100%",
        }}
      ></div>
      <div className={styles["bottomNav"]}>
        <p className={styles.pStyle}>
          Copyright © 2023 Josh Talks UPSC. All rights reserved
        </p>
        <div className={styles["copyRight"]}>
          <p className={`${styles["pStyles"]} mt-2 flex `}>
            <span
              style={{ marginRight: "10px" }}
              className={`${styles["pStyle"]}`}
            >
              <Image
                src={Book}
                style={{ height: "15px", width: "20px" }}
                alt="Picture of the author"
              />
            </span>
            Privacy Policy
          </p>
          <p className={`${styles["pStyles"]} mt-2 flex `}>
            <span
              style={{ marginRight: "10px" }}
              className={`${styles["pStyle"]}`}
            >
              <Image
                src={Book}
                style={{ height: "15px", width: "20px" }}
                alt="Picture of the author"
              />
            </span>
            Terms and Conditions
          </p>
          <p className={`${styles["pStyles"]} mt-2 flex `}>
            <span
              style={{ marginRight: "10px" }}
              className={`${styles["pStyle"]}`}
            >
              <Image
                src={Book}
                style={{ height: "15px", width: "20px" }}
                alt="Picture of the author"
              />
            </span>
            Cancellation / Refund Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default UPSCFooterr