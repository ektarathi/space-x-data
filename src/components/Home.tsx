import * as React from "react";
import LaunchData from "./LaunchData";
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <React.Fragment>
      <div className="page-content__left-section">
        <div className="landing-image"></div>
      </div>
      <div className="page-content__right-section">
        <LaunchData />
      </div>
    </React.Fragment>
  );
};

export default Home;
