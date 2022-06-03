import fs from 'fs'
import path from 'path'
let __dirname = path.resolve(path.dirname(''));

// delete.js - implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
export const remove = async () => {
    // Write your code here 
	const fileToRemove = 'fileToRemove.txt';
	const fileToRemovePath = path.join(__dirname, './src/fs/files', fileToRemove);
	fs.access(fileToRemovePath, fs.constants.F_OK, (err) => {
		if (err) {
			throw new Error('FS operation failed must be thrown');
		}
	}
	)
	fs.unlink(fileToRemovePath, (err) => {
		if (err) {
			throw new Error('FS operation failed must be thrown');
		}
		console.log(`${fileToRemove} deleted`);
	}
	)

};
remove();