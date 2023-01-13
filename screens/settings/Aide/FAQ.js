import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Layout, TopNavigationAction, TopNavigation, Text, Divider } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const FAQ = ({navigation}) => {
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );
  return (
    <SafeAreaView style={styles.area}>
        <TopNavigation title='FAQ' accessoryLeft={renderBackAction} />
        <Layout style={styles.container} level='1'>
          <Text category='h2' style={styles.center}>Les gens demandent souvent</Text>
          <Divider />
          <Text category='h4' style={styles.question}>Vais-je perdre du poids en 30 jours?</Text>
          <Text>Oui. Suivez notre plan de repas selon les instructions données. La clé pour perdre du poids, c'est le déficit calorique. Nous faisons en sorte que ce soit délicieux et vous observez les résultats.</Text>
          <Text category='h4' style={styles.question}>J'ai des ingrédients que je n'ai pas choisis</Text>
          <Text>Si les ingrédients ne sont pas essentiels, vous pouvez cuisiner sans. Veuillez faire attention à la division des ingrédients dans ‘essentiel’ et ‘à votre goût’. Cette dernière catégorie est notre forte recommandation, mais vous pouvez toujours l'ignorer.</Text>
          <Text category='h4' style={styles.question}>Les ingrédients sont mesurés crus ou cuits?</Text>
          <Text>Dans une recette, nous n'indiquons les mesures des ingrédients que lorsqu'ils sont crus.</Text>
          <Text category='h4' style={styles.question}>Où puis-je voir les détails d'une recette?</Text>
          <Text>Une fois que vous avez cliqué sur la photo du plat, la fenêtre avec les détails de la recette s'ouvrira.</Text>
          <Text category='h4' style={styles.question}>Puis-je manger des fruits?</Text>
          <Text>Oui, les fruits sont bons pour la santé. Cependant, si vous voulez perdre du poids, vous devriez faire attention à la quantité de sucre qu'un fruit particulier contient. Nous vous recommandons de manger des pommes, des kiwis, du citron, du raisin, des fraises, des framboises et des myrtilles.</Text>
          <Text category='h4' style={styles.question}>Que devrais-je boire?</Text>
          <Text>Nous vous recommandons de boire un verre d'eau chaude citronnée à votre réveil. Cela vous aidera à booster votre métabolisme. Buvez votre quantité d'eau de façon uniforme. Notez que les autres boissons comme le thé, le café ou les jus ne comptent pas comme de l'eau.</Text>
          <Text category='h4'>Je crois que la quantité de calories suggérée est trop élevée</Text>
          <Text>N'oubliez pas que la qualité des calories est plus importante que la quantité. Un régime alimentaire bien équilibré est individuellement calculé en se basant sur vos préférences, vos besoins et vos objectifs.</Text>
          <Text category='h4' style={styles.question}>J'ai des allergies</Text>
          <Text>Si vous avez des restrictions alimentaires ou des allergies aux ingrédients de votre plan de repas, veuillez nous contacter. Notre équipe vous fournira un substitut sans danger. Consultez toujours votre médecin lorsque vous n'êtes pas sûr(e) d'un ingrédient particulier.</Text>
        </Layout>
    </SafeAreaView>
  )
}

export default FAQ

const styles = StyleSheet.create({
  area: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    paddingHorizontal:10,
  },
  center: {
    alignContent: 'center',
    textAlign: 'center'
  },
  question: {
    marginTop: 20,
    marginBottom: 5,
  }
});