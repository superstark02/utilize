console.log("Working");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCvB_NODbusHww7rOp6q8HoQZLsNG4H4gc",
    authDomain: "pine-valley-7820d.firebaseapp.com",
    projectId: "pine-valley-7820d",
    storageBucket: "pine-valley-7820d.appspot.com",
    messagingSenderId: "319816114603",
    appId: "1:319816114603:web:5672a131d5c0e0a240f2ee",
    measurementId: "G-PVR671CYJB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

var data = [];

db.collection("Products").get().then((result) => {
    result.forEach(doc => {
        data.push(doc.data())
    });

    document.getElementById("product").innerHTML = data.map(item => {
        return (
            `<div class="col-lg-3 col-md-4 col-sm-6" >
                <div class="single-grid-product mb-40" >
                    <div class="product-image">
                        <a href="product.html">
                            <img src=${item.image}
                                class="img-fluid" alt="" />
                            <img src=${item.image1}
                                class="img-fluid" alt="" />
                        </a>
                    </div>
                    <div class="product-content">
                        <h3 class="title"> <a href="product.html">${item.name}</a></h3>
                        <p class="product-price"><span class="discounted-price">${item.sp}</span> <span
                            class="main-price discounted">${item.mrp}</span></p>
                    </div>
                    <div class="product-price">
                        <span class="discounted-price" >${item.discount}</span>
                    </div>
                </div>
            </div>`
        )
    })

}).catch((err) => {
    console.log(err)
});