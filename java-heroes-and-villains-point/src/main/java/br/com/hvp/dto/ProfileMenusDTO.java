package br.com.hvp.dto;

import java.util.List;

public class ProfileMenusDTO {
	
	private ProfileDTO profile;
	private List<MenuDTO> menus;
	public ProfileDTO getProfile() {
		return profile;
	}
	public void setProfile(ProfileDTO profile) {
		this.profile = profile;
	}
	public List<MenuDTO> getMenus() {
		return menus;
	}
	public void setMenus(List<MenuDTO> menus) {
		this.menus = menus;
	}

}
