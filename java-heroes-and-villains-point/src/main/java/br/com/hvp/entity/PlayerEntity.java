package br.com.hvp.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(schema = "QUADRINHOS", name = "PLAYER")
@SequenceGenerator(name = "SQ_PLAYER", sequenceName = "QUADRINHOS.SQ_PLAYER", allocationSize = 1)
public class PlayerEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_PLAYER")
	@Column(name = "ID")
	private Long id;

	@OneToOne(fetch = FetchType.LAZY, cascade = { CascadeType.REFRESH })
	@JoinTable(name = "USERS", joinColumns = @JoinColumn(name = "USER_ID"), inverseJoinColumns = @JoinColumn(name = "ID"))
	private UserEntity user;

	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
	@JoinTable(name = "CARDS", joinColumns = @JoinColumn(name = "CARDS"), inverseJoinColumns = @JoinColumn(name = "CHARACTER"))
	private List<CardsEntity> cards;

	@Column(name = "SOCORE")
	private int socore;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

	public List<CardsEntity> getCards() {
		return cards;
	}

	public void setCards(List<CardsEntity> cards) {
		this.cards = cards;
	}

	public int getSocore() {
		return socore;
	}

	public void setSocore(int socore) {
		this.socore = socore;
	}

}
