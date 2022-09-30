import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiFillGithub } from "react-icons/ai";
import { TbCircleCheck } from "react-icons/tb";
import { TiWarningOutline } from "react-icons/ti";
import { BiXCircle } from "react-icons/bi";
import useSWR from "swr";

import { fetcher } from "../../lib/fetcher";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const statusIcons = (status: string) => {
  if (status === "operational") {
    return <TbCircleCheck size="18" className="text-green-500 my-auto" />;
  } else if (status === "partial_outage") {
    return <TiWarningOutline size="18" className="text-yellow-500 my-auto" />;
  } else if (status === "major_outage") {
    return <BiXCircle size="18" className="text-red-500 my-auto" />;
  }
};

const GithubStatus = () => {
  const { data: githubStatus } = useSWR(
    "https://www.githubstatus.com/api/v2/summary.json",
    fetcher
  );

  return (
    <Menu as="div">
      <div>
        <Menu.Button className="side-bar-icon">
          {githubStatus?.status.indicator === "none" ? (
            <AiFillGithub size="18" />
          ) : (
            <TiWarningOutline size="18" />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-20 bottom-16 z-10 mt-2 w-56 origin-bottom-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {githubStatus?.components.map((component) => (
              <Menu.Item key={component.id}>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "px-4 py-2 text-sm cursor-default flex flex-row justify-between"
                    )}
                  >
                    <span className="w-4/5">{component.name}</span>
                    {statusIcons(component.status)}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default GithubStatus;
