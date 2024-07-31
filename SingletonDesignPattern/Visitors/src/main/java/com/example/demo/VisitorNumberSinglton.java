package com.example.demo;

public class VisitorNumberSinglton {
	private static VisitorNumberSinglton instance;
	private int counter;
	
	private VisitorNumberSinglton() {}
	
	public static VisitorNumberSinglton getInstance() {
		if(instance==null) {
			instance= new VisitorNumberSinglton();
		}
			return instance;
		
	}
	
	public void getVisitorsNumber() {
		System.out.println("The number of visitors to the app is: "+ counter);
	}

	public int getCounter() {
		return counter;
	}

	public void setCounter(int counter) {
		this.counter = counter;
	}
	
}
	
