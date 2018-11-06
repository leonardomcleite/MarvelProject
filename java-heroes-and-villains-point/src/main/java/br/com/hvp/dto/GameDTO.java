package br.com.hvp.dto;

import java.sql.Time;
import java.util.Date;
import java.util.List;

public class GameDTO {

	private Long id;
	private List<PlayerDTO> players;
	private Time timeLeft;
	private Date date;
	private Integer roundPlayer;
	private int stage;
	private int cardsPerPlayer;
	private int timePlayed;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<PlayerDTO> getPlayers() {
		return players;
	}

	public void setPlayers(List<PlayerDTO> players) {
		this.players = players;
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

	public Integer getRoundPlayer() {
		return roundPlayer;
	}

	public void setRoundPlayer(Integer roundPlayer) {
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

	public void setTimePlayed(int timePlayed) {
		this.timePlayed = timePlayed;
	}

}
