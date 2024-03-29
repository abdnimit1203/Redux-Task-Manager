import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  userSpecificTask:[] 
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if(state.tasks.length  === 0){
        state.tasks.push({id : 1, status: "pending",...payload});
      }else{
        const lastElement = state.tasks.at(-1); 
        state.tasks.push({id : lastElement.id+1,status: "pending", ...payload});
      }
    },
    removeTask: (state, {payload})=>{
      state.tasks = state.tasks.filter((item)=> item.id !== payload)
    },
    updateStatus:(state, {payload})=>{
      const target=  state.tasks.find(item=> item.id === payload.id)
      if(payload.status === "complete"){
        target.status = "archieve"
      }else if(payload.status === "running"){
        target.status = "complete"
      }else{
        target.status = "running"

      }
    },
    userTasks: (state,{payload})=>{
      state.userSpecificTask = state.tasks.filter((item)=> item.assignedTo === payload)
    }
  },
});

export const { addTask,updateStatus,removeTask,userTasks } = taskSlice.actions;
export default taskSlice.reducer;
