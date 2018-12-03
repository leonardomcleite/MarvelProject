package br.com.hvp.dto;

public class CardsGameDTO {

	private Long id;
	private CharacterDTO character;
	private String position;
	private static int totalCards = 0;

	public CardsGameDTO(CharacterDTO character, String position) {
		super();
		this.character = character;
		this.position = position;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public CharacterDTO getCharacter() {
		return character;
	}

	public void setCharacter(CharacterDTO character) {
		this.character = character;
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

}
