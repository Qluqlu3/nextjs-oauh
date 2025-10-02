import { Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Home() {
  useRouter();

  return (
    <Box>
      <Heading size='5xl'>Home</Heading>
    </Box>
  );
}
