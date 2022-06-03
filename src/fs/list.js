
import fs from 'fs'
import path from 'path'
let __dirname = path.resolve(path.dirname(''));
// list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

export const list = async () => {
    // Write your code here 
	const files = await fs.promises.readdir(path.join(__dirname, './src/fs/files'), (err, files) => {
		if (err) {
			throw new Error('FS operation failed must be thrown');
		} else {
			return files
		}
	})
	console.log(files);

};
list();