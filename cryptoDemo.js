import crypto from 'crypto';

// Create a hash object with the 'sha256' algorithm
const hash = crypto.createHash('sha256');

// Update the hash with some data (e.g., a string)
hash.update('password123');

// Get the final hashed result in hexadecimal format
const result = hash.digest('hex');

console.log(result);  


//randomBytes()
crypto.randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log('Random bytes:', buffer.toString('hex'));  
});