import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "./main-page.css";
import moment from "moment";

const MainPage = ({ category }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${
          category || 0
        }&key=AIzaSyAf3Q_XSa9EfW0zuxypgdlmlX2IHhN0m_I`
      ).then((res) => res.json());
      setList(res?.items);
      console.log({ res });
    };
    fetchData();
  }, [category]);

  const handleView = (value) => {
    if (value > 1000000) {
      return Math.round(value / 1000000) + "M";
    } else if (value > 10000) {
      return Math.round(value / 10000) + "K";
    } else {
      return value;
    }
  };
  return (
    <div className="grid-container">
      {list?.map((item, i) => (
        <div className="grid-item">
          <div>
            <img
              style={{ width: "100%" }}
              src={item?.snippet?.thumbnails?.medium?.url}
            />
            <h2
              style={{
                padding: "0px",
                fontSize: "14px",
                margin: "0px",
                textAlign: "left",
              }}
            >
              {item?.snippet?.title}
            </h2>
            <h3
              style={{
                padding: "0px",
                fontSize: "14px",
                margin: "0px",
                textAlign: "left",
              }}
            >
              {item?.snippet?.channelTitle}
            </h3>
            <p
              style={{
                padding: "0px",
                margin: "0px",
                fontSize: "11px",
                textAlign: "left",
              }}
            >
              {handleView(item?.statistics?.viewCount)} Views{" "}
              {moment(item?.snippet?.publishedAt).fromNow()}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
