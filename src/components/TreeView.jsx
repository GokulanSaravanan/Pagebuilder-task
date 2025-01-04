/* eslint-disable react/prop-types */
import "../styles/treeview.css";

const TreeView = ({ blocks, addBlock, addChild }) => {
  return (
    <aside className="treeview-container">
      <button className="add-block-btn" onClick={addBlock}>
        ADD NEW BLOCK
      </button>
      <h3 className="treeview-title">Treeview</h3>
      {blocks.map((block) => (
        <div key={block.id} className="treeview-block">
          <div className="treeview-header">
            <label>Block {block.id}</label>
            <button
              className="treeview-btn"
              onClick={() => addChild("text", block.id)}
            >
              T
            </button>
            <button
              className="treeview-btn"
              onClick={() => addChild("image", block.id)}
            >
              I
            </button>
          </div>
          <div className="treeview-children">
            {block.children.map((child) => (
              <div key={child.id} className="treeview-child">
                {child.type === "text" ? `Label ${child.id}` : `Image ${child.id}`}
              </div>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default TreeView;
