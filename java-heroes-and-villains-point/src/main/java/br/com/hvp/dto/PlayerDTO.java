package br.com.hvp.dto;

import java.util.List;

public class PlayerDTO {

	private Long id;
	private UserDTO user;
	private int score;
	private List<CardsGameDTO> cards;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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
