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

export default function CoreFeature() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Looking for Carigaar?</Title>
            <Text color="dimmed" mt="md">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={<Image src="/core-feature/secure.svg" alt="icon" />}
            >
              <List.Item>
                <b>Find Affordable And High Quality Services For Your Needs.</b>
              </List.Item>
              <List.Item>
                <b>Browse Through Our Catalogue Of Carigaars And Services.</b>
              </List.Item>
              <List.Item>
                <b>
                  Compare Prices, Pictures, And Services To Find The Right Fit
                  For You.
                </b>
              </List.Item>
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
