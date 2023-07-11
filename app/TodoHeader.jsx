import { useState } from 'react'
import { Input, Button, HStack } from 'native-base'

export default function TodoHeader({ setTodoItems, user}) {

  const [newItem, setNewItem] = useState('')

  const addNewItem = () => {
    if(!newItem){
      return;
    }
    const newTodoItem = {
      uid: user.uid,
      title: newItem,
    }
    fetch(`https://todo-c11.web.app/tasks/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTodoItem)
    })
      .then(() => {
        fetch(`https://todo-c11.web.app/tasks/${user.uid}`)
          .then(res => res.json())
          .then(setTodoItems)
      }).catch(alert)
      .finally(setNewItem(""))
  }

  return (
    <HStack space={2}>
      <Input value={newItem} onChangeText={setNewItem} size="lg" color="coolGray.200" flex={1} placeholder="Add Item"/>
      <Button onPress={addNewItem} colorScheme="primary">Add</Button>
    </HStack>
  )
}