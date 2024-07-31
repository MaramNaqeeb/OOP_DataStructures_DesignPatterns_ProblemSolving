package renting;

import java.nio.ByteBuffer;
import java.util.UUID;

class Contract {

	public Customer customer;
	public Building building;
	public PaymentMethod paymentMethod;
	public BuildingOwner owner;

	public Contract(Customer customer, Building building, PaymentMethod paymentMethod, BuildingOwner owner) {
		this.customer = customer;
		this.building = building;
		this.paymentMethod = paymentMethod;
		this.owner = owner;

	}

	public static String contractNum() {
		UUID uuid = UUID.randomUUID();
		long l = ByteBuffer.wrap(uuid.toString().getBytes()).getLong();
		return Long.toString(l, Character.MAX_RADIX);
	}

	public String printContract() {
		if (customer.getBuildings() != null) {

			return "Rental Contract " + contractNum() + ":" + "\n" + "Customer name:" + customer.getName() + ','
					+ " Customer email:" + customer.getEmail() + ", Owner name: " + owner.getName() + ", Owner email: "
					+ owner.getEmail() + ", Building name:" + building.getBuildingName() + ", Building size: "
					+ building.getSize() + " square meters" + ", RentalPeriod:'" + building.getYear() + "'" + ", Price:"
					+ paymentMethod.getAmount() + "$" +"\n";

		}

		return "";

	}

}
