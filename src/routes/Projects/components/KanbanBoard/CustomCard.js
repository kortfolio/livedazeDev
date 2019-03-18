import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

import Board, { Tag } from "react-trello";
import "moment-timezone";
import "moment-duration-format";
import { Grid } from "@material-ui/core";

import Icon from "@mdi/react";
import { mdiFormatListChecks } from "@mdi/js";
import { mdiCalendarCheckOutline } from "@mdi/js";
import { mdiFormatListCheckbox } from "@mdi/js";
import { Fab } from "@material-ui/core";
import data from "./data.json";
import { Spring } from "react-spring/renderprops";
import { mdiClose } from "@mdi/js";

export const CustomCard = props => {
  return (
    <div>
      <header>
        {/* Card Styling */}
        <div
          style={{
            fontSize: 12,
            color: "white",
            borderRadius: 6,
            background:
              "linear-gradient(315deg, rgb(249, 209, 183) 0%, rgb(248, 148, 164) 74%)",            
          }}
        >
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            style={{
              color: "white",
              "&:hover": {
                color: "#424770"
              },
              "&$checked": {
                color: "#8f6ed5"
              }
            }}
          />
          {props.name}
          {props.description}
        </div>
        <div style={{ fontSize: 11, color: "white" }}>{props.dueOn}</div>
      </header>

      {/* Subtitle Styling */}
      <div style={{ fontSize: 12, color: "#BD3B36"}}>
        <div style={{ color: "#4C4C4C", fontWeight: "bold" }}>
          {props.subTitle}
        </div>

        {/* Body Styling */}

        <div style={{ padding: "0px 0px", border:"none" }}>
          {/* <i>Placeholder in props.body</i> */}
          <i>{props.body}</i>
        </div>
        <div
          style={{
            marginTop: 0,
            textAlign: "center",
            color: props.cardColor,
            fontSize: 15,
            fontWeight: "bold"
          }}
        >
          {props.escalationText}
        </div>
        {props.tags && (
          <div
            style={{
              borderTop: "1px solid #eee",
              paddingTop: 6,
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            {props.tags.map(tag => (
              <Tag key={tag.title} {...tag} tagStyle={props.tagStyle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
