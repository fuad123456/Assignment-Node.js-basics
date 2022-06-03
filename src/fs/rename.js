import fs from 'fs'
import path from 'path'
let __dirname = path.resolve(path.dirname(''));

// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
export const rename = async () => {
    // Write your code here 
	const wrongFilename = 'wrongFilename.txt';
	const properFilename = 'properFilename.md';
	const wrongFilenamePath = path.join(__dirname, './src/fs/files', wrongFilename);
	const properFilenamePath = path.join(__dirname, './src/fs/files', properFilename);
	fs.access(wrongFilenamePath, fs.constants.F_OK, (err) => {
		if (err) {
			throw new Error('FS operation failed must be thrown');
		}
	}
	)
	fs.access(properFilenamePath, fs.constants.F_OK, (err) => {
		if (err) {
			fs.rename(wrongFilenamePath, properFilenamePath, (err) => {
				if (err) {
					throw new Error('FS operation failed must be thrown');
				}
				console.log(`${wrongFilename} renamed to ${properFilename}`);
			})
		} else {
			throw new Error('FS operation failed must be thrown');
		}
	}
	)

};
rename();