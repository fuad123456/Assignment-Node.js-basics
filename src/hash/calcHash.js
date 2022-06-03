import fs from 'fs'
import crypto from 'crypto'
import path from 'path';
let __dirname = path.resolve(path.dirname(''));
// You should implement several functions in dedicated files
// calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and return it as hex
export const calculateHash = async () => {
    // Write your code here 
	const fileToCalculateHashFor = path.join(__dirname, './src/hash/files/fileToCalculateHashFor.txt');
	const hash = await fs.promises.readFile(fileToCalculateHashFor, (err, data) => {
		if (err) {
			throw new Error('FS operation failed must be thrown');
		} else {
			return crypto.createHash('sha256').update(data).digest('hex');
		}
	}
	)
	console.log(hash);
};
calculateHash();