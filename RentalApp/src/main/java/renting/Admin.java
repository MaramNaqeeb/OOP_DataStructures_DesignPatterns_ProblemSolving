package renting;

public class Admin extends Person {
	public Admin() {

	}

	public Admin(String name, String email) {
		super(name, email);
	}

	public void viewRentedBuildings(Customer[] customers) {
		System.out.println("\n" + "Rented Buildings: ");
		for (Customer c : customers) {
			if (c.getBuildings() != null) {
				System.out.println("Buildings name: " + c.getBuildings() + ", Customer name: " + c.getName());

			}
		}

	}

	public void viewContractsList(Contract[] contracts) {
		System.out.println("\n" + "Contracts list: ");
		for (Contract c : contracts) {
			System.out.println(c.printContract());
		}
	}

}
