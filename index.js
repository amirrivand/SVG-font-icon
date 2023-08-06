const script = require("./lib/script");
const readLine = require("readline/promises");

(async function main() {
	// config node process std
	process.stdin.resume();
	process.stdin.setEncoding("utf-8");

	//   readline interface
	const rlInterface = readLine.createInterface(process.stdin, process.stdout);

	//   get input path of svg icons
	const iconsPath = await rlInterface.question("Enter icons path:\n");

	//   get output path for generated icon font
	const fontPath = await rlInterface.question("Enter output font path:\n");

	//   get font family name
	const fontName = await rlInterface.question(
		"Enter font name (without spaces):\n"
	);

	//   run script
	await script(iconsPath, fontPath, fontName);
})()
	.then(() => {
		console.log("finished");
	})
	.catch((err) => {
		console.log("Error occured:");
		console.error(err);
	})
	.finally(() => {
		process.exit(0);
	});
