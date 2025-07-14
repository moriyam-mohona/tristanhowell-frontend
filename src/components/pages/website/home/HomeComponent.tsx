import React from "react";
import Banner from "./Banner/Banner";
import Sponsors from "./Sponsors/Sponsors";
import LatestNews from "./LatestNews/LatestNews";
import WhatCommunityMembersSay from "./WhatCommunityMembersSay/WhatCommunityMembersSay";
import EmpoweringFamilies from "./EmpoweringFamilies/EmpoweringFamilies";

const HomeComponent = () => {
  return (
    <>
      <Banner />
      <EmpoweringFamilies />
      <WhatCommunityMembersSay />
      <LatestNews />
      <Sponsors />
    </>
  );
};

export default HomeComponent;
