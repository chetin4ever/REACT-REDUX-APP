const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello from Firebase mario plan!");
});

const createNotification = (notification =>{
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc=>console.log('notification added :', doc));
})
exports.projectCreated = functions.firestore
.document('projects/{projectId}')
.onCreate(doc =>{
    const project = doc.data();
    const notification={
        content:'Added new project',
        user:`${project.autherFirstName} ${project.autherLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
})
// exports.userJoined=functions.firestore.document("users/{uid}")
// .onCreate(user=>{
//     return admin.firestore().collection('users')
//     .doc(user.uid).get().then(doc=>{
//         const newUser=doc.data();
//         console.log('newuser:',newUser);
//         const notification = {
//             content : 'joined the party',
//             user : `${newUser.firstName} ${ newUser.lastName}`,
//             time : admin.firestore.FieldValue.serverTimestamp()
//         }
//         return createNotification(notification);
//     })
// });

exports.userJoined=functions.firestore.document("users/{userID}")
.onCreate((snap,context)=>{
        const newUser=snap.data();
        console.log('newuser:',newUser);
        const notification = {
            content : 'new user joined the party',
            user : `${newUser.firstName} ${ newUser.lastName}`,
            time : admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    
});