const admin = require("firebase-admin");
const serviceAccount = require("./accept-images-firebase-adminsdk-rm0qs-e95c51010a.json");

// Initialize firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://accept-images.appspot.com",
});

// Cloud storage
const bucket = admin.storage().bucket();

module.exports = {
  bucket,
};
