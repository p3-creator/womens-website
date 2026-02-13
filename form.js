// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const modal = document.getElementById("login-modal");
    const closeBtn = document.querySelector(".close-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showLogin = document.getElementById("show-login");
    const showRegister = document.getElementById("show-register");
    const formTitle = document.getElementById("form-title");
  
    // Show modal on button click
    loginBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  
    // Hide modal on close button click
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Hide modal when clicking outside modal content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Toggle forms
    showRegister.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
      formTitle.textContent = "SIGN UP";
    });
  
    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
      formTitle.textContent = "Login";
    });
  });
  
  // Basic validation
  function validateLogin(event) {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    if (!email || !password) {
      alert("Please fill in all fields.");
      event.preventDefault();
      return false;
    }
    return true;
  }
  
  function validateRegister(event) {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
  
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      event.preventDefault();
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      event.preventDefault();
      return false;
    }
    return true;
  }
  

 
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,           // Enables looping
    margin: 10,           // Margin between items
    nav: true,            // Show navigation arrows
    autoplay: true,       // Enable auto-slide
    autoplayTimeout: 3000, // Time between slides (in ms)
    items:1,               // Show only 1 image at a time
  });
});




const products = {
  clothing: [
    { 
      name: "T-Shirt", 
      price: "$10", 
      rating: "4.5", 
      image: "https://thumbs.dreamstime.com/b/women-s-denim-dress-shirt-white-blue-84124450.jpg" 
    },
    { 
      name: "Jeans", 
      price: "$25", 
      rating: "4.0", 
      image: "https://img.freepik.com/premium-photo/female-jeans-mom-fit-isolated-white-background-jeans-with-high-waist-casual-style_125869-2331.jpg?w=360" 
    },
    { 
      name: "Jeans", 
      price: "$30", 
      rating: "4.6", 
      image: "https://media.istockphoto.com/id/1281304280/photo/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-lay-copy-space.jpg?s=612x612&w=0&k=20&c=nSMI2abaVovzkH1n0eXeJYCkrtI-6QcD_V7OVUz4zS4=" 
    },
    { 
      name: "shirt", 
      price: "$25", 
      rating: "4.2", 
      image: "https://cozyearth.com/cdn/shop/files/1_Frenchdoveheather_Alldaytee.jpg?v=1718636078&width=1554" 
    },
    { 
      name: "trouser", 
      price: "$18", 
      rating: "4.0", 
      image: "https://atlas-content-cdn.pixelsquid.com/stock-images/women-s-pants-black-9K8r3DE-600.jpg" 
    },
    { 
      name: "T-Shirt", 
      price: "$10", 
      rating: "4.5", 
      image: "https://thumbs.dreamstime.com/b/women-s-denim-dress-shirt-white-blue-84124450.jpg" 
    },
    { 
      name: "Jeans", 
      price: "$25", 
      rating: "4.0", 
      image: "https://img.freepik.com/premium-photo/female-jeans-mom-fit-isolated-white-background-jeans-with-high-waist-casual-style_125869-2331.jpg?w=360" 
    },
    { 
      name: "Jeans", 
      price: "$30", 
      rating: "4.6", 
      image: "https://media.istockphoto.com/id/1281304280/photo/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-lay-copy-space.jpg?s=612x612&w=0&k=20&c=nSMI2abaVovzkH1n0eXeJYCkrtI-6QcD_V7OVUz4zS4=" 
    },
    { 
      name: "shirt", 
      price: "$25", 
      rating: "4.2", 
      image: "https://cozyearth.com/cdn/shop/files/1_Frenchdoveheather_Alldaytee.jpg?v=1718636078&width=1554" 
    },
    { 
      name: "trouser", 
      price: "$18", 
      rating: "4.0", 
      image: "https://atlas-content-cdn.pixelsquid.com/stock-images/women-s-pants-black-9K8r3DE-600.jpg" 
    },
    { 
      name: "T-Shirt", 
      price: "$10", 
      rating: "4.5", 
      image: "https://thumbs.dreamstime.com/b/women-s-denim-dress-shirt-white-blue-84124450.jpg" 
    },
    { 
      name: "Jeans", 
      price: "$25", 
      rating: "4.0", 
      image: "https://img.freepik.com/premium-photo/female-jeans-mom-fit-isolated-white-background-jeans-with-high-waist-casual-style_125869-2331.jpg?w=360" 
    },
    { 
      name: "Jeans", 
      price: "$30", 
      rating: "4.6", 
      image: "https://media.istockphoto.com/id/1281304280/photo/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-lay-copy-space.jpg?s=612x612&w=0&k=20&c=nSMI2abaVovzkH1n0eXeJYCkrtI-6QcD_V7OVUz4zS4=" 
    },
    { 
      name: "shirt", 
      price: "$25", 
      rating: "4.2", 
      image: "https://cozyearth.com/cdn/shop/files/1_Frenchdoveheather_Alldaytee.jpg?v=1718636078&width=1554" 
    },
    { 
      name: "trouser", 
      price: "$18", 
      rating: "4.0", 
      image: "https://atlas-content-cdn.pixelsquid.com/stock-images/women-s-pants-black-9K8r3DE-600.jpg" 
    },
    { 
      name: "T-Shirt", 
      price: "$10", 
      rating: "4.5", 
      image: "https://thumbs.dreamstime.com/b/women-s-denim-dress-shirt-white-blue-84124450.jpg" 
    },
    { 
      name: "Jeans", 
      price: "$25", 
      rating: "4.0", 
      image: "https://img.freepik.com/premium-photo/female-jeans-mom-fit-isolated-white-background-jeans-with-high-waist-casual-style_125869-2331.jpg?w=360" 
    },
    { 
      name: "Jeans", 
      price: "$30", 
      rating: "4.6", 
      image: "https://media.istockphoto.com/id/1281304280/photo/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-lay-copy-space.jpg?s=612x612&w=0&k=20&c=nSMI2abaVovzkH1n0eXeJYCkrtI-6QcD_V7OVUz4zS4=" 
    },
    { 
      name: "shirt", 
      price: "$25", 
      rating: "4.2", 
      image: "https://cozyearth.com/cdn/shop/files/1_Frenchdoveheather_Alldaytee.jpg?v=1718636078&width=1554" 
    },
    { 
      name: "trouser", 
      price: "$18", 
      rating: "4.0", 
      image: "https://atlas-content-cdn.pixelsquid.com/stock-images/women-s-pants-black-9K8r3DE-600.jpg" 
    },
    { 
      name: "shirt", 
      price: "$25", 
      rating: "4.2", 
      image: "https://cozyearth.com/cdn/shop/files/1_Frenchdoveheather_Alldaytee.jpg?v=1718636078&width=1554" 
    },
    { 
      name: "trouser", 
      price: "$18", 
      rating: "4.0", 
      image: "https://atlas-content-cdn.pixelsquid.com/stock-images/women-s-pants-black-9K8r3DE-600.jpg" 
    },
    { 
      name: "T-Shirt", 
      price: "$10", 
      rating: "4.5", 
      image: "https://thumbs.dreamstime.com/b/women-s-denim-dress-shirt-white-blue-84124450.jpg" 
    },
    { 
      name: "Jeans", 
      price: "$25", 
      rating: "4.0", 
      image: "https://img.freepik.com/premium-photo/female-jeans-mom-fit-isolated-white-background-jeans-with-high-waist-casual-style_125869-2331.jpg?w=360" 
    },
    { 
      name: "Jeans", 
      price: "$30", 
      rating: "4.6", 
      image: "https://media.istockphoto.com/id/1281304280/photo/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-lay-copy-space.jpg?s=612x612&w=0&k=20&c=nSMI2abaVovzkH1n0eXeJYCkrtI-6QcD_V7OVUz4zS4=" 
    },
    { 
      name: "shirt", 
      price: "$25", 
      rating: "4.2", 
      image: "https://cozyearth.com/cdn/shop/files/1_Frenchdoveheather_Alldaytee.jpg?v=1718636078&width=1554" 
    },
    { 
      name: "trouser", 
      price: "$18", 
      rating: "4.0", 
      image: "https://atlas-content-cdn.pixelsquid.com/stock-images/women-s-pants-black-9K8r3DE-600.jpg" 
    },
    { 
      name: "T-Shirt", 
      price: "$10", 
      rating: "4.5", 
      image: "https://thumbs.dreamstime.com/b/women-s-denim-dress-shirt-white-blue-84124450.jpg" 
    },
    { 
      name: "Jeans", 
      price: "$25", 
      rating: "4.0", 
      image: "https://img.freepik.com/premium-photo/female-jeans-mom-fit-isolated-white-background-jeans-with-high-waist-casual-style_125869-2331.jpg?w=360" 
    },
    { 
      name: "Jeans", 
      price: "$30", 
      rating: "4.6", 
      image: "https://media.istockphoto.com/id/1281304280/photo/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-lay-copy-space.jpg?s=612x612&w=0&k=20&c=nSMI2abaVovzkH1n0eXeJYCkrtI-6QcD_V7OVUz4zS4=" 
    },
    { 
      name: "shirt", 
      price: "$25", 
      rating: "4.2", 
      image: "https://cozyearth.com/cdn/shop/files/1_Frenchdoveheather_Alldaytee.jpg?v=1718636078&width=1554" 
    },
    { 
      name: "trouser", 
      price: "$18", 
      rating: "4.0", 
      image: "https://atlas-content-cdn.pixelsquid.com/stock-images/women-s-pants-black-9K8r3DE-600.jpg" 
    },
    { 
      name: "T-Shirt", 
      price: "$10", 
      rating: "4.5", 
      image: "https://thumbs.dreamstime.com/b/women-s-denim-dress-shirt-white-blue-84124450.jpg" 
    },
    { 
      name: "Jeans", 
      price: "$25", 
      rating: "4.0", 
      image: "https://img.freepik.com/premium-photo/female-jeans-mom-fit-isolated-white-background-jeans-with-high-waist-casual-style_125869-2331.jpg?w=360" 
    },
    { 
      name: "Jeans", 
      price: "$30", 
      rating: "4.6", 
      image: "https://media.istockphoto.com/id/1281304280/photo/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-lay-copy-space.jpg?s=612x612&w=0&k=20&c=nSMI2abaVovzkH1n0eXeJYCkrtI-6QcD_V7OVUz4zS4=" 
    },
    { 
      name: "shirt", 
      price: "$25", 
      rating: "4.2", 
      image: "https://cozyearth.com/cdn/shop/files/1_Frenchdoveheather_Alldaytee.jpg?v=1718636078&width=1554" 
    },
    { 
      name: "trouser", 
      price: "$18", 
      rating: "4.0", 
      image: "https://atlas-content-cdn.pixelsquid.com/stock-images/women-s-pants-black-9K8r3DE-600.jpg" 
    },
  ],




  fashion: [
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "4.9", 
      image: "https://d161wrq7muokn7.cloudfront.net/images/product/600.600/Glasses-Online-Shopping-Nepal-65.jpg" 
    },
    { 
      name: "Watches", 
      price: "$50", 
      rating: "4.6", 
      image: "https://www.titannepal.com/cdn/shop/files/2725WM01.jpg?v=1716471523" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "3.8", 
      image: "https://xaina.com/wp-content/uploads/2023/02/Round-Metal-High-Quality-Women-Sunglasses-1-scaled.jpg" 
    },
    { 
      name: "necklace", 
      price: "$15", 
      rating: "4.5", 
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcfbf242b/images/hi-res/552819PIGAAA22_1.jpg?sw=360&sh=360" 
    },
    { 
      name: "ring", 
      price: "$15", 
      rating: "4.7", 
      image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/sydney016-n1/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/yellow.jpg" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "4.9", 
      image: "https://d161wrq7muokn7.cloudfront.net/images/product/600.600/Glasses-Online-Shopping-Nepal-65.jpg" 
    },
    { 
      name: "Watches", 
      price: "$50", 
      rating: "4.6", 
      image: "https://www.titannepal.com/cdn/shop/files/2725WM01.jpg?v=1716471523" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "3.8", 
      image: "https://xaina.com/wp-content/uploads/2023/02/Round-Metal-High-Quality-Women-Sunglasses-1-scaled.jpg" 
    },
    { 
      name: "necklace", 
      price: "$15", 
      rating: "4.5", 
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcfbf242b/images/hi-res/552819PIGAAA22_1.jpg?sw=360&sh=360" 
    },
    { 
      name: "ring", 
      price: "$15", 
      rating: "4.7", 
      image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/sydney016-n1/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/yellow.jpg" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "4.9", 
      image: "https://d161wrq7muokn7.cloudfront.net/images/product/600.600/Glasses-Online-Shopping-Nepal-65.jpg" 
    },
    { 
      name: "Watches", 
      price: "$50", 
      rating: "4.6", 
      image: "https://www.titannepal.com/cdn/shop/files/2725WM01.jpg?v=1716471523" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "3.8", 
      image: "https://xaina.com/wp-content/uploads/2023/02/Round-Metal-High-Quality-Women-Sunglasses-1-scaled.jpg" 
    },
    { 
      name: "necklace", 
      price: "$15", 
      rating: "4.5", 
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcfbf242b/images/hi-res/552819PIGAAA22_1.jpg?sw=360&sh=360" 
    },
    { 
      name: "ring", 
      price: "$15", 
      rating: "4.7", 
      image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/sydney016-n1/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/yellow.jpg" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "4.9", 
      image: "https://d161wrq7muokn7.cloudfront.net/images/product/600.600/Glasses-Online-Shopping-Nepal-65.jpg" 
    },
    { 
      name: "Watches", 
      price: "$50", 
      rating: "4.6", 
      image: "https://www.titannepal.com/cdn/shop/files/2725WM01.jpg?v=1716471523" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "3.8", 
      image: "https://xaina.com/wp-content/uploads/2023/02/Round-Metal-High-Quality-Women-Sunglasses-1-scaled.jpg" 
    },
    { 
      name: "necklace", 
      price: "$15", 
      rating: "4.5", 
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcfbf242b/images/hi-res/552819PIGAAA22_1.jpg?sw=360&sh=360" 
    },
    { 
      name: "ring", 
      price: "$15", 
      rating: "4.7", 
      image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/sydney016-n1/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/yellow.jpg" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "4.9", 
      image: "https://d161wrq7muokn7.cloudfront.net/images/product/600.600/Glasses-Online-Shopping-Nepal-65.jpg" 
    },
    { 
      name: "Watches", 
      price: "$50", 
      rating: "4.6", 
      image: "https://www.titannepal.com/cdn/shop/files/2725WM01.jpg?v=1716471523" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "3.8", 
      image: "https://xaina.com/wp-content/uploads/2023/02/Round-Metal-High-Quality-Women-Sunglasses-1-scaled.jpg" 
    },
    { 
      name: "necklace", 
      price: "$15", 
      rating: "4.5", 
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcfbf242b/images/hi-res/552819PIGAAA22_1.jpg?sw=360&sh=360" 
    },
    { 
      name: "ring", 
      price: "$15", 
      rating: "4.7", 
      image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/sydney016-n1/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/yellow.jpg" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "4.9", 
      image: "https://d161wrq7muokn7.cloudfront.net/images/product/600.600/Glasses-Online-Shopping-Nepal-65.jpg" 
    },
    { 
      name: "Watches", 
      price: "$50", 
      rating: "4.6", 
      image: "https://www.titannepal.com/cdn/shop/files/2725WM01.jpg?v=1716471523" 
    },
    { 
      name: "Sunglasses", 
      price: "$15", 
      rating: "3.8", 
      image: "https://xaina.com/wp-content/uploads/2023/02/Round-Metal-High-Quality-Women-Sunglasses-1-scaled.jpg" 
    },
    { 
      name: "necklace", 
      price: "$15", 
      rating: "4.5", 
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcfbf242b/images/hi-res/552819PIGAAA22_1.jpg?sw=360&sh=360" 
    },
    { 
      name: "ring", 
      price: "$15", 
      rating: "4.7", 
      image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/sydney016-n1/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/alloycolour/yellow.jpg" 
    },
  ],



  shoes: [
    { 
      name: "Running Shoes", 
      price: "$40", 
      rating: "4.8", 
      image: "https://thumbs.dreamstime.com/b/pair-sky-blue-sport-shoes-white-background-64845292.jpg" 
    },
    { 
      name: "sports Shoes", 
      price: "$30", 
      rating: "4.3", 
      image: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=" 
    },
    { 
      name: "Casual Shoes", 
      price: "$30", 
      rating: "4.6", 
      image: "https://thumbs.dreamstime.com/b/pair-trendy-sneakers-white-background-151361365.jpg" 
    },
    { 
      name: "sneaker", 
      price: "$30", 
      rating: "4.8", 
      image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.jpg?s=612x612&w=0&k=20&c=Rw-DKRCQFD4FsLmsTd9mSkABEKgr9FDhCPdDlH85xkc=" 
    },
    { 
      name: "heels Shoes", 
      price: "$30", 
      rating: "4.5", 
      image: "https://static.vecteezy.com/system/resources/previews/022/069/148/large_2x/closeup-fashion-high-heels-women-shoes-beige-color-isolated-on-white-background-top-view-stiletto-shoe-style-in-ladies-wardrobe-high-fashion-and-formal-female-accessory-copy-space-selective-focus-free-photo.jpg" 
    },
    { 
      name: "Running Shoes", 
      price: "$40", 
      rating: "4.8", 
      image: "https://thumbs.dreamstime.com/b/pair-sky-blue-sport-shoes-white-background-64845292.jpg" 
    },
    { 
      name: "sports Shoes", 
      price: "$30", 
      rating: "4.3", 
      image: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=" 
    },
    { 
      name: "Casual Shoes", 
      price: "$30", 
      rating: "4.6", 
      image: "https://thumbs.dreamstime.com/b/pair-trendy-sneakers-white-background-151361365.jpg" 
    },
    { 
      name: "sneaker", 
      price: "$30", 
      rating: "4.8", 
      image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.jpg?s=612x612&w=0&k=20&c=Rw-DKRCQFD4FsLmsTd9mSkABEKgr9FDhCPdDlH85xkc=" 
    },
    { 
      name: "heels Shoes", 
      price: "$30", 
      rating: "4.5", 
      image: "https://static.vecteezy.com/system/resources/previews/022/069/148/large_2x/closeup-fashion-high-heels-women-shoes-beige-color-isolated-on-white-background-top-view-stiletto-shoe-style-in-ladies-wardrobe-high-fashion-and-formal-female-accessory-copy-space-selective-focus-free-photo.jpg" 
    },
    { 
      name: "Running Shoes", 
      price: "$40", 
      rating: "4.8", 
      image: "https://thumbs.dreamstime.com/b/pair-sky-blue-sport-shoes-white-background-64845292.jpg" 
    },
    { 
      name: "sports Shoes", 
      price: "$30", 
      rating: "4.3", 
      image: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=" 
    },
    { 
      name: "Casual Shoes", 
      price: "$30", 
      rating: "4.6", 
      image: "https://thumbs.dreamstime.com/b/pair-trendy-sneakers-white-background-151361365.jpg" 
    },
    { 
      name: "sneaker", 
      price: "$30", 
      rating: "4.8", 
      image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.jpg?s=612x612&w=0&k=20&c=Rw-DKRCQFD4FsLmsTd9mSkABEKgr9FDhCPdDlH85xkc=" 
    },
    { 
      name: "heels Shoes", 
      price: "$30", 
      rating: "4.5", 
      image: "https://static.vecteezy.com/system/resources/previews/022/069/148/large_2x/closeup-fashion-high-heels-women-shoes-beige-color-isolated-on-white-background-top-view-stiletto-shoe-style-in-ladies-wardrobe-high-fashion-and-formal-female-accessory-copy-space-selective-focus-free-photo.jpg" 
    },

    { 
      name: "Running Shoes", 
      price: "$40", 
      rating: "4.8", 
      image: "https://thumbs.dreamstime.com/b/pair-sky-blue-sport-shoes-white-background-64845292.jpg" 
    },
    { 
      name: "sports Shoes", 
      price: "$30", 
      rating: "4.3", 
      image: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=" 
    },
    { 
      name: "Casual Shoes", 
      price: "$30", 
      rating: "4.6", 
      image: "https://thumbs.dreamstime.com/b/pair-trendy-sneakers-white-background-151361365.jpg" 
    },
    { 
      name: "sneaker", 
      price: "$30", 
      rating: "4.8", 
      image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.jpg?s=612x612&w=0&k=20&c=Rw-DKRCQFD4FsLmsTd9mSkABEKgr9FDhCPdDlH85xkc=" 
    },
    { 
      name: "heels Shoes", 
      price: "$30", 
      rating: "4.5", 
      image: "https://static.vecteezy.com/system/resources/previews/022/069/148/large_2x/closeup-fashion-high-heels-women-shoes-beige-color-isolated-on-white-background-top-view-stiletto-shoe-style-in-ladies-wardrobe-high-fashion-and-formal-female-accessory-copy-space-selective-focus-free-photo.jpg" 
    },
    { 
      name: "Running Shoes", 
      price: "$40", 
      rating: "4.8", 
      image: "https://thumbs.dreamstime.com/b/pair-sky-blue-sport-shoes-white-background-64845292.jpg" 
    },
    { 
      name: "sports Shoes", 
      price: "$30", 
      rating: "4.3", 
      image: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=" 
    },
    { 
      name: "Casual Shoes", 
      price: "$30", 
      rating: "4.6", 
      image: "https://thumbs.dreamstime.com/b/pair-trendy-sneakers-white-background-151361365.jpg" 
    },
    { 
      name: "sneaker", 
      price: "$30", 
      rating: "4.8", 
      image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.jpg?s=612x612&w=0&k=20&c=Rw-DKRCQFD4FsLmsTd9mSkABEKgr9FDhCPdDlH85xkc=" 
    },
    { 
      name: "heels Shoes", 
      price: "$30", 
      rating: "4.5", 
      image: "https://static.vecteezy.com/system/resources/previews/022/069/148/large_2x/closeup-fashion-high-heels-women-shoes-beige-color-isolated-on-white-background-top-view-stiletto-shoe-style-in-ladies-wardrobe-high-fashion-and-formal-female-accessory-copy-space-selective-focus-free-photo.jpg" 
    },
    { 
      name: "Running Shoes", 
      price: "$40", 
      rating: "4.8", 
      image: "https://thumbs.dreamstime.com/b/pair-sky-blue-sport-shoes-white-background-64845292.jpg" 
    },
    { 
      name: "sports Shoes", 
      price: "$30", 
      rating: "4.3", 
      image: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=" 
    },
    { 
      name: "Casual Shoes", 
      price: "$30", 
      rating: "4.6", 
      image: "https://thumbs.dreamstime.com/b/pair-trendy-sneakers-white-background-151361365.jpg" 
    },
    { 
      name: "sneaker", 
      price: "$30", 
      rating: "4.8", 
      image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.jpg?s=612x612&w=0&k=20&c=Rw-DKRCQFD4FsLmsTd9mSkABEKgr9FDhCPdDlH85xkc=" 
    },
    { 
      name: "heels Shoes", 
      price: "$30", 
      rating: "4.5", 
      image: "https://static.vecteezy.com/system/resources/previews/022/069/148/large_2x/closeup-fashion-high-heels-women-shoes-beige-color-isolated-on-white-background-top-view-stiletto-shoe-style-in-ladies-wardrobe-high-fashion-and-formal-female-accessory-copy-space-selective-focus-free-photo.jpg" 
    },
    { 
      name: "Running Shoes", 
      price: "$40", 
      rating: "4.8", 
      image: "https://thumbs.dreamstime.com/b/pair-sky-blue-sport-shoes-white-background-64845292.jpg" 
    },
    { 
      name: "sports Shoes", 
      price: "$30", 
      rating: "4.3", 
      image: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=" 
    },
    { 
      name: "Casual Shoes", 
      price: "$30", 
      rating: "4.6", 
      image: "https://thumbs.dreamstime.com/b/pair-trendy-sneakers-white-background-151361365.jpg" 
    },
    { 
      name: "sneaker", 
      price: "$30", 
      rating: "4.8", 
      image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.jpg?s=612x612&w=0&k=20&c=Rw-DKRCQFD4FsLmsTd9mSkABEKgr9FDhCPdDlH85xkc=" 
    },
    { 
      name: "heels Shoes", 
      price: "$30", 
      rating: "4.5", 
      image: "https://static.vecteezy.com/system/resources/previews/022/069/148/large_2x/closeup-fashion-high-heels-women-shoes-beige-color-isolated-on-white-background-top-view-stiletto-shoe-style-in-ladies-wardrobe-high-fashion-and-formal-female-accessory-copy-space-selective-focus-free-photo.jpg" 
    },
    { 
      name: "Running Shoes", 
      price: "$40", 
      rating: "4.8", 
      image: "https://thumbs.dreamstime.com/b/pair-sky-blue-sport-shoes-white-background-64845292.jpg" 
    },
    { 
      name: "sports Shoes", 
      price: "$30", 
      rating: "4.3", 
      image: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=" 
    },
    { 
      name: "Casual Shoes", 
      price: "$30", 
      rating: "4.6", 
      image: "https://thumbs.dreamstime.com/b/pair-trendy-sneakers-white-background-151361365.jpg" 
    },
    { 
      name: "sneaker", 
      price: "$30", 
      rating: "4.8", 
      image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.jpg?s=612x612&w=0&k=20&c=Rw-DKRCQFD4FsLmsTd9mSkABEKgr9FDhCPdDlH85xkc=" 
    },
    { 
      name: "heels Shoes", 
      price: "$30", 
      rating: "4.5", 
      image: "https://static.vecteezy.com/system/resources/previews/022/069/148/large_2x/closeup-fashion-high-heels-women-shoes-beige-color-isolated-on-white-background-top-view-stiletto-shoe-style-in-ladies-wardrobe-high-fashion-and-formal-female-accessory-copy-space-selective-focus-free-photo.jpg" 
    },
    { 
      name: "Running Shoes", 
      price: "$40", 
      rating: "4.8", 
      image: "https://thumbs.dreamstime.com/b/pair-sky-blue-sport-shoes-white-background-64845292.jpg" 
    },
    { 
      name: "sports Shoes", 
      price: "$30", 
      rating: "4.3", 
      image: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=" 
    },
    { 
      name: "Casual Shoes", 
      price: "$30", 
      rating: "4.6", 
      image: "https://thumbs.dreamstime.com/b/pair-trendy-sneakers-white-background-151361365.jpg" 
    },
    { 
      name: "sneaker", 
      price: "$30", 
      rating: "4.8", 
      image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.jpg?s=612x612&w=0&k=20&c=Rw-DKRCQFD4FsLmsTd9mSkABEKgr9FDhCPdDlH85xkc=" 
    },
    { 
      name: "heels Shoes", 
      price: "$30", 
      rating: "4.5", 
      image: "https://static.vecteezy.com/system/resources/previews/022/069/148/large_2x/closeup-fashion-high-heels-women-shoes-beige-color-isolated-on-white-background-top-view-stiletto-shoe-style-in-ladies-wardrobe-high-fashion-and-formal-female-accessory-copy-space-selective-focus-free-photo.jpg" 
    },
  ],
};


function displayProducts(category) {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = ""; // Clear existing products

  if (products[category]) {
    products[category].forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 8px;">
        <h4>${product.name}</h4>
        <p class="price">${product.price}</p>
        <p class="sta">⭐⭐⭐⭐ <i class="bi bi-star sta1"></i></P>
        <p class="rating">Rating: ${product.rating}</p>
      `;

      productContainer.appendChild(productCard);
    });
  } else {
    productContainer.innerHTML = `<p>No products available.</p>`;
  }
}

// Event listener for dropdown
document.getElementById("category").addEventListener("change", (e) => {
  const selectedCategory = e.target.value;
  displayProducts(selectedCategory);
});