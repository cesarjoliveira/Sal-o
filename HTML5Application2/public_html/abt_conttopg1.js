/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var counter = 0;
var timer = setInterval(function() {
  if( counter >= 3 ) {
    window.location.href="pg1.html";
  }
  
  console.log( counter++ );
}, 1000);
