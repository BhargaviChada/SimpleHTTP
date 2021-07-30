// The Library Prototypes to create the get,post,put,delete functions

function simpleHTTP(){
  this.http=new XMLHttpRequest();
}

// HTTP Get Request
simpleHTTP.prototype.get=function(url,callback){
 this.http.open('GET',url,true);

 let self=this;
 this.http.onload=function(){
   if(self.http.status === 200){
     callback(null,self.http.responseText);
   }else{
    callback('Error '+self.http.status);
   }
 }

 this.http.send();
}

//HTTP Post request
simpleHTTP.prototype.post=function(url,data,callback){
  this.http.open('POST',url,true);
  this.http.setRequestHeader('Content-type','application/json');

  let self=this;
  this.http.onload=function(){
      callback(null,self.http.responseText);
    }
  
  //Posting the data
  this.http.send(JSON.stringify(data));
 }

 //HTTP Put request
simpleHTTP.prototype.put=function(url,data,callback){
  this.http.open('PUT',url,true);
  this.http.setRequestHeader('Content-type','application/json');

  let self=this;
  this.http.onload=function(){
      callback(null,self.http.responseText);
    }
  
  //updating the data
  this.http.send(JSON.stringify(data));
 }

 // HTTP Delete Request
simpleHTTP.prototype.delete=function(url,callback){
  this.http.open('DELETE',url,true);
 
  let self=this;
  this.http.onload=function(){
    if(self.http.status === 200){
      //returns response to the call back function indicating the data is deleted
      callback(null,'Post Deleted');
    }else{
     callback('Error '+self.http.status);
    }
  }
 
  this.http.send();
 }