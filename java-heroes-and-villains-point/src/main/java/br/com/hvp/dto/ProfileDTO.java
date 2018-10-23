package br.com.hvp.dto;

import java.util.List;

public class ProfileDTO {
	private Long id;
	private String nameProfile;
	private List<MenuDTO> menus;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNameProfile() {
		return nameProfile;
	}

	public void setNameProfile(String nameProfile) {
		this.nameProfile = nameProfile;
	}

	public List<MenuDTO> getMenus() {
		return menus;
	}

	public void setMenus(List<MenuDTO> menus) {
		this.menus = menus;
	}

}
