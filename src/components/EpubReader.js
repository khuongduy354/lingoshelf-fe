import React, { useState } from "react";
import { ReactReader } from "react-reader";

export const EpubReader = ({ url, initLocation = 0, previewMode = false }) => {
  const [location, setLocation] = useState(initLocation || 0);
  return (
    <div style={{ height: previewMode ? "" : "100vh" }}>
      <ReactReader
        url={url}
        location={location}
        showToc={!previewMode}
        locationChanged={(epubcfi) => {
          setLocation(epubcfi);
        }}
      />
    </div>
  );
};
