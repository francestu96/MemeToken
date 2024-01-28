import { Center, VStack, Text, Link, Image, Stack, SimpleGrid, chakra, shouldForwardProp, Box } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion';
import { useRef } from "react";
import CountUp from 'react-countup';
import AppConfig from '../../app.config'

const Tokenomics = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })
    
    return (
        <VStack width="100%" gap="0">
            <Center id="tokenomics" py="20" backgroundColor="gray.900" backgroundImage="/tokenomics-bg.png" backgroundPosition="center" backgroundSize="cover" width="full">
                <VStack gap="10" fontSize="2xl" width={["90%", "80%", "70%"]}>
                    <Text fontSize="4xl" fontFamily="Cooper Black" px="10">TOKENOMICS*</Text>
                    <Stack ref={ref} direction={["column", "row"]} alignItems="center" gap="20" >
                        <SimpleGrid columns={2}>
                            <ChakraBox animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut", delay: "0.5" }} opacity="0">
                                <VStack borderBottom="1px solid #F26722" borderRight="1px solid #F26722" pr="10" pb="10">
                                    <Text fontFamily="Cooper Black" color="main" fontSize={["xl", "3xl"]}><CountUp useEasing={false} end={100} duration={5} start={50} suffix=" M"/></Text>
                                    <Text color="gray.500" fontWeight="bold" fontSize="lg">Supply</Text>
                                </VStack>
                            </ChakraBox>
                            <ChakraBox animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut" }} opacity="0">
                                <VStack borderBottom="1px solid #F26722" pl="10" pb="10">
                                    <Text fontFamily="Cooper Black" color="main" fontSize={["xl", "3xl"]}>BURNT</Text>
                                    <Text color="gray.500" fontWeight="bold" fontSize="lg">Liquidity</Text>
                                </VStack>
                            </ChakraBox>
                            <ChakraBox animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut", delay: "0.6"}} opacity="0">
                                <VStack borderRight="1px solid #F26722" pr="10" pt="10">
                                    <Text fontFamily="Cooper Black" color="main" fontSize={["xl", "3xl"]}>REVOKED</Text>
                                    <Text color="gray.500" fontWeight="bold" fontSize="lg">Contract Mint/Ownership</Text>
                                </VStack>
                            </ChakraBox>
                            <ChakraBox animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut", delay: "0.8" }} opacity="0">
                                <VStack pl="10" pt="10">
                                    <Text fontFamily="Cooper Black" color="main" fontSize={["xl", "3xl"]}>0/0</Text>
                                    <Text color="gray.500" fontWeight="bold" fontSize="lg">Fees</Text>
                                </VStack>
                            </ChakraBox>
                        </SimpleGrid>
                        <Box overflow={["hidden", "hidden", "hidden", "unset"]}>
                            <ChakraBox animate={isInView ? { translateX: [200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut" }} opacity="0">
                                <Image src={"tokenomics_img.svg"} height={96} alt="Tokenomics logo"/>
                            </ChakraBox>
                        </Box>
                    </Stack>
                    <Stack mt="4" justifyContent="space-around" width="full" direction={["column", "row"]}>
                        <Link href={"https://dexscreener.com/solana/" + (AppConfig.tokenAddress ? AppConfig.tokenAddress : "coming-soon!")} target="_blank">
                            <Image src={"/DEXScreener.png"} height={14} width={48} alt="DEXScreener logo"/>
                        </Link>
                        <Link href={"https://www.dextools.io/app/en/solana/pair-explorer/" + (AppConfig.tokenAddress ? AppConfig.tokenAddress : "coming-soon!")} target="_blank" display="flex" flexWrap="wrap" justifyContent="center">
                            <Image src={"/DEXTools.png"} height={10} width={40} alt="DexTools logo"/>
                        </Link>
                        <Link href={"https://birdeye.so/token/" + (AppConfig.tokenAddress ? AppConfig.tokenAddress : "coming-soon!") + "?chain=solana"} target="_blank" display="flex" flexWrap="wrap" justifyContent="end">
                            <Image src={"/BirdEye.png"} height={10} width={40} alt="BirdEye logo"/>
                        </Link>
                    </Stack>
                </VStack>
            </Center>
            <Text width="100%" textAlign="center" backgroundColor="gray.900" color="gray.500" px="10">*15% of total supply will be hold by us split in 5 different wallets with 3% each: <b>Dev</b>, <b>Treasury</b>, <b>Marketing 1</b>, <b>Marketing 2</b> and <b>Marketing 3</b></Text>

        </VStack>
    );
};

export default Tokenomics;
