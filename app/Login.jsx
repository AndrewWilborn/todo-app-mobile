import { Center, Box, Heading, VStack, FormControl, Input, Button } from "native-base";

export default function Login({setUser}) {
  return (
    <Center w="100%">
      <Box safeArea px={2} py={8} w="90%" maxW={290}>
        <Heading size="lg" fontWeight="600" color="coolGray.50">
          Welcome
        </Heading>
        <Heading mt={1} color="coolGray.400" fontWeight="medium" size="xs">
          Sign in to continue...
        </Heading>
        <VStack space={3} mt={5}>
          <FormControl isRequired>
            <FormControl.Label color="coolGray.300">
              Email
            </FormControl.Label>
            <Input size="lg" color="coolGray.200" keyboardType="email-address" placeholder="example@email.com" />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label color="coolGray.300">
              Password
            </FormControl.Label>
            <Input size="lg" color="coolGray.200" type="password" />
          </FormControl>
          <Button mt={3} colorScheme="primary">
            Sign In
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

