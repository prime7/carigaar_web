import { createStyles, Title, Container, Accordion, Text } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("control");

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      backgroundImage: `radial-gradient(${
        theme.colors[theme.primaryColor][6]
      } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
      backgroundRepeat: "no-repeat",
    },

    title: {
      color: theme.white,
      fontSize: 52,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xl * 1.5,
    },

    item: {
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      overflow: "hidden",
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      color: theme.black,

      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },

    icon: {
      ref: icon,
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${
        theme.colors[theme.primaryColor][6]
      } 0%, ${theme.colors[theme.primaryColor][5]} 100%)`,
    },

    itemOpened: {
      [`& .${icon}`]: {
        transform: "rotate(45deg)",
      },
    },

    button: {
      display: "block",
      marginTop: theme.spacing.md,

      "@media (max-width: 755px)": {
        display: "block",
        width: "100%",
      },
    },
  };
});
const faqs = [
  {
    title: "What is Carigaar ?",
    contents: (
      <div>
        Carigaar are small businesses in your locality. Our app will help you to
        connect with a Carigaar, dealing with product or services you are
        searching in your locality. And for Carigaar, the small businesses, this
        app will help you to find potential customers in your locality.
      </div>
    ),
  },
  {
    title: "How can you register as a Carigaar or individual ?",
    contents: (
      <div>
        Carigaar is very simple and easy to use for both an individual and
        Carigaar (businesses). Just takes few minutes to register.
        <li>
          Visit www.carigaar.com or download from Apple app store or Google play
          store.
        </li>
        <li>
          After downloading, open the app & click Sign Up. Type your first name
          then last name.
        </li>
        <li>
          If you are Carigaar (small business owner or skill-trader), then slide
          the CARIGAAR button & hit the next button. Type your business name or
          your full name & click the sign-up button.
        </li>
        <li>If individual, then just click the sign-up button. </li>
        <li>Visit your inbox or email account to confirm the CARIGAAR link.</li>
        <li>
          Return to CARIGAAR app & hit the refresh sign. Click the get started
          button, it will take you to your dashboard.
        </li>
        <li>
          If you are an individual, then just start choosing the service or
          businesses you are searching.
        </li>
        <li>
          But if a Carigaar (business owner or skill-trader) click the human
          sign, then hit contact, type your phone & hit update. Again, click the
          human sign, and hit services button. Click plus (+) sign on menu. Type
          your business sector, select the service you provide from category,
          type the price. Upload photos of your past work & hit create service.
          You successfully listed your business on Carigaar.
        </li>
      </div>
    ),
  },
  {
    title: `How to upload photos in your business post ?`,
    contents: (
      <div>
        After creating account and listing your business, you can upload photos
        of your past work or product photos. You can upload photos in Carigaar
        account from your phone gallery.
      </div>
    ),
  },
  {
    title: `Which businesses can list businesses on Carigaar?`,
    contents: (
      <div>
        Carigaar app is for all kinds of small businesses. Any business from any
        sector can use Carigaar. Skill-trades, retail, manufacturing, services,
        etc, Carigaar app will help any businesses to find potential customers.
        New businesses are also welcomed, as Carigaar is just perfect for them.
      </div>
    ),
  },
  {
    title: "How can you accept a service ?",
    contents: (
      <div>
        Individuals or businesses can contact a Carigaar through the app.
        Potential customers can call, text and email directly from the app and
        reach you instantly. Just list your business with contact details and
        showcase your skills or product photos, let us connect you with
        potential customers.
      </div>
    ),
  },
  {
    title: "How can you get payment?",
    contents: (
      <div>
        We are working on payment service through the platform. But currently we
        don’t have any payment service, so after service Carigaar can collect
        payment in cash from customers.
      </div>
    ),
  },
  {
    title:
      "If issue arises in registering a new account or in sign-in to your current account ? ",
    contents: (
      <div>
        If a Carigaar or an individual unable to sign-in or having problem in
        registering a new account, please contact support@carigaar.com. We will
        help you instantly.
      </div>
    ),
  },
];

export default function Faq() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title align="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue={`${faqs[0].title}`}
          chevronSize={50}
          variant="separated"
          disableChevronRotation
        >
          {faqs.map((item, id) => (
            <Accordion.Item
              className={classes.item}
              value={item.title}
              key={id}
            >
              <Accordion.Control>
                <Text weight="bold">{item.title}</Text>
              </Accordion.Control>
              <Accordion.Panel>{item.contents}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
