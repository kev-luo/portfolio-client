import React from "react";
import { Grid, Container } from "@material-ui/core";

import Stack from "./Stack";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <Container id="portfolio">
      <Stack />
      <Grid wrap container spacing={0} justify="center">
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
        <Grid item lg={3}>
          <ProjectCard />
        </Grid>
      </Grid>
    </Container>
  );
}
