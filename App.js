// Imports
import React,{ useState, useEffect } from 'react';
import {View,StyleSheet,Text,Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


const App = () => {// Executar

  const [toggle,setToggle] = useState(false);// Toggle

  const mudaToggle = () => setToggle( oldToggle => !oldToggle);// Troca Toggle

  useEffect( () => {// liga flash do celular
    Torch.switchState(toggle)
  }, [toggle])


  useEffect(() => {// Liga o flash quando chacoalhado
    
    const evento = RNShake.addListener( () => {
      setToggle( oldToggle => !oldToggle);
    })

    return () => evento.remove();

  }, [])


  return (
    <View style={toggle ? estilo.container : estilo.containerLight}>
      
      <TouchableOpacity onPress={mudaToggle}>


            <Image 
            style={toggle ? estilo.lampadaOff : estilo.lampadaOn} 
            source={ toggle ?
                      require('./assets/icons/eco-light-off.png'):
                      require('./assets/icons/eco-light.png')}/>

            <Image 
            style={estilo.dioLogo} 
            source={ toggle ?
                      require('./assets/icons/logo-dio-white.png'):
                      require('./assets/icons/logo-dio.png')}/>

      </TouchableOpacity>

    </View>
  );
};
export default App;//


// Estilo
const estilo = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  containerLight:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lampadaOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lampadaOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
    height: 200,
  },

   

});


