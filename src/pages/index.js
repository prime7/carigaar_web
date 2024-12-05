import React from "react";
import { 
  Container, 
  SimpleGrid, 
  Card, 
  Title, 
  Text, 
  Button, 
  Group, 
  Box 
} from "@mantine/core";
import withNavbarContainer from "@/components/Nav";
import SEO from "@/components/Seo";
import Link from "next/link";
import ContactUs from "@/section/Contact";

function Services() {
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

  return (
    <Container size="lg" py="xl">
      <SEO />
      
      <Box ta="center" mb="xl">
        <Title 
          order={1} 
          mb="md" 
          style={{ 
            fontWeight: 800, 
            color: '#2c3e50' 
          }}
        >
          Get All Your Work Done by a Carigaar
        </Title>
        
        <Text 
          c="dimmed" 
          size="lg" 
          mx="auto" 
          mb="xl"
          style={{ 
            maxWidth: 600, 
            lineHeight: 1.6 
          }}
        >
          A Carigaar is a skilled craftsman who brings expertise and precision 
          to complete your tasks with professional finesse.
        </Text>
      </Box>

      <Title 
        order={2} 
        ta="center" 
        mb="xl"
        style={{ 
          fontWeight: 700, 
          color: '#2c3e50' 
        }}
      >
        Our Services
      </Title>

      <SimpleGrid 
        cols={3} 
        spacing="lg"
      >
        {serviceList.map((service) => (
          <Card 
            key={service}
            shadow="sm" 
            radius="md" 
            withBorder 
            padding="lg"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              height: '100%',
            }}
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: 'md',
            }}
          >
            <Text 
              fw={600} 
              ta="center"
              style={{ 
                color: '#2c3e50', 
                width: '100%' 
              }}
            >
              {service}
            </Text>
          </Card>
        ))}
      </SimpleGrid>

      <Group position="center" mt="xl">
        <Link href="/apply" style={{ textDecoration: 'none' }}>
          <Button 
            variant="gradient" 
            gradient={{ from: '#2c3e50', to: '#3498db', deg: 45 }}
            size="lg"
            radius="md"
          >
            Order / Book Now
          </Button>
        </Link>
      </Group>
      <Box mt="xl">
        <ContactUs />
      </Box>
    </Container>
  );
}

export default withNavbarContainer(Services);