import React from 'react'
import {AppBar, makeStyles, Toolbar} from '@material-ui/core'
import { Drawer } from '@material-ui/core'
import {Typography} from '@material-ui/core'
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText'
// import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
// import {useNavigate} from 'react-router-dom'

const drawerWidth=250
const useStyles =makeStyles((theme)=>({
    page:{
        backgroundColor:'#f9f9f9f9',
        width:'100%'

    },
    appbar:{
        width:`calc(100% -${drawerWidth}px)`,
      
    },
    toolbar:theme.mixins.toolbar

    
    
}))


const Layout = ({children}) => {
    const classes =useStyles()
  

  return (
      <div>
          <AppBar
           className={classes.appbar}
           elevation={1}

           
           >

            <Toolbar>
                <Typography></Typography>
            </Toolbar>
          </AppBar>
         
      
 <div className={classes.page}>
     <div className={classes.toolbar}>
     {children}
     </div>

 </div>
 </div>
  )
}

export default Layout