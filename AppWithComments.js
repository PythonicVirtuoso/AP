//imports functions from different libraries
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { getNewColor } from "./getNewColor.js";
import { Text, View, Button, Image } from "react-native";

//exports the function "app"
export default function App() {
  /*creates two constant variables and assigns them the setState function and a numeric value
  so the numeric value can be dynamically changed later on.
  */
  const [value, setValue] = useState(0);
  const [totalTaps, setTotalTaps] = useState(0);
  const [color, setColor] = useState("#f0f8ff");

  /* creates a variable and a function, and the values in the function are assigned to the variable.
  The aforementioned dynamic variables are set to increment with 1 in this function.
  */
  const incrementValue = () => {
    setValue(value + 1);
    setTotalTaps(totalTaps + 1);

    //this simply prints out what happens in this function.
    console.log("Value: " + (value + 1));
  };

  //same as above
  const decrementValue = () => {
    setValue(value - 1);
    setTotalTaps(totalTaps + 1);

    console.log("Value: " + (value - 1));
  };

  /*similar as above but instead of incrementetion it uses a function to
  change background colour.
  */
  const setBackgroundColor = () => {
    /* imports a function that gives you antiquewhite when you press aliceblue, then aliceblue
    when you press antiquewhite
    */

    setColor(getNewColor(color));

    console.log("Colour: " + color);
  };

  const styles = {
    container: {
      flex: 1,
      backgroundColor: color,
      alignItems: "center",
      justifyContent: "center",
    },
  };

  //the code that is returned to the script
  return (
    <View
      //the style of the script
      style={styles.container}
    >
      <View>
        <Image
          //an image thats added to the script with style by use of the "Image" import.
          source={{
            uri: "https://m.media-amazon.com/images/I/71uJRRJgeiL._AC_SS450_.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text
        /*adds the value variable into expo with style */ style={{
          fontSize: 60,
          marginBottom: -20,
        }}
      >
        {value}
      </Text>
      <Text
        /*same but with totalTaps variable*/ style={{
          fontSize: 12,
          padding: 20,
          color: "grey",
        }}
      >
        {"Total taps: " + totalTaps}
      </Text>
      <StatusBar style="auto" />
      <View
        /*creates buttons that allows you to press your functions in the app*/ style={{
          flexDirection: "row",
        }}
      >
        <Button onPress={decrementValue} title="Decrease" />
        <Button onPress={incrementValue} title="Increase" />
      </View>
      <View>
        <Button onPress={setBackgroundColor} title="Colour" />
      </View>
    </View>
  );
}
