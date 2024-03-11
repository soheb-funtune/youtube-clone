import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Skeleton } from "@mui/material";
import "./main-page.css";
import moment from "moment";
import { CounterState } from "../state/context/context";
import { handleView } from "../assets/data";
import CardSkeleton from "../Components/Sckeleton/card-skeleton";

const MainPage = () => {
  const { category, searchText } = CounterState();
  const [list, setList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${
          category || 0
        }&key=${import.meta.env.VITE_YOUTUBE_KEY}`
      ).then((res) => res.json());
      if (res?.error) {
        alert(res?.error?.message);
      }
      setList(res?.items);
      console.log({ res });
    };
    !searchText && fetchData();
  }, [category]);

  // search text

  useEffect(() => {
    const searchData = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchText}&videoCaption=any&key=${
          import.meta.env.VITE_YOUTUBE_KEY
        }`
      ).then((res) => res.json());
      console.log(res);
      setList(res?.items);
    };

    searchData();
  }, [searchText]);

  return (
    <div className="grid-container">
      {list?.length > 0 ? (
        list?.map((item, i) => (
          <Link
            to={`/video/${item?.id?.videoId || item?.id}`}
            key={i}
            className="grid-item"
          >
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
        ))
      ) : (
        <CardSkeleton />
      )}
    </div>
  );
};

export default MainPage;
