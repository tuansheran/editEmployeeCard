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
  border: '',
  p: 2,
  borderRadius: '16px'
};


 function AddEmployee(props) {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx = {{left: "35%", top: "30px", backgroundColor: "#21b6ae"}} variant="contained">+ Add Employee</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField sx ={{}} 
          id="outlined-basic" 
          label="Name" 
          variant="standard"
          defaultValue={name} 
          onChange={(e)=>{
            setName(e.target.value);
            }}
            >
          </TextField>

          <TextField 
          id="outlined-basic" 
          label="Role" 
          variant="standard" 
          defaultValue={role}
          onChange={(e)=>{
            setRole(e.target.value);
            }}>
          Thisss</TextField>


          <TextField 
          id="outlined-basic" 
          label="Image URL" 
          variant="standard" 
          defaultValue={role}
          size = "small"
          onChange={(e)=>{
            setImg(e.target.value);
            }}>
          </TextField>
                                                               {/*PASSING THE ADD EMPLOYEE FUNCTION FROM*/}                                          
          <Button sx ={{top: "85px", right:"29%"}} onClick={(e) =>{props.addEmployee(name, role, img);}} >Add new</Button> 
        </Box>
      </Modal>
    </div>
  );
}

export default AddEmployee;

