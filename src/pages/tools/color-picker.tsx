import React from "react";
import clsx from "clsx";
import { ChromePicker } from "react-color";

import { contrast } from "../../lib/calculate-contrast";

const contrastRequirements = {
  smallAA: 4.5,
  largeAA: 3,
  smallAAA: 7,
  largeAAA: 4.5,
};

const ColorPicker = () => {
  const [background, setBackground] = React.useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  });
  const [textColor, setTextColor] = React.useState({ r: 0, g: 0, b: 0, a: 1 });

  const calculateStatus = (contrastCategory: string) => {
    return contrastRequirements[contrastCategory] <=
      contrast(background, textColor)
      ? "PASS"
      : "FAIL";
  };

  const contrastRequirementStyle = {
    PASS: "bg-green-600",
    FAIL: "bg-red-600",
  };

  const formatColor = (color) => {
    return `rgb(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundColor: formatColor(background),
      }}
    >
      <div className="p-5 rounded-md shadow-lg bg-white flex flex-row">
        <div className="flex flex-col">
          <div
            style={{
              backgroundColor: formatColor(background),
            }}
            className="p-3 rounded-md flex flex-col justify-center items-center"
          >
            <p
              style={{
                color: formatColor(textColor),
              }}
              className="text-2xl font-bold"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
            <p
              style={{
                color: formatColor(textColor),
              }}
              className="text-sm font-bold"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div className="flex flex-rows justify-around mt-3">
            <div>
              <h1 className="font-bold">Background Color</h1>
              <ChromePicker
                color={background}
                onChange={(updatedColor) =>
                  setBackground({
                    r: updatedColor.rgb.r,
                    g: updatedColor.rgb.g,
                    b: updatedColor.rgb.b,
                    a: updatedColor.rgb.a,
                  })
                }
              />
            </div>
            <div>
              <h1 className="font-bold">Text Color</h1>
              <ChromePicker
                color={textColor}
                onChange={(updatedColor) =>
                  setTextColor({
                    r: updatedColor.rgb.r,
                    g: updatedColor.rgb.g,
                    b: updatedColor.rgb.b,
                    a: updatedColor.rgb.a,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5 font-bold">
            <div
              className={clsx(
                "p-3 rounded-md flex flex-col items-center",
                contrastRequirementStyle[calculateStatus("smallAA")]
              )}
            >
              <p>Small text</p>
              <p>WCAG AA</p>
              <p>{calculateStatus("smallAA")}</p>
            </div>
            <div
              className={clsx(
                "p-3 rounded-md flex flex-col items-center",
                contrastRequirementStyle[calculateStatus("smallAAA")]
              )}
            >
              <p>Small text</p>
              <p>WCAG AAA</p>
              <p>{calculateStatus("smallAAA")}</p>
            </div>
            <div
              className={clsx(
                "p-3 rounded-md flex flex-col items-center",
                contrastRequirementStyle[calculateStatus("largeAA")]
              )}
            >
              <p>Large text</p>
              <p>WCAG AA</p>
              <p>{calculateStatus("largeAA")}</p>
            </div>
            <div
              className={clsx(
                "p-3 rounded-md flex flex-col items-center",
                contrastRequirementStyle[calculateStatus("largeAAA")]
              )}
            >
              <p>Large text</p>
              <p>WCAG AAA</p>
              <p>{calculateStatus("largeAAA")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
