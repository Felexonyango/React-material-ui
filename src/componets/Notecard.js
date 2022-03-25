import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      width:'250px',
      height:'300px'
    },
  
  });
const Notecard = ({post,handleDelete}) => {
    const classes =useStyles()
 
  return (
      <div>
<Card elevation={1}className={classes.root} >
<CardHeader 
action={
    <IconButton onClick={()=>handleDelete}>
<DeleteOutline/>
  </IconButton>
}
userId={post.userId}
subheader={post.title}
/>
<CardContent>

    <Typography variant='body2'color='textSecondary'>
        {post.body}

    </Typography>
</CardContent>


</Card>
</div>
  )
}

export default Notecard