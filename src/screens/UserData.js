import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserData = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const getUserData = async () => {
    try {
      const res = await axios.get('https://thapatechnical.github.io/userapi/users.json')
      setUserData(res.data)
      setIsLoading(false)
    }
    catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <View style = {{display : 'flex', alignItems : 'center'}}>
      <Text style = {styles.mainHeader}>List of Students</Text>
      <FlatList
      keyExtractor={(item) => item.id}
        data={userData}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <View style={styles.imgContainer}>
                <Image
                  source = {{ uri : item.image}}
                  style={styles.imgStyle}
                />
              </View>

              <View style = {{paddingHorizontal :  10, paddingBottom : 10}}>
                <View style = {styles.bioDataContainer}>
                    <Text style = {styles.bioData}>Biodata</Text>
                    <Text style = {styles.idNumber}>
                      {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                    </Text>
                </View>

                <View style = {styles.mainContain}>
                    <Text style = {styles.myName}>Name : {item.name}</Text>
                    <Text style = {styles.myName}>Email : {item.email}</Text>
                    <Text style = {styles.myName}>Phone : {item.mobile}</Text>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    width : '100%',
    minHeight : '100%',
    paddingVertical : 50,
    backgroundColor : '#ebedee'
  },
  card : {
    width : 270,
    height : "auto",
    backgroundColor : '#fff',
    margin : 40,
    borderRadius : 5
  },
  bioDataContainer : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    backgroundColor : '#353535',
    paddingVertical : 10,
  }, 
  idNumber : {
    fontSize : 20,
    color : 'rgba(255, 255, 255, 0.5)',
    paddingRight : 10,
  },
  bioData : {
    fontSize : 25,
    color : '#fff',
    paddingLeft: 10
  }, 
  mainHeader : {
    fontSize : 30,
    color : '#a18ce5',
    textAlign : 'center',
    marginTop : 10
  }, 
  imgContainer : {
    padding : 10
  },
  imgStyle : {
    width : '100%',
    height : undefined,
    aspectRatio : 1
  },
  mainContain : {
    paddingHorizontal : 10,
    backgroundColor : '#353535',
    borderBottomLeftRadius : 5,
    borderBottomRightRadius : 5
  }, 
  myName : {
    fontSize : 14,
    color : '#fff',
    marginBottom : 10,
    alignSelf : 'flex-start',
    textTransform : 'capitalize',
  }
})

export default UserData
