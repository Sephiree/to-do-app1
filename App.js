import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View, TextInput, Button, FlatList} from 'react-native';
import { useState } from 'react';


export default function App() {
  const [userInput, setUserInput] = useState("");
  const [tasksList,setTasksList] = useState([]);

  console.log("User Input:", userInput)
  console.log("Tasks List:", tasksList) 

  const handleAddTask = () => {
    setTasksList([...tasksList,{id:Math.random(), value: userInput }])
    setUserInput("");
  }

  const handeDeleteItem = (id) => {
    setTasksList(tasksList.filter(task=>task.id!==id))
  }
  
  const renderTaskItem= ({ item }) => {
    console.log ("item de flatlist:", item)
  return (
    <View style={styles.task}>
      <Text> {item.value} </Text>
      <Button color="red" title="x" onPress={()=>Button>handeDeleteItem(item.id)} />
      </View>
    )
  }

  return ( 
    <View style={styles.container}>
      <View style={styles.taskInputContainer}>
      <TextInput style={styles.taskInput}
      onChangeText={(text)=>setUserInput(text)}
      placeholder="Qué quieres hacer hoy?"
      value={userInput}
      />
      <Button title="Add" onPress={handleAddTask} />  
      </View>  
      <View style={styles.taskListContainer}>
        <FlatList
        data={tasksList}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id}
        />
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

//Estilos de página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 22,
    gap: 8,
    paddingTop: 64,
  },
  
  taskInputContainer: {
    paddingHorizontal: 6,
    flexDirection: 'row',
    gap: 24,
  }, 
  taskInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 6,
    fontSize: 16,
  },
  taskListContainer: {
    paddingHorizontal: 6,
    padding: 24,
  },
  task: {
    padding: 8,
    marginBottom: 16,
    backgroundColor:"#f1f1f1",
    flexDirection: "row",
    justifyContent: "space-between",

  }
});
