function conversion(time) {  
  if (time.substr(8) === "PM") {
    if (time.substr(0,2) === "12"){
      return time.substr(0,8);
    } else {
    return parseInt(time.substr(0,2)) + 12 + time.substr(2,6);
    }
  } else if (time.substr(8) === "AM" ){
    if(time.substr(0,2) === "12"){
      return "00" + time.substr(2,6);
    } else {
    return time.substr(0,8);
    }
  }
}
//conversion("12.35.59AM")