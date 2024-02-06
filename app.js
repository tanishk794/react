
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h2",{},"Namaste world from react")

const root = ReactDOM.createRoot(document.querySelector(".app"))

root.render(heading);