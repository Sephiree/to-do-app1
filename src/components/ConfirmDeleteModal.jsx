import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { styles } from './confirmDeleteModalStyles'

const ConfirmDeleteModal = ({modalVisibleDown,taskSelectedTitleDown,setModalVisibleUp,deleteTaskUp }) => {
  return (
    <Modal
      visible={modalVisibleDown}
      >
      
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}> Seguro que deseas eliminar {taskSelectedTitleDown} ? </Text>
        <View style={styles.btnContainer}>
          <Button color="#ccc" title="Cancelar" onPress={() => setModalVisibleUp (false)} />
          <Button color="rgba(216, 15, 15, 1)" title="sí,eliminar" onPress= {deleteTaskUp} /> 
        </View>
      </View>
    </Modal>
  )
}
export default ConfirmDeleteModal
