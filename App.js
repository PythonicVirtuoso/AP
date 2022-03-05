import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default class App extends React.Component {
  state = {
    value: 0,
    total_taps: 0
  }

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
      total_taps: this.state.total_taps + 1
    })
    console.log("Value: " + (this.state.value + 1))
  }

  decrementValue = () => {
    this.setState({
      value: this.state.value - 1,
      total_taps: this.state.total_taps + 1
    })
    console.log("Value: " + (this.state.value - 1))
  }
  
  
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/I/71uJRRJgeiL._AC_SS450_.jpg'
            }}
            style={{ width: 200, height: 200 }}
            />
        </View>
        <Text style={{ fontSize: 60, marginBottom: -20}}>{this.state.value}</Text>
        <Text style={{ fontSize: 12, padding: 20, color: 'grey'}}>{"Total taps: " + this.state.total_taps}</Text>
        <StatusBar style="auto" />
        <View style={{flexDirection:'row'}}>
          <Button onPress={this.decrementValue} title="Decrease" />
          <Text>   </Text>
          <Button onPress={this.incrementValue} title="Increase" />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});