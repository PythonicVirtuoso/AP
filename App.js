import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

const FrenchFlag = () => {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <View style={{ flex: 1, backgroundColor: "blue" }} />
      <View style={{ flex: 1, backgroundColor: "white" }} />
      <View style={{ flex: 1, backgroundColor: "red" }} />
    </View>
  );
};

const GermanFlag = () => {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <View style={{ flex: 1, backgroundColor: "black" }} />
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 1, backgroundColor: "yellow" }} />
    </View>
  );
};

export default function App() {
  const [value, setValue] = useState(0);
  const [totalTaps, setTotalTaps] = useState(0);
  const [showFrenchFlag, setShowFrenchFlag] = useState(false);
  const [color, setColor] = useState(`#f0f8ff`);

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
    if (color == `#f0f8ff`) {
      setColor(`#faebd7`);
    } else {
      setColor(`#f0f8ff`);
    }

    console.log("Colour: " + color);
  };

  const getFlag = () => {
    if (showFrenchFlag) {
      return <FrenchFlag />;
    } else {
      return <GermanFlag />;
    }
  };

  const toggleFlag = () => {
    setShowFrenchFlag(!showFrenchFlag);
  };

  const styles = {
    container: {
      flex: 1,
      backgroundColor: color,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    buttonOne: {
      alignItems: "center",
      backgroundColor: color,
      padding: 10,
      marginRight: 20,
    },
    buttonTwo: {
      alignItems: "center",
      backgroundColor: color,
      padding: 10,
      marginBottom: 20,
      marginRight: 20,
    },
    buttonThree: {
      alignItems: "center",
      backgroundColor: color,
      padding: 10,
      marginBottom: 20,
    },
  };

  return (
    <View style={styles.container}>
      {getFlag()}
      <Text style={{ fontSize: 60, marginBottom: -20 }}> {value} </Text>
      <Text style={{ fontSize: 12, padding: 20, color: "grey" }}>
        {"Total taps: " + totalTaps}
      </Text>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.buttonTwo} onPress={incrementValue}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonThree} onPress={decrementValue}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.buttonOne} onPress={toggleFlag}>
          <Text>Background</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={setBackgroundColor}>
          <Text>Colour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
