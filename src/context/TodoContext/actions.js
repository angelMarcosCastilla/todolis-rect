export const actionsTodo = {
  ADD_TASK: "Add task",
  DELETE_TASK: "Delete task",
  EDIT_TASK: "Edit task",
  FILTER_TASK: "Filter task",

};

export const initialState = {
  todos: [ {
    id: 1,
    title: "correr",
    description: "salir a correr a partir de las 5Am",
    color: "#2E6FCC",
    isComplete: false,
  },
  {
    id: 2,
    title: "Almorzar",
    description: "Hora de almorzar a partir de las 12",
    color: "#7957D5",
    isComplete:true
  },
  {
    id: 3,
    title: "Almorzar",
    description: "Hora de almorzar a partir de las 12",
    color: "#77CB6C",
    isComplete:false

  },
  {
    id: 4,
    title: "Almorzar",
    description: "Hora de almorzar a partir de las 12",
    color: "#FFC107",
    isComplete:true
  },
  {
    id: 5,
    title: "Almorzar",
    description: "Hora de almorzar a partir de las 12",
    color: "#F86161",
    isComplete: false
  }],
  filterTodos:[]
}
 