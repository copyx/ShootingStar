package com.samsung.org.vo;

public class User {

	String e_mail;
	String pass;
	String city;
	String area;
	String stars;

	public String getE_mail() {
		return e_mail;
	}
	public void setE_mail(String e_mail) {
		this.e_mail = e_mail;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getStars() {
		return stars;
	}
	public void setStars(String stars) {
		this.stars = stars;
	}
	
	@Override
	public String toString() {
		return "User [e_mail=" + e_mail + ", pass=" + pass + ", city=" + city
				+ ", area=" + area + ", stars=" + stars + "]";
	}
	
}
