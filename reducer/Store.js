import { createStore } from "redux";
import NotesReducer from "./NotesReducer";

const Store = createStore(NotesReducer);

export default Store;
