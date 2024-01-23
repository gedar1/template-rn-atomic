import { StyleSheet, Text } from 'react-native'
import React,{ FC } from 'react'
import { ITextBasic } from '../../../typings/BasicTypes'


export const TextBasic : FC<ITextBasic> =({children}) => {
  return (
    <Text style={styles.container}>
      { children }
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});


export default TextBasic