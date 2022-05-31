// Import the functions you need from the SDKs you need
console.log("CONNECTING TO FIREBASE");
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB5j1NyORm7V_70cqmFM59yQD_scpLJIH8",
  authDomain: "vr-final-project-6d2b9.firebaseapp.com",
  databaseURL: "https://vr-final-project-6d2b9-default-rtdb.firebaseio.com",
  projectId: "vr-final-project-6d2b9",
  storageBucket: "vr-final-project-6d2b9.appspot.com",
  messagingSenderId: "544281858373",
  appId: "1:544281858373:web:1def7755320e3eb0d32e2c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Subscribing to auth changes
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(`Firebase: ${uid} user just signed in`);

    room.connectToFirebase({
      user: user,
      authID: uid,
      databaseRef: firebase.database().ref("users/" + uid),
    });

    // ...
  } else {
    // User is signed out
    // ...
    console.warn("disconnect?");
    room.disconnectFromFirebase({});
  }
});

// Attempting authenticate anonymously
firebase
  .auth()
  .signInAnonymously()
  .then(() => {
    console.log("Firebase auth: Signed in anonynmously");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(error);
  });
  //generate cheese
  var cheeseTable = [];
if (cheeseTable.length === 0) {

  var cheeseRef = firebase.database().ref("cheese/");
  cheeseRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (data === null) {
      var cheeseWriteRef = firebase.database().ref("/");
      let cheeseplateCubes = [];
      for (var i = 0; i < 40; i++) {
        cheeseplateCubes.push(new Vector(Math.random(), 1, Math.random()));
      }
      cheeseWriteRef.update({
        cheese: cheeseplateCubes,
      });
    }
    cheeseTable = data;
	console.log(cheeseTable);
  });
}


function initializeRoom(room) {
  // Add things to the room
  // Give everyone the same rocks
  // let rockCount = 0
  // let objFocus =new LiveObject(room, {
  // 	type: "cube",
  // 	color: new Vector(360, 100, 50),
  // 	size: new Vector(.5, .5, .5),
  // 	onUpdate({t,dt,frameCount}) {
  // 		let x = 1.4*noise(t*.5)
  // 		let y = 2.4*noise(t*.3)
  // 		let z = 1.1*noise(t*.4)
  // 		this.position.set(x,y, z)
  // 	}
  // })
  // // Make a number of rocks
  // // Each rock will *look at*
  // for (var i = 0; i < rockCount; i++) {
  // 	let h = .5 + .2*noise(i)
  // 	let obj = new LiveObject(room, {
  // 		label: "cube",
  // 		labelColor:new Vector(noise(i*.01)*360, 100, 50).toHex(),
  // 		type: "cube",
  // 		color: new Vector(noise(i*.01)*360, 100, 50),
  // 		size: new Vector(.1,.2, h),
  // 		onUpdate({t,dt,frameCount}) {
  // 			this.lookAt(objFocus.position)
  // 		}
  // 	})
  // 	// Set the rock in the ground, and point it toward the center
  // 	// it "looks" along its y-axis
  // 	let theta = i*Math.PI*2/rockCount
  // 	let r = 2
  // 	obj.position.setToCylindrical(r, theta, h*.5)
  // 	obj.lookAt(0,0,0)
  // }
}
