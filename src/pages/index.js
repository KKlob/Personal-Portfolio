// import styles from "../styles/index.module.css";
import { Card, CardBody } from "@chakra-ui/react";
import AboutMe from '../components/about_me';

export default function Home() {
  return (
    <CardBody>
      <AboutMe />
    </CardBody>
  );
}
