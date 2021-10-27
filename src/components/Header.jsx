import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

const Header = () => {
  return (
    <View style={style.wrapper}>
      <Text style={style.title}>FOREST</Text>
    </View>
  )
}

export default Header;


const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 80,
    paddingTop: 40,
    paddingBottom: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
})