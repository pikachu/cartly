console.log("Opened popup.")

// Adding the listener for button
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('pageChecker');
  checkPageButton.addEventListener('click', function() {
    
    //checkpoint
    console.log('clicked on button');
     
      // Function lets us check through all the tabs
      chrome.tabs.query({}, function(tabs) {
        goThrough(tabs);
      });
    });
}, false);

// This iterates through all the tabs to use the closeTab function
function goThrough(tabs){
  var allTabs = [];
  for (var i = 0; i < tabs.length; i++) {
    closeTab(tabs[i].id);
  };
}

// This checks whether a tab should be closed 
function closeTab(id) {

  //x is an array with the first entry as either true or false
  chrome.tabs.executeScript(id, {"file": "js/getPagesSource.js"}, function(x){
    console.log('Sending tab #'  + id + ' to the script.');
    if (x[0]){
      closer(id);
    } else {
     console.log("Tab does not need to be closed.")
   }
   
   // Catch the exception.
   if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError.message);
  }
});
}

// The function to actually close your tab.
function closer(id){
  chrome.tabs.remove(id, function() {
    console.log('remove tab #');
    console.log(id);
  });
}



