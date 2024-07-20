import React, { useState } from "react";
import AXIOS from "axios";
import { jwtDecode } from "jwt-decode";
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'

const ProfileUpload = () => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
      
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const [profile, setProfile] = useState({});
  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value });
  };
  const formdata = new FormData();
  const handleSubmit = (e) => {
    e.preventDefault();
    formdata.append("image", profile.image);
    formdata.append("imgname", profile.imgname);
    AXIOS.post("http://localhost:9000/user/uploadimage", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
        userid: user.data[0]._id,
      },
    }).then((res)=>{
        alert(res.data)
    })
  };
  return (
    <><h2>Upload</h2>
      <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <p>
          <input type="file" name="image" onChange={(e)=>{handleChange(e.target.name,e.target.files[0])

          }} /></p><p>
          <input type="text" name='imgname' onChange={(e)=>{
            handleChange(e.target.name,e.target.value)
          }}/>
        </p>
        <p><Button variant="contained" startIcon={<CloudUploadIcon/>} tabIndex={-1} role="undefined" type="submit">Upload<VisuallyHiddenInput type="file" /></Button></p>
      </form>
    </>
  );
};

export default ProfileUpload;
