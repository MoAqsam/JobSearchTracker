import React, { Component , Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';


function addComponent() {
  let array = {projects:["chainz","Sdfas","Asdfasdf"]}
   localStorage.setItem("jobs",JSON.stringify(array));
}
function getData() {
  console.log(JSON.parse(localStorage.getItem("jobs")));
}

class App extends Component {
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
  render(){
    return(
      <Fragment>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary" data-toggle="modal" data-target="#openForm">Add</button>
            <button className="btn btn-primary" onClick={addComponent}>Add</button>
            <button className="btn btn-primary" onClick={getData}>Add</button>
          </div>
        
        <div class="modal fade" id="openForm" tabindex="-1" role="dialog" aria-labelledby="openForm" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add Job</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="empName">Employer Name</label>
                        <input className="form-control" type="text" name="empName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input className="form-control" type="text" name="jobTitle"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobURL">Job URL</label>
                        <input className="form-control" type="text" name="jobURL"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="appDate">Application Date</label>
                        <input className="form-control" type="text" name="appDate"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact</label>
                        <input className="form-control" type="text" name="contact"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <input className="form-control" type="text" name="note"/>
                    </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
         </div>
        </div>
      </Fragment>
    );
  }
}


class JobList extends Component {
  render(){
    
    return(
      <Fragment>
        
      </Fragment>
    );
  }
}