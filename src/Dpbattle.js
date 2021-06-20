import React,{useState} from 'react'
import {Button} from 'semantic-ui-react';
import firebase from  "firebase";
import {storage, db ,auth} from "./firebase";
import './Dpbattle.css';

function Dpbattle({username}) { 
var h =true;
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [p, setP] = useState('');
    const handleChange =(e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    };
    
    const handleUpload =() => {
        const uploadTask =storage.ref(`dp/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot )=>{
                const progress =Math.round (
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                .ref("dp")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("dp").add({
                       
                        
                        imageUrl: url,
                        username :username
                });
                setProgress(0);
                
                setImage(null);
                
        });
    }
        );
};
function handleDelete(){
    var k=[];
    
firebase
.firestore()
.collection('dp')
.where("username","==",username)

.get()
.then(snapshot => {
  snapshot.forEach(user => {
    k.push(user.data());
  
 if(k.length!=0){
   
        
        db.collection('dp').where("username","==",username).get()
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.delete();
        });
 }
  else{
    db.collection("dp").add({
        text:p,
       
        username: username,
       
     });
     setImage('');
     
     db.collection('dp').where("username","==",username).get()
     .then(querySnapshot => {
         querySnapshot.docs[0].ref.delete();
     });

  }
   
});
});


};

function click(){

    
    handleDelete();
    handleUpload();
    h=false;
}
function refreshwa(){
    window.location.reload(false);
}  
    
     


    return (
        <div className="imageupload">

            <i>Progress Bar</i>
            
            <progress className="pro" value={progress} max="100"/>
           
            
            <input type="file" onChange = {handleChange} />
            
            <i>Wait for the Upload process to complete</i>
            <Button onClick={click} >
                Upload
             </Button>
             
            
        </div>
    )
}

export default Dpbattle



/*
 <i>Click Below to Update after Uploading or Refresh</i>
             <Button color="black" onClick={refreshwa} disabled={!h}>Update </Button>
             */