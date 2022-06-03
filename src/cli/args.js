export const parseArgs = () => {
    // Write your code here 
	const args = process.argv.slice(2);
	const env = {};
	const [firstKey,firstVal,secondKey,secondVal] = args;
	
	console.log(`${firstKey}=${firstVal}; ${secondKey}=${secondVal}`);
};
parseArgs();