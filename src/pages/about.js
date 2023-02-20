import withNavbarContainer from "@/components/Nav";
import SEO from "@/components/Seo";
import { Container, createStyles, Text } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    textAlign: "center",
    fontStyle: "italic",
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },
}));
function AboutUs() {
  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper}>
      <SEO title="About carigaar" />
      <Text className={classes.title}>
        MeetQuoteShack Inc, is a tech startup from Vancouver, BC, Canada.
      </Text>
      <Text>
        The aim of our tech startup is bringing new technologies for small
        business owners at the most affordable price, help them to grow
        super-fast and compete with big business houses. We did a survey of 500
        small businesses, surprised to see even after availability of so many
        marketing web apps/platforms in market, the small businesses are still
        struggling. Why? We dig deep inside to know the actual reason. As per
        our survey of 500 small business, more than 63% of small businesses fail
        in ads of all kinds. The biggest problem for small businesses, they
        can’t afford a huge budget or bear a continual or recurring expense of
        marketing. They end up spending too much money on sponsored ads, on SEO,
        or creating fancy website, in hope of getting positive ROI, but end up
        with smaller number of conversions. Just wasting valuable time and
        money. So according to our market analysis, this is the biggest problem
        to solve, and our app CARIGAAR can be the solution for all small
        business owners.
      </Text>
      <Text>
        Carigaar idea came up during university time while doing a project on
        microeconomics related to small businesses. But the implementation came
        late, we started developing Carigaar from early 2022 and released our
        test up in April 2022; but many technical issues came up, so we pulled
        back. And again, released our MVP in July end, by end of 2022 we signed
        up 1100 small businesses from various sectors. Carigaar will help small
        business owners to promote and reach their potential customers for FREE.
        Businesses using Carigaar app, will no need to do sponsored ads, no SEO,
        no need to hire any marketing peoples and no website. Very simple, easy
        to use and most affordable. The app will help small businessowners to
        list their business, showcase their skills, promote their
        services/products & reach potential customers. All for FREE.
      </Text>
      <Text>
        We have a team mixed of young and experienced. Also, very well balanced
        with knowledge in all sectors that creates an advantage in doing any
        kind of work. Our team consists of two super very skillful techies, one
        crazy finance guy and two very smart digital marketing folks.
      </Text>
    </Container>
  );
}

export default withNavbarContainer(AboutUs);
