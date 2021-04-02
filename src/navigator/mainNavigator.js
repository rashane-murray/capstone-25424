import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile221391Navigator from '../features/UserProfile221391/navigator';
import Maps221372Navigator from '../features/Maps221372/navigator';
import Settings221350Navigator from '../features/Settings221350/navigator';
import Settings221335Navigator from '../features/Settings221335/navigator';
import NotificationList221334Navigator from '../features/NotificationList221334/navigator';
import Maps221333Navigator from '../features/Maps221333/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile221391: { screen: UserProfile221391Navigator },
Maps221372: { screen: Maps221372Navigator },
Settings221350: { screen: Settings221350Navigator },
Settings221335: { screen: Settings221335Navigator },
NotificationList221334: { screen: NotificationList221334Navigator },
Maps221333: { screen: Maps221333Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
