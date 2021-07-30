// Demo of simplehttp Library
// Used JSON placeholder for the demo, a free fake REST API

const http=new simpleHTTP();

//get single post
// Takes the URL and a callback function as parameter
http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post){
  if(err){
    console.log(err);
  }else{
    //Operations can be performed on the data received here accordingly
    console.log(post);
  }
});

//get multiple post
// Change the endpoint of the API to get multiple posts
http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,posts){
  if(err){
    console.log(err);
  }else{
    console.log(posts);
  }
});

//Data to post 
const data={
  title : 'Title of the post',
  body: 'This is the body of the post '
};

//create posts
// Takes the URL and a callback function as parameter and the data to be posted
http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
  if(err){
    console.log(err);
  }else{
    //Returns a post with an id indicating that the post is added
    console.log(post);
  }
});

//update posts
// Takes the URL and a callback function as parameter and the data to be updated with
http.put('https://jsonplaceholder.typicode.com/posts/2',data,function(err,post){
  if(err){
    console.log(err);
  }else{
    console.log(post);
  }
});

//delete a post
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
  if(err){
    console.log(err);
  }else{
    //Returns a response indicating that the post is deleted
    console.log(response);
  }
});