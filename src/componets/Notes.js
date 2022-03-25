import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container } from '@material-ui/core'
import {Grid} from '@material-ui/core'
import Notecard from './Notecard'


const Notes = () => {
  const [posts,setPosts] =useState([])
  const getData =async()=>{
const res=await axios.get('https://jsonplaceholder.typicode.com/posts/')
 setPosts(res.data)
  }
  useEffect(()=>{

   getData()
  },[])

  const handleDelete= async(id)=>{
  
    const newpost=posts.filter(post=>post.id !== id)
    setPosts(newpost)

        }
        
  return (
 <Container>
<Grid container spacing={5}>
{posts.map((post)=>(
     <Grid item key={post.id}>
       <Notecard post={post}handleDelete={handleDelete}/>

     
    </Grid>
   ))} 
</Grid>

 </Container>

  )
}

export default Notes