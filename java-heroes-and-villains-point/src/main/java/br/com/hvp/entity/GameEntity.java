package br.com.hvp.entity;

import java.sql.Time;
import java.util.Date;
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
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(schema = "QUADRINHOS", name = "GAME")
@SequenceGenerator(name = "SQ_GAME", sequenceName = "QUADRINHOS.SQ_GAME", allocationSize = 1)
public class GameEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_GAME")
	@Column(name = "ID")
	private Long id;

	@Column(name = "TIME_LEFT")
	private Time timeLeft;

	@Column(name = "DATE")
	private Date date;

	@Column(name = "ROUND_PLAYER")
	private Long roundPlayer;

	@Column(name = "STAGE")
	private int stage;

	@Column(name = "CARDS_PER_PLAYER")
	private int cardsPerPlayer;

	@Column(name = "TIME_PLAYED")
	private int timePlayed;

	@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
	@JoinTable(name = "GAME_PLAYER", joinColumns = @JoinColumn(name = "GAME"), inverseJoinColumns = @JoinColumn(name = "PLAYER"))
	private List<PlayerEntity> player;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Time getTimeLeft() {
		return timeLeft;
	}

	public void setTimeLeft(Time timeLeft) {
		this.timeLeft = timeLeft;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Long getRoundPlayer() {
		return roundPlayer;
	}

	public void setRoundPlayer(Long roundPlayer) {
		this.roundPlayer = roundPlayer;
	}

	public int getStage() {
		return stage;
	}

	public void setStage(int stage) {
		this.stage = stage;
	}

	public int getCardsPerPlayer() {
		return cardsPerPlayer;
	}

	public void setCardsPerPlayer(int cardsPerPlayer) {
		this.cardsPerPlayer = cardsPerPlayer;
	}

	public int getTimePlayed() {
		return timePlayed;
	}

	public List<PlayerEntity> getPlayer() {
		return player;
	}

	public void setPlayer(List<PlayerEntity> player) {
		this.player = player;
	}

	public void setTimePlayed(int timePlayed) {
		this.timePlayed = timePlayed;
	}

}
