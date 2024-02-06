import React from "react";
import GlobalStyles from '../utils/mainLandingPageHelpers/GlobalStylesTailwind';
import AnimationRevealPage from "../utils/mainLandingPageHelpers/AnimationRevealPage";
import MainLandingHeader from "../Components/MainLandingPageComponents/MainLandingHeader.js";
import MainLandingFirstRow from "../Components/MainLandingPageComponents/MainLandingFirstRow.js";
import MainLandingSecondRow from "../Components/MainLandingPageComponents/MainLandingSecondRow.js";
import MainLandingFooter from "../Components/MainLandingPageComponents/MainLandingFooter.js";

export default function MainLandingPage() {
  return (
    <>
    <GlobalStyles />
    <AnimationRevealPage>
      <MainLandingHeader />
      <MainLandingFirstRow />
      <MainLandingSecondRow />
      <MainLandingFooter />
    </AnimationRevealPage>
    </>
  );
}