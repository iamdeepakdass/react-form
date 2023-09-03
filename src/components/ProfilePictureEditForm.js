import React, {useState} from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

function ProfilePictureEditForm(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.querySelector('.validated-form');
     
        const formData_empty = new FormData(form);
        const formData = {};
        for(const key of formData_empty.entries()) {
            formData[key[0]] = key[1];
        }
     
        const config = {
          headers: {
            'authtoken': props.token,
            'Content-Type': 'multipart/form-data'
          },
          enctype: 'multipart/form-data'
        }
      
        const response = await axios.post(`https://source-folio-woad.vercel.app/edit/profilePicture/${props.id}`, formData, config)
        if(response.data === "Success") {
            window.location.href = `https://react-form-ten-steel.vercel.app/form?q=${props.token}&sfid=${props.id}&where=edit`;
        } else {
            window.location.href = "https://source-folio.vercel.app/";
        }
      }

    return (
        <div className="App">
        <header className="App-header">
            <form className="validated-form">
            <Container className="content m-3">
     <div className="card box shadow-lg bg-body rounded">
       <div className="col-sm-12">
       
              <div className="row pt-3">
              <h2>Edit Profile Picture</h2>
            <div className="form-group">
                <label for="profilePicture" className="form-label">Profile Picture: </label>
                <input type="file" id="profilePicture" name="profilePicture" className="form-control" placeholder="Enter profile picture" required />
                <button onClick={handleSubmit} className="btn btn-warning btn-lg m-3" style={{width: '90%'}}>Submit</button>
               </div>
               
            </div>
            
            </div>
            </div>
            </Container>
            
            </form>
            

            <br></br>
        </header>
    </div>
    );
}

export default ProfilePictureEditForm;