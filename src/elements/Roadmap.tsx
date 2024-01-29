import { Center, VStack, Text, Divider, List, ListIcon, ListItem } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import { MdCheckCircle } from 'react-icons/md';

const Roadmap = () => {
    return (
        <Center width="full" id="roadmap" p="10" textColor="gray.700" backdropBlur="10px" backgroundImage="/roadmap-bg.jpg" backgroundPosition="center" backgroundSize="cover" textAlign="center">
          <VStack width="inherit" color="gray.200">
            <Text fontSize="4xl" color="gray.200" fontFamily="CustomFont">ROADMAP</Text>
            <VStack backgroundColor="rgb(50,50,50,0.8)" _hover={{ boxShadow: "0px 0px 10px rgba(255,255,255,0.5);", cursor: "pointer"}} p="10" width={["85%", "80%", "75%", "70%"]} borderWidth="thin" borderColor="gray.700" borderRadius="2xl">
              <Text fontSize={["lg", "xl", "3xl", "4xl"]} fontWeight="500" fontFamily="CustomFont" color="main">
                The community
              </Text>
              <Text>Commence the project with a resilient community that not only shares a common vision but also serves as a vital foundation for collaborative efforts.</Text>
              <List spacing={3} textAlign="start" fontSize="lg">
                    <ListItem>
                        <ListIcon as={ImCross} color='red' />
                        150 Holders
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ImCross} color='red' />
                        $150k Volume
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ImCross} color='red' />
                        $300k Market Cap
                    </ListItem>
                </List>
            </VStack>
            <Center height='25px'>
              <Divider orientation='vertical' borderColor="gray.700"/>
            </Center>
            <VStack backgroundColor="rgb(50,50,50,0.8)" _hover={{ boxShadow: "0px 0px 10px rgba(255,255,255,0.5);", cursor: "pointer"}} p="10" width={["85%", "80%", "75%", "70%"]} borderWidth="thin" borderColor="gray.700" borderRadius="2xl">
              <Text fontSize={["lg", "xl", "3xl", "4xl"]} fontWeight="500" fontFamily="CustomFont" color="main">
                Fighting the jeets
              </Text>
              <Text>Navigating the challenges of fighting the jeets requires strategic planning, resilience, and a united front to effectively address and overcome these obstacles.</Text>
              <List spacing={3} textAlign="start" fontSize="lg">
                    <ListItem>
                        <ListIcon as={ImCross} color='red' />
                        500 Holders
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ImCross} color='red' />
                        $500k Volume
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ImCross} color='red' />
                        $600k Market Cap
                    </ListItem>
                </List>
            </VStack>
            <Center height='25px'>
              <Divider orientation='vertical' borderColor="gray.700"/>
            </Center>
            <VStack backgroundColor="rgb(50,50,50,0.8)" _hover={{ boxShadow: "0px 0px 10px rgba(255,255,255,0.5);", cursor: "pointer"}} p="10" width={["85%", "80%", "75%", "70%"]} borderWidth="thin" borderColor="gray.700" borderRadius="2xl">
              <Text fontSize={["lg", "xl", "3xl", "4xl"]} fontWeight="500" fontFamily="CustomFont" color="main">
                Become the MEME
              </Text>
              <Text>Embrace the potential for becoming the meme, allowing your unique and shareable qualities to resonate with a wide audience and leaving an indelible mark on the digital landscape.</Text>
              <List spacing={3} textAlign="start" fontSize="lg">
                    <ListItem>
                        <ListIcon as={ImCross} color='red' />
                        1000 Holders
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ImCross} color='red' />
                        $1M Volume
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ImCross} color='red' />
                        $2M Market Cap
                    </ListItem>
                </List>
            </VStack>
          </VStack>
        </Center>
      );
};

export default Roadmap;
