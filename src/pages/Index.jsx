import { Container, Text, VStack, Heading, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const directories = ["123local", "2findlocal", "8coupons", "ABLocal", "Amazon Alexa", "AmericanTowns.com", "Apple", "AroundMe", "Banks.com v2", "Better Business Bureau – Feed", "Bing", "Brownbook.net", "Central Index US", "ChamberofCommerce.com", "Citysearch", "CitySquares", "Cylex", "D&B Database", "DexKnows", "DoorDash", "eLocal", "EZlocal", "Facebook", "Find Open", "Foursquare", "GoLocal247", "Google Business Profile", "HERE", "HolidayCheck", "HostMe", "HotFrog", "iBegin", "iGlobal", "Insider Pages", "Instacart", "Instagram", "Local.com v2", "LocalDatabase", "LocalPages", "LocalStack", "MapQuest", "Mapstr", "MerchantCircle", "My Local Services", "n49", "Navmii", "NDrive", "Nextdoor", "Opendi", "Pitney Bowes", "Pointcom", "Postmates", "Property Capsule", "RetirementPlanning.net", "SafeGraph", "ShowMeLocal", "Snapchat", "Soleo", "Superpages", "tellows", "TomTom", "Top Rated Local", "TripAdvisor", "Tupalo", "Uber", "Uber Eats", "USCity.net", "Waze", "Where To?", "WiserAdvisor", "Yahoo!", "Yalwa", "Yandex", "YaSabe", "YellowMoxie", "YellowPageCity.com", "YellowPagesDirectory", "Yelp", "YP.com"];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Local Business Directory Listings Tool
        </Heading>
        <Link to="/submit" style={{ marginTop: "20px", textDecoration: "underline" }}>
          Submit your business info
        </Link>
        <Text fontSize="lg">Submit your business information to the following directories:</Text>
        <Box overflowY="auto" maxH="500px" w="100%" p={5} border="1px" borderColor="gray.200" borderRadius="md">
          <List spacing={3}>
            {directories.map((directory, index) => (
              <ListItem key={index}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {directory}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
