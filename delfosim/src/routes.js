import React from  'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerActions, DrawerNavigatorItems } from 'react-navigation-drawer';

import { Container, Body, Header, Content } from 'native-base';
import { Avatar } from 'react-native-elements';

import Login from  './pages/Login';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout'

const stackConfig = {
    defaultNavigationOptions: ({ navigation }) => {
        return{
            headerStyle:{
                backgroundColor:'#000',
            },

            headerTintColor: "#fff",

            headerLeft: () => (
                <TouchableOpacity
                    onPress= {() => {
                    navigation.dispatch(DrawerActions.toggleDrawer());
                }}>
                    <Image style={styles.btnMenu} source={require('../src/imgs/drawer.png')} />
                
                </TouchableOpacity>
            
            ),
        };
    }
}

const DashboardNavigation = createStackNavigator(
    {
        Dashboard: Dashboard,
    },
    stackConfig,
);


const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header  style={styles.drawerHeader}>
            <Body style={styles.drawerBody}>
            <Avatar
           
             size="xlarge"
             rounded
                source={{                   
                    uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                }}
                showEditButton
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            /> 
            </Body>
        </Header>
        <Content>
            <DrawerNavigatorItems {...props} />
            
        </Content>
      
    </Container>
)


const DrawerNavigator = createSwitchNavigator({
    Login : Login,
    
    Dashboard: createDrawerNavigator({
        Dashboard: DashboardNavigation,
        Logout : Logout,        
    },{
        initialRouteName: 'Dashboard',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }),
   

})

const styles = StyleSheet.create({
    btnMenu: {
      width: 25,
      height: 25,
      marginLeft: 5,
      tintColor:"#fff"
    },
    
    drawerBody:{       
        alignItems: 'center',
        justifyContent: 'center'
    },

    drawerHeader:{       
       height: 200,
       backgroundColor: '#000'
    },

    drawerAvatar:{
        height: 150,
        width: 150,
        borderRadius: 100
    }
  });

export default Routes = createAppContainer( DrawerNavigator );