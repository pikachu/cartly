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
      console.log("Tab could be closed.")
      checker(id);
    } else {
     console.log("Tab does not need to be closed.")
   }
   
   // Catch the exception.
   if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError.message);
  }
});
}


function checker(id){
  console.log("In checker with id " + id)
  var shouldDelete = true;
    chrome.tabs.get(id, function (tab){
      url = tab.url;
      for (var i = 0; i < blacklist.length; i ++){
        if (url.search(blacklist[i]) == -1){
          console.log("not " + blacklist[i])
          if (blacklist[i] == "github.com"){
            closer(id);
            console.log("Deleting page.")
          }
        }
        else{
          shouldDelete = false;
          console.log("Blacklisted page! " + blacklist[i])
          break;
        }

      }
  })
}
// The function to actually close your tab.
function closer(id){
  chrome.tabs.remove(id, function() {
    console.log('remove tab #');
    console.log(id);
  });
}

blacklist = ["google.com", "stackoverflow.com", "facebook.com", "twitter.com", "github.com"]



