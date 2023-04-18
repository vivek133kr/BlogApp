import { useState } from "react";
import styles from "../../../styles/upsc/header.module.css";
import { Button } from "react-bootstrap";
import "@fontsource/roboto";
function UPSCHeader() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${styles["sliding-div"]} ${isOpen ? "" : styles["hide"]}`}>
      <p className={styles["paras"]}>This Just In : </p>
      <p className={`${styles["para1"]}` }>Josh Talks UPSC Notifications</p>
      <p className={`${styles["para2"]} `}>UPSC Civil Services 2023 Notification</p>
      <Button
        onClick={handleClick}
        style={{
          borderRadius: "180%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles["close-button"]}
      >
        <p style={{ padding: "0px", margin: "0px" }}>X</p>
      </Button>
    </div>
  );
}

export default UPSCHeader;
