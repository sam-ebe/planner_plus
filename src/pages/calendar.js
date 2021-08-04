import React from "react";
import LayoutCard from "../components/LayoutCard";
import TodayIcon from "@material-ui/icons/Today";
import LayoutCalendar from "../components/LayoutCalendar";
function Calendar() {
  return (
    <div className="centerCard">
      <LayoutCard
        icon={<TodayIcon />}
        content={<LayoutCalendar />}
        subtitle="Calendar panel. Visualise the events details here."
      ></LayoutCard>
    </div>
  );
}

export default Calendar;
