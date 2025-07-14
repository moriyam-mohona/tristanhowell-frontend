import React from "react";
import Banner from "./Banner/Banner";
import Sponsors from "./Sponsors/Sponsors";
import LatestNews from "./LatestNews/LatestNews";
import WhatCommunityMembersSay from "./WhatCommunityMembersSay/WhatCommunityMembersSay";

const HomeComponent = () => {
  return (
    <>
      <Banner />
      <WhatCommunityMembersSay />
      <LatestNews />
      <Sponsors />
    </>
  );
};

export default HomeComponent;
