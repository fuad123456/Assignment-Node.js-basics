
import fs from 'fs';
import path from 'path';

let __dirname = path.resolve(path.dirname(''));
export const copy = async () => {
    // Write your code here 
	fs.access(path.join(__dirname,'./src/fs/files-copy'),(err)=>{
		if(err){
			console.log('files_copy doesn\'t exist');
		}
		else{
			throw new Error('FS operation failed must be thrown');
		}
	})
	fs.promises.mkdir(path.join(__dirname,'./src/fs/files-copy'),{recursive: true})
	fs.access(path.join(__dirname,'./src/fs/files'),(err)=>{
		if(err){
			throw new Error('FS operation failed must be thrown');
		}
	})
	fs.promises.readdir(path.join(__dirname,'./src/fs/files'),{withFileTypes: true})
	.then((files) => {
		for (const file of files){
			if(file.isFile()){
				fs.access(path.join(__dirname,'./src/fs/files-copy',file.name),fs.constants.F_OK,(err)=>{
					if(err){
						fs.copyFile(path.join(__dirname,'./src/fs/files',file.name),path.join(__dirname,'./src/fs/files-copy',file.name),(err)=>{
							if(err){
								console.log(err);
							}
							console.log(`${file.name} copied`);
						});
					}
				})
			}else {
				throw new Error('FS operation failed must be thrown');
			}
		}
	})
	.catch(err => {
		console.error(err);
	}

)};
copy();