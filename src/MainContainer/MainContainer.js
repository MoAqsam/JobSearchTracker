import React, {Component} from 'react';
import BootstrapModals from './../components/bootstrapModals/BootstrapModals';
import uuid from "uuid";

class MainContainer extends Component {

    onChangeModal(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    delete(id) {
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

    onUpdateModal(evt) {
        var _Jobs = JSON.parse(localStorage.getItem("aqsam_jobs"));
        // unique id    
    }

    mapJobs() {
        let jobs = JSON.parse(localStorage.getItem("aqsam_jobs"));
        // Cards
        return (jobs.map((data, i) => {
            return (
                <div key={i} className="col-sm-12 col-md-4">
                    <div
                        className="card "
                        style={{
                        textAlign: "center",
                        margin: "10px 0px",
                        minHeight: "300px",
                        width: "100%"
                    }}>
                        <div className="card-body">
                            <button
                                className="btn edit-button"                                
                                data-target={"#"+data.companyName}
                                data-toggle="modal"
                                >Edit</button>
                            <br/>
                            <div className="title">
                                <h2
                                    style={{
                                    color: "#17a2b8"
                                }}>{data.companyName}</h2>
                            </div>
                            <div className="card-text">
                                <h4>{data.jobTitle}</h4>
                                <h4>
                                    <a href={data.jobUrl} target="_blank" rel="noopener noreferrer">{data.jobUrl}</a>
                                </h4>
                                <h4>{data.appDate}</h4>
                                <h4>{data.contact}</h4>
                                <h4>{data.notes}</h4>
                            </div>
                        </div>
                        <button
                            className="btn btn-danger"
                            onClick={this
                            .delete
                            .bind(this, data.id)}
                            style={{
                            width: "100%"
                        }}>Delete</button>
                    </div>
                </div>

            )
        }));
    }

    mapToModals() {
        let jobs = JSON.parse(localStorage.getItem("aqsam_jobs"));
        // Cards
        return (jobs.map((data, i) => {
            return (
                
                    <BootstrapModals key={i}
                        onChangeModal={this
                        .onChangeModal
                        .bind(this)}
                        onUpdateModal={this
                        .onUpdateModal
                        .bind(this,data.id)}
                        data={data}
                        type="update"/>
               
            )
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