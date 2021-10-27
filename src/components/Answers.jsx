import React from 'react';
import {StyleSheet, Text, FlatList, ScrollView} from 'react-native'

const Answers = ({ data }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.title}>Ключ к тесту</Text>
      {data.map((el, idx) => (
      <Text key={idx} style={styles.text}>{idx + 1}. {el.answer}</Text>
      ))}
    </ScrollView>
  )
}

export default Answers;


const styles = StyleSheet.create({
  wrapper: {
  marginBottom: 40,
  paddingBottom: 140,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
  },
})