import React,{useState, useEffect} from 'react'
import {Button} from '@material-ui/core';
import firebase from  "firebase";
import {storage, db } from "./firebase";
import './Profilepic.css';

function Profilepic() {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");

    /*useEffect(() => {
        let unsubscribe;
        if(username){
            unsubscribe = db
            .collection("dp")
            .doc(username)
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>{
                setComments(snapshot.docs.map((doc) => doc.data()));
            });
        }
        return () => {
            unsubscribe();
        }
    }, [username]);*/
    

    const handleChange =(e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    };

    const handleUpload =() => {
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
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("dp").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        
                        imageUrll: url,
                        username :username
                });
                setProgress(0);
                
                setImage(null);
                
        });
    }
        );
};
    
    

    

    return (
        <div className="imageupload">
            <h2>Upload Your Profile Pic</h2>
            <progress className="pro" value={progress} max="100"/>
           
            <input type="file" onChange ={handleChange} />
            <Button onClick={handleUpload}>
                Upload
             </Button>
        </div>
    )
}

export default Profilepic
