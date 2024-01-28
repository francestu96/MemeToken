import { Flex, Stack, Text, VStack } from "@chakra-ui/react";
import AppConfig from '../../app.config'

const Buy = () => {
  return (
    <VStack id="buy" width="full">
        <Text fontSize="4xl" fontFamily="Cooper Black" px="10" pt="10">BUY & CHART</Text>
        {
            AppConfig.tokenAddress ? (
                <Stack width="full" pb="10" backgroundColor="gray.800" direction={["column", "row"]} px={["0", "5", "10", "20"]}>
                    <Flex flex="20" height="80vh" alignItems={"center"}>
                        <iframe src={"./jupiter.html#" + AppConfig.tokenAddress} style={{"width": "100%", "height": "600px"}}/>
                    </Flex>
                    <Flex flex="70" width="full" height="80vh" borderRadius={"xl"} transform={"translateZ(0px)"} overflow={"hidden"}>
                        <iframe src={"https://dexscreener.com/solana/" + AppConfig.tokenAddress + "?embed=1&theme=dark&trades=0"} style={{"width": "100%", "height": "inherit"}}></iframe>
                    </Flex>
                </Stack>
            ) : (
                <VStack width="100%">
                    <Text fontSize="xl" color="gray">(waiting for the launch)</Text>
                    <Stack width="full" pb="10" backgroundColor="gray.800" direction={["column", "row"]} px={["0", "5", "10", "20"]}>
                        <Flex flex="70" width="full" height="80vh" borderRadius={"xl"} transform={"translateZ(0px)"} overflow={"hidden"}>
                            <iframe src="https://dexscreener.com/solana/?embed=1&theme=dark" style={{"width": "100%", "height": "inherit"}}></iframe>
                        </Flex>
                    </Stack>
                </VStack>
            )
        }
    </VStack>
  );
};

export default Buy;
