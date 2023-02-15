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
    description: "Expand your reach and find new clients.",
    icon: "KeyFeature/editing.svg",
  },
  {
    title: "Showcase expertise",
    description: "Showcase Your Expertise And Work Through Our Platform.",
    icon: "KeyFeature/speed.svg",
  },
  {
    title: "Expand your business",
    description: "Make Connections And Expand Your Business To New Horizons.",
    icon: "KeyFeature/vector.svg",
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
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
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
        Join carigaar and stop worrying about managing your clients
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
