import { Dots } from "@/components/Dots";
import { createStyles, Title, Text, Button, Container } from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 120,
    paddingBottom: 80,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    "@media (max-width: 755px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },
}));

export default function HeroText() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Let us do{" "}
          <Text component="span" className={classes.highlight} inherit>
            the work
          </Text>{" "}
          for you
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Our mobile platform will help connect you to either the small
            business or clients that you are looking for. Get started today by
            downloading our iOS or Android app!
          </Text>
        </Container>

        <div className={classes.controls}>
          <a href="https://play.google.com/store/apps/details?id=com.carigaar.app">
            <Image
              src="/play.svg"
              width="150"
              height="60"
              alt="Get it on Play store"
              border="0"
              style={{
                marginRight: 20,
              }}
            />
          </a>
          <a href="https://apps.apple.com/ca/app/carigaar/id1589623263">
            <Image
              src="/apple.svg"
              width="150"
              height="60"
              alt="Get it on Apple store"
              border="0"
            />
          </a>
        </div>
      </div>
    </Container>
  );
}
