import React, { useState } from 'react'
import { Typography,Button, Container } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { TextField } from '@material-ui/core'
import { Radio } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'
import { RadioGroup } from '@material-ui/core'
import { FormLabel } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
const useStyles =makeStyles({
field: {
    marginTop:20,
    marginBottom:20,
    display: 'block',
}


})
const Create = () => {
    const classes=useStyles()
    const[title,setTitle]=useState('')
    const[details,setDetails]=useState('')
    const[error,setError]=useState('')
    const[category,setCategory]=useState('')

    const handleSubmit=(e)=>{
      e.preventDefault()
      setError(false)

      if(title&&details&&category){
          console.log(title,details,category)
      }
    }
  
  return (
    <div>
        <Container>
       <Typography 
       variant="6"
       color="textSecondary"
       component='h2'
       gutterBottom>

      Create a note
       </Typography>
       <form noValidate autocomplete='off'onSubmit={handleSubmit}>
           <TextField 
           onChange={(e)=>setTitle(e.target.value)}
           className={classes.field}
           label="Note"
           variant='outlined'
           color='secondary'
           fullWidth
           required
           error={error}
           />
            <TextField 
              onChange={(e)=>setDetails(e.target.value)}
           className={classes.field}
           label="Details"
           variant='outlined'
           color='secondary'
           multiline
           rows={5}
           fullWidth
           required
           error={error}
           />
           <FormControl className={classes.field}>
           <FormLabel>Note category</FormLabel>
           <RadioGroup 
           value={category}
           onChange={(e)=>setCategory(e.target.value)}>
               <FormControlLabel value='money' control={<Radio/>}label='Money'/>
               <FormControlLabel value='todos' control={<Radio/>}label='Todos'/>
               <FormControlLabel value='hello' control={<Radio/>}label='Hello'/>
               <FormControlLabel value='hi' control={<Radio/>}label='HI'/>
        
           </RadioGroup>
           </FormControl>
       
          

         <Button
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRight/>}        
         >
           submit
       </Button>
       </form>
    
       <br />
       
       </Container>
        </div>
  )
}

export default Create