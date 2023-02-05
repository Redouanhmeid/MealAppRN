import { StyleSheet } from 'react-native'
import { ApplicationProvider, Layout } from '@ui-kitten/components'
import AppNavigator from './AppNavigator'
import { default as theme } from '../theme.json'
import * as eva from '@eva-design/eva'

const AppStack = () => {
  return (
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <Layout style={styles.container} level='1'>
          <AppNavigator />
        </Layout>
      </ApplicationProvider>
  )
}

export default AppStack


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})