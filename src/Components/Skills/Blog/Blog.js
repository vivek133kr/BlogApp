import React from 'react'
import styles from "../../../styles/skills/blog.module.css"
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import Image from "next/image";
import { useRouter } from "next/router";

import Images from "../../../../public/images/newimg.png";
import Date from "../../../../public/images/Vector.png"
import Pagination from '../Pagination/Pagination';




function Blog() {

 const router = useRouter();
    const para ="On a car journey through spiraling roads in Himalayan pine forests, we encountered a rare and sudden jam in a remote area. When we got down, we saw new pictures";
  return (
    <div className={styles["mainTop"]}>
      <div className={styles["imageBox"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={Images}
            alt="Picture of the author"
            style={{ width: "1400px", borderRadius: "10px", height: "99%" }}
          />
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",

            padding: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Image
            src={Images}
            alt="Picture of the author"
            style={{
              width: "90%",
              flex: "1 1 0",
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: "10px",
              padding: "0",
              borderRadius: "10px",
              maxHeight: `calc(33.33% - 10px)`,
              objectFit: "cover",
            }}
          />
          <Image
            src={Images}
            alt="Picture of the author"
            style={{
              width: "90%",
              flex: "1 1 0",
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: "10px",
              padding: "0",
              borderRadius: "10px",
              maxHeight: `calc(33.33% - 10px)`,
              objectFit: "cover",
            }}
          />
          <Image
            src={Images}
            alt="Picture of the author"
            style={{
              width: "90%",
              flex: "1 1 0",
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: "0",
              padding: "0",
              borderRadius: "10px",
              maxHeight: `calc(33.33% - 10px)`,
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      
        <div className={styles["imageDiv"]} onClick={()=>   router.push(`/skills/blog`)}>
          <Image
            src={Images}
            alt="Picture of the author"
            className={styles["imagesStyles"]}
          />
          <div className={styles["contentDiv"]}>
            <Card.Body className={styles["CardBody"]}>
              <p className={styles["category"]}>
                The Universe & Our Environment
              </p>

              <p className={styles["boxHeading"]}>
                Innovative Solutions for Sustainable Forest Management and
                Reforestation
              </p>
              <div className={`flex ${styles["dateDiv"]} `}>
                <div>
                  {" "}
                  <Image src={Date} alt="Picture of the author" />
                </div>

                <p style={{ padding: "0px", margin: "0px", marginLeft: "2%" }}>
                  21 March, 2023
                </p>
              </div>
              <p className={styles["paraP"]}>{para.slice(0, 150)}...</p>
            </Card.Body>
          </div>
        </div>
      
      <div className={styles["imageDiv"]}>
        <Image
          src={Images}
          alt="Picture of the author"
          className={styles["imagesStyles"]}
        />
        <div className={styles["contentDiv"]}>
          <Card.Body className={styles["CardBody"]}>
            <p className={styles["category"]}>The Universe & Our Environment</p>

            <p className={styles["boxHeading"]}>
              Innovative Solutions for Sustainable Forest Management and
              Reforestation
            </p>
            <div className={`flex ${styles["dateDiv"]} `}>
              <div>
                {" "}
                <Image src={Date} alt="Picture of the author" />
              </div>

              <p style={{ padding: "0px", margin: "0px", marginLeft: "2%" }}>
                21 March, 2023
              </p>
            </div>
            <p className={styles["paraP"]}>{para.slice(0, 150)}...</p>
          </Card.Body>
        </div>
      </div>
      <div className={styles["imageDiv"]}>
        <Image
          src={Images}
          alt="Picture of the author"
          className={styles["imagesStyles"]}
        />
        <div className={styles["contentDiv"]}>
          <Card.Body className={styles["CardBody"]}>
            <p className={styles["category"]}>The Universe & Our Environment</p>

            <p className={styles["boxHeading"]}>
              Innovative Solutions for Sustainable Forest Management and
              Reforestation
            </p>
            <div className={`flex ${styles["dateDiv"]} `}>
              <div>
                {" "}
                <Image src={Date} alt="Picture of the author" />
              </div>

              <p style={{ padding: "0px", margin: "0px", marginLeft: "2%" }}>
                21 March, 2023
              </p>
            </div>
            <p className={styles["paraP"]}>{para.slice(0, 150)}...</p>
          </Card.Body>
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default Blog