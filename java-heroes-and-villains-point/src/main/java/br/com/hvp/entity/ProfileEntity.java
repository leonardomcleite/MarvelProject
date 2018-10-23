package br.com.hvp.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(schema = "QUADRINHOS", name = "PROFILES")
@SequenceGenerator(name = "SQ_PROFILES", sequenceName = "QUADRINHOS.SQ_PROFILES", allocationSize = 1)
public class ProfileEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_PROFILES")
	@Column(name = "ID")
	private Long id;

	@Column(name = "NAME_PROFILE")
	private String nameProfile;

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "PROFILE_MENUS", joinColumns = @JoinColumn(name = "ID_PROFILE"), inverseJoinColumns = @JoinColumn(name = "ID_MENU"))
	private List<MenuEntity> menus = new ArrayList<MenuEntity>();

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

	public List<MenuEntity> getMenus() {
		return menus;
	}

	public void setMenus(List<MenuEntity> menus) {
		this.menus = menus;
	}

}
