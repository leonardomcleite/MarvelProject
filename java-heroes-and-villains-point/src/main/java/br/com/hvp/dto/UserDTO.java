package br.com.hvp.dto;

import java.util.List;

public class UserDTO<T> {

	private Long id;
	private String name;
	private T dtBirth;
	private char sex;
	private String user;
	private String email;
	private String password;
	private String cdConfirmation;
	private int status;
	private String avatar;
	private List<ProfileDTO> profile;

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

	public T getDtBirth() {
		return dtBirth;
	}

	public void setDtBirth(T dtBirth) {
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

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public List<ProfileDTO> getProfile() {
		return profile;
	}

	public void setProfile(List<ProfileDTO> profile) {
		this.profile = profile;
	}

}
