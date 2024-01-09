const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies

  // Progression 2: using setTimeout() 
function getCookies(){
  setTimeout(function(){
    cookies.forEach(function(ele){
      console.log(ele)
    })
  }, 2000)
}


//Progression 3: Create a function to creat cookies
function createCookies(callbackfunc){
  setTimeout(function(){
    cookies.push(newCookie);
    callbackfunc()
  }, 2000)
}


// Progression 5: calling function
createCookies(getCookies);
