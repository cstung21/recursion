// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsWithClass = [];
  var body = document.body;

  var checkElementHasClass = function(element) {
  	if (element.classList && element.classList.contains(className)) {
  		elementsWithClass.push(element);
  	}	
		if (element.childNodes) {
	  		for (let i = 0; i < element.childNodes.length; i++) {
	  			checkElementHasClass(element.childNodes[i]);
	  		}
	  }	
  }	
  checkElementHasClass(body);
  return elementsWithClass;	
};
