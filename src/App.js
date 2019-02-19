import React, { Component , Fragment} from 'react';
import './App.css';
import {bake_cookie,read_cookie} from "sfcookies";

function saveToCookies(data) {
   bake_cookie("jobs",JSON.stringify(data));
}
function getData() {
  console.log(read_cookie("jobs"))
  var cookie = read_cookie("jobs");
  if (cookie.length <= 0){
    return {};
  }else{
    return JSON.parse(cookie);
  }
}

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <Fragment>
      <div className="container-fluid">
        <h1>Job Logger</h1>      
        <MainView/>
      </div>    
    </Fragment>
    )}
}

export default App;

class MainView extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary" data-toggle="modal" data-target="#openForm">Add</button>
          </div>
          <JobList/>          
        </div>
      </Fragment>
    );
  }
}


class JobList extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
    this.state = getData();
  }

  render(){    
    var cards = "";
    if (!(Object.keys(this.state).length === 0 && this.state.constructor === Object)){
       cards = this.state.projects.map((data)=>{
        return (
          <Fragment>
              <div className="col-sm-12 col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="card-title">
                       <h2>{data.empName}</h2>                     
                      </div>
                      <div className="card-text">{data.jobTitle}</div>
                      <button href="" className="btn btn-info">Edit</button>
                       &nbsp;
                      <button href="" className="btn btn-danger">delete</button>
                    </div>
                  </div>
                  <br/>
              </div>      
                   
          </Fragment>            
        );
      });
    }else{
      cards = <h1>Lets get this jobs search going.</h1> 
    }
   
    return(
      <Fragment>
        <div className="container">
          <div className="row">
            {cards}    
          </div>
        </div>
        <AddJobModal {...this.props}/>      
      </Fragment>
    );
  }
}

class AddJobModal extends Component {
  
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }
  save(){
    let temp = {};
    if (!(Object.keys(this.props).length === 0 && this.props.constructor === Object)){
      temp = this.props;
    }else{
        temp.projects = [];
    }
   console.log(temp); 
   temp.projects.push(this.state);
   saveToCookies(temp);
  }
  handleChange(evt){
    this.setState({
      [evt.target.name] : evt.target.value
    });
  }
  render(){
    return(
      <div className="modal fade" id="openForm" tabIndex="-1" role="dialog" aria-labelledby="openForm" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Add Job</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
                <div className="form-group">
                    <label htmlFor="empName">Employer Name</label>
                    <input className="form-control" type="text" name="empName" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input className="form-control" type="text" name="jobTitle" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="jobURL">Job URL</label>
                    <input className="form-control" type="text" name="jobURL" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="appDate">Application Date</label>
                    <input className="form-control" type="text" name="appDate" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input className="form-control" type="text" name="contact" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <input className="form-control" type="text" name="note" onChange={this.handleChange}/>
                </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.save}>Save changes</button>
          </div>
        </div>
      </div>
     </div>
    );
  }
}