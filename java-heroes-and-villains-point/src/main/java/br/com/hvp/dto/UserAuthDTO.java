package br.com.hvp.dto;

public class UserAuthDTO {

	private Long id;
	private String user;
	private String email;
	private String password;
	private String cdConfirmation;

	public UserAuthDTO() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCdConfirmation() {
		return cdConfirmation;
	}

	public void setCdConfirmation(String cdConfirmation) {
		this.cdConfirmation = cdConfirmation;
	}

}
