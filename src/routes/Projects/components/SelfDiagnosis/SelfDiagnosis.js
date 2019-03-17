import React from "react";
import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Icon from "@mdi/react";
import { mdiCat } from "@mdi/js";
import SelfDiagnosisForm from "./SelfDiagnosisForm";

export class SelfDiagnosis extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container spacing={8} alignItems="center" justify="center" alignContent="center">
          <Grid item>
            <Icon path={mdiCat} color="#beb0f4" size={1.2} />
          </Grid>
          <Grid item>
            <div className="SelfCheckHeader">Evaluate Your Progress</div>
          </Grid>
        </Grid>
        <Grid item>
          {/* <FormControlLabelPosition/>
           */}
          <SelfDiagnosisForm />
        </Grid>
      </form>
    );
  }
}
