import { Fragment } from "react";
import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

function TodoDetails({todoDetails, openDialog, setOpenDialog, setTodoDetails}){

    // function closeDetails(){
    //     setOpenDialog(false);
    // }

    return <Fragment>
        <Dialog onClose={() => setOpenDialog(false)} open ={openDialog}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button onClick={()=> {
                    setOpenDialog(false);
                    setTodoDetails(null); 
                }}>
                    close
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>

}

export default TodoDetails;