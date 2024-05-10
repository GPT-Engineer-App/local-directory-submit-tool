import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const SubmitForm = () => {
  return (
    <Box p={5}>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Business Name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Address</FormLabel>
          <Input placeholder="Business Address" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input placeholder="Business Phone Number" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Hours of Operation</FormLabel>
          <Input placeholder="Business Hours" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Products and Services</FormLabel>
          <Input placeholder="Products/Services Offered" />
        </FormControl>
        <FormControl>
          <FormLabel>Photos, Videos, and Other Media</FormLabel>
          <Input type="file" multiple />
        </FormControl>
        <Button colorScheme="blue" mt={4}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default SubmitForm;
