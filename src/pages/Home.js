import React from 'react'
import { useGetUserID } from '../hooks/useGetUserID'
import axios from "axios"
import { useEffect,useState } from 'react'

const Home = () => {

  const[notes, setNotes] = useState([]);
  const userID = useGetUserID();

  useEffect(()=>{

    const fetchNotes = async()=>{
      try{
        const response = await axios.get("https://note-app-backend-ohk4.onrender.com/notes");
        setNotes(response.data);

      }catch(error){

        console.log(error)

      }
    }

    fetchNotes();
    console.log(notes)

  },[])

  return (
    <div>
      <h1>All Notes</h1>

      <ul>
        {notes.map((note) => {
          return (

            <div className="note-home" >

            
            <li key={note._id}>
            <div>
               <span><p>Date {note.date}</p> </span>
               
              <h2>Title - {note.notetitle}</h2>
            </div>
            <div className="content">
              <p>Content - {note.content}</p>
            </div>
          </li>

           </div>
          )
        })}

          
          
      </ul>
    </div>
  )
}

export default Home