import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

export default function TodoItem({ todo, fetchDetailsOfCurrentTodo }) {
  console.log(todo);
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={Text.secondary}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
            onClick={() => {fetchDetailsOfCurrentTodo(todo?.id)}}
          sx={{
            backgroundColor: "#000000",
            color: "white",
            opacity: 0.75,
            "&:hover": {
              opacity: 1,
              backgroundColor: "#000000",
              color: "white",
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
