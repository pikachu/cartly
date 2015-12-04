# Cartly
A chrome extension to help shopaholics get back on task.
<hr>
<h3>Story</h3>
During <a href = "http://startupshell.org/">Startup Shell's</a> retreated in November 2015, we were all discussing <i>goals</i> and <i>projects</i>. <a href = "https://jaxgeller.com/">Someone</a> had just created a chrome extension to help people learn coding better (<a href = "https://chrome.google.com/webstore/detail/type-it-out/cakjfpgihbciegpnmholbaafghdbngjp?hl=en">Type it out</a>), and a friend of mine, Nick, jokingly asked for a chrome extension to help him stop shopping so much.<br><br>
So, <b>Cartly</b> was born.
<hr>
<h3>Use</h3>
This extension closes all tabs that have the text "add to cart" in its html. Those of you who have a little bit a shopaholic problem (no judgement), this is your solution! When you have that "I need to get back on task moment!", just click the button in the popup to close all your tabs that are obviously shopping-related. 
<hr>
<h3>Install</h3>
Install link coming soon... Still need to test a little.
<hr>
<h3>How does it work?</h3>
The extension iterates through each tab and just takes all of the html. It searches the entire string (after .toLowerCase()) looking for the text "add to cart" or "addtocart". If detected, the tab is deleted.
<hr>
<img src = "icons/icon.png" width = "200px">
