import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

const Question = ({ question, total }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.question}>{question.question}</Text>
      <Text style={styles.count}>{question.id} / {total}</Text>
    </View>
  )
}

export default Question;


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  question: {
    fontSize: 24,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  count: {
    // marginTop: 'auto',
    alignSelf: 'flex-end',
    padding: 20,
    alignSelf: 'center',
  },
})