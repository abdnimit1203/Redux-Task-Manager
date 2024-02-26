import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/features/tasks/tasksSlice';

const TaskCard = ({item}) => {
  console.log(item.taskName)
 
const dispatch = useDispatch()
  return (
    <div className={` rounded-md p-5 ${
      item?.status === 'pending' ? 'bg-secondary/10' : ''
    } ${item?.status === 'running' ? 'bg-green-500/20' : ''} ${
      item?.status === 'complete' ? 'bg-rose-500/20' : ''
    }`}>
      <h1
        className={`text-lg font-semibold mb-3  ${
          item?.priority === 'high' ? 'text-red-500' : ''
        } ${item?.priority === 'medium' ? 'text-yellow-500' : ''} ${
          item?.priority === 'easy' ? 'text-green-500' : ''
        }`}
      >
        {item?.taskName}
      </h1>
      <p className="mb-3 w-fit">{item?.taskDescription}</p>
      <p className="text-sm">Assigned to - {item?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{item?.taskdeadline}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(item.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({id: item.id , status: item.status}))
            }
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
