import React from "react";

const JSONDisplay = ({ jsonData, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="json-banner">
      <div className="json-content">
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        <button onClick={onClose} className="close-json-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default JSONDisplay;
