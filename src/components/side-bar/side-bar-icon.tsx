import React from "react";
import Link from "next/link";

const SideBarIcon = ({ icon, link }) => (
  <Link href={link}>
    <div className="side-bar-icon">{icon}</div>
  </Link>
);

export default SideBarIcon;
