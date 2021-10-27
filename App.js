import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import Main from './src/components/Main';
import Question from './src/components/Question';
import Answers from './src/components/Answers';
import ButtonNext from './src/components/ButtonNext';
import { data } from './src/data/data'


export default function App() {
  const [currentQustion, setCurrentQuestion] = useState(0)
  const [btnTitle, setBtnTitle] = useState('Начать')

  let content = <Main />

  const nextQuestionHandler = () => {
    if (currentQustion > data.length) {
      setBtnTitle('Начать')
      setCurrentQuestion(0)
    } else {
      if (currentQustion === data.length) {
        setBtnTitle('Главная')
      } else if (currentQustion === data.length - 1) {
        setBtnTitle('Узнать ответы')
      } else {
        setBtnTitle('Далее')
      }

      setCurrentQuestion(old => old + 1)
    }
  }

  if (currentQustion > 0 ) {
    content = <Question question={data[currentQustion - 1]} total={data.length} />
  }

  if (currentQustion > data.length) {
    content = <Answers data={data} />
  }

  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.container}>
        {content}
        <ButtonNext title={btnTitle} onPress={nextQuestionHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
