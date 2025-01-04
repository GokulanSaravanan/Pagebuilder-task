import React from "react";
import Draggable from "react-draggable";
import "../styles/block.css";

const Block = ({ block, updateBlock }) => {
  const handleDragStop = (e, data) => {
    updateBlock(block.id, null, { top: data.y, left: data.x });
  };

  const handleChildDragStop = (childId, e, data) => {
    updateBlock(block.id, childId, { top: data.y, left: data.x });
  };

  const handleResize = (e) => {
    const newWidth = e.target.parentElement.offsetWidth + e.movementX;
    const newHeight = e.target.parentElement.offsetHeight + e.movementY;
    updateBlock(block.id, null, { width: newWidth, height: newHeight });
  };

  const handleLabelEdit = (childId, value) => {
    updateBlock(block.id, childId, { content: value });
  };

  const handleImageUpload = (childId, e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateBlock(block.id, childId, { src: imageUrl });
    }
  };

  return (
    <Draggable
      defaultPosition={{ x: block.left, y: block.top }}
      bounds="parent"
      onStop={handleDragStop}
    >
      <div
        className="block"
        style={{
          width: block.width,
          height: block.height,
          position: "relative",
        }}
      >
        {block.children.map((child) => (
          <Draggable
            key={child.id}
            bounds="parent"
            defaultPosition={{ x: child.left, y: child.top }}
            onStop={(e, data) => handleChildDragStop(child.id, e, data)}
          >
            <div
              className="child"
              style={{
                position: "absolute",
              }}
            >
              {child.type === "text" ? (
                <input
                  type="text"
                  value={child.content}
                  onChange={(e) => handleLabelEdit(child.id, e.target.value)}
                  className="label-input"
                  style={{ fontSize: "12px", width: "80px" }}
                />
              ) : (
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(child.id, e)}
                    className="image-upload"
                  />
                  {child.src && (
                    <img
                      src={child.src}
                      alt="Uploaded"
                      className="uploaded-image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  )}
                </div>
              )}
            </div>
          </Draggable>
        ))}
        <div
          className="resize-handle"
          onMouseDown={(e) => {
            e.preventDefault();
            document.addEventListener("mousemove", handleResize);
          }}
          onMouseUp={() => {
            document.removeEventListener("mousemove", handleResize);
          }}
        ></div>
      </div>
    </Draggable>
  );
};

export default Block;
