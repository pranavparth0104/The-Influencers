import React, {useState, useEffect} from 'react';
import './App.css';
import Post1 from './Post1';
import App2 from './App2' ;
import Avatar from "@material-ui/core/Avatar";
import './Post.css';
import Selfpost from './Selfpost';
import { Image, Ref } from 'semantic-ui-react'



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
import { BsHouseDoorFill } from "react-icons/bs";
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
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));


var prl=""
const usersList = [];
var b=""




function Profile() {
  const [bios,setBios]=useState([]);
    const [bio,setBio]=useState('');
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [openDp, setOpenDp] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('null');
  const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");

    var loggeduser= String(user.displayName);
    var a =loggeduser;
    var u=[];
    

   
    var f=[];
   

   




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

     
  
 
db
.collection('dp')
.where("username","==",a)

.get()
.then(snapshot => {
  snapshot.forEach(user => {
    usersList.push(user.data());
     
     prl=usersList[0].imageUrl
     
  });
});

 console.log(prl); 
  
     
 db.collection('posts').where("username","==",a).onSnapshot(snapshot => {
  setPosts(snapshot.docs.map(doc =>({
    id: doc.id,
   post: doc.data()
   
  })));
})
    
   

  
  return (
      

    
      
    

    <div className="app">
     
     


     
     <div className="app_header11">

       <img className="app_headerImage"
       src="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/LOGO%2Flogo3editedsdfghj.png?alt=media&token=a7b10d0f-ea48-4f0e-801a-59afc502fcd1"
       />
       
           
       
         <div className="app_loginContainer">
           
            
           
           
           
           <br>
           </br>
           <br>
           </br>
           
           
         
           
         </div> 

  
     </div>
     <div className="app_header11">
       <div className="limka2">
      <Link to='/Home_INF_COM_001' style={{color:"black"}} ><h3>HOME <BsHouseDoorFill/> </h3></Link>
     
           </div>
           </div>
     <div className="topload1">




     
     <Avatar
        onClick={() => setOpenDp(true)}
        alt='inconnect'
        src={prl}
        className={classes.large}
        />
     <br></br>
     <h1> {user.displayName}  </h1>
     
     
     <i>  Portfolio:
       A PHOTOSHOOT COLLECTION OF  {user.displayName}</i>
    

      <Modal className="photodiv"
        open={openDp}
        
        onClose={() => setOpenDp(false)}>
          <div  style={modalStyle} className={classes.paper}>

         
        
          
          <Dpbattle username={user.displayName} />  

     
      
      
    </div>
        
      
       
      </Modal>
      {user?.displayName ? (
     <Modal className="photodiv"
        open={openPost}
        
        onClose={() => setOpenPost(false)}>
          <div  style={modalStyle} className={classes.paper}>

         
        
          
          <ImageUpload username={user.displayName} />
  

     
      
      
    </div>
        
      
       
      </Modal>
      ):
      ( <h3>Sorry you need to login to upload and comment</h3>

      )}




         
   
   
   
    
            
          
               
              
                 
           
        
           

         
     </div>
     
      <div className="topload">

         <h1  onClick={() => setOpenPost(true)}> Wanna post {user.displayName}?</h1>
     </div>
     <div className="app_posts2">
        <div className="app_postsLeft2">
            

          {
             posts.map(({id, post}) =>(
               
             <Post1 key={id} postId={id}  user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
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
