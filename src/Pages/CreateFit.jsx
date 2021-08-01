import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import Datadisplay from "./Datadisplay";
import { Picker } from "@react-native-picker/picker";

export function CreateFit(props) {
  const [clothing, setClothing] = useState("Outerwear");
  const [loaded, setLoaded] = useState(false);
  const [loader, setLoader] = useState(true);

  const load = () => {
    setTimeout(() => setLoaded(true), 1500);
  };

  return (
    <SafeAreaView>
      {loaded ? (
        <View>
          <View>
            <Datadisplay />
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.TextTagline}> Pick your fit </Text>
          <View>
            <Picker
              selectedValue={clothing}
              onValueChange={(currentClothing) => setClothing(currentClothing)}
            >
              <Picker.Item label="Outerwear" value="Outerwear" />
              <Picker.Item label="Activewear" value="Activewear" />
              <Picker.Item label="Swimwear" value="Swimwear" />
              <Picker.Item label="Baby" value="Baby" />
              <Picker.Item label="Boy" value="Boy" />
              <Picker.Item label="Girl" value="Girl" />
              <Picker.Item label="Sleepwear" value="Sleepwear" />
              <Picker.Item label="Bakewear" value="Bakewear" />
            </Picker>
            <Text></Text>
          </View>
          <Button title="Submit" onPress={load} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  TextTagline: {
    marginTop: 200,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    fontFamily: "Verdana",
  },
});
