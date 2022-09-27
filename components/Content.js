import React, { useState, useEffect } from "react";
import { Button, RadioButton, SafeAreaView, StyleSheet, TextInput, Text, Image, View, TextInputComponent } from "react-native";



var tabs = ['posts', 'comment', 'album']

//useEffect(callback)
//-Gọi callback mỗi khi component re-render
//-Gọi callback sau khi component thêm Component vào DOM
//useEffect(callback, [])
//-Chỉ gọi callback 1 lần sau khi component mount
//useEffect(callback, [deps])

//---------------------
//1. callback luôn được gọi khi component mount
//2. callback được gọi lại mỗi khi dependency thay đổi





const Content = () => {

  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState([]);
  const [typea, setTypeA] = useState('posts');


  function setTextInput(textnew) {
    //console.log(textnew);
    setTitle(textnew)

  }


  useEffect(() => {
    console.log('mount');

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(todos => setTodo(todos))

  }, [typea])

  return (
    <View>

      {
        tabs.map(tab => (
          <Button key={tab}
            style={{
              marginTop: 10,
              borderColor: 'green', borderWidth: 2
            }}
            title={tab}
            
            >

          </Button>))
      }

      <TextInput
        style={styles.border}
        onChangeText={setTextInput}
      >
      </TextInput>


      {console.log('render')}
      <Button title="click to change type!">

          </Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  border: {
    borderWidth: 2,
    borderColor: 'red'

  }

});

export default Content;