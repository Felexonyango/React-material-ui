
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,Grid,CssBaseline,Toolbar,Container, Button} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
const Example1=() =>{
  const  classes =useStyles()
  return (
<>
<CssBaseline/>
<AppBar position='relative'>
  <Toolbar>
    <PhotoCamera className={classes.Icon}/>
    <Typography variant='h6'>
      photo album
    </Typography>
  </Toolbar>

</AppBar>
<main>
  <div className={classes.container}>
    <Container maxWidth='sm'>
<Typography variant='h2'align='center' color='text-primary' gutterBottom>
Photo Album
</Typography>
<Typography variant='h5'align='center' color='textScecondary'paragraph>
  Hello everyone this is the footer am trying to make this sentence long enough 

</Typography>
<div className={classes.Button}>
<Grid  container spacing={2} justifyContent='center'>
  <Grid item>
  <Button variant="contained" color="primary">
      See my photo
    </Button>
  </Grid>
  <Grid item>
  <Button variant="outline" color="primary">
     secondary action
    </Button>
  </Grid>
</Grid>


</div>

    </Container>
  </div>
<Container className={classes.cardGrid} maxWidth='md'>
<Grid container spacing={4}>
<Grid item>
  <Card className={classes.card}>
<CardMedia 
className={classes.CardMedia}
image='https://source.unsplash.com/random'
title="image title"

/>
<CardContent className={classes.CardContent}>
  <Typography gutterBottom variant='5'>
    Heading
  </Typography>
  <Typography>
    this is the typography that describe the card 
  </Typography>
</CardContent>
<CardActions>
  <Button size='small'color='primary'>view</Button>
  <Button size='small'color='primary'>Edit</Button>
</CardActions>

  </Card>

</Grid>
</Grid>
</Container>
</main>
<footer className={classes.footer}>
<Typography variant='6'align='center'gutterBottom>
    Footer
</Typography>
<Typography variant='subtitle1'align='center'color='textScecondary'>
  something here has the purpose

</Typography>
</footer>
</>
  );
}

export default Example1
