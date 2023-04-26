import styles from "../styles/index.module.css";
import {
  Grid,
  GridItem,
} from "@chakra-ui/react";

import Greeting from '../components/greeting';
import AboutMe from '../components/about_me';

export default function Home() {
  return (
    <Grid templateColumns="repeat(1, 1fr)">
      <GridItem w="80%" justifySelf="center">
        <Greeting />
        <AboutMe />
      </GridItem>
    </Grid>
  );
}
