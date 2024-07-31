package renting;

class MasterCard implements PaymentMethod {
	private double moneyAmount;
	public String cardNumber;

    public MasterCard(String cardNumber) {
        this.cardNumber = cardNumber;
    }

	@Override
	public double getAmount() {   // I use the getAmount() method to get the money amount after setting it to the new value in the pay() method
	
		return moneyAmount;     
	}
	
	@Override
	public void pay(double moneyAmount) {
		this.moneyAmount=moneyAmount;
	}
	
}
