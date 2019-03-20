import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

import Board, { Tag } from "react-trello";
import "moment-timezone";
import "moment-duration-format";
import { Grid } from "@material-ui/core";

import Icon from "@mdi/react";
import { mdiFormatListChecks, mdiCheckboxMarkedCircle } from "@mdi/js";
import { mdiCalendarCheckOutline } from "@mdi/js";
import { mdiFormatListCheckbox } from "@mdi/js";
import { Fab } from "@material-ui/core";
import data from "./data.json";
import { Spring } from "react-spring/renderprops";
import { mdiClose } from "@mdi/js";
import { CustomCard } from "./CustomCard.js";

class NewCard extends React.Component {
  updateField = (field, evt) => {
    this.setState({ [field]: evt.target.value });
  };

  handleAdd = () => {
    console.log("[handleAdd function] : ");
    console.log(this.state);
    this.props.onAdd(this.state);
  };

  render() {
    const { onCancel } = this.props;
    const buttonStyle = {
      textDecoration: "none",
      alignSelf: "center",
      LetterSpacing: "0.1rem",
      FontFamily: "isotonic",
      fontSize: "12px",
      borderRadius: "3px",
      maxHeight: "30px",
      PaddingLeft: "10px",

      paddingRight: "10px",
      background:
        "linear-gradient(315deg, rgb(249, 209, 183) 0%, rgb(248, 148, 164) 74%)",
      "&:hover:not($disabled):not($error):not($focused):before": {
        borderBottomColor: "#cdcde7",
        borderBottom: "2px solid rgb(205, 205, 231)"
      }
    };

    return (
      // Styling Add new task tab.
      <React.Fragment>
      {/*
          <div style={{ marginBottom: 5 }}>
            <input
              type="text"
              onChange={evt => this.updateField("title", evt)}
              placeholder="Title"
            />
          </div>
          */}

        {/* Styling TextBox */}
        <div style={{ marginBottom: 5 }}>
          <textarea
            type="textArea"
            onChange={evt => this.updateField("description", evt)}
            placeholder="Description"
            style={{
              borderRadius: 6,
              position: "relative",
              border: "1px solid rgb(206, 212, 218)",
              fontSize: 12,
              width: "auto",
              width: "100%",
              color: "#6b7b93",
              padding: 5,
              minHeight: 54,
              resize: "none"
            }}
          />
        </div>

        {/* Styling Buttons */}
        <Grid container spacing={8}>
          <Grid item>
            <Fab
              style={buttonStyle}
              variant="extended"
              size="small"
              color="primary"
              aria-label="Add Task"
              className="btnMargin"
              onClick={this.handleAdd}
            >
              Add Task
            </Fab>
          </Grid>
          <Grid item>
            <Icon
              path={mdiClose}
              onClick={onCancel}
              color="#rgb(107, 123, 147)"
              size={1}
              cursor="pointer"
            />
          </Grid>
        </Grid>
        </React.Fragment>
    );
  }
}
const AddNewCardTab = props => {
  console.log({ props });
  const moment = require("moment");
  const today = moment(new Date()).format("LL");

  return (
    <Grid container spacing={8}>
      <div
        style={{
          fontFamily: "isotonic",
          color: "rgb(248, 148, 164)",
          textTransform: "uppercase",
          fontSize: "12px",
          marginLeft: "10px",
          marginTop: "10px"
        }}
      >
        add a task +
      </div>
    </Grid>
  );
};

const CustomLaneHeader = props => {
  console.log({ props });
  const moment = require("moment");
  const today = moment(new Date()).format("LL");
  const isItPlanner = props.id === "Planner";
  console.log("*************************");
  console.log(props.id);
  console.log(isItPlanner);
  console.log("*************************");

  return (
    <Grid
      container
      spacing={8}
      alignItems="center"
      justify="center"
      alignContent="center"
    >
      {isItPlanner ? (
        <React.Fragment>
          <Grid item>
            <Icon
              path={mdiFormatListCheckbox}
              color="rgb(255, 199, 208)"
              size={1.2}
            />
          </Grid>

          <Grid item>
            <div
              style={{
                fontFamily: "isotonicBold",
                color: "rgb(249, 115, 137)",
                textTransform: "uppercase",
                fontSize: 20
              }}
            >
              {props.title}
            </div>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid item>
            <Icon
              path={mdiCheckboxMarkedCircle}
              color="rgb(116, 228, 162)"
              size={1.2}
            />
          </Grid>

          <Grid item>
            <div className="PostponeHeader">{props.title}</div>
          </Grid>
        </React.Fragment>
      )}

      <p
        style={{
          color: "#6b7b93",
          textTransform: "uppercase",
          verticalAlign: "super",
          fontSize: "12px",
          marginLeft: "10px"
        }}
      >
        {today}
      </p>
    </Grid>
  );
};

export function KanbanBoard() {
  return (
    <Board
      data={data}
      style={{ backgroundColor: "#fafafa", padding: 0, borderBottom: 0 }}
      customLaneHeader={<CustomLaneHeader />}
      addCardLink={<AddNewCardTab />}
      newCardTemplate={<NewCard />}
      draggable
      editable
      customCardLayout
    >
      <CustomCard />
    </Board>
  );
}
