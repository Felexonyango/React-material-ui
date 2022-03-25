import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const intialState = {
loading: true,
post:{},
error: ''

}
const reducer = (state,action) =>{

    switch(action.type){
        case ' FETCH_SUCCESS':
        return{
            loading: false,
            post:action.payload,
            error:''

        }
        case 'FETCH_FAILURE':
            return{
                loading: false,
                post:{},
                error:'something wrong occured'
            }

            default:
                return state
   

    }
}

const DataFetch2 = () => {

    const [state,dispatch] =useReducer(reducer,intialState)

    const getData =async()=>{
        try{
            const res=await axios.get('https://jsonplaceholder.typicode.com/posts/5')
            console.log(res.data )

            dispatch({type:'FETCH_SUCCESS',payload:res.data})
        }
        catch (error) {

            dispatch({type:'FETCH_FAILURE'})
        }
      
          }
          useEffect(()=>{
        
           getData()
          },[])
  return (
   <>
   
   {state.loading ? 'Loading':  state.post.title}
   {state.error ? state.error :null}
   </> 
  )
}

export default DataFetch2