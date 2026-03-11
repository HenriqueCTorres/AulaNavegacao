import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Service from "../screens/Service";
import { Feather } from "@expo/vector-icons"

// Criando a constante Tab para configurar nossa navegação
const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="home" component={Home} options={{tabBarIcon:()=><Feather name="home" color="grey" size={20}/>, tabBarLabel: "Inicio", tabBarLabelStyle:{fontSize:13, color: "grey"}}}/>
            <Tab.Screen name="login" component={Login} options={{tabBarIcon:()=><Feather name="log-in" color="red" size={20}/>, tabBarLabel: "Login", tabBarLabelStyle:{fontSize:13, color: "red"}}}/>
            <Tab.Screen name="service" component={Service} options={{tabBarIcon:()=><Feather name="archive" color="blue" size={20}/>, tabBarLabel: "Service", tabBarLabelStyle:{fontSize:13, color: "blue"}}}/>
        </Tab.Navigator>
    )
}
