import { useState, useEffect} from 'react';
import { Box, Center, Checkbox, HStack, Text, VStack } from "native-base";
import TodoHeader from './TodoHeader';

export default function TodoList({user}) {

  const [todoItems, setTodoItems] = useState()

  useEffect(() => {
    if(user) {
      fetch(`https://todo-c11.web.app/tasks/${user.uid}`)
        .then(res => res.json())
        .then(setTodoItems)
        .catch(alert)
    }
  }, [user])

  return (
    <Center w="100%">
      <Box maxW={300} w="100%">
        <VStack space={4}>
          <TodoHeader user={user} setTodoItems={setTodoItems}/>
          {!todoItems
            ? <Text fontSize="lg" color="coolGray.300" textAlign="center">Loading...</Text>
            : todoItems.map(item => (
              <HStack key={item.id} w="100%" justifyContent="space-between" alignItems="center">
                <Checkbox
                  aria-label={item.title} 
                  isChecked={item.done}/>
                <Text fontSize={18} mx={2} strikeThrough={item.done} color={item.done ? "coolGray.500" : "coolGray.100"} textAlign="left" width="100%">{item.title}</Text>
              </HStack>
            ))
          }
        </VStack>
      </Box>
    </Center>
  );
}