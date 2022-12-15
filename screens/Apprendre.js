import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, Layout, Spinner, Text } from '@ui-kitten/components'
import { BASE_URL } from '../client-config'
import axios from 'axios'
import Article from './Article'

const Apprendre = ({navigation }) => {
  
  const [isLoaded, setIsLoaded] = useState(true)
  const [posts, setPosts] = useState([])
  const [urlArray, setUrlArray] = useState([])

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

  useEffect(() => {
    requestArticles()
      setUrlArray([])
      for(let i =0; i < posts.length; i++){
        requestImages(posts[i].featured_media)
      }
  }, [isLoaded])

  if(isLoaded) {
    return (
      <Layout style={styles.container} level='1'>
        <Spinner size='giant'/>
      </Layout>
    )
  }
  return (
    <Layout style={styles.container} level='1'>
      <ScrollView>
       {posts.map((post, index) => (
        <Card key={index} style={styles.details}>
          <Image
            style={styles.header}
            source={{
              uri: requestFM(post.featured_media),
            }}
          />
          <Text category='s1'>{post.title.rendered}</Text>
          <Button size='small' style={styles.readmorebtn} onPress={() => navigation.navigate('Article', {post: post.id, fm: requestFM(post.featured_media)})}>Lire plus</Button>
        </Card>
       ))}
      </ScrollView>
    </Layout>
  )
}

export default Apprendre

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  title: {
    marginHorizontal: 4,
  },
  readmorebtn: {
    marginVertical: 4,
  },
  header: {
    height: 226,
    width: 339,
    flexDirection: 'row',
    alignItems: 'center',
  },
});