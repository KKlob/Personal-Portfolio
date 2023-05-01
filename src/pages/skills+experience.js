// import styles from '../styles/skills+experience.module.css';
import Skills from '../components/skills';
import Experience from '../components/experience';
import { CardBody } from '@chakra-ui/react';

export default function SkillsExperience () {
    return (
        <CardBody
      sx={{ "::-webkit-scrollbar": 
            { display: "block", width: "5px"},
            "::-webkit-scrollbar-thumb":
              { 
                background: "black",
                borderRadius: "5px",
            } 
          }}
    >
      <Skills />
      <Experience />
    </CardBody>
    )
}