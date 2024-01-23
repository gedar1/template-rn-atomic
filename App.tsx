import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {ButtonBasic, TextBasic,ViewBasic, PressableBasic} from '@atoms/';
import { colors } from '@colors/';



export default function App() {
  const handlePress = () => {
    console.log('hooola')
  }
  return (
    <View style={styles.container}>
      <ViewBasic style={styles.viewbasic}>
      <TextBasic> Hola a </TextBasic>
      </ViewBasic>
      <ButtonBasic 
      title='Click me'
      color={colors.primary.base}
      handleOnPress={handlePress}
      />
      <PressableBasic
      style= {styles.pressableStyle}
      >
      <TextBasic> Pressable </TextBasic>
      </PressableBasic>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewbasic:{
    marginTop:10,
    borderRadius:10,
    backgroundColor:colors.blue_Rgba_050
  },
  pressableStyle:{
    marginTop:10,
    width:'90%',
    height:'5%',
    borderRadius:10,
    backgroundColor:colors.primary.base
  }
});
