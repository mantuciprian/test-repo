(function(){
    
    'use strict'
//search countries filter method
var searchCountry = function() {
    
    return function(battles,input) {
      //filtred output
      var out = [];
      //if input is something
      if( input !== undefined ){
        //iterate through battles
        angular.forEach(battles,function(val,i){
         //countries names
         var defenders = val.def.name.toLowerCase();
         var invaders = val.inv.name.toLowerCase();
                //if name has input string
                if(defenders.indexOf(input) !== -1 || invaders.indexOf(input) !== -1 ) {  
                              //output push value  
                              out.push(val);   
                                }   
                            });  
    //if input is undefined                         
    } else { 

        return battles;
            }
      
    return out;
} 
  };

angular.module('searchCountry',[]).filter('searchCountry', searchCountry);
 
})();