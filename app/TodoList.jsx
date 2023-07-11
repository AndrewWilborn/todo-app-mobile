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

  const handleItemUpdate = (id, done) => {
    const itemUpdate = {id, done: !done}

    console.log(itemUpdate)

    fetch("https://todo-c11.web.app/tasks/", {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(itemUpdate)
    })
    .then(() => {
      fetch(`https://todo-c11.web.app/tasks/${user.uid}`)
        .then(res => res.json())
        .then(setTodoItems)
    }).catch(alert)
  }

  return (
    <Center w="100%">
      <Box maxW={300} w="100%">
        <VStack space={4}>
          <TodoHeader user={user} setTodoItems={setTodoItems}/>
          {!todoItems
            ? <Text fontSize="lg" color="coolGray.300" textAlign="center">Loading...</Text>
            : todoItems.map(item => {
              const thisItemId = item.id
              const thisItemDone = item.done
              return(
              <HStack key={item.id} w="100%" justifyContent="space-between" alignItems="center">
                <Checkbox
                  aria-label={item.title} 
                  //defaultValue={item.done}
                  isChecked={item.done}
                  onChange={() => handleItemUpdate(thisItemId, thisItemDone)}/>
                <Text 
                fontSize={18} 
                mx={2} 
                strikeThrough={item.done} 
                color={item.done ? "coolGray.500" : "coolGray.100"} 
                textAlign="left" width="100%">
                  {item.title}
                </Text>
              </HStack>
            )})
          }
        </VStack>
      </Box>
    </Center>
  );
}