import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Article from '../screens/Article'
import Settings from '../screens/settings/Settings'
import Nutrution from '../screens/settings/Nutrution'
import Compte from '../screens/settings/Compte'
import AppNotifications from '../screens/settings/Notifications'
import Detailspersonels from '../screens/settings/Detailspersonels'
import Aide from '../screens/settings/Aide/Aide'
import RepasParJour from '../screens/settings/RepasParJour'
import Repas from '../screens/settings/Repas'
import SeancedEntrainement from '../screens/settings/SeancedEntrainement'
import Assistance from '../screens/settings/Aide/Assistance'
import FAQ from '../screens/settings/Aide/FAQ'
import Conditionsdeservice from '../screens/settings/Aide/Conditionsdeservice'
import Conditionsdabonnement from '../screens/settings/Aide/Conditionsdabonnement'
import Politiquedeconfidentialite from '../screens/settings/Aide/Politiquedeconfidentialite'
import Politiquederemboursement from '../screens/settings/Aide/Politiquederemboursement'
import ReglesdeCommunication from '../screens/settings/Aide/ReglesdeCommunication'
import BottomTabs2 from './BottomTabs2'
import Poids from '../screens/plus/poids'
const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
    <NavigationContainer>
        <Navigator 
          screenOptions={{
            headerShown:false,
            gestureEnabled:true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        >
            <Screen name={'Accueil'} component={BottomTabs2} />
            <Screen name={'Article'}  component={Article} />
            <Screen name={'Paramètres'} component={Settings} />
            <Screen name={'Nutrution'} component={Nutrution} />
            <Screen name={'Compte'} component={Compte} />
            <Screen name={'AppNotifications'} component={AppNotifications} />
            <Screen name={'Détails personnels'} component={Detailspersonels} />
            <Screen name={'Aide'} component={Aide} />
            <Screen name={'Repas Par Jour'} component={RepasParJour} />
            <Screen name={'Repas'} component={Repas} />
            <Screen name={"Séance d'entraînenent"} component={SeancedEntrainement} />
            <Screen name={'Assistance'} component={Assistance} />
            <Screen name={'FAQ'} component={FAQ} />
            <Screen name={'Conditions de service'} component={Conditionsdeservice} />
            <Screen name={'Politique de confidentialité'} component={Politiquedeconfidentialite} />
            <Screen name={'Politique de remboursement'} component={Politiquederemboursement} />
            <Screen name={"Conditions d'abonnement" } component={Conditionsdabonnement} />
            <Screen name={'Régles de Communication'} component={ReglesdeCommunication} />
            <Screen name={'Poids'} component={Poids} />
        </Navigator>
    </NavigationContainer>
    </>
  )
}

export default AppNavigator