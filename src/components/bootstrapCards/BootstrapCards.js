import React from 'react';

const BootstrapCards = (props) => {
  const {data} = props;
  return (

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
                                data-target={"#"+data.companyName+data.id}
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
                                    <a href={data.jobUrl} target="_blank" rel="noopener noreferrer">{data.jobUrl}</a>                                
                                <h4>{data.appDate}</h4>
                                <h4>{data.contact}</h4>
                                <h4>{data.notes}</h4>
                            </div>
                        </div>
                        <button
                            className="btn btn-danger"
                            onClick={props
                            .onDeleteCards}
                            style={{
                            width: "100%"
                        }}>Delete</button>
                    </div>

  );
}

export default BootstrapCards;