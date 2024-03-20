import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Table, Thead, Tbody, Tr, Th, Td, Select, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";

const pastActions = [
  {
    id: 1,
    action: "Launch new product line",
    retailersAcquired: 50,
    ordersPlaced: 1000,
  },
  {
    id: 2,
    action: "Influencer marketing campaign",
    retailersAcquired: 75,
    ordersPlaced: 1500,
  },
  {
    id: 3,
    action: "Offer retailer discounts",
    retailersAcquired: 100,
    ordersPlaced: 2000,
  },
];

const futureActions = ["Expand to new markets", "Improve product packaging", "Increase social media presence", "Attend trade shows"];

const Index = () => {
  const [selectedAction, setSelectedAction] = useState("");

  const handleActionChange = (e) => {
    setSelectedAction(e.target.value);
  };

  const handleActionSubmit = () => {
    // TODO: Implement logic to handle selected action
    alert(`Selected action: ${selectedAction}`);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Skincare Brand Experimentation Platform
      </Heading>

      <HStack spacing={8} alignItems="flex-start">
        <VStack spacing={4} alignItems="stretch" flex={1}>
          <Heading as="h2" size="lg">
            Past Actions
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Action</Th>
                <Th isNumeric>Retailers Acquired</Th>
                <Th isNumeric>Orders Placed</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pastActions.map((action) => (
                <Tr key={action.id}>
                  <Td>{action.action}</Td>
                  <Td isNumeric>{action.retailersAcquired}</Td>
                  <Td isNumeric>{action.ordersPlaced}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>

        <VStack spacing={4} alignItems="stretch" flex={1}>
          <Heading as="h2" size="lg">
            Select Future Action
          </Heading>
          <Select placeholder="Select an action" value={selectedAction} onChange={handleActionChange}>
            {futureActions.map((action, index) => (
              <option key={index} value={action}>
                {action}
              </option>
            ))}
          </Select>
          <Button colorScheme="blue" onClick={handleActionSubmit}>
            Submit
          </Button>
        </VStack>
      </HStack>

      <VStack spacing={8} mt={12}>
        <Heading as="h2" size="lg">
          Key Metrics
        </Heading>
        <HStack spacing={8}>
          <Stat>
            <StatLabel>Total Retailers Acquired</StatLabel>
            <StatNumber>225</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              22.36%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Total Marketplace Orders</StatLabel>
            <StatNumber>4,500</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              15.89%
            </StatHelpText>
          </Stat>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
