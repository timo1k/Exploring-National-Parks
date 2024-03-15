import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

/**
 * Renders the ParkInfo component page.
 * @component
 * @module NewsPage
 *
 * @returns {JSX.Element} The rendered ParkInfo component.
 */

const NewsPage = () => {
  return (
    <div className="NewsPage">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>News Page</h1>
      {/* Twitter timeline embed */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="TempleUniv"
        options={{ height: 700 }}
      />
    </div>
  );
};

export default NewsPage;
