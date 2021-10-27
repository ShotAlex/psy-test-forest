import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

const Main = () => {
  return (
    <View style={style.wrapper}>
      <Text style={style.title}>ПРОГУЛКА ПО ЛЕСУ</Text>
      <Text style={style.desription}>Удивительные тесты порой создают психологи для простых людей, чтобы приоткрыть завесу тайны нашей личности в первую очередь для нас самих. Следующий тест прост до невозможного, но от того, насколько он попал точно в яблочко, у меня даже побежали мурашки по коже. А все, что нужно сделать, — это представить себе ситуацию и ответить на простые вопросы.</Text>
      <Text style={style.desription}>Для начала возьмите ручку и лист бумаги, чтобы записать свои ответы. Не старайтесь сильно анализировать вопросы, пишите, что приходит в голову, от души и от сердца. Можете даже делать зарисовки, если вам захочется…</Text>
    </View>
  )
}

export default Main;


const style = StyleSheet.create({
  wrapper: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginBottom: 20,
    fontSize: 24,
  },
  desription: {
    fontSize: 18,
    marginBottom: 8,

  }
})