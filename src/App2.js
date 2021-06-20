import React, {useState, useEffect} from 'react';

import Postnoneed from './Post2noneed';

import Avatar from "@material-ui/core/Avatar";
import './Post2noneed.css';
import Selfpost from './Selfpost';
import './App.css';

import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
} from 'semantic-ui-react'
 
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
import Modal from '@material-ui/core/Modal';
import {Input} from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
import { BsHouseDoorFill, BsBookHalf, BsFillInfoCircleFill } from "react-icons/bs";
import Dpbattle from './Dpbattle';





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


var prl="kkk"
const usersList = [];





function Profile() {
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

  
  


    //var loggeduser =  firebase.auth().currentUser;

    //console.log(loggeduser.displayName);




  
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

  },[user, username]);

  var email_verify;
  if(user){

  email_verify = user.emailVerified;
  }

 

  
 
  
 
  
  
  
      
    db.collection('posts').orderBy("counter","desc").limit(5).onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc =>({
        id: doc.id,
       post: doc.data()
       
      })));
    })

     
   
    

  
  return (
      

    
      
    

  
    <div className="feed">
     
     
     <div className="app_header11">

       <img className="app_headerImage"
       src="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/LOGO%2Flogo3editedsdfghj.png?alt=media&token=a7b10d0f-ea48-4f0e-801a-59afc502fcd1"
       />
       
           
       
        
           
            
           
           
           
          
          
          
  
     </div>
     
<div className="limka">
  <Link to="/feed_inf_com_00/12frequently_asked_question09876" > <h3 style={{color:"white"}} >FAQ <BsBookHalf/> </h3></Link> 
  <Link to='/feed_inf_com_00/help_support' > <h3 style={{color:"white"}} >Earning Policy<BsFillInfoCircleFill/> </h3></Link> 
     
     
     
     </div>
     <div className="namesake">
                
          <h1 style={{color:"white"}}>  Explore Portfolios with maximum critique reviews.</h1>
           <Button href='/Home_INF_COM_001' disabled={!user || !email_verify}>Home<BsHouseDoorFill/> </Button>
           <br></br>
          <br></br>
          <br></br>
       <div className="wewe">
          
                  </div>   
     </div>
          
     
     
     <div className="app_posts2">
        
        

    


         <div className="app_postsLeft23">
            

            {
               posts.map(({id, post}) =>(
                 
               <Postnoneed key={id} postId={id}  user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
             ))
            }
          </div>
    
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

export default Profile;
