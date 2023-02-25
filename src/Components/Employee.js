import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Employee(props){
        return(
          <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.role}
        </Typography>
      </CardContent>
      <CardActions>
       {props.editEmployee}
      </CardActions>
    </Card>
        );
}

export default Employee;