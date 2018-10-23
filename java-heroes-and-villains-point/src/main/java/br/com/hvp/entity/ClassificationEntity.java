package br.com.hvp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(schema = "QUADRINHOS", name = "CLASSIFICATION")
@SequenceGenerator(name = "SQ_CLASSIFICATION", sequenceName = "QUADRINHOS.SQ_CLASSIFICATION", allocationSize = 1)
public class ClassificationEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_CLASSIFICATION")
	@Column(name = "ID")
	private Long id;

	@Column(name = "GENIUS")
	private char genius;

	@Column(name = "DURABILITY")
	private int durability;

	@Column(name = "ENERGY")
	private int energy;

	@Column(name = "INTELLIGENCE")
	private int intelligence;

	@Column(name = "COMBAT")
	private int combat;

	@Column(name = "SPEED")
	private int speed;

	@Column(name = "STRENGTH")
	private int strength;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public char getGenius() {
		return genius;
	}

	public void setGenius(char genius) {
		this.genius = genius;
	}

	public int getDurability() {
		return durability;
	}

	public void setDurability(int durability) {
		this.durability = durability;
	}

	public int getEnergy() {
		return energy;
	}

	public void setEnergy(int energy) {
		this.energy = energy;
	}

	public int getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}

	public int getCombat() {
		return combat;
	}

	public void setCombat(int combat) {
		this.combat = combat;
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
	}

	public int getStrength() {
		return strength;
	}

	public void setStrength(int strength) {
		this.strength = strength;
	}

}
