package com.samsung.org.vo;

public class Quest {

	private String time;
	private String client;
	private String title;
	private String stars;
	private String category;
	private String worker;
	private String area;
	private String time_limit;
	private String contents;
	private String city;
	private Double lat;
	private Double lag;
	
	public Double getLat() {
		return lat;
	}
	public void setLat(Double lat) {
		this.lat = lat;
	}
	public Double getLag() {
		return lag;
	}
	public void setLag(Double lag) {
		this.lag = lag;
	}
	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getClient() {
		return client;
	}

	public void setClient(String client) {
		this.client = client;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getStars() {
		return stars;
	}

	public void setStars(String stars) {
		this.stars = stars;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getTime_limit() {
		return time_limit;
	}

	public void setTime_limit(String time_limit) {
		this.time_limit = time_limit;
	}

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	
	public String getWorker() {
		return worker;
	}
	public void setWorker(String worker) {
		this.worker = worker;
	}
	@Override
	public String toString() {
		return "Quest [time=" + time + ", client=" + client + ", title="
				+ title + ", stars=" + stars + ", category=" + category
				+ ", worker=" + worker + ", area=" + area + ", time_limit="
				+ time_limit + ", contents=" + contents + ", city=" + city
				+ ", lat=" + lat + ", lag=" + lag + "]";
	}


	
	

}