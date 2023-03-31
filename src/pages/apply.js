import withNavbarContainer from "@/components/Nav";
import SEO from "@/components/Seo";
import {
  Container,
  createStyles,
  Text,
  Select,
  Box,
  TextInput,
  Group,
  Button,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    textAlign: "center",
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
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      details: "",
      categories: 0,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://carigaar.ca/api/category/").then((res) => {
      const d = res.data.map((item) => ({
        label: item.name,
        value: item.id,
      }));
      setCategories(d);
    });
  }, []);
  return (
    <Container className={classes.wrapper}>
      <SEO title="About carigaar" />
      <Text className={classes.title}>
        Find a CARIGAAR and get your work done
      </Text>
      <Box maw={600} mx="auto">
        <form
          onSubmit={form.onSubmit((values) => {
            axios
              .post("https://carigaar.ca/api/typo-form/", values)
              .then((response) => console.log(response))
              .catch((error) => console.log(error));
            form.reset();
          })}
        >
          <Select
            label=" What do you need done?"
            placeholder="Pick one"
            searchable
            data={categories}
            {...form.getInputProps("categories")}
          />
          <TextInput
            withAsterisk
            label="Name"
            placeholder="John Doe"
            {...form.getInputProps("name")}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            label="Phone"
            placeholder="+188888888"
            {...form.getInputProps("phone")}
          />
          <TextInput
            withAsterisk
            label="Address"
            placeholder="your address"
            {...form.getInputProps("address")}
          />
          <TextInput
            withAsterisk
            label="Details"
            placeholder="Details about the service"
            {...form.getInputProps("details")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Container>
  );
}

export default withNavbarContainer(AboutUs);
