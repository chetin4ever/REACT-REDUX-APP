import React from 'react';

function ProjectDetails(props) {
  //console.log(props);
  const id=props.match.params.id;
  return (
    <div className="continer section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project-Title {id} </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, minus at iste cupiditate architecto repudiandae excepturi, rerum assumenda quo fugit accusantium? Sapiente exercitationem alias laboriosam sunt illo harum magnam aperiam.</p>
            </div>
            <div className="card-action gret ligthen-4 grey-text">
                <div>Posted By Chetin4ever</div>
                <div>2nd septembar,2am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
