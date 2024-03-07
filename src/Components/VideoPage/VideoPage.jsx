import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Divider } from "@mui/material";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

import "./video-page.css";
import moment from "moment";
const VideoPage = () => {
  const [channelData, setChannelData] = useState({});
  const [videoDetails, setVideoDetails] = useState({});
  let { id } = useParams();
  useEffect(() => {
    const fetchVideoDetails = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAf3Q_XSa9EfW0zuxypgdlmlX2IHhN0m_I`
      ).then((res) => res.json());
      setVideoDetails(res?.items[0]);
    };
    console.log({ videoDetails });
    fetchVideoDetails();
  }, [id]);
  useEffect(() => {
    const fetchVideoDetails = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoDetails?.snippet?.channelId}&key=AIzaSyAf3Q_XSa9EfW0zuxypgdlmlX2IHhN0m_I`
      ).then((res) => res.json());
      setChannelData(res?.items?.[0]);
    };
    console.log(channelData);
    fetchVideoDetails();
  }, [videoDetails?.snippet?.channelId]);

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
    <div className="video-grid-container">
      <div>
        <iframe
          style={{ borderRadius: "20px" }}
          width="695"
          height="391"
          src={`https://www.youtube.com/embed/${id}`}
          title="Rihanna, Avicii, Justin Bieber, Kygo, Selena Gomez, Alok, Bastille, David Guetta - Summer Nostalgia"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div style={{ padding: "0px 10px" }}>
          <div>
            <h2
              style={{
                padding: "0px",
                fontSize: "20px",
                margin: "10px 0px",
                textAlign: "left",
              }}
            >
              {videoDetails?.snippet?.title}
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar
                alt="Remy Sharp"
                src={channelData?.snippet?.thumbnails?.default?.url}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <b>{channelData?.snippet?.title || "Channel Name"} </b>
                <small>
                  {" "}
                  {handleView(
                    channelData?.statistics?.subscriberCount || 0
                  )}{" "}
                  subscribers
                </small>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                padding: "10px 15px",
                background: "lightgray",
                borderRadius: "10px",
              }}
            >
              <SlLike
                style={{
                  fontSize: "20px",
                }}
              />
              <span>{videoDetails?.statistics?.likeCount}</span>
              <Divider orientation="vertical" flexItem />
              <SlDislike
                style={{
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
          <div className="comment-section">
            <p
              style={{
                padding: "0px",
                margin: "0px",
                fontSize: "15px",
                color: "black",
                textAlign: "left",
              }}
            >
              {handleView(videoDetails?.statistics?.viewCount)} Views{" "}
              {moment(videoDetails?.snippet?.publishedAt).fromNow()}{" "}
            </p>
            {videoDetails?.snippet?.description?.slice(0, 250)}
          </div>
        </div>
      </div>
      <div>List</div>
    </div>
  );
};

export default VideoPage;
