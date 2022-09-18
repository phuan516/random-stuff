import React from "react";
import Link from "next/link";

const SideBarIcon = ({ icon, text, link }) => (
  <Link href={link}>
    <div className="side-bar-icon group">
      {icon}
      <span className="side-bar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Link>
);

export default SideBarIcon;
