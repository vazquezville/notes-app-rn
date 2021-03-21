import Remove from "lodash.remove";

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let noteID = 0;

//actions, for add a new note create a new id and add the info, for delete getting the id to exclude later
export const addNoteReducer = (note) => {
  return {
    type: ADD_NOTE,
    id: noteID++,
    note,
  };
};

export const deleteNoteReducer = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

//reducers, two simple cases, add the entire note or delete by id copy into a new array the entire info except for the id received and sending it back
const initialState = [];

function NotesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          note: action.note,
        },
      ];
    case DELETE_NOTE:
      const deleteNewArray = Remove(state, (obj) => {
        return obj.id != action.payload;
      });
      return deleteNewArray;
    default:
      return state;
  }
}

export default NotesReducer;
