import React from "react";
import ProfileCard from "./ProfileCard";
import OurTeam from "./OurTeam";
import MediaCard from "./MediaCard";
import { LeftColumnWrapper } from "./style";

function LeftView() {
  return (
    <LeftColumnWrapper className="left-layout">
      <ProfileCard />
      {/* <OurTeam /> */}
      <MediaCard />
    </LeftColumnWrapper>
  );
}
export default LeftView;
