import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Select from "react-select";
import useSWR from "swr";

import { fetcher } from "../lib/fetcher";

const formatSelectData = (data) => {
  return (
    data?.map((label) => ({
      value: label.name,
      label: label.name,
    })) || []
  );
};

const EditTodoItem = ({ open, setOpen, title, selectedLabels, dueDate }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDueDate, setNewDueDate] = useState(dueDate);
  const [newLabels, setNewLabels] = useState([]);
  const [labels, setLabels] = useState();

  const { data } = useSWR("/api/get-labels", fetcher);

  const updateTodoItem = async (item) => {
    await fetch(`/api/update-todo-item`, {
      method: "POST",
      body: JSON.stringify(item),
    });
    setOpen(false);
  };

  useEffect(() => {
    data &&
      setLabels(
        data.map((label) => ({ value: label.name, label: label.name }))
      );
  }, [data]);

  console.log(newLabels);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <form
                        onSubmit={() =>
                          updateTodoItem({
                            title,
                            newTitle,
                            newDueDate,
                            newLabels,
                          })
                        }
                      >
                        <label className="block text-sm font-medium text-gray-700">
                          Title
                        </label>
                        <input
                          type="text"
                          required
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          className="pl-3 block w-full border-gray-300 rounded-sm h-9 border bg-white focus:border-blue-400 hover:cursor-pointer hover:border-gray-400"
                        />
                        <label className="block text-sm font-medium text-gray-700">
                          Due Date
                        </label>
                        <input
                          type="date"
                          required
                          value={newDueDate.split("T")[0]}
                          onChange={(e) => setNewDueDate(e.target.value)}
                          className="block w-full pl-3 border-gray-300 rounded-sm h-9 border bg-white focus:border-blue-400 pr-2 hover:cursor-pointer hover:border-gray-400"
                        />
                        <label className="block text-sm font-medium text-gray-700">
                          Labels
                        </label>
                        <Select
                          defaultValue={formatSelectData(selectedLabels)}
                          options={labels}
                          onChange={setNewLabels}
                          isMulti
                          menuPortalTarget={document.body}
                          styles={{
                            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          }}
                        />
                        <div className="py-3 sm:flex sm:flex-row-reverse ">
                          <input
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-3 w-auto text-sm"
                            value="Update"
                          />

                          <button
                            type="button"
                            className=" inline-flex  justify-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-0 ml-3 w-auto text-sm"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditTodoItem;
