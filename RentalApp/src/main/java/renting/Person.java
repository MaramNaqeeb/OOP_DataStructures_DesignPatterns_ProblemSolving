package renting;

import java.util.ArrayList;
import java.util.List;

public class Person {
	protected String name;
	protected String email;
	protected List<Building> buildings = new ArrayList<>();

	public Person() {
	}

	public Person(String name, String email) {
		this.name = name;
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Building> getBuildings() {
		return buildings;
	}

	public void setBuildings(List<Building> buildings) {
		this.buildings = buildings;
	}

	public void viewAvailableBuildings(Building[] buildings) {

		System.out.println("\n" + "Available unrented Buildings: ");
		for (Building b : buildings) {
			if (!b.isRented()) {
				System.out.println("Building name: " + b.getBuildingName() + ", Address: " + b.getAddress() + ", Size: "
						+ b.getSize() + ", Year: " + b.getYear() + ", Price:" + b.getPrice() + ", Owner name: "
						+ b.getOwner().name);
			}
		}
	}

	public void viewRentedBuildings() {
		System.out.println("PLease sign in to view the rented buildings");
	}

	public void viewContractsList() {
		System.out.println("PLease sign in to view the contracts");
	}

}
