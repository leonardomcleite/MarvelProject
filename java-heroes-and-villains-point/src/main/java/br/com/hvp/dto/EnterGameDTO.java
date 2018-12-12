package br.com.hvp.dto;

public class EnterGameDTO {

	private GameDTO game;
	private UserDTO user;

	public GameDTO getGame() {
		return game;
	}

	public void setGame(GameDTO game) {
		this.game = game;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

}
