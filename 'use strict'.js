'use strict'
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() //open history file
  });
  //get some user input
  var input = prompt()
  prompt.history.save() //s
console.log('123');