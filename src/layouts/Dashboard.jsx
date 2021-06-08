import React from 'react'
import LeftPanel from './LeftPanel'

import { Grid } from "semantic-ui-react";
import Detail from './Detail';


export default function Dashboard() {
    return (
        <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <LeftPanel/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Detail/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
}