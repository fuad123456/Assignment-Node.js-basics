import fs from 'fs'
import path from 'path'
let __dirname = path.resolve(path.dirname(''));

// read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
export const read = async () => {
    // Write your code here 
	const fileToRead = 'fileToRead.txt';
	const fileToReadPath = path.join(__dirname, './src/fs/files', fileToRead);
	fs.access(fileToReadPath, fs.constants.F_OK, (err) => {
		if (err) {
			throw new Error('FS operation failed must be thrown');
		}
	}
	)
	fs.readFile(fileToReadPath, 'utf8', (err, data) => {
		if (err) {
			throw new Error('FS operation failed must be thrown');
		}
		console.log(data);
	}
	)

};
read();