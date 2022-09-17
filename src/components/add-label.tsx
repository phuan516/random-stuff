import { useState } from "react";
import { TwitterPicker } from "react-color";

const addLabel = async (labels) => {
  await fetch(`/api/add-label`, {
    method: "POST",
    body: JSON.stringify(labels),
  });
};

const AddLabel = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#8957e5");

  const handleChangeColor = (color) => {
    setColor(color.hex);
  };

  return (
    <form className="mb-2" onSubmit={() => addLabel({ name, color })}>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="pl-3 block w-full border-gray-300 rounded-sm h-9 border bg-white focus:border-blue-400 hover:cursor-pointer hover:border-gray-400"
      />
      <label className="block text-sm font-medium text-gray-700">Color</label>
      <TwitterPicker
        width="360px"
        color={color}
        onChangeComplete={handleChangeColor}
        triangle={"hide"}
      />
      <input
        className="border border-gray-300 rounded-sm w-full h-10 mt-4 hover:cursor-pointer hover:border-gray-400"
        type="submit"
        value="Add"
      />
    </form>
  );
};

export default AddLabel;
