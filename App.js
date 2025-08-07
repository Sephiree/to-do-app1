import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskInputContainer}>
      <TextInput style={styles.taskInput}
      onChangeText={()=>{}}
      placeholder="Qué quieres hacer hoy?"
      />
      <Button title="Add" onPress={()=>{}} />  
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 6,
    paddingTop: 64,
  },
  taskInputContainer:{
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
});
