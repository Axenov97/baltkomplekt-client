// import React from "react";
// import { renderToString } from "react-dom/server";
// import App from "./src/App";
// import { Helmet } from "react-helmet";
//
// const express = require('express')
// const path = require('path')
//
// const PORT = process.env.PORT || 3000
//
// const app = express()
// app.use(express.static(__dirname))
// app.use(express.static(path.resolve(__dirname, 'build')))
//
// app.get('*', (req, res) => {
//     const app = renderToString(<App />);
//     const helmet = Helmet.renderStatic();
//
//     const html = `
//   <!DOCTYPE html>
//   <html ${helmet.htmlAttributes.toString()}>
//     <head>
//       ${helmet.title.toString()}
//       ${helmet.meta.toString()}
//       ${helmet.link.toString()}
//     </head>
//     <body ${helmet.bodyAttributes.toString()}>
//       <div id="root">
//         ${app}
//       </div>
//       </body>
//   </html>
// `;
//     res.sendFile(path.join(__dirname, 'build', html))
// });
//
// app.listen(PORT, () => {console.log(`Server ${PORT}`)})