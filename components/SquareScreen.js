import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SqaureScreen() {

  const [side, setSide] = useState('')
  const [area, setArea] = useState('')
  
  function calcArea(){
    let res = (side**2)
    setArea(res)
  }

  function reset(){
    setSide('')
    setArea('')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.cim}>Négyzet</Text>

      <View style={styles.body}>
        <Text style={styles.szoveg}>Oldal</Text>
        <TextInput
          style={styles.mezo}
          onChangeText={text => setSide(text)}
          value = {side}
        />

        <Pressable
          onPress={calcArea}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            SZÁMÍT
          </Text>
        </Pressable>
        
        <Text style={styles.szoveg}>Terület</Text>
        <TextInput
          style={styles.mezo}
          value = {area}
        />

        <Pressable
            onPress={reset}
            style={styles.button}>
            <Text style={styles.buttonText}>VISSZAÁLLÍT</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Ferencsik Boglárka, 2024</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cim: {
    color: '#800040',
    fontWeight: 800,
    fontSize: 25,
    marginTop: 10,
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  szoveg:{
    color: '#800040',
    fontWeight: 700,
    paddingBottom: 10,
    fontSize: 18,
  },

  mezo: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    color: '#800040',
    fontWeight: 600,
    marginBottom: 20,
    borderColor: '#800040',
    borderWidth: 1,
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3, 
  },

  button: {
    backgroundColor: '#800040',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 40,
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3, 
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 700,
  },

  footer: {
    backgroundColor: '#800040',
    width: '100%',
    opacity: '80%',
    padding: 5
  },

  footerText: {
    color: 'white',
    textAlign: 'center'
  },
});
