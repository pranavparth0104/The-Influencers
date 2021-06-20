import PropTypes from 'prop-types';
import _ from 'lodash';
import './App.css';


import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react'

import firebase from  "firebase";
import { Button, Icon } from 'semantic-ui-react'
import { db, auth, storage } from './firebase';
import { Link, Redirect } from 'react-router-dom';
import Profilediff from './Profilediff';
var y =""
var k=[];
firebase
.firestore()
.collection('userss')
.get()
.then(snapshot => {
  snapshot.forEach(user => {
    k.push(  user.data());
     
     
    
     
  });
});





const resultRenderer = ({ username }) =><Label content= {username}/> 


resultRenderer.propTypes = {
  username: PropTypes.string,
  

}


const initialState = { isLoading: false, results: new Set(), value: '' }

export default class Search1 extends Component {
  state = initialState
  
  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.username })
    y=result.username
    
      }
                      
  


  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.username)

      this.setState({
        isLoading: false,
        results: _.filter(k, isMatch),
      })
    }, 300)
  }

  
  



  render() {
    const { isLoading, value, results } = this.state
    let d=(this.state.value);
    
    return (
      <div className="searchbut">
       
      <Grid >
      
        <Grid.Column width={3}>
       
          
          <Search className="searchbox" 
           
            loading={isLoading}
           
            onResultSelect={this.handleResultSelect}
           
              
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
          
       
            
            })}
            results={results}
            
            value={value}
            
          
            resultRenderer={resultRenderer}
          />
          
      
         
        </Grid.Column>
      
      </Grid>
      <Button disabled={!y} className='but2' size ="mini"color='white' >
                  <Link to={{ pathname:"/Home_INF_COM_001/user_view_Profile", state:
                  y
                  }} onClick={y=!y}>Search</Link>
                  </Button>
      </div>
     
  
    )
  }
}