import React from "react";
import { SafeAreaView, View, StyleSheet, FlatList, Alert } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { addNoteReducer, deleteNoteReducer } from "../reducer/NotesReducer";

const NotesScreen = ({ navigation, route }) => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNote = (note) => {
    dispatch(addNoteReducer(note));
  };
  const deleteNote = (id) => {
    dispatch(deleteNoteReducer(id));
  };

  //When a note is longPressed, an alert confirm the action to delete it
  const confirmDelete = (id) => {
    Alert.alert(
      "Delete note",
      "Are you sure to delete this note?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes, delete it",
          onPress: () => deleteNote(id),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <Header titleText="Notes App" />
      <SafeAreaView style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You don't have any notes</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <List.Item
                title={item.note.noteTitle}
                description={item.note.noteDescription}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTitle}
                onPress={() => {}}
                onLongPress={() => confirmDelete(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          ></FlatList>
        )}

        {/* When navigate to the AddNoteScreen, is attached as a param the function addNote that will received late the new info */}
        <FAB
          style={styles.fab}
          small
          label="Add new note"
          onPress={() => navigation.navigate("AddNoteScreen", { addNote })}
        ></FAB>
      </SafeAreaView>
    </>
  );
};

export default NotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
    backgroundColor: "#219653",
  },
  listTitle: {
    fontSize: 20,
  },
});
