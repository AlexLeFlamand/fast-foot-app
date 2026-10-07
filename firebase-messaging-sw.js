importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBD-Wr_IQEaK9IDT7UtanIZO2Xwu9Zp1Pw",
    authDomain: "fastfoot-app.firebaseapp.com",
    projectId: "fastfoot-app",
    storageBucket: "fastfoot-app.firebasestorage.app",
    messagingSenderId: "1046591481491",
    appId: "1:1046591481491:web:4fe6fef5d1a5854ce4cf66"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Message reçu en arrière-plan :', payload);
    const notificationTitle = payload.notification ? payload.notification.title : 'Fast Foot';
    const notificationOptions = {
        body: payload.notification ? payload.notification.body : 'Nouvelle notification de match !',
        icon: 'Logo.jpeg'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});