package br.com.hvp.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(schema = "QUADRINHOS", name = "CARDS")
public class CardsEntity {

	@Id
	@Column(name = "PLAYER")
	private Long player;

	@OneToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTER", joinColumns = @JoinColumn(name = "CHARACTER"), inverseJoinColumns = @JoinColumn(name = "ID"))
	private CharacterEntity character;

	@Column(name = "POSITION")
	private String position;

	public Long getPlayer() {
		return player;
	}

	public void setPlayer(Long player) {
		this.player = player;
	}

	public CharacterEntity getCharacter() {
		return character;
	}

	public void setCharacter(CharacterEntity character) {
		this.character = character;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

}
