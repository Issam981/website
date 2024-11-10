const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000); // Change slide every 5 seconds
function myFunction() {
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}
function stepFunction(event) {
  debugger;
  var element = document.getElementsByClassName("collapse");
  for (var i = 0; i < element.length; i++) {
    if (element[i] !== event.target.ariaControls) {
      element[i].classList.remove("show");
    }
  }
}
function toggleDiscount() {
  const isChecked = document.getElementById('yearlyToggle').checked;

  // Prices for yearly and monthly
  const prices = {
    Basic: { yearly: 500, monthly: 600 },
    Standard: { yearly: 1000, monthly: 1200 },
    Economy: { yearly: 600, monthly: 720 },
    Premium: { yearly: 2000, monthly: 2400 },
    Business: { yearly: 3500, monthly: 4200 },
    Enterprise: { yearly: 6000, monthly: 7200 }
  };

  // Update the displayed prices
  document.getElementById('BasicPrice').innerText = `$${isChecked ? prices.Basic.yearly : prices.Basic.monthly}/Year`;
  document.getElementById('StandardPrice').innerText = `$${isChecked ? prices.Standard.yearly : prices.Standard.monthly}/Year`;
  document.getElementById('EconomyPrice').innerText = `$${isChecked ? prices.Economy.yearly : prices.Economy.monthly}/Year`;
  document.getElementById('PremiumPrice').innerText = `$${isChecked ? prices.Premium.yearly : prices.Premium.monthly}/Year`;
  document.getElementById('BusinessPrice').innerText = `$${isChecked ? prices.Business.yearly : prices.Business.monthly}/Year`;
  document.getElementById('EnterprisePrice').innerText = `$${isChecked ? prices.Enterprise.yearly : prices.Enterprise.monthly}/Year`;
}
function getUserLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const userLocation = `Latitude: ${latitude}, Longitude: ${longitude}`;
          document.getElementById('user-location').value = userLocation;
      }, function(error) {
          alert("Unable to retrieve your location. Please enter it manually.");
      });
  } else {
      alert("Geolocation is not supported by this browser.");
  }
}
function togglePaymentMethod() {
  // Get the selected payment method
  var paymentMethod = document.querySelector('input[name="payment"]:checked').value;

  // Show or hide credit card information based on selected payment method
  var creditCardInfo = document.getElementById('credit-card-info');
  
  if (paymentMethod === 'paypal') {
      creditCardInfo.style.display = 'none'; // Hide credit card info when PayPal is selected
  } else {
      creditCardInfo.style.display = 'block'; // Show credit card info when Credit Card is selected
  }
}

// Initialize the page with the correct view based on the selected payment method
window.onload = function() {
  togglePaymentMethod();
};

function selectBundle(price, bundleName) {
  // Update the "Choose Your Bundle" button text
  document.querySelector('.btn-info').textContent = `${bundleName} - $${price}/Year`;

  // Update the Subtotal
  document.getElementById("subtotal").textContent = price;

  // Calculate tax (e.g., 5% tax)
  var tax = price * 0.05;
  document.getElementById("tax").textContent = tax.toFixed(2);

  // Calculate Total (Subtotal + Tax)
  var total = price + tax;
  document.getElementById("total").textContent = total.toFixed(2);
}
// Function to handle the bundle selection and price updates
function updateBundlePrice() {
  // Get selected bundle price from the dropdown
  var bundlePrice = parseFloat(document.getElementById("bundleSelect").value);
  
  if (bundlePrice === 0) {
      // If no bundle is selected, exit the function (or reset values)
      document.getElementById("subtotal").textContent = "0";
      document.getElementById("tax").textContent = "0";
      document.getElementById("total").textContent = "0";
      return;
  }

  // Calculate the tax (example: 5% tax)
  var tax = bundlePrice * 0.05;
  
  // Calculate the total (Subtotal + Tax)
  var total = bundlePrice + tax;

  // Update the order summary with calculated values
  document.getElementById("subtotal").textContent = bundlePrice.toFixed(2);
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
}
  // Set theme on page load based on stored preference
  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Default to light mode if no theme is set
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
  function viewPaymentHistory() {
    // Show the modal when the button is clicked
    var myModal = new bootstrap.Modal(document.getElementById('paymentHistoryModal'));
    myModal.show();
}