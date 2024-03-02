import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  const task = tasks.find((item) => item.id === id);
  console.log(task);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.taskName}>
      <div className="py-6">
        <p className="font-semibold text-md border-b-2 w-fit border-slate-500 mb-2">
          Task Description :{" "}
        </p>
        <p>{task?.taskDescription}</p>
        <p>
          Priority:{" "}
          <span className="p-1/2 px-2 font-semibold  rounded-2xl  border-2  border-primary">
            {task?.priority}{" "}
          </span>
        </p>
        <p>
        Status:{" "}
          <span className="p-1/2 px-2 font-semibold  rounded-2xl">
            {task?.status}{" "}
          </span>
        </p>
        <p>
          Deadline:{" "}
          <span className="p-1/2 px-2 font-semibold  rounded-2xl">
            {task?.taskdeadline}{" "}
          </span>
        </p>
        
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;
