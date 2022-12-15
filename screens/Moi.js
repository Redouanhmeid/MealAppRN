import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Card, Text, Layout } from '@ui-kitten/components';

const Header = (props) => (
  <View {...props}>
    <Text category='h6'>Maldives</Text>
    <Text category='s1'>By Wikipedia</Text>
  </View>
);

const Moi = () => {
  const {userInfo} = useContext(AuthContext)
  return (
    <View>
      <ScrollView>
        <Text>Bonjour {userInfo.user_display_name}</Text>
        <Layout style={styles.topContainer} level='1'>
          <Card style={styles.card} header={Header}>
            <Text>
              The Maldives, officially the Republic of Maldives, is a small country in South Asia,
              located in the Arabian Sea of the Indian Ocean.
              It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
            </Text>
          </Card>
          <Card style={styles.card} header={Header}>
            <Text>
              The Maldives, officially the Republic of Maldives, is a small country in South Asia,
              located in the Arabian Sea of the Indian Ocean.
              It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
            </Text>
          </Card>
        </Layout>
      </ScrollView>
    </View>
  )
}

export default Moi

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
    margin: 16,
    borderRadius: 12,
  },
  card: {
    flex: 1,
    padding: 2,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
});