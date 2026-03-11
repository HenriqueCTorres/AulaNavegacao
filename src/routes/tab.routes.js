import { createBottomTabNavigator, CreateBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Service from "../screens/Service";

// Criando a constante Tab para configurar nossa navegação
const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="login" component={Login} />
            <Tab.Screen name="service" component={Service} />
        </Tab.Navigator>
    )
}
