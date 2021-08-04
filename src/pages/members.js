import React from "react";
import LayoutCard from "../components/LayoutCard";
import GroupIcon from "@material-ui/icons/Group";
import LayoutList from "../components/LayoutList";
import { membersData } from "./../data/InfoData";
function Members() {
  return (
    <div className="centerCard">
      <LayoutCard
        icon={<GroupIcon />}
        content={<LayoutList infos={membersData} />}
        subtitle="Members management panel. Add, modify and delete members here."
      />
    </div>
  );
}

export default Members;
