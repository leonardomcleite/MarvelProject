package br.com.hvp.test.dto;

public class MarvelDTO {

	public String name;
	public String name2;
	public String biografy;
	public String durability;
	public String energy;
	public String combat;
	public String intelligence;
	public String speed;
	public String strength;
	public String url;

	public MarvelDTO() {}
	
	public MarvelDTO(String name, String name2, String biografy, String durability, String energy, String combat,
			String intelligence, String speed, String strength, String url) {
		this.name = name;
		this.name2 = name2;
		this.biografy = biografy;
		this.durability = durability;
		this.energy = energy;
		this.combat = combat;
		this.intelligence = intelligence;
		this.speed = speed;
		this.strength = strength;
		this.url = url;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName2() {
		return name2;
	}

	public void setName2(String name2) {
		this.name2 = name2;
	}

	public String getBiografy() {
		return biografy;
	}

	public void setBiografy(String biografy) {
		this.biografy = biografy;
	}

	public String getDurability() {
		return durability;
	}

	public void setDurability(String durability) {
		this.durability = durability;
	}

	public String getEnergy() {
		return energy;
	}

	public void setEnergy(String energy) {
		this.energy = energy;
	}

	public String getCombat() {
		return combat;
	}

	public void setCombat(String combat) {
		this.combat = combat;
	}

	public String getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(String intelligence) {
		this.intelligence = intelligence;
	}

	public String getSpeed() {
		return speed;
	}

	public void setSpeed(String speed) {
		this.speed = speed;
	}

	public String getStrength() {
		return strength;
	}

	public void setStrength(String strength) {
		this.strength = strength;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
