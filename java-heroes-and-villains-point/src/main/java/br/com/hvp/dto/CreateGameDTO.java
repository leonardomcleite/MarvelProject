package br.com.hvp.dto;

public class CreateGameDTO {

	private UserDTO user;
	private RulesGameDTO rules;

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public RulesGameDTO getRules() {
		return rules;
	}

	public void setRules(RulesGameDTO rules) {
		this.rules = rules;
	}

}
