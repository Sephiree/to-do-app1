import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View, TextInput, Button, FlatList} from 'react-native';
import { useState } from 'react';


export default function App() {
  const [userInput, setUserInput] = useState("");
  const [tasksList,setTasksList] = useState([]);

  console.log("User Input:", userInput)
  console.log("Tasks List:", tasksList) 

  const handleAddTask = ()=>{
    setTasksList([...tasksList,userInput])
    setUserInput("");
  }
  const renderTaskItem= ({item}) => ()

  return (
    <View style={styles.container}>
      <View style={styles.taskInputContainer}>
      <TextInput style={styles.taskInput}
      //Funcion de una sola linea ↓
      onChangeText={(text)=>setUserInput(text)}
      placeholder="Qué quieres hacer hoy?"
      />
      <Button title="Add" onPress={handleAddTask} />  
      </View>  
      <View style={styles.taskLisrtContainer}>
        <FlatList
        data={tasksList}
        renderItem={renderTaskItem}
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
    padding: 6,
    paddingTop: 64,
  },
  
  taskInputContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 8,
  }, 
  taskInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16
  },
  tasksListContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
});
