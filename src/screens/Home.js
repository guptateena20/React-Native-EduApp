import { StyleSheet, Text, View, Image } from 'react-native'
import Menu from '../component/Menu';

const Home = () => {
  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode='contain'
          source={require('../../assets/logo.jpeg')}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={[styles.mainHeader,
        {
          fontSize: 33,
          color: '#4c5dab',
          marginTop: 0
        }
        ]}>React Native App</Text>

        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center'
  },

  homeTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 3 / 2,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 90,
    borderRadius: 20
  },

  mainHeader: {
    fontSize: 30,
    color: '#244055',
    textTransform: 'uppercase',
    marginTop: 50
  },

  paraStyle: {
    textAlign: 'left',
    fontSize: 16,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26
  },

  lineStyle: {
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 0.3
  }
});


export default Home
