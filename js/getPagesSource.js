// checkpoint
console.log("Executing 'getPagesSource.js'");

// gets the html. Thanks to "Mr. T"
// http://stackoverflow.com/questions/11684454/getting-the-source-html-of-the-current-page-from-chrome-extension
function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    return toDelete(html.toLowerCase());
}

//Returns true if add to cart is detected
function toDelete(htmlString){
	var n = []
    n[0] = htmlString.search("add to cart");
	n[1] = htmlString.search("addtocart");
    n[2] = htmlString.search("add to bag");
    n[3] = htmlString.search("add to my cart");
    n[4] = htmlString.search("add to my bag");
	
    return arrayChecker(n);
}

function arrayChecker(n){
    for (var i = 0; i < n.length; i ++){
        if (n[i] != -1)
            return true;
        if (i == n.length - 1 && n[i] == -1)
            return false;
    }
}
 
//Because of the chrome.tabs.executeScript
returner = DOMtoString(document);
returner;