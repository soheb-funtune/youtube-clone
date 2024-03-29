import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Divider, Skeleton } from "@mui/material";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

import "./video-page.css";
import moment from "moment";
import Recomanded from "../RecomandedSection/Recomanded";
import { handleView } from "../../assets/data";
import { CounterState } from "../../state/context/context";
const VideoPage = () => {
  const [channelData, setChannelData] = useState({});
  const [videoDetails, setVideoDetails] = useState({});
  const [commentData, setCommentData] = useState([]);
  let { id } = useParams();
  const { searchText } = CounterState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${
          import.meta.env.VITE_YOUTUBE_KEY
        }`
      ).then((res) => res.json());
      setVideoDetails(res?.items[0]);
      const comments = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=5&videoId=${id}&key=${
          import.meta.env.VITE_YOUTUBE_KEY
        }`
      ).then((res) => res.json());
      setCommentData(comments?.items);
    };
    console.log(commentData);
    fetchVideoDetails();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${
          videoDetails?.snippet?.channelId
        }&key=${import.meta.env.VITE_YOUTUBE_KEY}`
      ).then((res) => res.json());
      setChannelData(res?.items?.[0]);
    };
    console.log(channelData);
    fetchVideoDetails();
  }, [videoDetails?.snippet?.channelId]);

  return (
    <div className="video-grid-container">
      <div>
        <iframe
          className="iframe-css"
          src={`https://www.youtube.com/embed/${id}`}
          title="Rihanna, Avicii, Justin Bieber, Kygo, Selena Gomez, Alok, Bastille, David Guetta - Summer Nostalgia"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div style={{ padding: "0px" }}>
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
                <b>{channelData?.snippet?.title || <Skeleton />}</b>
                {channelData?.statistics?.subscriberCount ? (
                  <small>
                    {" "}
                    {handleView(
                      channelData?.statistics?.subscriberCount || 0
                    )}{" "}
                    subscribers
                  </small>
                ) : (
                  <Skeleton width={"70%"} />
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                padding: "10px 15px",
                background: "#f1efef",
                borderRadius: "10px",
              }}
            >
              <SlLike
                style={{
                  fontSize: "20px",
                }}
              />
              <span>{handleView(videoDetails?.statistics?.likeCount)}</span>
              <Divider orientation="vertical" flexItem />
              <SlDislike
                style={{
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
          <div className="description-section">
            <p
              style={{
                padding: "0px",
                margin: "0px",
                fontSize: "16px",
                color: "black",
                textAlign: "left",
              }}
            >
              <span style={{ color: "black" }}>
                {" "}
                {handleView(videoDetails?.statistics?.viewCount)} Views{" "}
                {moment(videoDetails?.snippet?.publishedAt).fromNow()}
              </span>{" "}
              <br />
              {videoDetails?.snippet?.description?.slice(0, 250)}
            </p>
          </div>
        </div>
      </div>
      {/* right hand side */}
      <div>
        <div
          className="comment-section"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {commentData?.map(({ snippet, statistics }, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "5px",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
              />
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    fontSize: "16px",
                    marginBottom: "2px",
                    flexDirection: "column",
                  }}
                >
                  <b>{snippet?.topLevelComment?.snippet?.authorDisplayName}</b>
                  {/* <small style={{ fontSize: "14px" }}>
                    {" "}
                    {moment(
                      snippet?.topLevelComment?.snippet?.publishedAt
                    ).fromNow()}{" "}
                  </small> */}
                  <small style={{ fontSize: "14px" }}>
                    {" "}
                    {(snippet?.topLevelComment?.snippet?.textDisplay).toString()}
                  </small>
                </div>
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    padding: "10px 0px",
                  }}
                >
                  <SlLike
                    style={{
                      fontSize: "20px",
                    }}
                  />
                  <span>
                    {handleView(snippet?.topLevelComment?.snippet?.likeCount)}
                  </span>

                  <SlDislike
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <Recomanded />
      </div>
    </div>
  );
};

export default VideoPage;
