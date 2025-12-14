const lunches = [];

function addLunchToEnd(lunches, lunchItem) { 
 lunches.push(lunchItem);
 console.log(lunchItem + " added to the end of the lunch menu.");
 return lunches
}

function addLunchToStart(lunches, lunchItem) {
  lunches.unshift(lunchItem);
  console.log(lunchItem + " added to the start of the lunch menu.");
  return lunches
}

function removeLastLunch(lunches) {
  const removedItem = lunches.pop();
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    console.log (removedItem + " removed from the end of the lunch menu.")
  }
  return lunches
}

function removeFirstLunch(lunches) {
  const removedItem = lunches.shift();
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    console.log(removedItem + " removed from the start of the lunch menu.");
    return lunches
  }
}

function getRandomLunch(lunches) {
  const randomLunchItem = Math.floor(lunches.length * Math.random())
  if (lunches.length === 0) {
    console.log("No lunches available.");
  } else {
    console.log("Randomly selected lunch: " + lunches[randomLunchItem]);
  }
}

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + lunches.join(", "));
  }
}