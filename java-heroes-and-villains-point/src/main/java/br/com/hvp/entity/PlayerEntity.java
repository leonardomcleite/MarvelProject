//package br.com.hvp.entity;
//
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
//@Entity
//@Table(schema = "QUADRINHOS", name = "PLAYER")
//public class PlayerEntity {
//
//	@Id
//	@OneToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
//	@JoinTable(name = "USERS", joinColumns = @JoinColumn(name = "USER_ID"), inverseJoinColumns = @JoinColumn(name = "ID"))
//	private UserEntity user;
//
//	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
//	@JoinTable(name = "CARDS", joinColumns = @JoinColumn(name = "CARDS"), inverseJoinColumns = @JoinColumn(name = "CHARACTER"))
//	private List<CardsEntity> cards;
//
//	@Column(name = "SOCORE")
//	private int socore;
//
//	public UserEntity getUser() {
//		return user;
//	}
//
//	public void setUser(UserEntity user) {
//		this.user = user;
//	}
//
//	public List<CardsEntity> getCards() {
//		return cards;
//	}
//
//	public void setCards(List<CardsEntity> cards) {
//		this.cards = cards;
//	}
//
//	public int getSocore() {
//		return socore;
//	}
//
//	public void setSocore(int socore) {
//		this.socore = socore;
//	}
//
//}
