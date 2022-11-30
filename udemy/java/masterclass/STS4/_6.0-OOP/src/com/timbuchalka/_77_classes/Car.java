package com.timbuchalka._77_classes;

public class Car {

	protected int doors;
	protected int wheels;
	protected String model;
	protected String engine;
	protected String color;
	
	
	public String getModel() {
		return model;
	}


	public void setModel(String model) {
		String validModel = model.toLowerCase();
		if (validModel.equals("carrera") || (validModel.equals("commodore")))
			this.model = model;
		else this.model = "unknown";
	}

}
