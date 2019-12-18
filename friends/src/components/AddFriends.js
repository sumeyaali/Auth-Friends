import React,{useState} from "react";
import { Friend } from "./Friend";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {FriendsList} from "./FriendsList";



const AddFriends = (props) => {

const [newFriend, setNewFriend]=useState({id:Date.now(), name:"", age:"",email:""})


const handleChanges= e => {
    e.preventDefault()
    setNewFriend({...newFriend, [e.target.name]: e.target.value})
}


const handleAddFriends = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends', newFriend)
    .then(res => {
        props.setFriends(...props.friends, newFriend)
    })
    
    setNewFriend({name:"", age:"", email:" "})
}


return (
        <div>
            <form>
                <input 
                type="text"
                placeholder="Name"
                name="name"
                value={newFriend.name}
                onChange={handleChanges} 
                />
                <input
                type="text"
                placeholder="Age"
                name="age"
                value={newFriend.age}
                onChange={handleChanges}
                />
                <input
                type="text"
                placeholder="Email"
                name="email"
                value={newFriend.email}
                onChange={handleChanges}
                />
            </form>
            <button onClick={handleAddFriends}>Add a New Friend!</button>
        </div>
    )
}

export default AddFriends;