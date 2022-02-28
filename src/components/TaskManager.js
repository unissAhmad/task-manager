import React,{useState} from 'react'
import PropTypes from 'prop-types';
import styles from '../styles/TaskManager.module.css';
function TaskManager(props) {
    const [input,setInput] = useState('');
    const [task,setTask] = useState([]);
    const handleOnChange = e =>{
        setInput(e.target.value)
    }
    const handleBtnOnclick = ()=>{
        if(input !== ''){
            setTask([...task,input]);
            setInput('');
        }
    }
    const handleDeleteBtn = (id)=> {
       const updatedTasks = task.filter((elem,index)=>{
          return index !== id; 
       })
        setTask(updatedTasks)
    }
    const deleteAllBtn = ()=>{
        setTask([])
    }
  return (
    <>
        <div className={styles.mainDiv}>
            <div className={styles.partition}>
                <div className={styles.secPartition}></div>

                <div className={styles.mainPartition}>
                    <h3 className={styles.mainHeading}>{props.mainHeading}</h3>

                    <div className={styles.input}>
                        <input type={props.inputFieldType} className= {styles.textField} placeholder={props.inputFieldPlaceholder} value= { input } onChange = { handleOnChange }  />
                        <button className= {styles.addTaskBtn,styles.btn} onClick={handleBtnOnclick}>{props.btnName}</button>
                    </div>

                    <h3 className={styles.tasksHeading}>{task.length > 0 ? props.showTAsks : props.tasks }</h3>
                    {
                        task.map((element,index)=>{
                            return(
                                <div className={styles.tasks} key={index}>
                                    <h5 className={styles.eachTask}>{element} 
                                    <button className={styles.deleteBtn} onClick={()=>handleDeleteBtn(index)}>{props.deleteBtn}</button>
                                    </h5>
                                </div>
                            )
                        })
                    }
                    { task.length > 0  &&  <button className={styles.btn} onClick={deleteAllBtn}>{props.deleteAllBtn}</button> }
                </div>
                {/* main partition ends here */}

                <div className={styles.secPartition}></div>
            </div>
        </div>
    </>
  )
}

export default TaskManager
TaskManager.propTypes = {
    mainHeading: PropTypes.string,
    inputFieldPlaceholder: PropTypes.string,
    inputFieldType: PropTypes.string.isRequired,
    btnName: PropTypes.string.isRequired,
    tasks: PropTypes.string,
    showTAsks: PropTypes.string,
    deleteBtn:PropTypes.string,
    deleteAllBtn: PropTypes.string.isRequired
}
TaskManager.defaultProps ={
    mainHeading: 'Task - Manager',
    inputFieldPlaceholder: 'Add a task..',
    inputFieldType: 'text',
    btnName: 'Add Task',
    tasks: 'Your tasks will be shown here',
    showTAsks: 'Your Tasks',
    deleteBtn: 'X',
    deleteAllBtn: 'Delete All'
}