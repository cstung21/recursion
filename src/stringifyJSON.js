// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null ) {
  	return 'null';
  } else if (typeof obj === 'function' || typeof obj === 'undefined') {
  	return '';
  }	else if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return obj.toString();
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  	if (obj.length === 0) {
  	  return '[]';
		} else {  	
		  let returnString = obj.map(x => stringifyJSON(x)).join();
		  return '[' + returnString + ']';
		}  
  }	else if (typeof obj === 'object') {
  	if (Object.entries(obj).length === 0) {
  	  return '{}';
  	} else {
  		let objectEntries = [];
  		let objectKeys = Object.keys(obj);
  		objectKeys.forEach(function(value) {
  			if (typeof obj[value] !== 'function' && typeof obj[value] !== 'undefined') {
	  			let entry = stringifyJSON(value) + ':' + stringifyJSON(obj[value]);
	  			objectEntries.push(entry);
	  		}	
  		});
  		return '{' + objectEntries.join() + '}';
  	}
  }
}