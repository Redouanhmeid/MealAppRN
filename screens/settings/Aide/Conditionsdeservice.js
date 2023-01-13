import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Layout, TopNavigationAction, TopNavigation, Text, Divider } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const Conditionsdeservice = ({navigation}) => {
  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );
  return (
    <SafeAreaView style={styles.area}>
      <TopNavigation title='Conditions de Service' accessoryLeft={renderBackAction} />
      <ScrollView>
      <Layout style={styles.container} level='1'>
        <Text category='h2' style={styles.question}>Conditions de Service</Text>
        <Text>VEUILLEZ LIRE ATTENTIVEMENT CES CONDITIONS DE SERVICE (EN PARTICULIER LA SECTION 6 “PAIEMENT ET REMBOURSEMENT”) AVANT D'ACHETER NOTRE SERVICE.</Text>
        <Text category='h5' style={styles.question}>1. ACCORD JURIDIQUEMENT CONTRAIGNANT; AMENDEMENTS</Text>
        <Text>1.1. Le service oﬀert par le Programme de Menus Unimeal ainsi que les contenus disponibles sur le Programme de Menus Unimeal sont développés, exploités, et distribués par Amomama Media Limited (“nous” “notre” “nos” ou la “Compagnie”). Les services fournis, les contenus, les outils, les transactions disponibles en utilisant la Carte repas Unimeal, seront collectivement désignés par le terme de “Service”.</Text>
        <Text>1.2. Votre accès et votre utilisation du Service ont valeur d’accord pour être lié par ces Conditions d’utilisation (ci-après désignées par (the “les Conditions d’utilisation”), qui établissent une relation contractuelle juridiquement contraignante entre vous et la société. Pour cette raison, VEUILLEZ LIRE ATTENTIVEMENT LES CONDITIONS AVANT D’UTILISER LE SERVICE. Si vous n’acceptez pas toutes ces Conditions, il vous est expressément interdit d’utiliser le Service, et vous devrez cesser de l’utiliser immédiatement.</Text>
        <Text>1.3. Les Conditions, politiques, ou documents supplémentaires qui pourraient être aﬃchés au Service de temps à autre sont expressément incorporés aux présentes par référence. Nous nous réservons le droit d’apporter à notre discrétion des changements ou des modiﬁcations aux présentes Conditions à tout moment et pour quelque raison que ce soit.</Text>
        <Text>1.4. Nous vous alerterons de tout changement en mettant à jour la date de la “dernière mise à jour” des présentes conditions, et vous renoncez ainsi à tout droit de recevoir une notiﬁcation spéciale à chacun de ces changements.</Text>
        <Text>1.5. Il en va de votre responsabilité de consulter périodiquement les présentes Conditions aﬁn de vous tenir informé de leurs évolutions. Vous serez considéré comme ayant été mis au courant et ayant accepté tout changement des Conditions et vous y serez automatiquement soumis par la vertu de continuer à utiliser le Service après la date de publication de ces Conditions révisées.</Text>
        <Text>1.6. CES CONDITIONS CONTIENNENT DES CLAUSES DE NON-RESPONSABILITÉ (ARTICLES 2 ET 14), DES LIMITATIONS DE RESPONSABILITÉ (ARTICLE 15) ET DES DISPOSITIONS EN VERTU DESQUELLES VOUS RENONCEZ À VOTRE DROIT À UN PROCÈS DEVANT JURY, À UNE AUDIENCE AU TRIBUNAL ET À VOTRE DROIT DE PARTICIPER À UN RECOURS COLLECTIF (ARBITRAGE ET RENONCIATION À UN RECOURS COLLECTIF). À MOINS QUE VOUS NE VOUS DÉSENGAGIEZ DANS LES 30 JOURS SUIVANT LA PREMIÈRE UTILISATION DE NOTRE SERVICE, COMME PRÉVU À L’ARTICLE 11, L’ARBITRAGE EST LE RECOURS EXCLUSIF POUR TOUT LITIGE ET EST OBLIGATOIRE, SAUF DANS LES CAS SPÉCIFIÉS CI-DESSOUS À L’ARTICLE 11.</Text>
        <Text category='h5' style={styles.question}>2. AVERTISSEMENTS IMPORTANTS</Text>
        <Text>2.1. LA COMPAGNIE N’OFFRE NI NE FOURNIT AUCUNE SORTE DE CONSEIL D’ORDRE MÉDICAL, D’ASSURANCE MALADIE OU D’AUTRE SERVICE DE SANTÉ, Y COMPRIS, MAIS NON EXCLUSIVEMENT, TOUTE FORME DE CONSEIL, DE TEST, D’ÉVALUATION, DE PRESCRIPTION, DE PROCÉDURE OU DE THÉRAPIE LIÉE À L’EXERCICE, À LA NUTRITION, À LA PERTE DE POIDS, OU L’AUGMENTATION DU BIEN-ÊTRE LIÉE À L’ÉVITEMENT, À LA PRÉVENTION, AU DIAGNOSTIQUE OU AU TRAITEMENT DE TOUTE BLESSURE, MALADIE, OU AFFECTION (COLLECTIVEMENT DÉSIGNÉS CI-APRÈS PAR “LES SERVICES DE SANTÉ”).</Text>
        <Text>2.2. LE SERVICE PEUT NE PAS CONVENIR À TOUTES LES PERSONNES ET NE SAURAIT SE SUBSTITUER À DES SERVICES DE SANTÉ PROFESSIONNELS. LE SERVICE EST CONÇU UNIQUEMENT COMME UN OUTIL, QUI POURRA SE RÉVÉLER UTILE POUR VOUS AIDER À ATTEINDRE VOS OBJECTIFS GÉNÉRAUX EN MATIÈRE DE SANTÉ ET DE FITNESS. VOUS RECONNAISSEZ QUE VOTRE EXERCICE PHYSIQUE COMPORTE DES RISQUES, LESQUELS POURRAIENT CONDUIRE À DES BLESSURES PHYSIQUES OU À LA MORT, ET QUE VOUS ASSUMEZ CES RISQUES. AVANT D’ACCÉDER AU SERVICE OU DE L’UTILISER, VOUS ACCEPTEZ DE DÉCHARGER LA COMPAGNIE DE TOUTE EFFET, CONNU OU INCONNU, DÉCOULANT DE VOTRE UTILISATION DU SERVICE.</Text>
        <Text>2.3. VOUS DEVEZ PRENDRE CONTACT AVEC VOTRE MÉDECIN HABITUEL OU TOUT AUTRE PROFESSIONNEL DE LA SANTÉ AFIN DE DÉTERMINER SI LE SERVICE SERAIT SÛR ET EFFICACE POUR VOUS. IL VOUS EST EXPRESSÉMENT INTERDIT D’ACCÉDER AU SERVICE OU DE L’UTILISER CONTRE L’AVIS D’UN MÉDECIN OU SI CELA DEVAIT COMPORTER LE MOINDRE RISQUE POUR VOTRE SANTÉ. DANS CE CONTEXTE, VOUS RECONNAISSEZ ASSUMER LA RESPONSABILITÉ PLEINE ET ENTIÈRE DE VOTRE SANTÉ, VOTRE VIE, ET VOTRE BIEN-ÊTRE, AINSI QUE DE LA SANTÉ, LA VIE, ET LE BIEN-ÊTRE DE VOTRE FAMILLE ET DE VOS ENFANTS (QU’ILS SOIENT NÉS OU À NAÎTRE, EN FONCTION), ET DE TOUTE DÉCISION PRISE MAINTENANT OU À L’AVENIR.</Text>
        <Text>2.4. DANS LA MESURE MAXIMALE PERMISE PAR LA LOI APPLICABLE, VOUS ACCEPTEZ EXPRESSÉMENT LE FAIT QUE NOUS NE FOURNISSIONS AUCUN CONSEIL MÉDICAL PAR LE BIAIS DU SERVICE. TOUT LE CONTENU FOURNI PAR LE SERVICE, QU’IL SOIT FOURNI PAR NOUS OU PAR DES TIERS (MÊME S’ILS PRÉTENDENT ÊTRE MÉDECIN) N’EST PAS DESTINÉ À ÊTRE, ET NE DOIT PAS ÊTRE UTILISÉ À LA PLACE (I) DE L’AVIS DE VOTRE MÉDECIN OU D’AUTRES PROFESSIONNELS DE SANTÉ, (II) D’UNE VISITE, D’UN APPEL, OU D’UNE CONSULTATION DE VOTRE MÉDECIN TRAITANT OU D’AUTRES PROFESSIONNELS DE SANTÉ, OU (III) DES INFORMATIONS CONTENUES SUR OU DANS TOUT EMBALLAGE OU ÉTIQUETTE DE PRODUIT. NOUS NE SAURIONS ÊTRE TENUS POUR RESPONSABLES DES PROBLÈMES DE SANTÉ QUI POURRAIENT RÉSULTER DE PROGRAMMES D'ENTRAÎNEMENT, DE CONSULTATIONS, DE PRODUITS OU D’ÉVÉNEMENTS DONT VOUS AVEZ EU CONNAISSANCE PAR LE BIAIS DU SERVICE. SI VOUS AVEZ DES QUESTIONS RELATIVES À LA SANTÉ, VEUILLEZ APPELER OU CONSULTER VOTRE MÉDECIN TRAITANT, OU TOUT AUTRE PROFESSIONNEL DE SANTÉ, DANS LES PLUS BREFS DÉLAIS. SI VOUS AVEZ UNE URGENCE, APPELEZ IMMÉDIATEMENT VOTRE MÉDECIN TRAITANT OU BIEN LES SECOURS.</Text>
        <Text>2.5. VOTRE UTILISATION DU SERVICE NE CONSTITUE NI NE CRÉE UNE RELATION MÉDECIN-PATIENT, THÉRAPEUTE-PATIENT OU AUTRE PROFESSIONNEL DE SANTÉ-PATIENT, ENTRE VOUS ET L’ENTREPRISE.</Text>
        <Text>2.6. TLA SOCIÉTÉ N’ASSUME AUCUNE RESPONSABILITÉ POUR LES INEXACTITUDES OU LES DÉCLARATIONS ERRONÉES CONCERNANT LES RECETTES ALIMENTAIRES, LES EXERCICES OU TOUT AUTRE CONTENU DU SERVICE. VOUS DEVEZ LIRE ATTENTIVEMENT TOUTES LES INFORMATIONS FOURNIES PAR LES FABRICANTS DES PRODUITS ALIMENTAIRES, QUE CE SOIT EN LIGNE OU SUR LES EMBALLAGES ET LES ÉTIQUETTES DES PRODUITS EUX-MÊMES, Y COMPRIS LA TENEUR EN NUTRIMENTS, LES INGRÉDIENTS, LES INFORMATIONS SUR LES ALLERGÈNES ALIMENTAIRES ET LES CONTACTS, AINSI QUE LES ALLÉGATIONS DE SANTÉ, AVANT D’UTILISER OU DE CONSOMMER UN PRODUIT. POUR OBTENIR DES INFORMATIONS COMPLÉMENTAIRES SUR UN PRODUIT ALIMENTAIRE, VEUILLEZ CONTACTER DIRECTEMENT LE FABRICANT.</Text>
        <Text>2.7. NOUS NE DONNONS AUCUNE GARANTIE QUANT AU NIVEAU DE RÉUSSITE QUE VOUS POURRIEZ CONNAÎTRE ET VOUS ACCEPTEZ LE RISQUE QUE LES RÉSULTATS SOIENT DIFFÉRENTS POUR CHAQUE INDIVIDU. LES TÉMOIGNAGES ET LES EXEMPLES QUI PEUVENT ÊTRE FOURNIS SUR LE SERVICE SONT DES RÉSULTATS EXCEPTIONNELS QUI NE S’APPLIQUENT PAS À UNE PERSONNE MOYENNE ET NE VISENT PAS À REPRÉSENTER NI À GARANTIR QUE QUICONQUE OBTIENDRA DES RÉSULTATS IDENTIQUES OU SIMILAIRES. IL N’EST PAS GARANTI QUE LES EXEMPLES DE RÉSULTATS D’APTITUDE PASSÉS PUISSENT ÊTRE REPRODUITS À L’AVENIR. NOUS NE POUVONS PAS GARANTIR VOS RÉSULTATS ET/OU SUCCÈS FUTURS. NOUS NE POUVONS PAS NON PLUS GARANTIR QUE VOUS CONSERVEREZ LES RÉSULTATS OBTENUS SI VOUS NE CONTINUEZ PAS À SUIVRE NOS PROGRAMMES.</Text>
        <Text>2.8. LA SANTÉ,’S LA FORME PHYSIQUE ET LA RÉUSSITE NUTRITIONNELLE DE CHAQUE INDIVIDU DÉPENDENT DE SES ANTÉCÉDENTS, DE SON ZÈLE, DE SON DÉSIR ET DE SA MOTIVATION. COMME POUR TOUT SERVICE LIÉ À LA SANTÉ, VOS RÉSULTATS PEUVENT VARIER ET SERONT BASÉS SUR DE NOMBREUSES VARIABLES, Y COMPRIS, MAIS SANS S’Y LIMITER, VOTRE CAPACITÉ INDIVIDUELLE, VOTRE EXPÉRIENCE DE VIE, VOTRE SANTÉ ET VOTRE PROFIL GÉNÉTIQUE UNIQUES, VOTRE POINT DE DÉPART, VOTRE EXPERTISE, ET VOTRE NIVEAU D’ENGAGEMENT. L’UTILISATION DU SERVICE DOIT ÊTRE BASÉE SUR VOTRE PROPRE ASSIDUITÉ ET VOUS ACCEPTEZ DE DÉDOUANER LA SOCIÉTÉ DE TOUT SUCCÈS OU ÉCHEC DE VOTRE PHYSIQUE QUI SOIT DIRECTEMENT OU INDIRECTEMENT LIÉ À L’ACHAT ET À L’UTILISATION DU SERVICE.</Text>
        <Text>2.9. EN PLUS DE TOUTES LES AUTRES LIMITATIONS ET EXCLUSIONS DE RESPONSABILITÉ PRÉVUES DANS LES PRÉSENTES CONDITIONS, LA SOCIÉTÉ DÉCLINE TOUTE RESPONSABILITÉ OU PERTE EN RAPPORT AVEC LE CONTENU FOURNI SUR LE SERVICE. NOUS VOUS RECOMMANDONS DE CONSULTER VOTRE MÉDECIN TRAITANT ET D’AUTRES PROFESSIONNELS CONCERNÉS EN CE QUI CONCERNE LES INFORMATIONS CONTENUES DANS LE SERVICE OU ACCESSIBLES PAR SON INTERMÉDIAIRE.</Text>
        <Text category='h5' style={styles.question}>3. UTILISATION DU SERVICE ; RESTRICTIONS LIÉES À L’ GE</Text>
        <Text>3.1. Le Service propose à ses utilisateurs un plan de repas personnalisé et des suggestions d’exercices individuels. Pour pouvoir utiliser le Service, vous devez fournir certaines informations vous concernant.</Text>
        <Text>3.2. Si vous utilisez le Service, vous déclarez et garantissez à la société que: (I) toutes les informations requises que vous soumettez sont véridiques et exactes; (II) votre utilisation du Service ne viole aucune loi ou réglementation applicable ou les présentes Conditions. Dans le cas contraire, le Service peut ne pas fonctionner correctement et nous pouvons ne pas être en mesure de vous communiquer des avis importants.</Text>
        <Text>3.3. Le Service n’est pas destiné à être utilisé par des personnes âgées de moins de 18 ans. Vous déclarez et garantissez par la présente à la société que vous remplissez les conditions susmentionnées. Tous les utilisateurs mineurs dans la juridiction dans laquelle ils résident (généralement âgés de moins de 18 ans) doivent avoir l’autorisation de leur parent ou tuteur et être directement surveillés par celui-ci pour utiliser le Service. Si vous êtes mineur, vous devez faire lire et accepter les présentes Conditions par votre parent ou tuteur avant d’utiliser le Service.</Text>
        <Text>3.4. La société se réserve le droit de suspendre ou de mettre ﬁn à votre utilisation du Service, ou à votre accès au Service, avec ou sans préavis, en cas de violation des présentes Conditions.</Text>
        <Text>3.5. En utilisant le Service, vous acceptez de recevoir certaines communications, telles que des mises à jour sur le Service ou la newsletter de la Société. Vous pouvez refuser les communications non essentielles en vous désabonnant de la notiﬁcation par courrier électronique.</Text>
        <Text>3.6. Le Service peut être modiﬁé, mis à jour, interrompu ou suspendu à tout moment et sans préavis ni responsabilité de notre part.</Text>
        <Text category='h5' style={styles.question}>4. AUTRES ASPECTS DU SERVICE ; CONSENTEMENT DE L’USAGER</Text>
        <Text>4.1. Vous reconnaissez que tous les textes, images, marques, logos, compilations (c’est-à-dire la collecte, l’arrangement et l’assemblage d’informations), données, autres contenus, logiciels et matériels aﬃchés sur le Service ou utilisés par la Société pour faire fonctionner le Service (à l’exclusion de tout Contenu Utilisateur, tel que déﬁni ci-dessous) sont notre propriété ou celle de tiers.</Text>
        <Text>4.2. La société se réserve expressément tous les droits, y compris tous les droits de propriété intellectuelle, dans tout ce qui précède ; et, sauf autorisation expresse des présentes Conditions, toute utilisation, redistribution, vente, décompilation, ingénierie inverse, désassemblage, traduction, ou autre exploitation de ceux-ci, est strictement interdite. La fourniture du Service ne transfère, à vous ou à un tiers, aucun droit, titre ou intérêt sur ces droits de propriété intellectuelle.</Text>
        <Text>4.3. Les informations que vous nous soumettez, et toutes les données, textes et autres matériels que vous pouvez soumettre ou poster sur le Service (“Contenu Utilisateur”) restent votre propriété intellectuelle et la société ne revendique aucun droit d’auteur ou autre droit de propriété sur ces informations et le Contenu Utilisateur. Nonobstant ce qui précède, vous acceptez que la Société puisse conserver des copies de toutes les informations et du Contenu Utilisateur et utiliser ces informations et le Contenu Utilisateur comme raisonnablement nécessaire ou accessoire à son fonctionnement du Service et comme décrit dans les présentes Conditions et la Politique de Conﬁdentialité.</Text>
        <Text>4.4. Vous accordez à la société le droit non exclusif, transférable, perpétuel, irrévocable et valable à l’échelle mondiale de publier, de distribuer, d’aﬃcher et de réaliser publiquement le contenu utilisateur en rapport avec le Service.</Text>
        <Text>4.5. Sous réserve des présentes Conditions, la société vous accorde une licence non transférable et non exclusive (sans droit de sous-licence) d’utiliser le Service uniquement à des ﬁns personnelles et non commerciales.</Text>
        <Text>4.6. Vous acceptez, déclarez et garantissez que votre utilisation du Service, ou toute partie de celui-ci, sera conforme à la licence, aux engagements et aux restrictions susmentionnés et n’enfreindra ni ne violera les droits de toute autre partie, ni ne violera tout contrat ou obligation légale envers toute autre partie. En outre, vous acceptez de vous conformer à toutes les lois, réglementations et ordonnances applicables relatives au Service ou à votre utilisation de celui-ci, et que vous serez seul responsable de vos propres violations individuelles de ces lois.</Text>
        <Text>4.7. Vous accédez au Service et l’utilisez à vos propres risques. La société n’est pas responsable des dommages causés à votre système informatique, de la perte de données ou de tout autre dommage causé à vous ou à un tiers, y compris, mais non exclusivement, les dommages corporels qui résultent de votre accès au Service, de son utilisation ou de la conﬁance accordée à toute information ou conseil.</Text>
        <Text>4.8. La société n’a aucune obligation de vous fournir une assistance client de quelque nature que ce soit. Toutefois, la société peut vous fournir une assistance client de temps en temps,’s à sa seule discrétion.</Text>
        <Text category='h5' style={styles.question}>5. REPRÉSENTATION DES USAGERS</Text>
        <Text>5.1. En utilisant le Service, vous déclarez et garantissez:</Text>
        <Text category='s2'>5.1.1. avoir la capacité juridique de et vous engager à respecter les présentes Conditions;</Text>
        <Text category='s2'>5.1.2. avoir l’âge légal ﬁxé par votre État ou pays de résidence;</Text>
        <Text category='s2'>5.1.3. n’être pas mineur dans la juridiction dans laquelle vous résidez ou, si vous êtes mineur, avoir reçu une autorisation parentale pour utiliser le Service</Text>
        <Text category='s2'>5.1.4. ne pas accéder au Service par des moyens automatisés ou non humains, que ce soit par un bot, un script, ou autre;</Text>
        <Text category='s2'>5.1.5. vous n'utiliserez pas le Service dans un but illégal ou non autorisé;</Text>
        <Text category='s2'>5.1.6. ne pas être situé dans un pays soumis à un embargo du gouvernement américain ou qui a été désigné par le gouvernement américain comme un pays “soutenant le terrorisme”;</Text>
        <Text category='s2'>5.1.7. ne ﬁgurer sur aucune liste du gouvernement américain de parties interdites ou restreintes</Text>
        <Text category='s2'>5.1.8. que votre utilisation du Service n’enfreindra aucune loi ou réglementation applicable.</Text>
        <Text category='s2'>5.1.9. que vous possédez tous les droits, y compris les droits de propriété intellectuelle, sur votre Contenu Utilisateur ; et que votre Contenu Utilisateur ne viole pas les droits de propriété intellectuelle, les droits à la vie privée, et autres droits légaux de tiers.</Text>
        <Text>5.2. Si vous fournissez des informations fausses, inexactes, non actuelles, ou incomplètes, nous avons le droit de refuser toute utilisation actuelle ou future du Service (ou de toute partie de celui-ci).</Text>
        <Text>5.3. Vous ne pouvez pas accéder ou utiliser le Service dans un but autre que celui pour lequel nous avons mis le Service à disposition. Le Service ne peut être utilisé dans le cadre d’une activité commerciale, sauf si celle-ci est spéciﬁquement approuvée par nous.</Text>
        <Text>5.4. En tant qu’utilisateur du Service, vous acceptez de ne pas:</Text>
        <Text category='s2'>5.4.1. récupérer systématiquement les données ou tout autre contenu du Service pour créer ou compiler, directement ou indirectement, une collection, une compilation, une base de données ou un répertoire sans notre permission écrite;</Text>
        <Text category='s2'>5.4.2. procéder à toute utilisation non autorisée du Service;</Text>
        <Text category='s2'>5.4.3. eﬀectuer toute modiﬁcation, adaptation, amélioration, perfectionnement, traduction ou travail dérivé du Service;</Text>
        <Text category='s2'>5.4.4. utiliser le Service pour toute activité génératrice de revenus, toute entreprise commerciale ou toute autre ﬁn pour laquelle il n’est pas conçu ou prévu;</Text>
        <Text category='s2'>5.4.5. rendre le Service disponible sur un réseau ou un autre environnement permettant l'accès ou l'utilisation par de multiples appareils ou utilisateurs en même temps;</Text>
        <Text category='s2'>5.4.6. utiliser le Service pour créer un produit, un Service ou un logiciel qui soit, directement ou indirectement, en concurrence avec le Service ou qui le remplace de quelque manière que ce soit;</Text>
        <Text category='s2'>5.4.7. utiliser toute information propriétaire que ce soit, que ce soit l’une de nos interfaces ou toute autre propriété intellectuelle liée à la conception, le développement, la fabrication, l’octroi de licences ou la distribution de toute application, accessoire ou dispositif destiné à être utilisé avec le Service;</Text>
        <Text category='s2'>5.4.8. contourner, désactiver ou interférer de toute autre manière que ce soit avec les fonctions de sécurité du Service;</Text>
        <Text category='s2'>5.4.9. vous livrer à un encadrement (framing) non autorisé du Service ou à l’établissement d’un lien vers le Service;</Text>
        <Text category='s2'>5.4.10. interférer avec, perturber ou créer une charge excessive sur le Service ou les réseaux ou Services connectés au Service;</Text>
        <Text category='s2'>5.4.11. déchiﬀrer, décompiler, désassembler ou faire de l’ingénierie inverse de tout logiciel faisant partie ou constituant de quelque manière que ce soit une partie du Service;</Text>
        <Text category='s2'>5.4.12. tenter de contourner les mesures du Service conçues pour éviter ou restreindre l'accès au Service ou à une partie du Service;</Text>
        <Text category='s2'>5.4.13. téléverser ou distribuer de quelque manière que ce soit des ﬁchiers contenant des virus, des vers, des chevaux de Troie, des ﬁchiers corrompus ou tout autre logiciel ou programme similaire susceptible d’endommager le fonctionnement’s de l’ordinateur d’une autre personne;</Text>
        <Text></Text>
        <Text category='h5' style={styles.question}>19. COORDONNÉES</Text>
        <Text>Contact par courriel: support@unimeal.com</Text>
        <Text></Text>
        <Text>Dernière mise à jour: 23/04/2020</Text>
      </Layout>
      </ScrollView>
    </SafeAreaView>   
  )
}

export default Conditionsdeservice

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