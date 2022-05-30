import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Button, Image } from "react-native";

export default function App() {
  const [value, setValue] = useState(0);
  const [totalTaps, setTotalTaps] = useState(0);
  const [color, setColor] = useState(FrenchFlag);

  const incrementValue = () => {
    setValue(value + 1);
    setTotalTaps(totalTaps + 1);

    console.log("Value: " + (value + 1));
  };

  const decrementValue = () => {
    setValue(value - 1);
    setTotalTaps(totalTaps + 1);

    console.log("Value: " + (value - 1));
  };

  const setBackgroundColor = () => {
    if (color == FrenchFlag) {
      setColor(GermanFlag);
    } else {
      setColor(FrenchFlag);
    }

    console.log("Colour: " + color);
  };

  const FrenchFlag = () => {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
          },
        ]}
      >
        <View style={{ flex: 1, backgroundColor: "blue" }} />
        <View style={{ flex: 2, backgroundColor: "white" }} />
        <View style={{ flex: 3, backgroundColor: "red" }} />
      </View>
    );
  };

  const GermanFlag = () => {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <View style={{ flex: 1, backgroundColor: "black" }} />
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 1, backgroundColor: "yellow" }} />
      </View>
    );
  };

  const styles = {
    container: {
      flex: 1,
      backgroundColor: color,
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/71uJRRJgeiL._AC_SS450_.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text style={{ fontSize: 60, marginBottom: -20 }}> {value} </Text>
      <Text style={{ fontSize: 12, padding: 20, color: "grey" }}>
        {"Total taps: " + totalTaps}
      </Text>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row" }}>
        <Button onPress={decrementValue} title="Decrease" />
        <Button onPress={incrementValue} title="Increase" />
      </View>
      <View>
        <Button onPress={setBackgroundColor} title="Colour" />
      </View>
    </View>
  );
}
