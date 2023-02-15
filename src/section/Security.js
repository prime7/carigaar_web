import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Background Checks</Title>
            <Text color="dimmed" mt="md">
              In carigaar we maintain our standard by providing high quality
              carigaar by filtering capabilities of carigaars customer service,
              work experience and several layers of background checks.
            </Text>

            <List mt={30} spacing="sm" size="sm">
              <List.Item>
                <b>Register</b> - Carigaars start their journey with us by
                registering with us by their email
              </List.Item>
              <List.Item>
                <b>Business detail</b> - We take carigaars business details
                including several documents and verify locally
              </List.Item>
              <List.Item>
                <b>Background checks</b> - We use certn to do background checks
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Know more
              </Button>
            </Group>
          </div>
          <Image
            src="/paymentThumb.png"
            className={classes.image}
            alt="security image"
          />
        </div>
      </Container>
    </div>
  );
}
