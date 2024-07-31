package renting;

import java.util.Objects;

class Customer extends Person {

	public Customer(String name, String email) {
		super(name, email);
	}

	public void rentBuilding(Building building) {
		if (!building.isRented()) {
			building.rent();
			buildings.add(building);

		} else {
			buildings = null;

		}

	}

	@Override
	public void viewRentedBuildings() {
		System.out.println("\n" + "My Rented Buildings: ");
		if (this.getBuildings() != null) {

			System.out.println("Customer name: " + this.getName() + ", Buildings name: " + this.getBuildings());

		}

	}

	public void viewContractsList(Contract[] contracts) {
		System.out.println("\n" + "My Contracts list: ");
		for (Contract c : contracts) {
			if (Objects.equals(c.customer.name, this.name)) {
				System.out.println(c.printContract());
			}
		}
	}

}
