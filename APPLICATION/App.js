import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar,BackHandler } from 'react-native';
import { d } from './design';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import New from './components/new';


const App = ({ navigation }) => {
  const [statusBarVisible, setStatusBarVisible] = useState(true);
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const handleScreenPress = () => {
    setStatusBarVisible(true); };

  const hideBottomNavigationBar = statusBarVisible ? true : false;

  const handleButtonPress = () => {
    console.log('Bouton appuyé !');
    navigation.navigate('New');
  }; 
  
  const handleDefiPress = () => {
    console.log('Bouton appuyé !');
    navigation.navigate('ChallengeScreen');
  };

  const handleQuitPress = () => {
    console.log('Bouton "Quitter" appuyé !');
    BackHandler.exitApp();
  };


  return (
    <View style={d.container}>


      <TouchableOpacity onPress={handleScreenPress} style={{ flex: 1 }}>
        <View style={d.fullScreen}>
          
          <Image source={require('./assets/AA.png')} style={{ width: 300, height: 300, borderRadius: 50, marginBottom: 100}} />

          <TouchableOpacity style={[d.button0, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  }]} onPress={handleButtonPress}>
            <Text style={d.buttonText}>Nouvelle partie</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[d.button1, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  }]} onPress={handleDefiPress}>  
            <Text style={d.buttonText}>Défi du jour</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[d.button2, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  }]} onPress={handleQuitPress}>
            <Text style={d.buttonText}>Quitter</Text>
          </TouchableOpacity>
        </View>
        
        <StatusBar hidden={hideBottomNavigationBar} />
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="New" component={New} options={{ headerShown: false }} />
      
        <Stack.Screen name="App" component={App} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
