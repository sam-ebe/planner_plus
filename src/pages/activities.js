import React from "react";
import LayoutCard from "../components/LayoutCard";
import LayoutList from "../components/LayoutList";
import ExtensionIcon from "@material-ui/icons/Extension";
import { activitiesData } from "../data/InfoData";
function Activities() {
  return (
    <div className="centerCard">
      <LayoutCard
        icon={<ExtensionIcon />}
        content={<LayoutList infos={activitiesData} />}
        subtitle="Activities management panel. Add, modify and delete activities here."
      ></LayoutCard>
    </div>
  );
}

export default Activities;
