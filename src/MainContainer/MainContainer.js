import React, {Component} from 'react';
import BootstrapModals from './../components/bootstrapModals/BootstrapModals';
import uuid from "uuid";
import BootstrapCards from '../components/bootstrapCards/BootstrapCards';

class MainContainer extends Component {

    onChangeModal(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    onDeleteCards(id) {
        console.log(id);
        let jobs = JSON.parse(localStorage.getItem("aqsam_jobs"));
        jobs = jobs.filter((data) => {
            return (data.id !== id)
        });
        localStorage.setItem("aqsam_jobs", JSON.stringify(jobs));
        this.forceUpdate();
    }

    onSaveModal(evt) {
        var _Jobs = JSON.parse(localStorage.getItem("aqsam_jobs"));
        // unique id
        this.state.id = uuid();

        if (_Jobs == null) {
            _Jobs = [];
            _Jobs.push(this.state)
        } else {
            _Jobs.push(this.state);
        }
        localStorage.setItem("aqsam_jobs", JSON.stringify(_Jobs));
        this.forceUpdate();
    }

    onUpdateModal(id) {
        var _Jobs = JSON.parse(localStorage.getItem("aqsam_jobs"));
        console.log(id);
        console.log(_Jobs[0]);
        for (var i = 0 ; i < _Jobs.length; i++){
            for (let prop in _Jobs[i]) {
               if(_Jobs[i].hasOwnProperty(prop)){
                   if(_Jobs[i].id === id){
                        if(this.state[prop] !== undefined){
                            console.log(this.state[prop]);
                            _Jobs[i][prop] = this.state[prop];
                            console.log(_Jobs[i]);
                        }   
                   }                                   
               }               
            }
        } 
       localStorage.setItem("aqsam_jobs",JSON.stringify(_Jobs));  
       this.forceUpdate();
    }

    mapJobs() {
        let jobs = JSON.parse(localStorage.getItem("aqsam_jobs"));
        // Cards
        return (jobs.map((data, i) => {
            return (
                <div key={i} className="col-sm-12 col-md-4">
                    <BootstrapCards
                        data={data}
                        onDeleteCards={this
                        .onDeleteCards
                        .bind(this, data.id)}/>
                </div>

            )
        }));
    }

    mapToModals() {
        let jobs = JSON.parse(localStorage.getItem("aqsam_jobs"));
        // Cards
        return (jobs.map((data, i) => {
            return (<BootstrapModals
                key={i}
                onChangeModal={this
                .onChangeModal
                .bind(this)}
                onUpdateModal={this
                .onUpdateModal
                .bind(this, data.id)}
                data={data}
                type="update"/>)
        }));
    }

    render() {
        return (
            <div className="MainContainer">
                {/* Add buttons */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <button
                                className="btn btn-info"
                                data-toggle="modal"
                                data-target="#appModal"
                                style={{
                                marginTop: "10px"
                            }}>Add Job</button>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                {this.mapToModals()}
                <BootstrapModals
                    onChangeModal={this
                    .onChangeModal
                    .bind(this)}
                    onSaveModal={this
                    .onSaveModal
                    .bind(this)}
                    type="add"/> {/* Render content area */}
                <div className="container">
                    <div className="row">
                        {localStorage.getItem("aqsam_jobs") === null || JSON
                            .parse(localStorage.getItem("aqsam_jobs"))
                            .length === 0
                            ? <h1>Lets get the job search going</h1>
                            : this.mapJobs()}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainer;