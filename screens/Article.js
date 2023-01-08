import { View, ScrollView, StyleSheet, ImageBackground, useWindowDimensions  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faClock } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Text, Button, Divider, Layout, TopNavigation, TopNavigationAction, Spinner } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BASE_URL } from '../client-config'
import axios from 'axios'
import RenderHTML from 'react-native-render-html'

const BackIcon = () => (
  <FontAwesomeIcon icon={ faArrowLeft } size={ 28 } />
);
const ClockIcon = () => (
  <FontAwesomeIcon icon={ faClock } />
);


const Article = ({navigation, route}) => {
    const {post, fm} = route.params
    const [isLoaded, setIsLoaded] = useState(true)
    const [PostItem, setPostItem] = useState([])
    const [PostTitle, setPostTitle] = useState([])
    const [PostContent, setPostContent] = useState([])
    const [PostDate, setPostDate] = useState("")
    const { width } = useWindowDimensions()
    
    const requestArticle = async (item) => {
      var params = {
        url: `${BASE_URL}/wp-json/wp/v2/posts/${post}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params);
      setPostItem(res.data)
      setPostTitle(res.data.title.rendered)
      setPostContent(res.data.content.rendered)
      setPostDate(res.data.date?.toString().slice(0, 10))
      setIsLoaded(false)
    }

    useEffect(() => {
      requestArticle(post)
    }, [isLoaded])

    const renderBackAction = () => (
      <TopNavigationAction
        icon={BackIcon}
        onPress={() => navigation.goBack()}
      />
    );
    
    const contentSource = {
      html: PostContent
    };
    
    if(isLoaded) {
      return (
        <Layout style={styles.spinnercontainer} level='1'>
          <Spinner size='giant'/>
        </Layout>
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation title="Blog" accessoryLeft={renderBackAction}/>
        <Divider />
        <ScrollView>
          <Layout style={styles.container} level='2'>
            <ImageBackground style={styles.headerContainer} source= {{uri : fm}} >
              <Avatar style={styles.authorPhoto} size='large' source= {{uri : fm}} />
            </ImageBackground>
          </Layout>
          <Layout style={styles.contentContainer} level='2'>
            <Text style={styles.titleLabel} category='h5'>{PostTitle}</Text>
            <RenderHTML contentWidth={width} source={contentSource} style={styles.contentContainer} />
          </Layout>
        </ScrollView>
        <Divider/>
        <Layout style={styles.activityContainer} level='1'>
            <ClockIcon />
            <Text
              style={styles.dateLabel}
              appearance='hint'
              category='c1'>
              {PostDate}
            </Text>
          </Layout>
      </SafeAreaView>
  )
}

export default Article

const styles = StyleSheet.create({
    spinnercontainer: {
      flex:1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center'
    },
    container: {
      flex:1
    },
    headerContainer: {
      height: 192,
      zIndex: 1,
    },
    authorPhoto: {
      position: 'absolute',
      left: 24,
      bottom: -24,
      borderWidth: 2,
      borderColor: 'border-basic-color-2',
    },
    titleLabel: {
      marginTop: 48,
      marginBottom: 24,
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 24,
    },
    dateIcon: {
      width: 24,
      height: 24,
      tintColor: 'text-hint-color',
    },
    dateLabel: {
      flex: 1,
      marginHorizontal: 8,
    },
    activityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    reactionButton: {
      paddingHorizontal: 0,
    },
  });