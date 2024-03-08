import React, { useEffect, useState } from "react";
import { CounterState } from "../../state/context/context";
import moment from "moment";
import { Link } from "react-router-dom";

const Recomanded = ({}) => {
  const [recomandedData, setRecomandedData] = useState([]);
  const { category } = CounterState();

  const handleView = (value) => {
    if (value > 1000000) {
      return Math.round(value / 1000000) + "M";
    } else if (value > 100000) {
      return Math.round(value / 100000) + "L";
    } else if (value > 1000) {
      return Math.round(value / 1000) + "K";
    } else {
      return value;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${
          category || 0
        }&key=AIzaSyAf3Q_XSa9EfW0zuxypgdlmlX2IHhN0m_I`
      ).then((res) => res.json());
      setRecomandedData(res?.items);
    };
    fetchData();
    console.log(category, recomandedData);
  }, [category]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {recomandedData?.map(({ snippet, statistics, id }, i) => (
        <Link
          to={`/video/${id}`}
          key={i}
          style={{
            display: "flex",
            gap: "10px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            style={{ width: "200px", height: "auto" }}
            src={snippet?.thumbnails?.medium?.url}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              fontSize: "13px",
            }}
          >
            <b>
              {snippet?.title?.length > 35
                ? `${snippet?.title?.substring(0, 40)}...`
                : snippet?.title}
            </b>
            <span> {snippet?.channelTitle?.substring(0, 20)}</span>
            <small>
              {" "}
              {handleView(statistics?.viewCount)} Views {" . "}
              {moment(snippet?.publishedAt).fromNow()}{" "}
            </small>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recomanded;
