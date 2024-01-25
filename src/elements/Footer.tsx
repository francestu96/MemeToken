import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  HStack,
  Tooltip,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Logo from './Logo';
import Link from 'next/link';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <HStack gap="3">
              <Logo/>
              <HStack alignItems="end">
                    <Text fontSize="2xl" px="1" mb="-1" fontFamily="Cooper Black" fontWeight="900" color="main">Ghost</Text>
                </HStack>
            </HStack>
            <Text fontSize={'sm'}>
              © 2024 Ghost. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Telegram'} href={'https://t.me/Ghost_Token_Portal'}>
                <FaTelegram />
              </SocialButton>
              <SocialButton label={'Twitter'} href={'https://twitter.com/Ghost_Token_Sol'}>
                <FaTwitter />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'https://t.me/Ghost_Token_Portal'}>Telegram</Link>
            <Link href={'https://twitter.com/Ghost_Token_Sol'}>Twitter</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Developer</ListHeader>
            <Text>Powered By</Text>
            <a href={'https://t.me/justinternetmoneyz'} target='_blank' style={{ color: "#e29543" }} rel="noreferrer">Kira</a>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input placeholder={'Your email address'} bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} border={0} _focus={{ bg: 'whiteAlpha.300' }}/>
              <Tooltip label="coming soon!" hasArrow>
                <IconButton bg="main" aria-label="Subscribe" cursor="not-allowed" icon={<BiMailSend />}/>
              </Tooltip>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}