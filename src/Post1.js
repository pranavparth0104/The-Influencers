import React, {useState, useEffect,Component} from 'react';
import './Post.css';
import {db,auth} from './firebase';
import firebase from 'firebase'
import { star  } from "react-icons/bs";
import {BsFillChatFill } from "react-icons/bs";
import ImageContentHover from 'react-image-hover';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BsTrashFill } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { Button, Icon, Label } from 'semantic-ui-react'
import Likebutton from './Counterlikes';

import Avatar from "@material-ui/core/Avatar";


import Profilediff from './Profilediff'
import styled from 'styled-components';

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`


var prl="kkk"

const usersList = [];
const usersList22 = new Set();
var like =0;
var kit=[];




function Post1({postId,user, username ,caption , imageUrl,k}) {
    const [comments,setComments]=useState([]);
    const [comment,setComment]=useState('');
    const [likes,setLikes]=useState([]);
    const [likii,setLike]=useState('');
    
    var i=[];
    var loggeduser= String(user.displayName);
    var c =loggeduser;
    var x =username
    var z=[];
    var m= new Set();

    


    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>{
                setComments(snapshot.docs.map((doc) => doc.data()));
            });
        }
        return () => {
            unsubscribe();
        }
    }, [postId]);
    
    const handleDelete = (event)=>{
        event.preventDefault();
              
        db.collection('posts').doc(postId).get()
        .then(querySnapshot => {
            querySnapshot.ref.delete();
        });
      
      };

const postComment =(event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
       text:comment,
      
       username: user.displayName,
       timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setComment('');

}




useEffect(() => {
  let unsubscribe;
  if(postId){
      unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("likes")
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>{
          setLikes(snapshot.docs.map((doc) => doc.data()));
      });
  }
  return () => {
      unsubscribe();
  }
}, [postId]);


const postLike =(event) => {
event.preventDefault();
db.collection("posts").doc(postId).update("counter", firebase.firestore.FieldValue.increment(1));
db.collection("posts").doc(postId).collection("likes").add({
 like2:likii,

 username: user.displayName,
 timestamp:firebase.firestore.FieldValue.serverTimestamp()
});
setLike('');

}



firebase
.firestore()
.collection('dp')
.where("username","==",c)
.get()
.then(snapshot => {
  snapshot.forEach(user => {
    usersList.push(user.data());
     
     
     prl=usersList[0].imageUrl
     
  });
});





const ButtonExampleLabeledBasic = (event) => (
    
    <div>
      <Button as="div" labelPosition="right">
        <Button color="red" basic >
          <Icon name="heart" />
          
        </Button>
        <Label basic color="red" pointing="left">
        
        </Label>
      </Button>
      
    </div>
)


  
  


 



    return (
      
      
        <div className="post">
          

            <div className="post_header">
              

            <Avatar
            className="post_avatar"
            alt='inconnect'
            src={prl}
            />
            <h3 style={{color:"white"}}>{username}</h3>
           
           
            
            <div className="viewprofile">
               
                  <Button color="teal" onClick={handleDelete}><BsTrashFill/></Button>
            </div>
           
            

            </div>
             
            <img class= "post_image" src={imageUrl}></img>
            

            <h3 className="post_text"> 
            <div className="like">
            
            {likes.map((likii) => (
                  
                  m.add((likii.username)),
                  localStorage.setItem("usernames1234",username)

                   

                   
                 )
                 )}
              
            
            {user && ( 
              

             <form className="post_stars">
                   <input
                     className="post_input2"
                     placeholder="stars"
                     type="number"
                    
                     min="1"
                     max="5"
                     
                     value={likii}
                     onChange={(e) => setLike(e.target.value)}
                   />
                   <Button
                     color="black"
                     className="post_button"
                     disabled={likii>5 || !likii || likii<1 || m.has(user.displayName) } 
                     type="submit"
                     onClick={postLike}
                     ><Icon name="star" color="yellow"/></Button>

               </form>
            )}
      
      </div>
          
             {likes.map((likii) => (
                  
                    z.push(parseInt(likii.like2)),
                     kit.push(z.length),
                     console.log(kit)
                   )
                   )}
                
                
      <p style={{color:"white"}}>{parseFloat(z.reduce(function(a,b){return a+b ;},0)/z.length).toFixed(1)}  <Icon name="star" />  {z.length} Reviews</p>
      
         

            
            
             <strong style={{color:"white"}}>{username}-  {caption} </strong></h3>

            <div className="post_comments">
                {comments.map((comment) => (
                    <p style={{color:"white"}}>
                        <strong style={{color:"white"}}><BsFillChatFill/> {comment.username}</strong> {comment.text}
                    </p>
                )
                )}
                 
            </div>

            {user && ( 

             <form className="post_commentbox">
                   <input
                     className="post_input"
                     placeholder="Add a comment...."
                     type="text"
                     value={comment}
                     onChange={(e) => setComment(e.target.value)}
                   />
                   <button
                     className="post_button"
                     disabled={!comment}
                     type="submit"
                     onClick={postComment}
                     >Post</button>

               </form>
            )}
            </div>
    )
}

export default Post1
