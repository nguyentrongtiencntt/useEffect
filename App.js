import React, { useState } from "react";
import { Button, View, StyleSheet, Touchable } from "react-native";
import Content from "./components/Content";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        onPress={()=>setShow(!show)}
        title="Toggle">
      </Button>
      
      {show && <Content></Content>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50

  }

});

export default App;