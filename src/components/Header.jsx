import React from "react";
import Block from "./Block"; // Import the Block component
import "../styles/header.css";

const Header = ({ blockData }) => {
  const handleShowJSON = () => {
    if (!blockData || blockData.blocks.length === 0) {
      alert("No data to display.");
    } else {
      const formattedBlocks = blockData.blocks.map((block, index) => (
        <div key={index}>
          <p>
            <strong>Block {index + 1}:</strong>
          </p>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {JSON.stringify(block, null, 2)}
          </pre>
        </div>
      ));

      // Render blocks instead of alerting
      document.getElementById("json-container").innerHTML = formattedBlocks;
    }
  };

  return (
    <header>
      <h1>Page Builder</h1>
      <button onClick={handleShowJSON} className="view-json-btn">
        View JSON
      </button>
      <div id="json-container"></div>
      {blockData.blocks.map((block, index) => (
        <Block key={index} block={block} updateBlock={() => {}} />
      ))}
    </header>
  );
};

export default Header;
