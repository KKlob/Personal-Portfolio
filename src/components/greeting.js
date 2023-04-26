import styles from '../styles/greeting.module.css';
import {
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    Text
} from '@chakra-ui/react';

export default function Greeting () {
    return (
        <Card variant="elevated" direction="row" className={styles.mainCard}>
          <Image
            className={styles.profilePic}
            objectFit="cover"
            src="/images/profilePic.jpg"
            alt="Profile Pic"
          />
          <Stack>
            <CardBody>
              <Heading>
                Hey There!
              </Heading>
              <Text>Welcome to my personal site!</Text>
            </CardBody>
          </Stack>
        </Card>
    )
}