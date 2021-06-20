import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import App2 from './App2' ;
import Avatar from "@material-ui/core/Avatar";
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import Search1 from './Search1';
import Search2 from './Search2';


import firebase from  "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


 
import { db, auth, storage } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import {  Modal } from 'semantic-ui-react'
import {Input} from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
import { BsHouseDoorFill } from "react-icons/bs";





function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function Home2() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('null');
  const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");

    var hh=""
    var docRef = db.collection("postnomba").doc("A9gmPLEdum3uGA8Pi8iD");
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
       if (authUser){
         console.log(authUser);
         setUser(authUser);
     
      }
      else {
        setUser(null)

    }
  })
  return() =>{
    unsubscribe(); 
  }

  }, [user, username]);


  var loggeduser= String(user.displayName);
  var a =loggeduser;
  var x =username
 
  
  useEffect(() => {
    
    docRef.get().then(function(doc) {
  
      hh= ( doc.data().nomba);
  
    
      db.collection('posts').orderBy('postorder','desc').startAt(hh-7).endAt(hh-14).onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc =>({
          id: doc.id,
         post: doc.data()
        })));
      })
    })
    }, [])


  

   
  


  return (

    
      
    

  
    <div className="app">
     
     


     
     <div className="app_header">
            
          <img className="app_headerImage"
       src="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/LOGO%2FMAIN%20LOGO.png?alt=media&token=4a81d674-8a4d-47d4-95e3-645a6b943c68"
       />
       


       


       
        
     </div>
     
     {user?.displayName ? (
     <Modal className="photodiv"
      positive
        open={open}
        
        onClose={() => setOpen(false)}>
          <div  style={modalStyle} className={classes.paper}>

         
        
          
          <ImageUpload username={user.displayName} />
  

     
      
      
    </div>
        
      
       
      </Modal>
      ):
      ( <h3>Sorry you need to login to upload and comment</h3>

      )}

<div className="limka">
   <a href='/Home_INF_COM_001' style={{size:"medium"}} style={{color:"white"}} ><h3>Home <BsHouseDoorFill/> </h3> </a>
  <Link to='/Home_INF_COM_001/user_Profile' ><h3 style={{color:"white"}} >Profile <BsHouseDoorFill/> </h3></Link>
   <a href='/' style={{color:"white"}} onClick={() => auth.signOut()} ><h3>Logout <BsHouseDoorFill/></h3>  </a> 
     
     
     </div>
           
     <div className="topload">

       
         <br>
         </br>
         <div className="bas">
         <h2>Feeds</h2>
         </div>
     </div>
    
        <div className="atana">
     <div className="app_posts">
        <div className="app_postsLeft">

          {
             posts.map(({id, post}) =>(
             <Post key={id} postId={id} user= {user} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
              
             ))
          }
        </div>
        
         </div>
        
      
         </div>



     
    

    

     

      
        
       
        
     






    </div>
      
  );
}

export default Home2;
