import React, {useState} from 'react'
import { Button, Popover, Layout, Text } from '@ui-kitten/components'

const Plus = () => {
  const [visible, setVisible] = useState(false)

  const renderToggleButton = () => (
    <Button onPress={() => setVisible(true)}>
      TOGGLE POPOVER
    </Button>
  );

  return (
    <Popover
      visible={visible}
      anchor={renderToggleButton}
      fullWidth={true}
      onBackdropPress={() => setVisible(false)}
    >
      <Text>Plus</Text>
    </Popover>
  )
}

export default Plus