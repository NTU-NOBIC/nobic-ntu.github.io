//a demo macro from Introduction to FIJI course by NOBIC
//segments images in a folder and measures average intensity in the segmented objects for each image
//https://www.nobic.sg/FIJI/FIJIntro.html

macro "TestMacro_SineWave" {
	Dialog.create("Settings"); //dialog to ask user to specify the period of the sine
	Dialog.addNumber("Period", 20);
	Dialog.show();
	period = Dialog.getNumber(); //period of the sinusoiod in px.
	newImage("Untitled", "8-bit black", 256, 256, 1); //new empty image
	getDimensions(width, height, channels, slices, frames); //read image dimensions
	//loop through all pixels and set their values
	for (x = 0; x < width; x++) {  //loop over columns
		value = sineWave(x); //value depends only on the column index x, not he row index y
		for (y = 0; y < height; y++) { //for each column loop over rows
			setPixel(x, y, value); //set pixesl value
		}
	}

	function sineWave(X) { //a function to generate a scale sine function (from 0 to 200) and given period
		value = 100+100*sin(x*2*PI/period);
		return value;
	}
}
