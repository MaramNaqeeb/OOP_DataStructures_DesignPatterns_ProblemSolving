package renting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RentalAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(RentalAppApplication.class, args);

		BuildingOwner owner1 = new BuildingOwner("Jones Walsh", "jonw@gmail.com");
		BuildingOwner owner2 = new BuildingOwner("Davies Lam", "lam@gmail.com");
		BuildingOwner owner3 = new BuildingOwner("Lee Roy", "lr@gmail.com");

		Building apartment = owner1
				.addBuilding(new Apartment("White Apartments", "87 rdt St", 200, 1000, 2003, owner1));
		Building house = owner2.addBuilding(new House("Holiday House", "965 Sun St", 300, 2800, 2008, owner2));
		Building house2 = owner1.addBuilding(new House("Winter House", "832 Wr St", 500, 28000, 2008, owner1));
		Building shop = owner3.addBuilding(new Shop("Book Shop", "563 Noe St", 500, 800, 2005, owner3));
		Building shop2 = owner2.addBuilding(new Shop("Clothes Shop", "563 Noe St", 500, 800, 2005, owner2));

		Building[] buildings = { apartment, house, house2, shop, shop2 };

		Customer customer1 = new Customer("Liam Thomas", "liam.Thom@gmail.com");
		Customer customer2 = new Customer("James Charlie", "James.char@gmail.com");
		Customer customer3 = new Customer("Sophie Jones", "Sophie.j@gmail.com");

		customer1.rentBuilding(apartment);
		customer1.rentBuilding(shop);
		customer2.rentBuilding(house);
		customer3.rentBuilding(apartment);

		Customer[] customers = { customer1, customer2, customer3 };

		PaymentMethod paymentMethod1 = new PayPal(customer1.getEmail());
		PaymentMethod paymentMethod2 = new MasterCard("5361 7890 2987 0651");
		PaymentMethod paymentMethod3 = new Visa("1389 8326 0152 8953");
		PaymentMethod paymentMethod4 = new PayPal(customer3.getEmail());

		paymentMethod1.pay(1000);
		paymentMethod2.pay(800);
		paymentMethod3.pay(2800);
		paymentMethod4.pay(1000);

		Contract contract1 = new Contract(customer1, apartment, paymentMethod1, owner1);
		Contract contract2 = new Contract(customer1, shop, paymentMethod2, owner3);
		Contract contract3 = new Contract(customer2, house, paymentMethod3, owner2);
		Contract contract4 = new Contract(customer3, apartment, paymentMethod4, owner1);

		Contract[] contracts = { contract1, contract2, contract3, contract4 };

		Person person = new Person();
		person.viewAvailableBuildings(buildings);

		Admin admin = new Admin();
		admin.viewAvailableBuildings(buildings);
		admin.viewRentedBuildings(customers);
		admin.viewContractsList(contracts);

		customer1.viewAvailableBuildings(buildings);
		customer1.viewRentedBuildings();
		customer1.viewContractsList(contracts);

		owner1.viewAvailableBuildings(buildings);
		owner1.viewMyBuildings();
		owner1.viewRentedBuildings();
		owner1.viewContractsList(contracts);

	}

}
