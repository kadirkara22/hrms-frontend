import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react";
import EmployerList from '../pages/EmployerList';
import JobAdvertList from '../pages/JobAdvertList';
import JobTitleList from '../pages/JobTitleList';
import CandidateList from '../pages/CandidateList';
import StaffList from '../pages/StaffList';

export default function Detail() {
    return (
        <div>
            <Grid>
        <Grid.Row>
          <GridColumn size={10}>
            <StaffList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={10}>
            <EmployerList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={10}>
            <CandidateList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={10}>
            <JobTitleList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={10}>
            <JobAdvertList/>
          </GridColumn>
        </Grid.Row>
      </Grid>
        </div>
    )
}