import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Date from './date'

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
    minWidth: 290,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BlogCard({id, title, category, createdAt}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {category}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <Date dateString={createdAt} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={`/blogs/${id}`}>続きを見る</Button>
      </CardActions>
    </Card>
  );
}