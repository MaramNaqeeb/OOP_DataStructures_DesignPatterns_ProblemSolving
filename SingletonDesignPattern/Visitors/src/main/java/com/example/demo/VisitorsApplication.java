package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VisitorsApplication {

	public static void main(String[] args) {
		SpringApplication.run(VisitorsApplication.class, args);

		VisitorNumberSinglton visitor1 = VisitorNumberSinglton.getInstance();
		visitor1.setCounter(visitor1.getCounter() + 1);               
		System.out.println("first visitor: " + visitor1.getCounter());

		VisitorNumberSinglton visitor2 = VisitorNumberSinglton.getInstance();
		visitor2.setCounter(visitor2.getCounter() + 1);                
		System.out.println("second visitor: " + visitor2.getCounter()); /* it will print 2 not 1 because the counter 
		                                                               of the same object gets incremented */

		visitor1.getVisitorsNumber(); // this will print 2 as the same object's counter gets incremented
		visitor2.getVisitorsNumber(); // this will print 2 as the same object's counter gets incremented

	}

}

/*
 * The reason of using singleton design pattern for this class: With the use of
 * singleton, this system will calculate the visitor number to the application
 * by incrementing the counter of the same object by one every single time the
 * application gets visited. Thus, if we do not use singleton, we cannot
 * calculate the overall visitors to the application as the counter would start
 * incrementing from 0 every single time a visitor visits the application since
 * in this case the counter of different object references gets incremented
 */
