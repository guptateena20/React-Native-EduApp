import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>John Doe</Text>
      <Text style={styles.paraStyle}>I am a React native developer 😀</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU' }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About me</Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum mauris dui, eu convallis ipsum eleifend sit amet. Praesent fermentum, tellus quis pharetra rhoncus, velit sem mollis justo, ac dictum augue odio non felis.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Networks </Text>

      <View style={styles.menuContainer}>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://www.instagram.com/')}
        >
          <Image
            style={styles.iconStyle}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://www.youtube.com/')}
        >
          <Image
            style={styles.iconStyle}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/187/187210.png' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://www.discord.com/')}
        >
          <Image
            style={styles.iconStyle}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/906/906361.png' }}
          />
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  aboutContainer : {
    display : 'flex', 
    alignItems : 'center'
  }, 

  imgStyle : {
    width : 150,
    height : 150,
    borderRadius : 75
  },
  mainHeader : {
    fontSize : 18,
    color : '#344055',
    textTransform : 'uppercase',
    fontWeight : 500,
    marginTop : 40,
    marginBottom : 10,
  }, 
  paraStyle : {
    fontSize : 18,
    color : '#7d7d7d',
    paddingBottom : 30
  }, 
  aboutLayout : {
    backgroundColor : '#4c5dab',
    paddingHorizontal : 30,
    marginVertical : 30,
  },
  aboutSubHeader : {
    fontSize : 18,
    color : '#fff',
    textTransform : 'uppercase',
    fontWeight : 500,
    marginVertical : 15,
    lineHeight : 30,
    alignSelf : 'center'
  },
  aboutPara : {
    color : '#fff'
  },
  menuContainer : {
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    marginBottom : 10
  }, 
  iconStyle : {
    width : '100%',
    height : 50,
    aspectRatio : 1
  }
})

export default About
