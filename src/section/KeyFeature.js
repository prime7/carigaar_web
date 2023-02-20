import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
import Image from "next/image";

const mockdata = [
  {
    title: "Better reach",
    description: "stop fighting for the same key words",
    icon: "KeyFeature/editing.svg",
  },
  {
    title: "Showcase expertise",
    description: "stop wasting money in SEO",
    icon: "KeyFeature/speed.svg",
  },
  {
    title: "Expand your business",
    description: "no need to do sponsored ads",
    icon: "KeyFeature/vector.svg",
  },
  {
    title: "Expand your business",
    description: "no need to hire any marketing peoples",
    icon: "KeyFeature/editing.svg",
  },
  {
    title: "Expand your business",
    description: "stop wasting money on fancy website",
    icon: "KeyFeature/speed.svg",
  },
  {
    title: "Expand your business",
    description: "get more views",
    icon: "KeyFeature/vector.svg",
  },
  {
    title: "Expand your business",
    description: "get connected with potential customers in your locality",
    icon: "KeyFeature/editing.svg",
  },
  {
    title: "Expand your business",
    description: "simple, easy to use & most affordable",
    icon: "KeyFeature/speed.svg",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
  content: {
    margin: "auto",
    maxWidth: 600,
  },
  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },
}));

export default function KeyFeature() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <Image
        size={50}
        stroke={2}
        color={theme.fn.primaryColor()}
        src={feature.icon}
        alt="asd"
        width={50}
        height={50}
      />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.description}
      </Text>
      {/* <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text> */}
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Become a Carigaar
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        Are you a carigaar?
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Small business owners just join Carigaar and stop worrying about
        managing your business and clients.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
      <Text color="dimmed" className={classes.content} align="center" mt="md">
        Carigaar will also help small business owners to promote and reach their
        potential customers for FREE. The Carigaar app will also help small
        businessowners to list their business, showcase their skills, promote
        their services/products & reach potential customers. All for FREE.
        <Text component="span" className={classes.highlight} inherit>
          Get started today by downloading our iOS or Android app!
        </Text>{" "}
      </Text>
    </Container>
  );
}
