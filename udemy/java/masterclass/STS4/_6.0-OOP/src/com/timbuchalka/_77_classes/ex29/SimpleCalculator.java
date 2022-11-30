package com.timbuchalka._77_classes.ex29;

public class SimpleCalculator {

	protected double firstNumber;
	protected double secondNumber;
	
	// Class methods
	public double getAdditionResult() {
		return firstNumber + secondNumber;
	}
	
	public double getSubtractionResult() {
		return firstNumber - secondNumber;
	}
	
	public double getMultiplicationResult() {
		return firstNumber * secondNumber;
	}
	
	public double getDivisionResult() {
		return (secondNumber != 0) ? firstNumber / secondNumber : 0;
	}

	// Getters and setters
	public double getFirstNumber() {
		return firstNumber;
	}

	public void setFirstNumber(double firstNumber) {
		this.firstNumber = firstNumber;
	}

	public double getSecondNumber() {
		return secondNumber;
	}

	public void setSecondNumber(double secondNumber) {
		this.secondNumber = secondNumber;
	}
	

}
