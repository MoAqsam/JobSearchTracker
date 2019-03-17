import React from 'react';

const BootstrapModals = (props) => {
    return (
        <div className="modal fade"  id={props.type === "add" ? "appModal" : props.data.companyName+props.data.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.type === "add" ? "New Application" : "Update"}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    {/* form content goes here */}
                    {
                        props.type === "add" 
                        ?
                        <form>
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" onChange={props.onChangeModal} name="companyName" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="jobTitle">Job Title</label>
                                <input type="text" onChange={props.onChangeModal} name="jobTitle" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="jobUrl">Job Url</label>
                                <input type="text" onChange={props.onChangeModal} name="jobUrl" defaultValue="https://" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="appDate">Application Date</label>
                                <input type="text" onChange={props.onChangeModal} name="appDate"  className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <input type="text" onChange={props.onChangeModal} name="contact" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="notes">Notes</label>
                                <textarea type="text" onChange={props.onChangeModal} name="notes" className="form-control"/>
                            </div>
                        </form>    
                        :
                        <form>
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" onChange={props.onChangeModal} name="companyName" defaultValue={props.data.companyName} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="jobTitle">Job Title</label>
                                <input type="text" onChange={props.onChangeModal} name="jobTitle" defaultValue={props.data.jobTitle} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="jobUrl">Job Url</label>
                                <input type="text" onChange={props.onChangeModal} name="jobUrl" defaultValue={props.data.jobUrl} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="appDate">Application Date</label>
                                <input type="text" onChange={props.onChangeModal} name="appDate" defaultValue={props.data.appDate} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <input type="text" onChange={props.onChangeModal} name="contact" defaultValue={props.data.contact} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="notes">Notes</label>
                                <textarea type="text" onChange={props.onChangeModal}  name="notes" defaultValue={props.data.notes} className="form-control"/>
                            </div>
                        </form> 
                    }
                        
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-info" data-dismiss="modal" onClick={props.type === "add" ? props.onSaveModal  : props.onUpdateModal}   >{props.type === "add" ? "Save changes" : "Update changes" }</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default BootstrapModals;