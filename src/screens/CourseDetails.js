import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import courses from '../api/Course';

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;
  // console.warn(id);

  const selectedCourse = courses.find((element) => {
    return id === element.id
  })

  // console.warn(selectedCourse);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>

        <View>
          <Image
            style={styles.cardImage}
            source={selectedCourse.image}
            resizeMode='contain'
          />
        </View>

        <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
        <Text style={styles.description}>{selectedCourse.description}</Text>
        <Text style={[styles.description, styles.subCourse]}>{selectedCourse.course1}</Text>
        <Text style={[styles.description, styles.subCourse]}>{selectedCourse.course2}</Text>
        <Text style={[styles.description, styles.subCourse]}>{selectedCourse.course3}</Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.price}>{selectedCourse.price}</Text>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress = {() => navigation.navigate('Join Us')}
          >
              <Text style = {styles.buttonText}>Join now</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    paddingHorizontal : 20
  },
  courseContainer : {
    backgroundColor : '#fff',
    paddingHorizontal : 30,
    marginTop : 40,
    textAlign : 'center',
    borderRadius : 5,
    shadowColor : 'gray',
    elevation : 8,
    shadowRadius : 8,
    shadowOffset : {width : 0, height : 0},
    shadowOpacity : 0.5,
  },
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  }, 
  mainHeader : {
    textAlign : 'center',
    paddingBottom : 15,
    textTransform : 'uppercase',
    color : '#344055',
    fontSize : 22,
    fontWeight : 500
  }, 
  description : {
    textAlign : 'center',
    fontSize : 15,
    lineHeight : 20,
    color : '#7d7d7d',
    paddingBottom : 15
  },
  subCourse : {
    color : '#344055',
    textTransform : 'uppercase',
    fontWeight : 500,
    fontSize : 16
  },
  buttonContainer : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center'
  },
  price : {
    backgroundColor : '#344055',
    color : '#eee',
    paddingHorizontal : 15,
    paddingVertical : 10,
    fontSize : 18,
    borderRadius : 5,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 20,
    marginRight : 2
  }, 
  buttonStyle : {
    backgroundColor : '#809fff',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderRadius : 5,
    marginBottom : 20
  },
  buttonText : {
    fontSize : 18,
    color : '#eee',
    fontWeight : 500
  }
})

export default CourseDetails
