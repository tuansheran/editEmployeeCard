import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import React from 'react';
import {useState} from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 3,
  borderRadius: '16px'
};



 function EditEmployee(props) {

  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=''>
      <Button onClick={handleOpen}>See Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField sx ={{mb: '2rem'}} 
          id="outlined-basic" 
          label="Name" 
          variant="standard" 
          defaultValue={name} 
          onChange={(e)=>{
            setName(e.target.value);
            }}>
          </TextField>

          <TextField 
          id="outlined-basic" 
          label="Role" 
          variant="standard" 
          defaultValue={role}
          onChange={(e)=>{
            setRole(e.target.value);
            }}>
          </TextField>

        

          <Button sx ={{top: "85px", right:"29%"}} onClick={(e) =>{props.updateEmployee(props.id, name, role);}} >Update</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default EditEmployee;

