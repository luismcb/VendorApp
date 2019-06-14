/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList,View, SafeAreaView,Image} from 'react-native';
import {DrawerNavigator,createDrawerNavigator,DrawerItems} from 'react-navigation';
import Home from './app/views/Home';
import Users from './app/views/Users';
import Icon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
// export default class App extends Component {
//   render() {
//     return (
//         <Home />
//     );
//   }
//};

const CustomDrawerComponent= (props)=>(
    <SafeAreaView>
      <View style={{height:130, padding:5  }}>
          <Image source={require('./app/assets/icons/native_logo.png')} style={{height:120,width:120, alignSelf:'center'}} />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );



const appNavigator= createDrawerNavigator({
  Home:{
    screen: Home,
    navigationOptions:{
      drawerIcon:({tintColor})=>(
        <Icon style={{alignSelf:'center'}} name="home" size={25}  color={tintColor} />
      )
    }
  },
  Users:{
    screen: Users,
    navigationOptions:{
      drawerIcon:({tintColor})=>(
        <Icon style={{alignSelf:'center'}} name="user" size={25}  color={tintColor} />
      )
    }
  }
},{
  contentComponent: CustomDrawerComponent
});

const App= appNavigator;

export default App;