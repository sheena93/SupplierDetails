import React from "react";
import { Grid } from "@c2fo/components";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

type PriorityProps = {
  priority: number;
};

const renderPriorityIcons = (priority: number) => {
  var priorityElements = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= priority) priorityElements.push(<StarIcon color="disabled"/>);
    else priorityElements.push(<StarBorderIcon color="disabled"/>);
  }
  return priorityElements;
};

export const PriorityComponent: React.FC<PriorityProps> = ({ priority }) => {
   return <Grid>{renderPriorityIcons(priority)}</Grid>;
};
