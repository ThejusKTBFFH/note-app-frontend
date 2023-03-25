import React from 'react';
import axios from "axios";
import { useGetUserID } from '../hooks/useGetUserID';
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie"
import { useState } from 'react';

const Createnote = () => {

  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [note, setNote] = useState({
    notetitle:"",
    content:"",
    date:"",
    time:"",
    userId: userID
  })

  const navigate = useNavigate();

  const handleChange =(event)=>{
    const {name, value} = event.target;
    setNote({...note, [name]: value})
  }

  const handleSubmit = async(event) =>{
    event.preventDefault();

    console.log(note);
    try{
      await axios.post(
        "http://localhost:5000/notes",
        {...note},
        {
          headers: {authorization: cookies.access_token},
        }
      );

      alert("Note Created");
      navigate("/");

    }catch(error){
      console.error(error);
    }
  }
  return (

    <>
    <h2>Create Note</h2>
   
    <div className="create-note">
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="note-title">Note Title</label>
        <input
          type="text"
          id="note-title"
          name="notetitle"
          value={note.notetitle}
          onChange={handleChange}
        />

      <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={note.content}
          onChange={handleChange}
        />

      <label htmlFor="content">Date</label>
        <input
          type="text"
          id="date"
          name="date"
          value={note.date}
          onChange={handleChange}
        />

      <label htmlFor="time">Time</label>
        <input
          type="text"
          id="time"
          name="time"
          value={note.time}
          onChange={handleChange}
        />

        <button type="submit">Create Note</button>

      </form>
    </div>

    </>
  )
}

export default Createnote