import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import courses from '../api/Course'

const Course = ({navigation}) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={courses}
        renderItem={({ item }) => {
          return (
            <View style={styles.mainContainer}>
              <View style={styles.courseContainer}>
                <View>
                  <Image
                    source={item.image}
                    style={styles.cardImage}
                    resizeMode='contain'
                  />
                </View>

                <Text style={styles.mainHeader}>
                  {item.title}
                </Text>
                <Text style={styles.description}>
                  {item.description}
                </Text>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                  style = {styles.buttonStyle}
                  onPress={() => navigation.navigate('Details', {
                    courseId : item.id
                  })}
                  >
                    <Text style = {styles.buttonText}>Course Details</Text>
                  </TouchableOpacity>
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
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  }, 
  mainContainer : {
    paddingHorizontal : 20, 
  }, 
  courseContainer : {
    padding : 30,
    backgroundColor : 'rgba(255, 255, 255, 0.90)',
    textAlign : 'center',
    borderRadius : 5, 
    shadowColor : 'gray',
    shadowOffset : {width : 0, height : 0},
    shadowOpacity : 0.5,
    shadowRadius : 8,
    elevation : 8,
    marginVertical : 30
  }, 
  mainHeader : {
    fontSize : 22,
    color : '#344055',
    textTransform : 'uppercase',
    fontWeight : 500,
    paddingBottom : 15,
    textAlign : 'center'
  }, 
  description : {
    textAlign : 'center', 
    paddingBottom : 15,
    lineHeight : 20,
    fontSize : 16, 
    color : '#7d7d7d'
  },
  buttonContainer : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center'
  }, 
  buttonStyle : {
    backgroundColor : '#809fff',
    paddingVertical : 10,
    paddingHorizontal : 20,
    display : 'flex',
    justifyContent : 'center',
    textAlign : 'center',
    borderRadius : 5,
  },
  buttonText : {
    fontSize : 18,
    color : '#eee'
  }
})

export default Course
