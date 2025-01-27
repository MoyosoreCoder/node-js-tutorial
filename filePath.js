import path from 'path'

const filePath = './dir/dir2/test2.txt'
//basename
console.log(basename(filePath))

//dirname
console.log(path.dirname(filePath))

//parse
console.log(path.parse(filePath)); 

//extname
console.log(path.extname(filePath));


