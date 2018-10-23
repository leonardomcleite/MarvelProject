package br.com.hvp.dto;

import java.util.List;

public class UserDTO {
	
	private Long id;
	private String name;
	private String dtBirth;
	private char sex;
	private String user;
	private String email;
	private String password;
	private String cdConfirmation;
	private int status;
	private List<ProfileDTO> profile;
	
	public UserDTO() {}

	public UserDTO(String name, String dtBirth, char sex, String user, String email, String password,
			String cdConfirmation, int status) {
		this.name = name;
		this.dtBirth = dtBirth;
		this.sex = sex;
		this.user = user;
		this.email = email;
		this.password = password;
		this.cdConfirmation = cdConfirmation;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDtBirth() {
		return dtBirth;
	}

	public void setDtBirth(String dtBirth) {
		this.dtBirth = dtBirth;
	}

	public char getSex() {
		return sex;
	}

	public void setSex(char sex) {
		this.sex = sex;
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

	public List<ProfileDTO> getProfile() {
		return profile;
	}

	public void setProfile(List<ProfileDTO> profile) {
		this.profile = profile;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

}
