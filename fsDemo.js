//import fs from 'fs'
import { promises as fs } from 'fs';

// Reading a file asynchronously
/**fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // Runs after the file is read
});

console.log('This will run BEFORE the file is read');*/

//readfile async/await

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8')
        console.log(data)
    } catch (error) {
        console.log(error)

    }
}

readFile();