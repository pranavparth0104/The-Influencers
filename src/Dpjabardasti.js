import React,{useState} from 'react'
import {Button} from 'semantic-ui-react';
import firebase from  "firebase";
import {storage, db ,auth} from "./firebase";
import './Dpbattle.css';

function Dpbattle({username}) { 

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    
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
        
        db.collection('dp').where("username","==",username).get()
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.delete();
        });
    
};

function click(){
    handleDelete();
    handleUpload();
}

    
    
     


    return (
        <div className="imageupload">
            <progress className="pro" value={progress} max="100"/>
            <br>
            </br>
           
            <br>
            </br>
            <input type="file" onChange = {handleChange} />
            <br>
            </br>
            <Button onClick={click} >
                Upload
             </Button>
        </div>
    )
}

export default Dpbattle
