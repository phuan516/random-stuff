import DeleteLabels from "./delete-labels";
import AddLabel from "./add-label";

const LabelSetting = () => {
  return (
    <div className="w-96 flex flex-col p-3 rounded-md shadow-lg m-5 bg-white">
      <AddLabel />
      <DeleteLabels />
    </div>
  );
};
export default LabelSetting;
