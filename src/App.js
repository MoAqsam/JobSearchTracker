import React, { Component , Fragment} from 'react';
import './App.css';
import {bake_cookie,read_cookie} from "sfcookies";
import uuid from "uuid/v1";


function saveToCookies(data) {
  console.log(data);
  localStorage.setItem("jobs",JSON.stringify(data));  
}

function getData() {
  console.log(read_cookie("jobs"))
  
  var cookie = localStorage.getItem("jobs");
  console.log(cookie)
  if (cookie == null){
    return [];
  }else{
    console.log("cookies exist")
    return JSON.parse(cookie);
  }
}

class App extends Component {
  render(){
    return(
    <Fragment>
      <div className="container-fluid">
        <h1>Job Tracker</h1>      
        <MainView/>
      </div>    
    </Fragment>
    )}
}

export default App;

class MainView extends Component {
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
    // data from cookies
    this.importedData = getData();
    //bind methods
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.state = {
      id:""
    }
  }
  
  update(data){
    console.log(data);
    let {id} = data;
    console.log(this.importedData.findIndex(item=>item.field === id))
  }

  save(){   
    this.setState({
      id:uuid()
    });
    console.log("/////////");
    console.log(this.state);
    console.log("//////////");
    let temp = [];
    if (this.importedData.length !== 0){
      temp = this.importedData;
    }
    if (this.importedData.length === 0 ){
      this.importedData.push(this.state)
    }
    
    temp.push(this.state)
    saveToCookies(temp);    
    this.forceUpdate();
  }

  delete(data){
    let {id} = data;
    this.importedData = this.importedData.filter(function(obj){
      return obj.id !== id;
    }); 
    console.log(this.importedData)
    saveToCookies(this.importedData);
    this.forceUpdate();
  }

  handleChange(evt){
    this.setState({
      [evt.target.name] : evt.target.value
    });
  }
  
  render(){    
    var cards = "";
    console.log(this.importedData)
    if (!(this.importedData.length === 0)){
       cards = this.importedData.map( (data)=>{
        return (
          <Fragment>
              <div className="col-sm-12 col-md-4" key={data.id}>
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="card-title">
                       <h2>{data.empName}</h2>                     
                      </div>
                      <div className="card-text">
                        <b>{data.jobTitle}</b>
                        <p>{data.note}</p>
                        <p>Application date: {data.appDate}</p>
                        <a href={data.jobURL}>{data.jobURL}</a>
                      </div>                     
                      {/* <button  className="btn btn-info" data-toggle="modal" data-target={"#"+data.id} >Edit</button> */}
                       &nbsp;
                      <button  className="btn btn-danger" onClick={this.delete.bind(this,data)}>delete</button>
                      <button className="btn btn-info" onClick={()=>(alert("clicked"))}>Edit</button>
                    </div>
                  </div>
                  <br/>
              </div>       

          </Fragment>            
        );
      });
    }else{
      cards = <h1 style={{textAlign:"center"}}>Nothing yet lets start the job search...</h1> 
    }
   
    return(
      <Fragment>
        <div className="container">
          <div className="row">          
              {cards}                
          </div>
        </div>
      
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
                    <input className="form-control" type="date" name="appDate" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input className="form-control" type="text" name="contact" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea className="form-control" type="text" name="note" onChange={this.handleChange}/>
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
      </Fragment>
    );
  }
}
