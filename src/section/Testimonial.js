import {
  Container,
  createStyles,
  Grid,
  Paper,
  Rating,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
    marginBottom: theme.spacing.xl,
  },
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xs,
    paddingLeft: theme.spacing.xs * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.pink[6],
        theme.colors.orange[6]
      ),
    },
  },
  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },
}));

const data = [
  {
    id: 1,
    title: "Quick Task",
    description:
      "I will be using for my small business. When Raj explained me about Carigaar, I felt it can be a good option for reaching and communicating with my potential customers, as my posts on fb marketplace has very few replies now-a-days. After using Carigaar, I think I found the perfect app.",
    name: "Sammy",
    designation: "Surrey BC",
    review: 4,
  },
  {
    id: 2,
    title: "Fast Cleaning",
    description:
      "Raj reached me through fb marketplace and requested for a free trial. As they released the app and need users for feedback. I am using it currently and will recommend others to start listing their businesses with Carigaar.",
    name: "Yuvi",
    designation: "Surrey BC",
    review: 5,
  },
  {
    id: 3,
    title: "Painting",
    description:
      "I was using fb marketplace to  post about my business services, don’t have much knowledge about advertising. Did few paid campaigns on fb, but not get enough customers. But when Raj reached me and told me about Carigaar. I thought of trying Carigaar app. Its very simple, very easy to use and also very effective. Thank you Raj & Carigaar team. ",
    name: "Sarah",
    designation: "Surrey, BC",
    review: 5,
  },
  {
    id: 4,
    title: "Accounting & Tax",
    description:
      "I was using marketplace for getting new clients. But from last few months it’s been very hard to get clients in marketplace, as posts are getting buried very soon. But when heard about Carigaar, I wasn’t sure at the beginning. Then after few days, as Raj was following up regularly,  thought of trying the app, downloaded and had a wonderful experience. Got connected with many clients. Thanks, Raj, for helping me.",
    name: "Anhita",
    designation: "Surrey, BC",
    review: 4,
  },
];

export default function Testimonial() {
  const { classes } = useStyles();
  return (
    <section>
      <Container size="lg">
        <Title order={2} className={classes.title} align="center" mt="sm">
          What users think
        </Title>
        <Grid>
          {data.map((item) => (
            <Grid.Col key={item.id} md={6} lg={3}>
              <Paper withBorder radius="md" className={classes.card}>
                <Rating defaultValue={item.review} readOnly />
                <Text weight={500} size="lg" mt="sm">
                  {item.title}
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  {item.description}
                </Text>
                <Text size="lg" mt="sm">
                  {item.name}
                </Text>
                <Text size="lg" mt="sm" className={classes.highlight}>
                  {item.designation}
                </Text>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
