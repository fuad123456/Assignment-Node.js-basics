import path from 'path';
import fs from 'fs/promises';
let __dirname = path.resolve(path.dirname(''));
export const create = async () => {
    // Write your code here 
	const files=await fs.readdir(path.join(__dirname,'./src/fs/files'),(err,files)=>{
		if(err)
			throw err;
		else{
			return files
		}
	},);
	// console.log(files);
	for (let file of files){
		if(file==='fresh.txt'){
			throw new Error('FS operation failed must be thrown');
		}
		else{
			await fs.writeFile(path.join(__dirname,'./src/fs/files/fresh.txt'),'I am fresh and young');
		}
	}
};
create()