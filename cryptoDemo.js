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


//createcipheriv and  createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // AES-256 requires a 256-bit key (32 bytes)
const iv = crypto.randomBytes(16);
// Encryption
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('This is a secret message.', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);


// Decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);