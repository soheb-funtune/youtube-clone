import React from "react";
import { Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <>
      <div className="grid-item">
        <Skeleton variant="rectangular" width={"100%"} height={"181px"} />
        <Skeleton />
        <Skeleton width="60%" />{" "}
      </div>
      <div className="grid-item">
        <Skeleton variant="rectangular" width={"100%"} height={"181px"} />
        <Skeleton />
        <Skeleton width="60%" />{" "}
      </div>
      <div className="grid-item">
        <Skeleton variant="rectangular" width={"100%"} height={"181px"} />
        <Skeleton />
        <Skeleton width="60%" />{" "}
      </div>
      <div className="grid-item">
        <Skeleton variant="rectangular" width={"100%"} height={"181px"} />
        <Skeleton />
        <Skeleton width="60%" />{" "}
      </div>
      <div className="grid-item">
        <Skeleton variant="rectangular" width={"100%"} height={"181px"} />
        <Skeleton />
        <Skeleton width="60%" />{" "}
      </div>
    </>
  );
};

export default CardSkeleton;
