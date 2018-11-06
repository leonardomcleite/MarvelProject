package br.com.hvp.dto;

public class LobbyGameDTO {

	private int cardsPerPlayer;
	// Em minutos
	private int timePlayed;
	private GameDTO game;

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

	public GameDTO getGame() {
		return game;
	}

	public void setGame(GameDTO game) {
		this.game = game;
	}

}
