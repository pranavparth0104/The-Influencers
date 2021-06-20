import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import App2 from './App2' ;
import Avatar from "@material-ui/core/Avatar";
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import Search1 from './Search1';
import Search2 from './Search2';
import { FcLike } from "react-icons/fc"

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


var dd=""


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

 
function Home() {
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
  var numb=12;
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

  
    db.collection('posts').orderBy('postorder','desc').startAt(hh).limit(5).onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc =>({
        id: doc.id,
       post: doc.data()
      })));
    })
  })
  }, [])
  

  return (

    
      
    

  
    <div className="home">
     
     


     
     <div className="app_header11">
            
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
   <a href='/feed_inf_com_00' style={{size:"medium"}} style={{color:"white"}} ><h3>Feed <BsHouseDoorFill/> </h3> </a>
  <Link to='/Home_INF_COM_001/user_Profile' ><h3 style={{color:"white"}} >Profile <BsHouseDoorFill/> </h3></Link>
   <a href='/' style={{color:"white"}} onClick={() => auth.signOut()} ><h3>Logout <BsHouseDoorFill/></h3>  </a> 
     
     
     </div>
           
     <div className="topload">

         <h2 onClick={() => setOpen(true)} > Wanna post {user.displayName}? </h2>
         <br>
         </br>
         <div className="bas">
         <i >-Share and stand amongst the top INfluencers</i>
         </div>
     </div>
     <div className="search">       
 

        <Search1 />
        </div>
        <div className="ooo">       
 

 <h3 style={{color:"turquoise"}}>Latest Uploads <FcLike/></h3>
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
         <br></br>
         <div className="loadmore">    
              <Button href="/Home_INF_COM_002" >load more</Button>
         </div>

         <br>
         </br>
<br></br>
         </div>



     
         <div className="app_footer">

      
<div className="page-footer">

  <div className="footer-link">

  <Link to='/Aboutus' > <h3>About Us</h3></Link>
         <Link to='/TnC' ><h3>TnC</h3> </Link>


  </div>
  <hr></hr>

  
  
  <i>Copyright © 2020 : The INfluencer</i>
  <i>Powered by The Influencer's Community</i>
  
  
    
  
  
 

</div>


      
      </div>

    

     

      
        
       
        
     






    </div>
      
  );
}

export default Home;
