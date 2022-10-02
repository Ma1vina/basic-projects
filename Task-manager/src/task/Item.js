import React, {useContext} from "react";
import PropTypes from "prop-types"
import Context from "../context";


const styles = {
    li: {
    width: "380px",
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
   padding: "10px 5px",
   border: "1px solid #ccc",
   borderRadius: '4px',
   marginBottom: '5px',
   marginLeft:"12px",
   marginTop:"10px"
    },
    input: {
        marginRight: "10px"
    }
}


function Item({task, index, onChange}){
const { removeTask } = useContext(Context)
const classes = []

if(task.completed){
    classes.push('done')
}

    return (
        <li style={styles.li}>
        <span className={classes.join(" ")}>
        <input 
        type="checkbox"
        checked = {task.completed}
         style={styles.input} 
         onChange = {() => onChange(task.id)}></input>
        <strong>{index+1}</strong>
        &nbsp; 
         {task.title}
        </span>
        <button className="rm" onClick={() => removeTask(task.id)}>&times;</button>
        </li>
    )
}

Item.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired

}


export default Item