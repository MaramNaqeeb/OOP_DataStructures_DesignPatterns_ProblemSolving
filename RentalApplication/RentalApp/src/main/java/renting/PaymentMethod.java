package renting;

public interface PaymentMethod {

	double getAmount();

	void pay(double amount);

}
