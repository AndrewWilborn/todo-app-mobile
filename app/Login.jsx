import { useState } from "react";
import { Center, Box, Heading, VStack, FormControl, Input, Button, KeyboardAvoidingView } from "native-base";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fbConfig"

export default function Login({setUser}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(response => setUser(response.user))
      .catch(err => alert(err.message))
  }

  return (
    <Center w="100%">
      <Box safeArea px={2} py={8} w="90%" maxW={290}>
        <Heading size="lg" fontWeight="600" color="coolGray.50">
          Welcome
        </Heading>
        <Heading mt={1} color="coolGray.400" fontWeight="medium" size="xs">
          Sign in to continue...
        </Heading>
        <KeyboardAvoidingView h={{ base: "400px", lg: "auto"}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <VStack space={3} mt={5}>
            <FormControl isRequired>
              <FormControl.Label color="coolGray.300">
                Email
              </FormControl.Label>
              <Input onChangeText={setEmail} size="lg" color="coolGray.200" keyboardType="email-address" placeholder="example@email.com" />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label color="coolGray.300">
                Password
              </FormControl.Label>
              <Input onChangeText={setPassword} size="lg" color="coolGray.200" type="password" />
            </FormControl>
            <Button onPress={handleLogin} mt={3} colorScheme="primary">
              Sign In
            </Button>
          </VStack>
        </KeyboardAvoidingView>
      </Box>
    </Center>
  );
}

