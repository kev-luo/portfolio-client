import React from "react";
import { useQuery } from '@apollo/client';
import { Grid, Container } from "@material-ui/core";

import Stack from "./Stack";
import ProjectCard from "./ProjectCard";
import { FETCH_PROJECTS_QUERY } from '../utils/graphql';

export default function Portfolio() {

  const { loading, data } = useQuery(FETCH_PROJECTS_QUERY);

  return (
    <Container id="portfolio">
      <Stack />
      <Grid wrap container spacing={2} justify="center">
        {loading || (
          data.getProjects.map(project => {
            return (
              <Grid item lg={4} key={project.id}>
                <ProjectCard {...project}/>
              </Grid>
            )
          })
        )}
      </Grid>
    </Container>
  );
}
