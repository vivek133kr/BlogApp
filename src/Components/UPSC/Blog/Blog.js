import React, { useState } from "react";
import styles from "../../../styles/upsc/blog.module.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";

import Images from "../../../../public/images/newimg.png";
import Date from "../../../../public/images/Vector.png";

function Blog({ data }) {
  const [currentPage, setCurrentPage] = useState(1);

  const featuredData = data.results.slice(0, 4);
  function goToPage(page) {
    setCurrentPage(page);
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  const pageSize = 1; // set page size to 5
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.results.slice(startIndex, endIndex);

  const pageCount = Math.ceil(data.results.length / pageSize);

  // generate an array of page numbers to show in pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }
  const router = useRouter();

  const para =
    "On a car journey through spiraling roads in Himalayan pine forests, we encountered a rare and sudden jam in a remote area. When we got down, we saw new pictures";
  return (
    <div className={styles["mainTop"]}>
      {data.results.length > 0 && (
        <div className={styles["imageBox"]}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: "496px",

              cursor: "pointer",
            }}
            onClick={() => router.push(`/upsc/blog/${featuredData[3].slug}`)}
          >
            <Image
              src={featuredData[3].thumbnail}
              alt="Picture of the author"
              width={300}
              height={300}
              style={{
                borderRadius: "10px",
                objectFit: "contain",
                border: "1px solid black",
                width: "100%",
                height: "100%",
              }}
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
              src={featuredData[3].thumbnail}
              alt="Picture of the author"
              width={300}
              height={300}
              style={{
                width: "90%",
                flex: "1 1 0",
                marginLeft: "20px",
                marginRight: "20px",
                cursor: "pointer",
                border: "1px solid black",
                marginBottom: "10px",
                padding: "0",
                borderRadius: "10px",
                maxHeight: `calc(33.33% - 10px)`,
                objectFit: "contain",
              }}
            />
            <Image
              src={featuredData[3].thumbnail}
              alt="Picture of the author"
              width={300}
              height={300}
              style={{
                width: "90%",
                flex: "1 1 0",
                marginLeft: "20px",
                marginRight: "20px",
                border: "1px solid black",
                cursor: "pointer",
                marginBottom: "10px",
                padding: "0",
                borderRadius: "10px",
                maxHeight: `calc(33.33% - 10px)`,
                objectFit: "contain",
              }}
            />
            <Image
              src={featuredData[3].thumbnail}
              alt="Picture of the author"
              width={300}
              height={300}
              style={{
                width: "90%",
                flex: "1 1 0",
                marginLeft: "20px",
                marginRight: "20px",
                cursor: "pointer",
                marginBottom: "10px",
                padding: "0",
                border: "1px solid black",
                borderRadius: "10px",
                maxHeight: `calc(33.33% - 10px)`,
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}

      {currentData.map((item) => {
        return (
          <div
            className={styles["imageDiv"]}
            key={item.slug}
            onClick={() => router.push(`/upsc/blog/${item.slug}`)}
          >
            <div className={styles["imagesStyles"]}>
              <Image
                src={item.thumbnail ? item.thumbnail : Images}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                width={500}
                height={500}
              />
            </div>
            <div className={styles["contentDiv"]}>
              <Card.Body className={styles["CardBody"]}>
                <p className={styles["category"]}>{item.category[0]}</p>
                <p className={styles["boxHeading"]}>{item.title}</p>
                <div className={`flex ${styles["dateDiv"]} `}>
                  <div>
                    <Image src={Date} alt="Picture of the author" />
                  </div>
                  <p
                    style={{ padding: "0px", margin: "0px", marginLeft: "2%" }}
                  >
                    {item.publish_date ? item.publish_date : "11 Mar, 2023"}
                  </p>
                </div>
                <p className={styles["paraP"]}>
                  {item.excerpt.slice(0, 150)}...
                </p>
              </Card.Body>
            </div>
          </div>
        );
      })}
      <div className={`${styles["pageButtonStyle"]}`}>
        <button
          style={{
            display: "flex",
            height: "40px",
            backgroundColor: currentPage === 1 ? "#eceff1" : "white",

            color: "black",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "700",

            fontSize: "16px",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid black",
          }}
          className={`${styles["firstPageBtn"]}`}
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          <p
            style={{
              margin: "0px",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            {"<<"}
          </p>
          <p style={{ margin: "0px", marginRight: "10px" }}>Previous</p>
        </button>

        {/* dynamically generate page number buttons */}
        {pageNumbers.map((pageNumber) => (
          <button
            style={{
              height: "40px",
              backgroundColor: currentPage == pageNumber ? "#51CFFF" : "white",
              color: "black",
              width: "40px",
              margin: "5px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid black",
            }}
            key={pageNumber}
            onClick={() => goToPage(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        ))}

        <button
          style={{
            backgroundColor: currentPage === pageCount ? "#eceff1" : "white",
            display: "flex",
            height: "40px",
            margin: "5px",
            color: "black",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "700",

            fontSize: "16px",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid black",
          }}
          disabled={currentPage === pageCount}
          onClick={nextPage}
        >
          <p style={{ margin: "0px", marginLeft: "10px" }}>Next</p>
          <p
            style={{
              margin: "0px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            {">>"}
          </p>
        </button>
      </div>
    </div>
  );
}

export default Blog;
