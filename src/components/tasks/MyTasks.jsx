import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, userTasks } from "../../redux/features/tasks/tasksSlice";
import TaskDetailsModal from "./TaskDetailsModal";

const MyTasks = () => {
  const [isOpen , setIsOpen] =useState(false)
  const [taskModalID , setTaskModalID] =useState(0)
  const { tasks, userSpecificTask } = useSelector(
    (state) => state.tasksSlice
  );
  const { name } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(userTasks(name));
  }, [tasks, dispatch]);
  console.log(name, userSpecificTask);

const handleTaskModal =(id) =>{
  setIsOpen(!isOpen)
  setTaskModalID(id)
}

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskModalID} />
      <h1 className="text-xl py-4 text-center font-bold underline">MY TASK</h1>
      {userSpecificTask?.map((item) => (
        <div key={item.id} className="pb-2 overflow-auto space-y-3">
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.taskName}</h1>
            <div className="flex gap-3">
              <button onClick={()=>handleTaskModal(item.id)} className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button onClick={()=> dispatch(updateStatus({id:item.id ,status: "running" })) } className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyTasks;
