import React, {useState} from "react"
import PropTypes from "prop-types"



function AddTask({onCreate}){
const [value, setValue] = useState("")

function submitHundler(event){
event.preventDefault() 
if(value.trim()){
    onCreate(value)
    setValue("")
}

}
    return (
        <form style={{marginBottom:"10px"}} 
        onSubmit={submitHundler}>
            <input className="inpstyle" value={value} onChange={event =>setValue(event.target.value)}>
            </input>
            <button className="btnstyle" type="submit">Добавить задание</button>
        </form>
    )
}



AddTask.propTypes={
    onCreate: PropTypes.func.isRequired
}

export default AddTask