import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native'

const ButtonNext = ({title = 'Next', onPress}) => {
  const goNext = () => onPress()

  return (
    // <View style={styles.wrapper}>
    //   <Button style={styles.button} color='#fff' title={title} onPress={goNext} />
    // </View>

    <TouchableOpacity style={styles.wrapper} onPress={goNext} activeOpacity={0.75}>
      <Text style={styles.button}> {title}</Text>
    </TouchableOpacity>


    // <View style={styles.wrapper}>
    //   <Pressable style={styles.button} onPress={goNext}>
    //     <Text style={styles.text}>{title}</Text>
    //   </Pressable>
    // </View>
  )
}

export default ButtonNext;


const styles = StyleSheet.create({
  wrapper: {
    marginTop: 'auto',
    width: Dimensions.get('window').width - 40,
    // width: 240,

    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    fontSize: 20,
    color: '#fff',
  },
})