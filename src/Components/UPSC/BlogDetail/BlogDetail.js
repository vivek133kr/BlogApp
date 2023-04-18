import React from 'react'
import Image from "next/image";
import Thumbnail from "../../../../public/images/newimg.png";
import "@fontsource/roboto"
import Date from "../../../../public/images/Vector.png";

import HomeIcon from "@mui/icons-material/Home";
import styles from "../../../styles/upsc/detailBlog.module.css"
import { Button } from 'react-bootstrap'
import BlogForms from '../BlogForm/BlogForm';
import { useRouter } from "next/router";

export default function BlogDetails({post, data}) {
let newdata = data.results.slice(0,3)
const router = useRouter()
  return (
    <div className={styles["headBlog"]}>
      <div className={styles["upperDiv"]}>
        <div className={styles["mainDiv"]}>
          <div className={styles["firstPart"]}>
            <p className={styles["firstPara"]}>JoshTalks UPSC Blogs</p>
            <Button className={styles["firstButton"]}>{">"} </Button>
          </div>
          <div className={styles["lineDiv"]}></div>
          <div className={styles["mainDivs"]}>
            <div className={styles["secondPara"]}>
              <h1>{post.title}</h1>
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
                  {post.publish_date}
                </p>
              </div>
            </div>
            <div className={styles["thumbnailImg"]}>
              <Image
                style={{ width: "100%", height:"100%", objectFit:'contain' }}
                src={post.thumbnail ? post.thumbnail : Thumbnail}
                alt="Picture of the author"
                width={500}
                height={500}
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
                  <div
                    style={{
                      fontFamily: "Roboto",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                    className={` ${styles["mainP"]} font-normal font-size-18 leading-29 flex `}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>

                  <h3
                    className="font-semibold  "
                    style={{
                      backgroundColor: "#FFFF99",
                      width: "fit-content",
                      padding: "1%",
                    }}
                  >
                    {post.author.name}
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
                    {post.author.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["secondDiv"]}>
          <div style={{ height: "90%", width: "90%" }}>
            <h3 className={styles["secondDivH"]}>Similar Blog Posts</h3>

            {newdata.map((item, i) => {
              return (
                <div
                  key={i}
                  style={{ marginTop: "30px", cursor: "pointer" }}
                  onClick={() => router.push(`/upsc/blog/${item.slug}`)}
                >
                  <Image
                    style={{ width: "100%", borderRadius: "20px" }}
                    src={Thumbnail}
                    alt="Picture of the author"
                  />
                  <p className={styles["boxHeading"]}>{item.title}</p>
                  <div className={`flex ${styles["dateDiv"]} `}>
                    <div>
                      <Image src={Date} alt="Date" />
                    </div>
                    <p
                      style={{
                        padding: "0px",
                        margin: "0px",
                        marginLeft: "2%",
                      }}
                    >
                      {item.publish_date ? item.publish_date : "21-Mar-2023"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BlogForms />
    </div>
  );
}
