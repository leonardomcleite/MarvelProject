//package br.com.hvp.entity;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Table;
//
//@Entity
//@Table(schema = "QUADRINHOS", name = "GAME_PLAYERS")
//public class GamePlayersEntity {
//	
//	@Column(name = "PLAYER")
//	private Long player;
//	
//	@Column(name = "GAME")
//	private Long game;
//
//	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
//	@JoinTable(name = "PLAYER", joinColumns = @JoinColumn(name = "PLAYER"), inverseJoinColumns = @JoinColumn(name = "USER_ID"))
//	private PlayerEntity player;
//
//	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
//	@JoinTable(name = "GAME", joinColumns = @JoinColumn(name = "GAME"), inverseJoinColumns = @JoinColumn(name = "ID"))
//	private GameEntity game;
//
//	public PlayerEntity getPlayer() {
//		return player;
//	}
//
//	public void setPlayer(PlayerEntity player) {
//		this.player = player;
//	}
//
//	public GameEntity getGame() {
//		return game;
//	}
//
//	public void setGame(GameEntity game) {
//		this.game = game;
//	}
//
//}
