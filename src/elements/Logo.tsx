import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import Image from 'next/image';

const Logo = ({ size }: { size?: number }) => {
  return (
    <LinkBox>
      <LinkOverlay href="/">
        <Image src={"/logo.png"} height={size ? size : 60} width={size ? size : 60} alt="The Simpsols"/>
      </LinkOverlay>
    </LinkBox>
  );
};

export default Logo;
