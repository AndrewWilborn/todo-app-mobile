import { useState } from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import Login from "./app/Login";
import TodoList from "./app/TodoList";

export default function App() {

  const [user, setUser] = useState();

  return (
    <NativeBaseProvider>
      <Box bg="darkBlue.900" alignItems="center" justifyContent="center" flex={1}>
        <Text color="coolGray.100" fontSize="4xl">Todo App</Text>
        {!user
          ? <Login setUser={setUser} />
          : <TodoList user={user} />
        }
      </Box>
    </NativeBaseProvider>
  );
}

