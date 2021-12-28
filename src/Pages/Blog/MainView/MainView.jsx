import React, { useEffect } from "react";
import TimeLine from "./Timeline";
import { CreatePost } from "../../../Components";

function MainView() {
  useEffect(() => {
    document.body.classList.add("fixed-header");
    return () => {
      document.body.classList.remove("fixed-header");
    };
  }, []);
  return (
    <>
      <CreatePost />
      <TimeLine />
    </>
  );
}

export default MainView;
