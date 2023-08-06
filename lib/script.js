"use strict";
const svgtofont = require("svgtofont");

module.exports = async (
	inputPath,
	outputPath,
	fontFamilyName,
	classPrefix = "SVICO-"
) => {
	await svgtofont({
		src: inputPath, // svg path
		dist: outputPath, // output path
		fontName: fontFamilyName, // font name
		css: true, // Create CSS files.
		outSVGReact: true,
		outSVGPath: true,
		classNamePrefix: classPrefix,
		useCSSVars: true,
		logger: (message) => {
			console.info(message);
		},
	});
};
