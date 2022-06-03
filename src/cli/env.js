export const parseEnv = () => {
    // Write your code here 
	const args = process.argv.slice(2);
	const [firstKey,firstVal,secondKey,secondVal] = args;
	const [firstKey1,firstVal1,secondKey2,secondVal2]=[firstKey,firstVal,secondKey,secondVal];
	let n =firstKey1.slice(2);
	let k = secondKey2.slice(2);
	console.log(`${n} is ${firstVal}; ${k} is ${secondVal}`);
};
parseEnv();