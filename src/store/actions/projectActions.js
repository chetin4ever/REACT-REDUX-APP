import firestore  from "firebase";

export const createProject =(project)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const autherId = getState().firebase.auth.uid;

    firestore.collection('projects').add({
        ...project,
        autherFirstName:profile.firstName,
        autherLastName:profile.lastName,
        autherId:autherId,
        createdAt:new Date()

    }).then(()=>{
        dispatch({type:'CREATE_PROJECT',project});
    }).catch((err)=>{
        dispatch({type:'CREATE_PROJECT_ERROR',err});
    })
    }
}; 
