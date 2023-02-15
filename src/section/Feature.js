import {
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import Image from "next/image";

export const MOCKDATA = [
  {
    icon: "/feature/chat.svg",
    title: "Smart Features",
    description:
      "Small businesses now no need of sponsored ads, SEO, or any marketing guy. No need to spend money on marketing. Carigaar app will be the complete package for small business owners. Our algorithms will work for the business owners to connect & match with potential customers.",
  },
  {
    icon: "/feature/cloud.svg",
    title: "Fast Performance",
    description:
      "Carigaar app will help to find/reach potential customers in fastest way in their locality without wasting valuable time & money.",
  },
  {
    icon: "/feature/design.svg",
    title: "Unlimited Content",
    description:
      "Carigaar or the small businesses owners can create multiple listings. That helps to run multiple services from same dashboard.",
  },
  {
    icon: "/feature/setting.svg",
    title: "Unlimited Customization",
    description:
      "No website requirement for small businesses, on Carigaar they can just create business profile & launch, which will show their past works or products to potential customers.",
  },
  {
    icon: "/feature/smart.svg",
    title: "Boost Productivity",
    description:
      "Our upcoming video ad features will help businesses to promote their services or product. Also, we have token system, get monthly token subscription with unlimited boosting.",
  },
  {
    icon: "/feature/winner.svg",
    title: "Customer Support",
    description:
      "Our customer review system will help businesses and customers, both to understand each other. Customers will be able to know the quality & rating of the product or services. And businesses will be able to know their inefficient or worthless services or product, which can help them to become hyperefficient and extra productive.",
  },
];

export function Feature({ icon, title, description }) {
  const theme = useMantineTheme();
  return (
    <div>
      <Image src={icon} width={50} height={50} alt="Icon" />
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

export default function FeaturesGrid({
  description = "QUALITY FEATURES",
  title = "Meet exciting feature of app",
  data = MOCKDATA,
}) {
  const { classes, theme } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
