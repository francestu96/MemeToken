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
                        <VStack gap="0">
                            <Text fontSize="5xl" fontFamily="CustomFont" fontWeight="900" color="gold" mb="-7" textShadow="-4px 4px 0 #000">the</Text>
                            <Text fontSize="5xl" fontFamily="CustomFont" fontWeight="900" color="gold" textShadow="-4px 4px 0 #000">Simpsols</Text>
                        </VStack>
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
                        <VStack gap="0">
                            <Text fontSize="2xl" fontFamily="CustomFont" fontWeight="900" color="gold" mb="-3" textShadow="-4px 4px 0 #000">the</Text>
                            <Text fontSize="2xl" fontFamily="CustomFont" fontWeight="900" color="gold" textShadow="-4px 4px 0 #000">Simpsols</Text>
                        </VStack>
                    </LinkOverlay>
                </LinkBox>
                <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon/>} onClick={onToggle}/>
            </Flex>

            <Center mb="12">
                <VStack width={["95%", "90%"]} alignItems="center" gap="0">
                    <ChakraBox className="animated-div" animate={textAnimation} opacity="0" display="flex" justifyContent="center">
                        <Image width={["90%", "45%"]} src="hero.png" alt="The Simpsols"></Image>
                    </ChakraBox>
                    <ChakraBox className="animated-div" animate={textAnimation} transition={{ delay: "0.5"}} opacity="0" display="flex" justifyContent="center">
                        <VStack width={["90%", "90%"]} alignItems="center" color="white" backgroundColor="rgb(50,50,50,0.8)" borderWidth="thin" borderColor="gray.700" borderRadius="2xl" p="5">
                            {
                                AppConfig.tokenAddress ? (
                                    <VStack fontWeight="900">
                                        <Text fontSize={["lg", "xl", "2xl"]} fontFamily="CustomFont" color="main">CA</Text>
                                        <Text fontSize={["2xs", "xs", "sm", "md"]} color="main">{ AppConfig.tokenAddress }</Text>
                                    </VStack>
                                ) : (
                                        <HStack>
                                            <Text fontSize={["lg", "xl", "2xl"]} fontFamily="CustomFont" color="main">Launch on</Text>
                                            <Text fontSize={["lg", "xl", "2xl"]} fontFamily="CustomFont" color="main">{ AppConfig.launchUTC }</Text>
                                            <Text fontSize={["lg", "xl", "2xl"]} fontFamily="CustomFont" color="main">UTC</Text>
                                        </HStack>
                                    )
                                }
                            <Text fontWeight={["200", "200", "400"]} textAlign="center"><b>The Simpsols</b>: the best low cost airline now also in <b>Solana Skies</b>! Buckle up and enjoy the journey to the highest skies. Your safety is our priority!</Text>
                            <Link mt="3" display="flex" justifyContent="center" href={AppConfig.telegramURL} target="_blank">
                                <Button backgroundColor="main" fontSize={["md", "lg", "xl"]} borderRadius="xl" colorScheme='yellow' fontFamily="CustomFont" size="lg">JOIN THE COMMUNITY</Button>
                            </Link>
                        </VStack>
                    </ChakraBox>
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
