function hideDiv() {
  const freeDelivery = document.querySelector("#Delivery");
  const hideDiv = document.querySelector(".payment__methods");

  if (freeDelivery.value === "hide") {
    hideDiv.style.display = "none";
  } else {
    freeDelivery.style.display = "inline-block";
  }

  if (freeDelivery.value === "show") {
    hideDiv.style.display = "block";
  } else {
    freeDelivery.style.display = "hide";
  }
}
