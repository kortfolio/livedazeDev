import React from "react";
import { Grid, Card, CardMedia } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Icon from "@mdi/react";
import { mdiCat,mdiFormatListCheckbox } from "@mdi/js";

export class DailyTask extends React.Component {
  render() {
    return (
    
      <form onSubmit={this.handleSubmit}>
        <Card className={classes.card}>
      {console.log("From SleepTime.js classes.card val" + classes)}
      <CardMedia>
            <Grid container justify="center" style={{ height: "100%" }}>
              <Icon path={mdiFire} size={3.5} color="white" />
            </Grid>
      </CardMedia>
      </Card>
        <Grid container spacing={8} alignItems="center" justify="center" alignContent="center">
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
              daily to do
            </div>
          </Grid>
          {/* <FormControlLabelPosition/>
           */}
           
        </Grid>
      </form>
    );
  }
}
