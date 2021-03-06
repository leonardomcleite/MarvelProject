package br.com.hvp.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(schema = "QUADRINHOS", name = "SERIE")
public class SerieEntity {

	@Id
	@Column(name = "ID")
	private Long id;

	@Column(name = "TITLE")
	private String title;

	@Column(name = "DESCRIPTION")
	private String description;

	@Column(name = "MODIFIED")
	private Date modified;

	@Column(name = "FAVORITE")
	private char favorite;

	@Column(name = "PATH_THUMBNAIL")
	private String pathThumbnail;

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTERS_SERIES", joinColumns = @JoinColumn(name = "SERIE"), inverseJoinColumns = @JoinColumn(name = "CHARACTER"))
	private List<CharacterEntity> character = new ArrayList<CharacterEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "COMICS_SERIES", joinColumns = @JoinColumn(name = "SERIE"), inverseJoinColumns = @JoinColumn(name = "COMIC"))
	private List<ComicEntity> comics = new ArrayList<ComicEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "SERIES_EVENTS", joinColumns = @JoinColumn(name = "SERIE"), inverseJoinColumns = @JoinColumn(name = "EVENT"))
	private List<EventEntity> events = new ArrayList<EventEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "SERIES_CREATORS", joinColumns = @JoinColumn(name = "SERIE"), inverseJoinColumns = @JoinColumn(name = "CREATOR"))
	private List<CreatorEntity> creators = new ArrayList<CreatorEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "SERIES_STORIES", joinColumns = @JoinColumn(name = "SERIE"), inverseJoinColumns = @JoinColumn(name = "STORIE"))
	private List<StorieEntity> stories = new ArrayList<StorieEntity>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getModified() {
		return modified;
	}

	public void setModified(Date modified) {
		this.modified = modified;
	}

	public char getFavorite() {
		return favorite;
	}

	public void setFavorite(char favorite) {
		this.favorite = favorite;
	}

	public String getPathThumbnail() {
		return pathThumbnail;
	}

	public void setPathThumbnail(String pathThumbnail) {
		this.pathThumbnail = pathThumbnail;
	}

	public List<CharacterEntity> getCharacter() {
		return character;
	}

	public void setCharacter(List<CharacterEntity> character) {
		this.character = character;
	}

	public List<ComicEntity> getComics() {
		return comics;
	}

	public void setComics(List<ComicEntity> comics) {
		this.comics = comics;
	}

	public List<EventEntity> getEvents() {
		return events;
	}

	public void setEvents(List<EventEntity> events) {
		this.events = events;
	}

	public List<CreatorEntity> getCreators() {
		return creators;
	}

	public void setCreators(List<CreatorEntity> creators) {
		this.creators = creators;
	}

	public List<StorieEntity> getStories() {
		return stories;
	}

	public void setStories(List<StorieEntity> stories) {
		this.stories = stories;
	}

}
