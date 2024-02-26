import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const onCancel = (data) => {
   reset()
   setIsOpen(false)
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add New Task"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 py-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            {...register("taskName")}
            className="rounded-lg border-primary"
            required
            placeholder="task title"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            rows={3}
            name="description"
            {...register("taskDescription")}
            className="rounded-lg border-primary"
            required
            placeholder="description"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="deadline">deadline</label>
          <input
            type="date"
            rows={3}
            name="deadline"
            {...register("taskdeadline")}
            className="rounded-lg border-primary"
            required
            placeholder="deadline"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="priority">Assigned to</label>
          <select
            name="assignedTo"
            id="assignedTo"
            {...register("assignedTo")}
            className="rounded-lg border-primary"
            required
          >
            <option value="ABD NIMT" >
              ABD NIMT
            </option>
            <option value="Abdullah Ibne Ali">Abdullah Ibne Ali</option>
            <option value="DEV JOE">DEV JOE</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            {...register("priority")}
            className="rounded-lg border-primary"
            required
          >
            <option value="high" defaultValue>
              High
            </option>
            <option value="medium">Medium</option>
            <option value="easy">Easy</option>
          </select>
        </div>
        <div className="flex gap-4">

        <button type="submit" className="btn bg-primary text-white w-fit hover:scale-95">
          ADD
        </button>
        <button type="button" className="btn btn-danger text-white w-fit hover:scale-95" onClick={()=>onCancel()}>
          Cancel
        </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
