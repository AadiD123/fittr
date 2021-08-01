import React, { useState } from "react";

import { View, Button, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const UploadPicture = () => {
  // const navigation = useNavigation();
  // const theme = useSelector((state: RootStateOrAny) => state.theme);

  //return (
  // <View>
  //   <AssetsSelector
  //     options={{
  //       assetsType: ["photo", "video"],
  //       maxSelections: 5,
  //       margin: 3,
  //       portraitCols: 4,
  //       landscapeCols: 5,
  //       widgetWidth: 100,
  //       widgetBgColor: "grey",
  //       // selectedBgColor: "red",
  //       spinnerColor: "#e32f45",
  //       videoIcon: {
  //         Component: Ionicons,
  //         iconName: "ios-videocam",
  //         color: "white",
  //         size: 20,
  //       },
  //       selectedIcon: {
  //         Component: Ionicons,
  //         iconName: "ios-checkmark-circle-outline",
  //         color: "white",
  //         bg: "white",
  //         size: 20,
  //       },
  //       // defaultTopNavigator: {
  //       //   selectedText: "Selected",
  //       //   continueText: "Finish",
  //       //   goBackText: "Back",
  //       //   midTextColor: "red",
  //       //   buttonStyle: validViewStyleObject,
  //       //   textStyle: validTextStyleObject,
  //       //   backFunction: goBack,
  //       //   doneFunction: (data) => onDone(data),
  //       // },
  //       noAssets: { Component:()=><Screen/> },
  //     }}
  //   />
  // </View>
  //);

  const [shirt, setShirt] = useState(null);
  const [pants, setPants] = useState(null);
  const [buttonStatus, setButtonStatus] = useState(true);
  var buttonExists = true;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setShirt(result.uri);
    }
  };
  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setPants(result.uri);
    }
  };

  // const openMediaSelectionScreen = () => {
  //   navigation.navigate(NavigateTo.CREATE.CREATE_DOG_IMAGES);
  // };
  const dl = () => {
    setShirt(null);
    setPants(null);
    setButtonStatus(false);
    buttonExists = false;
  };

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
      {buttonStatus ? (
        <View>
          <View>
            <Button title="Upload Shirt" onPress={pickImage} />
            <Text></Text>
            {shirt && (
              <Image
                source={{ uri: shirt }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>

          <View>
            <Button title="Upload Pants" onPress={pickImage2} />

            <Text></Text>

            {/* <Button title="Upload Pants" onPress={pickImage2} /> */}
            {pants && (
              <Image
                source={{ uri: pants }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <Button
              title="Get recommendations"
              style={{ marginTop: 25 }}
              onPress={dl}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text>Go to the Create Fit tab to see your new fit!</Text>
        </View>
      )}
    </View>
  );
};
