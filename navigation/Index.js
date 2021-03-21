import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import NotesScreen from "../screens/NotesScreen";
import AddNoteScreen from "../screens/AddNoteScreen";

//One screen to watch the notes list, another to add a new note
const StackNavigator = createStackNavigator(
  {
    NotesScreen: {
      screen: NotesScreen,
    },
    AddNoteScreen: {
      screen: AddNoteScreen,
    },
  },
  {
    initialRouteName: "NotesScreen",
    headerMode: "none",
    mode: "modal",
  }
);

export default createAppContainer(StackNavigator);
