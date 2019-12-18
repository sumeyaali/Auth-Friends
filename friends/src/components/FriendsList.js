import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {Friend} from "./Friend";
import AddFriends from "./AddFriends";


 
export const FriendsList = () => {
const [friends, setFriends] = useState([]);

    useEffect(()=> {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    },[]);
        

    console.log(friends)
    return (
        <div>
            <AddFriends friends={friends} setFriends={setFriends}/>
            {friends.map(friend => (
                <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
            ))}
            
        </div>
    )
            }

export default FriendsList;