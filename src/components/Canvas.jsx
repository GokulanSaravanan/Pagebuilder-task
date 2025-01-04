import React, { useState } from "react";
import Block from "./Block";
import TreeView from "./TreeView";
import "../styles/canvas.css";

const Canvas = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = () => {
    const newBlock = {
      id: blocks.length + 1,
      top: 100,
      left: 100,
      width: 150,
      height: 100,
      children: [],
    };
    setBlocks([...blocks, newBlock]);
  };

  const addChild = (type, blockId) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        if (block.id === blockId) {
          const newChild = {
            id: `${block.id}-${block.children.length + 1}`,
            type: type,
            content: type === "text" ? "Editable Label" : "",
            src: type === "image" ? null : "",
            top: 10,
            left: 10,
          };
          return { ...block, children: [...block.children, newChild] };
        }
        return block;
      })
    );
  };

  const updateBlock = (blockId, childId, updates) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        if (block.id === blockId) {
          if (childId) {
            const updatedChildren = block.children.map((child) =>
              child.id === childId ? { ...child, ...updates } : child
            );
            return { ...block, children: updatedChildren };
          }
          return { ...block, ...updates };
        }
        return block;
      })
    );
  };

  return (
    <div className="canvas-container">
      <TreeView blocks={blocks} addBlock={addBlock} addChild={addChild} />
      <div className="canvas">
        {blocks.map((block) => (
          <Block key={block.id} block={block} updateBlock={updateBlock} />
        ))}
      </div>
    </div>
  );
};

export default Canvas;
