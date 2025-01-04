// import React, { useState } from "react";
// import Header from "./Header";
// import Block from "./Block"; // Import the Block component

// const Page = () => {
//   const [jsonData, setJsonData] = useState({
//     blocks: [
//       {
//         id: "block_1",
//         type: "block",
//         position: { top: 100, left: 200 },
//         size: { height: 200, width: 300 },
//         children: [
//           {
//             id: "text_1",
//             type: "text",
//             content: "This is a text label",
//             position: { top: 50, left: 50 },
//           },
//           {
//             id: "image_1",
//             type: "image",
//             src: "path_to_image.jpg",
//             position: { top: 120, left: 100 },
//           },
//         ],
//       },
//       {
//         id: "block_2",
//         type: "block",
//         position: { top: 350, left: 500 },
//         size: { height: 250, width: 350 },
//         children: [
//           {
//             id: "text_2",
//             type: "text",
//             content: "Another text label",
//             position: { top: 80, left: 50 },
//           },
//           {
//             id: "image_2",
//             type: "image",
//             src: "path_to_image2.jpg",
//             position: { top: 160, left: 100 },
//           },
//         ],
//       },
//     ],
//   });

//   const handleShowJSON = () => {
//     if (jsonData.blocks.length === 0) {
//       alert("No data to display.");
//     } else {
//       const jsonData = JSON.stringify(jsonData, null, 2);
//       alert(jsonData); // Display JSON as alert
//     }
//   };

//   return (
//     <div>
//       <Header blockData={jsonData} onShowJSON={handleShowJSON} />
//       <Block block={jsonData.blocks[0]} updateBlock={setJsonData} />
//       {/* Add more Block components as necessary */}
//       <button onClick={handleShowJSON}>click</button>
//     </div>
//   );
// };

// export default Page;
