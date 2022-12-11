import { View, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, Layout, Spinner, Text } from '@ui-kitten/components'
import { BASE_URL } from '../client-config'
import axios from 'axios'

const Apprendre = () => {
  const [posts, setPosts] = useState([])
  const [postIMG, setPostIMG] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)

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

  const requestImages = async () => {
    setPostIMG([])
    await posts.forEach(array => {
      var params2 = {
        url: `${BASE_URL}/wp-json/wp/v2/media/${array.featured_media}`,
        method: 'get',
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
      }
      axios(params2)
      .then(rep => {
        let url = rep.data.media_details.sizes.medium.source_url
        setPostIMG(postIMG => [...postIMG, url])
      })
      .catch(err => console.error(err));
    });
  }
  useEffect(() => {
    requestArticles()
    requestImages()
    console.log(posts)
    console.log(postIMG)
  }, [])

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
              uri: postIMG[index],
            }}
            />
          <Text category='s1'>{post.title.rendered}</Text>
          <Button size='small' style={styles.readmorebtn}>Lire plus</Button>
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