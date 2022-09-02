import Select from "react-select";
import { useEffect, useState } from "react";
import useSWR from "swr";

import fetcher from "../../../lib/fetcher";

const deleteLabels = async (labels) => {
  await fetch(`/api/delete-labels`, {
    method: "POST",
    body: JSON.stringify(labels),
  });
};

const DeleteLabels = () => {
  const [labels, setLabels] = useState();
  const [labelsToDelete, setLabelsToDelete] = useState([]);

  const { data } = useSWR("/api/get-labels", fetcher);

  useEffect(() => {
    data &&
      setLabels(
        data.map((label) => ({ value: label.name, label: label.name }))
      );
  }, [data]);

  return (
    <form onSubmit={() => deleteLabels(labelsToDelete)}>
      <label className="block text-sm font-medium text-gray-700">Labels</label>
      <Select
        defaultValue={labelsToDelete}
        onChange={setLabelsToDelete}
        options={labels}
        isMulti
      />
      <input
        className="border border-gray-300 rounded-sm w-full h-10 mt-4 hover:cursor-pointer hover:border-gray-400"
        type="submit"
        value="Delete"
      />
    </form>
  );
};

export default DeleteLabels;
