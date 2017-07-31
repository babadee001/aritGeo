function aritGeo(arr){
  let firstTerm = arr[0];
  let secondTerm = arr[1];
  let lastTerm = arr[arr.length-1];
  let commonDifference = secondTerm - firstTerm;
  let apNthTerm = firstTerm + (arr.length-1) * commonDifference; // a + (n-1)d
  let commonRatio = secondTerm/firstTerm;
  let gpNthTerm = firstTerm * (Math.pow(commonRatio,arr.length-1)); //ar**n-1
  if (arr.length === 0){
    return 0;
  }
	if ( apNthTerm === lastTerm){
		return "Arithmetic"; //last term always equals nth term 
	}
	else if(lastTerm === gpNthTerm){
	  return "Geometric"
	}
	else {
	  return -1;
	}
}
//console.log(aritGeo([1,2,3,22]));