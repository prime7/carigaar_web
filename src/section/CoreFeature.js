import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
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

const lists = [
  "stop fighting for the same key words",
  "stop wasting money in SEO",
  "no need to do sponsored ads",
  "no need to hire any marketing peoples",
  "stop wasting money on fancy website",
  "get more views",
  "get connected with potential customers in your locality",
  "simple, easy to use & most affordable",
];
export default function CoreFeature() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Looking for Carigaar?</Title>
            <Text color="dimmed" mt="md">
              Save your time, just download the Carigaar app and get connected
              with businesses in your local area.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              center
              icon={<Image src="/core-feature/secure.svg" alt="icon" />}
            >
              {lists.map((item, idx) => (
                <List.Item key={idx}>
                  <Text fw={600} tt="capitalize">
                    {item}
                  </Text>
                </List.Item>
              ))}
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
            </Group>
          </div>
          <Image
            src="/core-feature/coreFeature.png"
            className={classes.image}
            alt="Core feature"
          />
        </div>
      </Container>
    </div>
  );
}
