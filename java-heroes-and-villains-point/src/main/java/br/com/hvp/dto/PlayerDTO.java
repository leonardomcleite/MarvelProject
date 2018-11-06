package br.com.hvp.dto;

import java.util.List;

public class PlayerDTO {

	private UserDTO user;
	private int score;
	private List<CardsGameDTO> cards;

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public List<CardsGameDTO> getCards() {
		return cards;
	}

	public void setCards(List<CardsGameDTO> cards) {
		this.cards = cards;
	}

}
