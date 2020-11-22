import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { Grid, Container } from "@material-ui/core";

import Stack from "./Stack";
import ProjectCard from "./ProjectCard";
import { FETCH_PROJECTS_QUERY } from '../utils/graphql';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  const { loading, data } = useQuery(FETCH_PROJECTS_QUERY);
  
  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  return (
    <Container id="portfolio">
      <Stack />
      <Grid wrap container spacing={2} justify="center" style={{marginTop: 20}}>
        {isLoading ? (
          <p>Loading Projects</p>
        ) : (
          data.getProjects.map(project => {
            return (
              <Grid item lg={3} key={project.id}>
                <ProjectCard {...project}/>
              </Grid>
            )
          })
        )}
      </Grid>
    </Container>
  );
}
