import { View, StyleSheet } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Plus from './plus'
import { Button } from '@ui-kitten/components'


const ModalBottomSheet = ({navigation, props}) => {
  const [isOpen, setIsOpen ] = useState(true)
  const bottomSheetModalRef = useRef(null)
  const snapPoints = ['36%']
  console.log(isOpen)
  useEffect(() => {
    if(isOpen === 'isOpen' ){
      bottomSheetModalRef.current?.present()
      setIsOpen(isOpen)
    }
  }, [isOpen])
  
  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present()
    setIsOpen(true)
  }
  return (
    <>
      <Button style={styles.btn} onPress={handlePresentModal} />
    <BottomSheetModalProvider >
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onDismiss={() => {setIsOpen(false)}}
            backgroundStyle={{borderRadius: 25, backgroundColor: '#ccc'}}
        >
            <Plus navigation={navigation}/>
        </BottomSheetModal>
    </BottomSheetModalProvider>
    </>
  )
}

export default ModalBottomSheet

const styles = StyleSheet.create({
  btn: {
    marginTop: 60,
  },
})