package br.com.hvp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(schema = "QUADRINHOS", name = "MENUS")
@SequenceGenerator(name = "SQ_MENUS", sequenceName = "QUADRINHOS.SQ_MENUS", allocationSize = 1)
public class MenuEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_MENUS")
	@Column(name = "ID")
	private Long id;

	@Column(name = "NAME_MENU")
	private String nameMenu;

	@Column(name = "DESCRIPTION")
	private String description;

	@Column(name = "ROUTE")
	private String route;

	@Column(name = "ICON")
	private String icon;

	@Column(name = "FAVORITE")
	private char favorite;

	@Column(name = "HIDDEN")
	private char hidden;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNameMenu() {
		return nameMenu;
	}

	public void setNameMenu(String nameMenu) {
		this.nameMenu = nameMenu;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRoute() {
		return route;
	}

	public void setRoute(String route) {
		this.route = route;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public char getFavorite() {
		return favorite;
	}

	public void setFavorite(char favorite) {
		this.favorite = favorite;
	}

	public char getHidden() {
		return hidden;
	}

	public void setHidden(char hidden) {
		this.hidden = hidden;
	}

}
