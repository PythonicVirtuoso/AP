import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function App() {
  const [value, setValue] = useState(0);
  const [totalTaps, setTotalTaps] = useState(0);
  const [color, setColor] = useState("#00ffff");

  const incrementValue = () => {
    setValue(value + 1);
    setTotalTaps(totalTaps + 1);

    console.log("Value: " + (value + 1));
  };

  const decrementValue = () => {
    setValue(value + 1);
    setTotalTaps(totalTaps + 1);

    console.log("Value: " + (value - 1));
  };

  const backgroundColor = () => {
    setColor(color);

    console.log("Value: " + color);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/71uJRRJgeiL._AC_SS450_.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text style={{ fontSize: 60, marginBottom: -20 }}>{value}</Text>
      <Text style={{ fontSize: 12, padding: 20, color: "grey" }}>
        {"Total taps: " + totalTaps}
      </Text>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row" }}>
        <Button onPress={decrementValue} title="Decrease" />
        <Text> </Text>
        <Button onPress={incrementValue} title="Increase" />
      </View>
      <View>
        <Button onPress={backgroundColor} title="Colour" />
      </View>
    </View>
  );
}
