import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { styles } from './confirmDeleteModalStyles'

const ConfirmDeleteModal = () => {
  return (
    <Modal
      visible={true}
      >
      
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}> Seguro que deseas eliminarla? </Text>
        <View style={styles.btnContainer}>
          <Button color="#ccc" title="Cancelar" onPress={() => {}} />
          <Button color="rgba(216, 15, 15, 1)" title="sí,eliminar" onPress={() => {}} /> 
        </View>
      </View>
    </Modal>
  )
}
export default ConfirmDeleteModal
