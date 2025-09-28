import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

 function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Welcome' 
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name='SignIn' 
                component={SignIn}
            />
        </Stack.Navigator>
    );
}

export default Routes;