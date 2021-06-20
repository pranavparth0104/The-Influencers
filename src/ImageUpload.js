import React,{useState} from 'react'
import {Button} from 'semantic-ui-react';
import firebase from  "firebase";
import {storage, db } from "./firebase";
import './ImageUpload.css';
import { Input } from 'semantic-ui-react'
var dd=""

function ImageUpload({username}) { 
    
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');
    
    var hh="";
    var jabar=0;
    const handleChange =(e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    };

    const handleUpload =() => {
        var ll=0;
        
      
        ll= db.collection("postnomba").doc("A9gmPLEdum3uGA8Pi8iD")
        console.log(ll)
        db.collection("postnomba").doc("A9gmPLEdum3uGA8Pi8iD").update("nomba", firebase.firestore.FieldValue.increment(1));
        const uploadTask =storage.ref(`images/${image.name}`).put(image);
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
                var docRef = db.collection("postnomba").doc("A9gmPLEdum3uGA8Pi8iD");

        docRef.get().then(function(doc) {
      
                hh= ( doc.data().nomba);
            
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption:caption,
                        imageUrl: url,
                        username :username,
                        counter:0,
                        postorder:hh
                });
                setProgress(0);
                setCaption("");
                setImage(null);
                window.location.reload()
                    
               
            } ) });
    },

        )};
    
    

    

    return (
        <div className="imageupload">
            <i>Progress Bar : </i>
            <progress className="pro" value={progress} max="100"/>
            <br>
            </br>
            <Input type="text" placeholder='Enter your caption' onChange={event =>setCaption(event.target.value)} value ={caption} />
            <br>
            </br>
            <Input type="file" onChange ={handleChange} />
            <br>
            </br>
            <Button color="teal" onClick={handleUpload}>
                Upload
             </Button>
        </div>
    )
}

export default ImageUpload
