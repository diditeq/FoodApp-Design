import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreens from './source/navigation/StackScreens';


export default function App() {
  return (
     <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );

};
