import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { Text, Layout, List, ListItem, Button, Divider } from '@ui-kitten/components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const RightIcon = (props) => (
  <FontAwesomeIcon icon={ faPlusCircle } style={styles.icon} size={ 20 }/>
);
const Nutrution = ({navigation}) => {
  return (
    <ScrollView>
      <Layout style={styles.container} level='2'>
        <Text category='h4'>Nutrution</Text>
          <ListItem style={styles.listcontainer}
            title='Petit-déjeuner'
            accessoryRight={RightIcon}
            onPress={() => navigation.navigate('Petitdejeuner')}
          />
          <Divider />
          <ListItem style={styles.listcontainer}
            title='En-cas'
            accessoryRight={RightIcon}
          />
          <Divider />
          <ListItem style={styles.listcontainer}
            title='Déjeuner'
            accessoryRight={RightIcon}
          />
          <Divider />
          <ListItem style={styles.listcontainer}
            title='Dîner'
            accessoryRight={RightIcon}
          />
      </Layout>
    </ScrollView>
  )
}

export default Nutrution

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
  },
  listcontainer: {
    minHeight: 80,
  },
  icon: {
    marginRight: 10,
    color: '#C628A4',
  }
});