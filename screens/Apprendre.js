import { StyleSheet, Image, ScrollView, RefreshControl } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Card, Divider, Layout, Spinner, Text } from '@ui-kitten/components'
import { BASE_URL } from '../client-config'
import axios from 'axios'
import Article from './Article'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Apprendre = ({ navigation }) => {
  
  const [isLoaded, setIsLoaded] = useState(true)
  const [posts, setPosts] = useState([])
  const [urlArray, setUrlArray] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  const requestArticles = async () => {
    try {
      var params = {
        url: `${BASE_URL}/wp-json/wp/v2/posts`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      const res = await axios(params);
      setPosts(res.data)
      setIsLoaded(false)
    }
    catch(err) {
      console.error(err);
    }
  }

  const requestImages = async (element) => {
    setIsLoaded(true)
    try {
      var params2 = {
        url: `${BASE_URL}/wp-json/wp/v2/media/${element}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      axios(params2)
      .then(rep => {
        let uri = rep.data.media_details.sizes.medium.source_url
        let idf = rep.data.id
        setUrlArray(urlArray => [...urlArray, {idf, uri}])
      })
        .catch(err => console.error(err));
      }
      catch(err) {
        console.error(err);
      }
    setIsLoaded(false)
  }

  function requestFM(fm) {
    const item = urlArray.find(o => o.idf === fm);
    return item?.uri
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false))
  }, [])

  useEffect(() => {
    requestArticles()
      setUrlArray([])
      for(let i =0; i < posts.length; i++){
        requestImages(posts[i].featured_media)
      }
  }, [isLoaded])

  if(isLoaded) {
    return (
      <Layout style={styles.indicator} level='1'>
        <Spinner size='giant'/>
      </Layout>
    )
  }
  return (
    <Layout style={styles.container} level='2'>
      <Text category='h1'>  Apprendre</Text>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        
        {posts.map((post, index) => (
          <Card key={index} appearance="outline" style={styles.details} onPress={() => navigation.navigate('Article', {post: post.id, fm: requestFM(post.featured_media)})}>
            <Image
              style={styles.header}
              source={{
                uri: requestFM(post.featured_media),
              }}
            />
            <Text category='s1'>{post.title.rendered}</Text>
          </Card>
        ))}
      
      </ScrollView>
    </Layout>
  )
}

export default Apprendre

const styles = StyleSheet.create({
  indicator: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    borderColor:0,
    marginTop: 8,
    backgroundColor: '#f7f9fc',
  },
  title: {
    marginHorizontal: 4,
    alignItems: 'center',
  },
  header: {
    height: 226,
    width: 339,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
  },
});