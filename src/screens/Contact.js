import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if(!name && !email && !number && !message){
      alert('Please fill all the details.')
    }
    else{
      alert(`Thank You ${name} for joining us.`)
      navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>
        Level up your knowledge
      </Text>

      <Text style={styles.description}>
        You can reach us anytime via test@gmail.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder='Enter your name'
        value = {name}
        onChangeText={(userName) => setName(userName)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder='exmple@gmail.com'
        value = {email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your phone number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder='+91 00000-00000'
        value = {number}
        onChangeText={(userNum) => setNumber(userNum)}
        />
      </View>

      <View style = {styles.inputContainer}>
        <Text style = {styles.labels}>Enter your name</Text>
        <TextInput
        style = {[styles.inputStyle, styles.multilineStyle]}
        placeholder='Any message'
        numberOfLines={5}
        multiline = {true}
        value = {message}
        onChangeText={(userMsg) => setMessage(userMsg)}
        />
      </View>

       {/* checkbox  */}

       <View style = {styles.wrapper}>
        <Checkbox
        value = {agree}
        onValueChange={() => setAgree(!agree)}
        color={agree ? '#4630EB' : undefined}
        />
        <Text style = {styles.wrapperText}>
          I have read and agree with all the T&Cs.
        </Text>
       </View>

       {/* submit button */}

       <TouchableOpacity
       style = {[styles.buttonStyle, {
        backgroundColor : agree ? '#4630EB' : 'grey'
       }]}
       disabled = {!agree}
       onPress={submit}
       >
        <Text style = {styles.buttonText}>Join Us</Text>
       </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    height : '100%',
    paddingHorizontal : 30,
    backgroundColor : '#fff'
  },
  mainHeader : {
    fontSize : 20,
    color : '#344055',
    fontWeight : 500,
    paddingTop : 20,
    paddingBottom : 15,
    fontWeight : 500
  }, 
  description : {
    fontSize : 20,
    color : '#7d7d7d',
    paddingBottom : 20,
    lineHeight : 25,
    fontWeight : 400
  },
  inputContainer : {
    marginTop : 20
  },
  labels : {
    fontWeight : 500,
    // color : '#7d7d7d',
    paddingBottom : 5,
    lineHeight : 25,
    color : 'black',
    fontSize : 16
  },
  inputStyle : {
    borderWidth : 1,
    borderColor : 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal : 15,
    paddingVertical : 5,
    borderRadius : 3
  },
  multilineStyle : {
    paddingVertical : 4
  }, 
  buttonStyle : {
    borderRadius : 5,
    paddingVertical : 10,
    paddingHorizontal : 18,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    marginVertical : 30
  },
  buttonText : {
    color : '#eee',
    fontSize : 18,
    fontWeight : 500
  },
  wrapper : {
    display : 'flex',
    flexDirection : 'row',
    marginTop : 20,
  },
  wrapperText : {
    marginLeft : 10,
    color : '#7d7d7d',
  }
})

export default Contact
