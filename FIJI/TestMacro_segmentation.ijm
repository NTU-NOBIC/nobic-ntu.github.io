//a demo macro from Introduction to FIJI course by NOBIC
//segments images in a folder and measures average intensity in the segmented objects for each image
//https://www.nobic.sg/FIJI/FIJIntro.html

macro "TestMacro_segmentation [q]" { //defines keyboard shortcut "q" - if copied to Startup Macros
	FilterRad = 2; //radius for median filter
	UserInput = true; //allow user modification of segmented image
	Dir=getDir("Select Input");//select input folder
	setBatchMode(true);
	list = getFileList(Dir);
	ResDir = Dir+"Results"+File.separator; //create output folder
	File.makeDirectory(ResDir);
	N = list.length; //number of files in the input directory
	run("Clear Results");
	//loop over all files in the input folder
	for (i = 0; i < N; i++) {
		if (endsWith(list[i], ".tif")){ //open only TIF images
			open(Dir+list[i]);
			name = getTitle(); //read image title = file name
			Input = getImageID();
			run("Median...", "radius="+FilterRad); //smooth the image before thresholding
			run("Duplicate...", " "); //duplicate the input image to generate a mask
			Mask = getImageID();
			setAutoThreshold("Otsu dark no-reset"); //use Otsu algorith to threshold
			run("Convert to Mask");
			run("Divide...", "value=255"); //normaalize the mask to 1=segmented object, 0=outside
			imageCalculator("Divide create 32-bit", Input, Mask); //trick to make the ixels outside of segmented objects Infinity
			Output = getImageID();
			//close Input image and Mask
			selectImage(Input);
			close();
			selectImage(Mask);
			close();
			selectImage(Output);
			if (UserInput) { //allow user to delete wrongly segmented objects
				setBatchMode("exit and display");
				waitForUser("User Input", "Delete wrongly segmented objects (if any)");
				setBatchMode(true);
				if (selectionType()>-1) run("Divide...", "value=0"); //trick to convert the deleted ROI to NaN
				run("Select None");
			}
			getStatistics(area, mean, min, max, std, histogram);
			//populate a custom results table
			setResult("Name", i, name);
			setResult("Mean", i, mean);
			setResult("STD", i, std);
			setResult("Area", i, area);
			saveAs("TIF", ResDir+name); //save segmented image
			close();//close the output image
			showProgress(i, N); //show progress bar
		}
	}
	saveAs("Results", ResDir+"Results.csv"); //save results table
}	
	
	
