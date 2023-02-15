import { Timeline, Text, Container, createStyles, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
    marginBottom: theme.spacing.xl,
  },
}));

export default function WorkFlow() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Container size="xs">
        <Title order={2} className={classes.title} align="center" mt="sm">
          Carigaar workflow
        </Title>
        <Timeline active={3} bulletSize={25} lineWidth={2} radius="xl">
          <Timeline.Item title="Register as user/carigaar">
            <Text color="dimmed" size="sm">
              Its very easy and simple to register. Just download from Appstore
              or Playstore and register. Start finding the service or product
              you are looking for or if you are business owner sign up as a
              Carigaar and start listing your services or products.
            </Text>
          </Timeline.Item>

          <Timeline.Item title="Find your desired service">
            <Text color="dimmed" size="sm">
              In Carigaar app you can find any kinds of services or product. We
              are only app that cover all types of businesses from every sector
              of the industry.
            </Text>
          </Timeline.Item>

          <Timeline.Item title="Directly connect with carigaar.">
            <Text color="dimmed" size="sm">
              Through Carigaar app you can directly reach to a Carigaar
              (businesses) via email, text, or phone. You can contact from the
              app no need to use any external app or devices.
            </Text>
          </Timeline.Item>

          <Timeline.Item title="Get your work done and relax.">
            <Text color="dimmed" size="sm">
              So no need to worry anymore, just download Carigaar app and find
              your required services. Anytime from anywhere. Match their
              reviews, ratings, performance & prices. Then choose the best
              Carigaar you want. So do not delay, download the Carigaar app and
              help is on his way
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>
    </div>
  );
}
