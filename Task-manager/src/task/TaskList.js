import React from "react"
import Item from "./Item"
import PropTypes from "prop-types"

const styles = {
    ul: {
        listStyle: "none",
        margin: 0,
        padding:0
    }
}



function TaskList(props){
    return(
        <ul style={styles.ul}>
           {props.tasks.map((task,index) =>{
            return <Item
            task={task} 
            key={task.id} 
            index={index} 
            onChange={props.onToggle}/>
           })}
        </ul>
    )
} 

TaskList.protoTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}


export default  TaskList