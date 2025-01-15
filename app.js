// Get all the item-list elements
const itemLists = document.querySelectorAll(".best_sellers .item .item-list");

// Function to handle the scroll event
function handleScroll() {
  // Get the current scroll position
  const scrollTop = window.pageYOffset;

  // Loop through each item-list element
  itemLists.forEach((itemList) => {
    // Get the position of the item-list element relative to the viewport
    const itemListTop = itemList.getBoundingClientRect().top;

    // Check if the item-list element is in the viewport
    if (
      scrollTop + window.innerHeight > itemListTop &&
      itemListTop > scrollTop
    ) {
      // Add the 'show' class to the item-list element to trigger the animation
      itemList.classList.add("show");
    }
  });
}

// Add an event listener to the scroll event
window.addEventListener("scroll", handleScroll);
