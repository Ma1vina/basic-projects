import React from "react";
import { MySelect } from "./components/MySelect";
import { MyInput } from "./components/UI/input/MyInput";

export function PostFilter({filter,setFilter}){
    return(
        <div>
             <MyInput 
      value={filter.query}
      onChange ={event => setFilter({...filter, query: event.target.value})}
      placeholder="Поиск..."/>


    <MySelect
     value={filter.sort} 
     onChange={selectedSort}
     defaultValue="Cортировка по" 
     options={[
      {value: 'title', name: "По названию"},
      {value: 'body', name: "По описанию"}
    ]}/>
        </div>
    )
}