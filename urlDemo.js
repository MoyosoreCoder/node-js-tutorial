import url from 'url'


const usrSting = 'http://example.com/path/to/resource'

//URL object
const parsedUrl = new url.URL(usrSting);
console.log(parsedUrl); 


//format 

//filepathToUrl
const filePath = '/path/to/file.txt';
const fileUrl = url.pathToFileURL(filePath);
console.log(fileUrl); 

//import meta.url - filename