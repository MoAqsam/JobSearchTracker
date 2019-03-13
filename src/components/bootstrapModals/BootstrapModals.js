import React from 'react';

const BootstrapModals = (props) => {
    console.log(props);
    return (
        <div className="modal fade"  id="appModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New application</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    {/* form content goes here */}
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
                                <input type="text" onChange={props.onChangeModal} name="jobUrl" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="appDate">Application Date</label>
                                <input type="text" onChange={props.onChangeModal} name="appDate" className="form-control"/>
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
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info" data-dismiss="modal" onClick={props.onSaveModal}>Save changes</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BootstrapModals;