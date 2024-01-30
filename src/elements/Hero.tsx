import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link, Flex, IconButton, Slide, chakra, VStack, useColorModeValue, useDisclosure, Text, Center, Image, Button, shouldForwardProp, HStack, LinkBox, LinkOverlay, Box } from '@chakra-ui/react';
import NavItem from './NavItem';
import { ISubNav } from './SubNav';
import { motion, isValidMotionProp } from 'framer-motion';
import Logo from './Logo';
import AppConfig from '../../app.config'

const NAV_LINKS: ISubNav[] = [
    { label: "Home", href: "/" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Buy", href: "#buy" },
    {
      label: "Community",
      href: "#",
      children: [
        {
          label: "Telegram",
          subLabel: "Follow us on Telegram",
          href_blank: AppConfig.telegramURL,
          logo: "/telegram.png",
        },
        {
          label: "Twitter",
          subLabel: "Follow us on Twitter",
          href_blank: AppConfig.twitterULR,
          logo: "/twitter.webp",
        }
      ]
    }
];

const Hero = () => {
    const { isOpen, onToggle } = useDisclosure();
    const textAnimation = { translateY: [25, 0], opacity: [0, 1] }
    const transition = { duration: "0", ease: "easeInOut" }

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })

    return (
        <VStack width="100%" backgroundImage="background.jpg" height="100vh" backgroundSize={'cover'} justifyContent="space-between" backgroundPosition="center">
            <Flex align="start" width="100%" justify="space-between" display={['none', 'none', 'flex','flex']} px="40" py="5" alignItems="center">
                <LinkBox>
                    <LinkOverlay href="/">
                        <Text fontSize="5xl" fontFamily="CustomFont" fontWeight="900" color="main">Chow-Chow</Text>
                    </LinkOverlay>
                </LinkBox>
                <HStack gap={'15px'} position="absolute" left="50%" zIndex="10" transform="translate(-50%, 0%)" p="5" borderRadius={"full"} backgroundColor="rgb(50,50,50,0.8)">
                    {NAV_LINKS.map((link) => (
                        <NavItem key={`link-${link.label}`} {...link} />
                    ))}
                </HStack>
            </Flex>
            <Flex align="start" width="100%" justify="space-between" display={['flex', 'flex', 'none','none']} px="10" py="5" alignItems="center">
                <LinkBox>
                    <LinkOverlay href="/">
                        <Text fontSize="3xl" fontFamily="CustomFont" fontWeight="900" color="main">Chow-Chow</Text>
                    </LinkOverlay>
                </LinkBox>
                <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon/>} onClick={onToggle}/>
            </Flex>

            <Center mb="12">
                <VStack width={["95%", "90%"]} alignItems="center" gap="0">
                    <Box className="animated-div" display="flex" justifyContent="center">
                        <Image width={["90%", "45%"]} src="hero.png" alt="Chow-Chow"></Image>
                    </Box>
                    <Box className="animated-div delayed" display="flex" justifyContent="center" opacity="0">
                        <VStack width={["90%", "90%"]} alignItems="center" color="gray.800" backgroundColor="rgb(250,250,250,0.8)" borderWidth="thin" borderColor="gray.700" borderRadius="2xl" p="5">
                            {
                                AppConfig.tokenAddress ? (
                                    <VStack fontWeight="900">
                                        <Text fontSize={["lg", "xl", "2xl"]} fontFamily="CustomFont" color="main">CA</Text>
                                        <Text fontSize={["2xs", "xs", "sm", "md"]} color="main">{ AppConfig.tokenAddress }</Text>
                                    </VStack>
                                ) : (
                                        <HStack>
                                            <Text fontSize={["md", "lg", "2xl"]} fontFamily="CustomFont" color="main">Launch on</Text>
                                            <Text fontSize={["md", "lg", "2xl"]} fontFamily="CustomFont" color="main">{ AppConfig.launchUTC }</Text>
                                            <Text fontSize={["md", "lg", "2xl"]} fontFamily="CustomFont" color="main">UTC</Text>
                                        </HStack>
                                    )
                                }
                            <Text fontWeight={["200", "200", "400"]} textAlign="center">Woof! I'm <b>Chow-Chow</b>, the crypto with the biggest bark and orbit! To the moon? Nah, let's aim for <b>Jupiter and beyond</b>!</Text>
                            <Link mt="3" display="flex" justifyContent="center" href={AppConfig.telegramURL} target="_blank">
                                <Button backgroundColor="main" fontSize={["md", "lg", "xl"]} borderRadius="xl" colorScheme='yellow' fontFamily="CustomFont" size="lg">JOIN THE COMMUNITY</Button>
                            </Link>
                        </VStack>
                    </Box>
                </VStack>
            </Center>

            <Slide in={isOpen} transition={{"enter": {duration: 0.5}, "exit": {duration: 0.5}}}>
                <Flex w='100vw' bgColor={useColorModeValue('white', 'gray.800')} h="100vh" flexDir="column">
                    <Flex justify="flex-end">
                        <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg" icon={<CloseIcon/>} onClick={onToggle}/>
                    </Flex>
                    <VStack gap={'15px'}>
                        {NAV_LINKS.map((link) => (
                            <NavItem key={`link-${link.label}`} {...link} onToggle={onToggle}/>
                        ))}
                    </VStack>
                </Flex>   
            </Slide> 
        </VStack>
    );
};

export default Hero;
