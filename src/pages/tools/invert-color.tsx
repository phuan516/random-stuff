import { ChromePicker } from "react-color";
import React, { useState } from "react";

import { invertColor } from "../../lib/invert-color";
import SideBar from "../../components/side-bar/side-bar";

const InvertColor = () => {
  const [color, setColor] = useState("#000000");

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundColor: color,
      }}
    >
      <SideBar />
      <div className="absolute top-5 left-0 ml-20">
        <ChromePicker color={color} onChange={(color) => setColor(color.hex)} />
      </div>
      <div className="flex flex-col ml-20">
        <p
          style={{
            color: invertColor(color, true),
          }}
          className="text-9xl font-bold"
        >
          {invertColor(color.substring(1), true)}
        </p>
        <p
          style={{
            color: invertColor(color, false),
          }}
          className="text-9xl font-bold"
        >
          {invertColor(color.substring(1), false)}
        </p>
      </div>
    </div>
  );
};

export default InvertColor;
