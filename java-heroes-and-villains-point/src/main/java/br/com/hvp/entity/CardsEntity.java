package br.com.hvp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(schema = "QUADRINHOS", name = "CARDS")
@SequenceGenerator(name = "SQ_CARD", sequenceName = "QUADRINHOS.SQ_CARD", allocationSize = 1)
public class CardsEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_CARD")
	@Column(name = "ID")
	private Long id;

	@Column(name = "POSITION")
	private String position;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTER", joinColumns = @JoinColumn(name = "CHARACTER"), inverseJoinColumns = @JoinColumn(name = "ID"))
	private CharacterEntity character;

	public CardsEntity(Long id, String position, CharacterEntity character) {
		super();
		this.id = id;
		this.position = position;
		this.character = character;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public CharacterEntity getCharacter() {
		return character;
	}

	public void setCharacter(CharacterEntity character) {
		this.character = character;
	}

}
