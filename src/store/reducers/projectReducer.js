const initState={
    projects:[
        {id:'1',title:'help me find peach',content:'blah blah blah'},
        {id:'2',title:'collect all the starsd',content:'blah blah blah'},
        {id:'3',title:'egg hunt with chinu',content:'blah blah blah'},
        {id:'4',title:'get rid of all things',content:'blah blah blah'},

    ]
}

const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error:', action.err);
            return state;
        default:
        return state;
    }
    return state;
}

export default projectReducer;
