package br.com.hvp.dto;

public class CardsGameDTO {

	private String position;
	private static int totalCards = 0;
	private CharacterDTO character;

	public CardsGameDTO() {
		CardsGameDTO.totalCards++;
	}

	public CardsGameDTO(String position) {
		CardsGameDTO.totalCards++;
		this.position = position;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public static int getTotalCards() {
		return totalCards;
	}

	public static void setTotalCards(int totalCards) {
		CardsGameDTO.totalCards = totalCards;
	}

	public CharacterDTO getCharacter() {
		return character;
	}

	public void setCharacter(CharacterDTO character) {
		this.character = character;
	}

}
