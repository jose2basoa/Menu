import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme } from "react-native";

const Drawer = createDrawerNavigator();

import TelaInicio from "./telas/TelaInicio";
import TelaSobre from "./telas/TelaSobre";
import TelaContato from "./telas/TelaContato";

function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={TelaInicio} />
        <Drawer.Screen name="Sobre" component={TelaSobre} />
        <Drawer.Screen name="Contato" component={TelaContato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
