import React, { useState } from "react";
import { ReactReader } from "react-reader";

export const EpubReader = ({ url, initLocation = 0 }) => {
  const [location, setLocation] = useState(initLocation);
  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        url={url}
        location={location}
        locationChanged={(epubcfi) => {
          console.log(epubcfi);
          setLocation(epubcfi);
        }}
      />
    </div>
  );
};
