import React from 'react'
import Image from "next/image";
import Thumbnail from "../../../../public/images/newimg.png";
import "@fontsource/roboto"
import Date from "../../../../public/images/Vector.png";

import HomeIcon from "@mui/icons-material/Home";
import styles from "../../../styles/skills/detailBlog.module.css"
import { Button } from 'react-bootstrap'
import BlogForms from '../BlogForm/BlogForm';
export default function BlogDetails() {
  return (
    <div className={styles["headBlog"]}>
      <div className={styles["upperDiv"]}>
        <div className={styles["mainDiv"]}>
          <div className={styles["firstPart"]}>
            <p className={styles["firstPara"]}>JoshTalks Skills Blogs</p>
            <Button className={styles["firstButton"]}>{">"} </Button>
          </div>
          <div className={styles["lineDiv"]}></div>
          <div className={styles["secondPara"]}>
            <h1>
              Innovative Solutions for Sustainable Forest Management and
              Reforestation
            </h1>
          </div>
          <div className={styles["mainBlogHome"]}>
            <div className={styles["blogHome"]}>
              <HomeIcon style={{ padding: "0px", margin: "0px" }} />
              <p className={styles["blogHomeP"]}>Blog Home</p>
            </div>
            <div className={`${styles["dateStyle"]}`}>
              <div style={{ width: "fit-content", padding: "0.4%" }}>
                <Image
                  style={{ width: "15px", height: "15px", padding: "1%" }}
                  src={Date}
                  alt="Picture of the author"
                />
              </div>

              <p
                style={{
                  margin: "0px",

                  fontSize: "10px",
                }}
                className={styles["datePara"]}
              >
                21 Mar 2023
              </p>
            </div>
          </div>
          <div className={styles["thumbnailImg"]}>
            <Image
              style={{ width: "100%" }}
              src={Thumbnail}
              alt="Picture of the author"
            />
          </div>
          <div
            className="max-w-xxl mx-auto bg-white rounded "
            id="secondElement"
          >
            <div id="firstElement"></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="pt-3" style={{ width: "90%" }}>
                <p
                  style={{ fontFamily: "Roboto" }}
                  className="font-normal font-size-18 leading-29 flex items-center "
                  //   dangerouslySetInnerHTML={{ __html: title }}
                >
                  On a car journey through spiraling roads in Himalayan pine
                  forests, we encountered a rare and sudden jam in a remote
                  area. When we got down, we saw much ahead the lower slope was
                  burning, some cars returning and people guessing how the fire
                  started.
                </p>
                <h2 className="font-semibold">Sustainable Energy : </h2>
                <p
                  style={{ fontFamily: "Roboto" }}
                  className="font-normal font-size-18 leading-29 flex items-center "
                >
                  The dhaba-wala was throwing water with buckets on the trees on
                  fire to save their little setup. By the time I reached my
                  village, neither people were home nor there was any forest
                  fire. All of them had averted the spreading flames by a
                  daylong emptying of water buckets into the forest.
                </p>
                <h3
                  className="font-semibold  "
                  style={{
                    backgroundColor: "#FFFF99",
                    width: "fit-content",
                    padding: "1%",
                  }}
                >
                  Writer Name
                </h3>
                <div className="mt-3">
                  <Image
                    style={{ width: "164px", height: "164px" }}
                    src={Thumbnail}
                    alt="Picture of the author"
                  />
                </div>
                <p
                  style={{ fontFamily: "Roboto" }}
                  className="font-normal mt-3 font-size-18 leading-29 flex items-center "
                >
                  On a car journey through spiraling roads in Himalayan pine
                  forests, we encountered a rare and sudden jam in a remote
                  area. When we got down, we saw much ahead the lower slope was
                  burning, some cars returning and people guessing how the fire
                  started.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["secondDiv"]}>
          <div
            style={{ height: "90%", width: "90%" }}
          >
            <h3 className={styles["secondDivH"]}>Similar Blog Posts</h3>
            <div>
              <Image
                style={{ width: "100%", borderRadius: "20px" }}
                src={Thumbnail}
                alt="Picture of the author"
              />

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
            </div>
            <div style={{ marginTop: "30px" }}>
              <Image
                style={{ width: "100%", borderRadius: "20px" }}
                src={Thumbnail}
                alt="Picture of the author"
              />

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
            </div>
            <div style={{ marginTop: "30px" }}>
              <Image
                style={{ width: "100%", borderRadius: "20px" }}
                src={Thumbnail}
                alt="Picture of the author"
              />

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
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
