import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "./main-page.css";
import moment from "moment";
import { CounterState } from "../state/context/context";
import { handleView } from "../assets/data";

const MainPage = () => {
  const { category } = CounterState();
  const [list, setList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <div className="grid-container">
      {list?.map((item, i) => (
        <Link to={`/video/${item?.id}`} key={i} className="grid-item">
          <div>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
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
              {item?.snippet?.title?.length > 35
                ? `${item?.snippet?.title?.substring(0, 35)}...`
                : item?.snippet?.title}
            </h2>
            <h3
              style={{
                padding: "0px",
                fontSize: "14px",
                margin: "0px",
                textAlign: "left",
              }}
            >
              {item?.snippet?.channelTitle?.length > 35
                ? `${item?.snippet?.channelTitle?.substring(0, 35)}...`
                : item?.snippet?.channelTitle}
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
        </Link>
      ))}
    </div>
  );
};

export default MainPage;
