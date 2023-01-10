import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Layout, Divider, TopNavigation, TopNavigationAction, Menu, MenuItem } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight, faArrowLeft, faComment, faQuestionCircle, faFileAlt, faLock } from '@fortawesome/free-solid-svg-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const RightIcon = () => (
  <FontAwesomeIcon icon={ faAngleRight } size={ 24 } color='#C628A4'  />
);
const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const MessageIcon = () => (
  <FontAwesomeIcon icon={ faComment } size={ 24 } color='#C628A4' />
);
const QuestionIcon = () => (
  <FontAwesomeIcon icon={ faQuestionCircle } size={ 24 } color='#C628A4' />
);
const FileIcon = () => (
  <FontAwesomeIcon icon={ faFileAlt } size={ 24 } color='#C628A4' />
);
const LockIcon = () => (
  <FontAwesomeIcon icon={ faLock } size={ 24 } color='#C628A4' />
);

const Aide = ({navigation}) => {
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title='Nutrution' accessoryLeft={renderBackAction} />
      <Layout style={styles.container} level='2'>
      <Divider />
      <Menu style={styles.menu}>
        <MenuItem title='Assistance' style={styles.menuitem} accessoryLeft={MessageIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate('Assistance')}/>
        <MenuItem title='FAQ' style={styles.menuitem} accessoryLeft={QuestionIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate('FAQ')}/>
        <MenuItem title='Conditions de service' style={styles.menuitem} accessoryLeft={FileIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate('Conditions de service')}/>
        <MenuItem title='Politique de confidentialité' style={styles.menuitem} accessoryLeft={LockIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate('Politique de confidentialité')}/>
        <MenuItem title='Politique de remboursement' style={styles.menuitem} accessoryLeft={FileIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate('Politique de remboursement')}/>
        <MenuItem title="Conditions d'abonnement" style={styles.menuitem} accessoryLeft={FileIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate("Conditions d'abonnement")}/>
        <MenuItem title='Régles de Communication' style={styles.menuitem} accessoryLeft={FileIcon} accessoryRight={RightIcon} onPress={() => navigation.navigate('Régles de Communication')}/>
      </Menu>
      </Layout>
    </SafeAreaView>
  )
}

export default Aide

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  menu: {
    flex: 1,
    marginTop: 10,
  },
  menuitem: {
    paddingHorizontal: 12,
    height: 65,
  }
});