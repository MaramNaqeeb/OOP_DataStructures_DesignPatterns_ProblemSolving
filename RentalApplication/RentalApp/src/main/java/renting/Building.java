package renting;

public abstract class Building {
	private String name;
	private String address;
	private double size;
	private double price;
	private int year;
	private boolean isRented;
	private BuildingOwner owner;

	protected Building(String name, String address, double size, double price, int year, BuildingOwner owner) {
		this.name = name;
		this.address = address;
		this.size = size;
		this.price = price;
		this.year = year;
		this.isRented = false;
		this.owner = owner;
	}

	public String getBuildingName() {
		return name;
	}

	public void setBuildingName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public double getSize() {
		return size;
	}

	public void setSize(double size) {
		this.size = size;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public BuildingOwner getOwner() {
		return owner;
	}

	public void setOwner(BuildingOwner owner) {
		this.owner = owner;
	}

	public boolean isRented() {
		return isRented; // to check the state
	}

	public void rent() {
		this.isRented = true; // to set a new state
	}

	public String toString() {
		return this.getBuildingName();
	}

}
