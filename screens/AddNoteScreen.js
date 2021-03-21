import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, IconButton, FAB } from "react-native-paper";
import Header from "../components/Header";

const AddNoteScreen = ({ navigation, route }) => {
  //Current info from the new note
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  //Function from NotesScreen
  const addNote = navigation.getParam("addNote");

  //When the button is pressed, use the function from NotesScreen and come back to that screen
  function saveNote() {
    addNote({ noteTitle, noteDescription });
    navigation.goBack();
  }

  return (
    <>
      <Header titleText="Add new note"></Header>
      <IconButton
        size={25}
        icon="close"
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />

      <View style={styles.container}>
        <TextInput
          label="New note title"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="New note description"
          value={noteDescription}
          mode="flat"
          onChangeText={setNoteDescription}
          multine={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          label="Done"
          disabled={noteTitle == "" ? true : false}
          onPress={() => saveNote()}
        ></FAB>
      </View>
    </>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: "#219653",
    position: "absolute",
    right: 0,
    top: 0,
    margin: 10,
    zIndex: 999,
    elevation: 1,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#219653",
  },
});
