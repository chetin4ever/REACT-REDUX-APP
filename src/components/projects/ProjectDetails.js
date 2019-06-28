import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment'

const ProjectDetails=(props) =>{
  console.log('testing:',props); 
  const {project}=props;
  if(project){
    return(
      <div className="continer section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{project.title} </span>
                <p>{project.content}</p>
            </div>
            <div className="card-action gret ligthen-4 grey-text">
                <div>{project.autherFirstName} {project.autherLastName}</div>
                <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    </div>
    )
       
  }else{
    return ( 
      <div className="conatiner center">
        <p>loding projects...</p>
      </div>
         
      )
  }
 
}

const mapStateToProps=(state,ownProps)=>{
  console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id]:null
  return{
    project:project
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'projects'}
  ])
)(ProjectDetails)
