// import {ADDING_CLASS, UPDATING_CLASS, DELETING_CLASS, SUCCESSFUL, IS_ERROR} from '../action';

// export const initialState = {
//     id: 0,
//     className: '',
//     classType: '',
//     classTime: number, 
//     duration: number, 
//     intensity: null,
//     location: '', 
//     numberOfStudents: number,
//     maxClassSize: number
// }; 

// let fitnessClass = initialState; 

// export const classesReducer = (state = fitnessClass, action) => {
//     switch (action.type) {
//         case ADDING_CLASS:
//             return {
//                 ...state, 
//                 fitnessClass: [...state.fitnessClass, action.payload]}
//                 break;
//         case DELETING_CLASS:
//             return {
//             fitnessClass: [initialValue]
//             }
//             break;
//         case UPDATING_CLASS:
//             return {
//                 fitnessClass: [...state, action.payload]
//             }
//             break; 
//         case "default": {
//         return fitnessClass; 
            
//     }
// }


// // const ADD_CLASS = "ADD_CLASS";
// // const DELETE_CLASS = "DELETE_CLASS"; 
// // const UPDATE_CLASS = "UPDATE_CLASS"; 
// // const IS_LOADING = "IS_LOADING";
// // const SUCCESSFUL = "SUCCESSFUL";
// // const IS_ERROR = "IS_ERROR"; 