package renting;

public class Visa implements PaymentMethod {
	private double moneyAmount;

	public Visa(String cardNumber) {
	}

	public double getAmount() { // I use the getAmount() method to get the money amount after setting it to the
								// new value in the pay() method

		return moneyAmount;

	}

	public void pay(double moneyAmount) {
		this.moneyAmount = moneyAmount;
	}

}
