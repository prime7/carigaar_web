import React, { useEffect, useState } from "react";
import { 
  Container, 
  TextInput, 
  Select, 
  Button, 
  Box, 
  Title, 
  Text, 
  Stack, 
  Paper,
  Group
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import withNavbarContainer from "@/components/Nav";
import SEO from "@/components/Seo";

const serviceList = [
  "Moving & Delivery",
  "Plumbing",
  "Painting",
  "Janitorial",
  "Device Repair",
  "Carpenter",
  "Technology",
  "Maintenance",
  "Handyman",
  "Car Repair",
  "Financials",
  "Real Estate",
  "Tiffin Service & Catering",
  "Contractor",
  "Events"
];

function ApplyPage() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      details: "",
      categories: "",
    },

    validate: {
      name: (value) => value.trim().length < 2 ? 'Name must be at least 2 characters' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) => (/^\+?[0-9]{10,14}$/.test(value) ? null : "Invalid phone number"),
      address: (value) => value.trim().length < 5 ? 'Address is required' : null,
      categories: (value) => value ? null : "Please select a service",
    },
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const formattedCategories = serviceList.map((service) => ({
      label: service,
      value: service,
    }));
    setCategories(formattedCategories);
  }, []);

  const handleSubmit = async (values) => {
    try {
      const apiUrl = process.env.NODE_ENV === 'production'
      ? '/.netlify/functions/email'
      : '/api/email';

    const response = await axios.post(apiUrl, values);
      console.log(response);
      form.reset();
      // Consider adding a success notification
    } catch (error) {
      console.error(error);
      // Consider adding an error notification
    }
  };

  return (
    <Container size="sm" py="xl">
      <SEO title="Apply for Carigaar Service" />
      
      <Paper 
        shadow="md" 
        radius="lg" 
        withBorder 
        p="xl"
      >
        <Stack gap="lg" align="stretch">
          <Box ta="center">
            <Title 
              order={1} 
              mb="xs"
              style={{ 
                color: '#2c3e50', 
                fontWeight: 700 
              }}
            >
              Get Your Work Done
            </Title>
            <Text 
              c="dimmed" 
              size="md" 
              mb="lg"
            >
              Fill out the form below and we&apos;ll connect you with the right Carigaar
            </Text>
          </Box>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <Select
                label="Service Needed"
                placeholder="Select a service"
                data={categories}
                searchable
                {...form.getInputProps("categories")}
              />

              <TextInput
                label="Full Name"
                placeholder="Enter your full name"
                withAsterisk
                {...form.getInputProps("name")}
              />

              <TextInput
                label="Email Address"
                placeholder="your@email.com"
                withAsterisk
                {...form.getInputProps("email")}
              />

              <TextInput
                label="Phone Number"
                placeholder="+1 (555) 123-4567"
                withAsterisk
                {...form.getInputProps("phone")}
              />

              <TextInput
                label="Address"
                placeholder="Enter your full address"
                withAsterisk
                {...form.getInputProps("address")}
              />

              <TextInput
                label="Service Details"
                placeholder="Provide specific details about the service you need"
                {...form.getInputProps("details")}
              />

              <Group justify="center" mt="md">
                <Button 
                  type="submit" 
                  variant="gradient"
                  gradient={{ from: '#2c3e50', to: '#3498db', deg: 45 }}
                  size="md"
                >
                  Submit Request
                </Button>
              </Group>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Container>
  );
}

export default withNavbarContainer(ApplyPage);

