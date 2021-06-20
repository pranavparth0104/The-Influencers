import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import App2 from './App2' ;
import Avatar from "@material-ui/core/Avatar";
import './Post.css';
import Selfpost from './Selfpost';
import { Image, Ref } from 'semantic-ui-react';
import Dp from './Dp';


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
import {useLocation} from "react-router-dom";

//class Profilediff extends React.Component {


  var prl="kkk"
  const usersList = [];
  var b=""
  

function Profilediff(){
  const [user, setUser] = useState('null');
  const [posts, setPosts] = useState([]);
  const [username, setUserName] = useState('');
  const [dps, setDps] = useState([]);


  let data = useLocation();
  var a = data.state;
 
  var u=[];
  
  var loggeduser= String(user.displayName);
  var jj =loggeduser;

   
  var f=[];
  firebase
  .firestore()
  .collection('bios')
  .where("username","==",a)
  
  .get()
  .then(snapshot => {
    snapshot.forEach(user => {
      f.push(user.data());
     
    });
  });

  useEffect(() => {
    db
    .collection('dp')
    .where("username","==",a)
    
    .onSnapshot(snapshot => {
      setDps(snapshot.docs.map(doco =>({
       
          id1:doco.id,
         
        dp:doco.data()
       
      })));
    })
     
  
  }, [])
  
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

useEffect(() => {
db.collection('posts').where("username","==",a).onSnapshot(snapshot => {
  setPosts(snapshot.docs.map(doc =>({
    id: doc.id,
   post: doc.data()
   
  })));
})
},[])








 
  return(
    <div className="app">
     
     


     
    <div className="app_header">

      <img className="app_headerImage"
      src="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/LOGO%2Flogo3editedsdfghj.png?alt=media&token=a7b10d0f-ea48-4f0e-801a-59afc502fcd1"
      />
      
          
      
        <div className="app_loginContainer">
          
           
          
          
          
          <br>
          </br>
          <br>
          </br>
          <div className="profilepic">
          
          </div>
          
        
          
        </div>     
 
    </div>
    <div className="app_header11">
       <div className="limka2">
     <Link to='/Home_INF_COM_001' > <h3 style={{color:"black"}} >HOME <BsHouseDoorFill/> </h3></Link>  
     </div>
           </div>
    <div className="topload1">




    {
            dps.map(({id1, dp}) =>(
              
            <Dp key={id1} postId={id1}  username={a}  imageUrl={dp.imageUrl}/>
          ))
         }
   
    <br></br>
    <h1> {a}  </h1>
    
    <h2 >Portfolio:</h2>
    <i>  
      A PHOTOSHOOT COLLECTION OF  {a}</i>
   




        
  
  
  
   
           
         
              
             
                
          
       
          

        
    </div>
    
    <div className="namesake">
        <div className="heading">        
        </div>

    </div>
    
    <div className="app_posts2">
       <div className="app_postsLeft2">
           

         {
            posts.map(({id, post}) =>(
              
            <Post key={id} postId={id}  user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
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
  )

}
export default Profilediff;