# log
Logging is always useful while writing codes.You can make it easier with <code>log</code> too.
<code>log</code> receives three parameters.  
First one is what you want to log.  
Second one is which font size (by pxls) you want to set.  
And third one is color.  
```js
npm install --save my_log
```

### Examples 
```js
//simple
log("Not bad");

//with all options
log("done!", 30, "red");

//only with font size
log("Color would be black if you don't set", 80);

//using rgb
log("running", 24 ,"rgb(50,155,10)");
```