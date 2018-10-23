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
@Table(schema = "QUADRINHOS", name = "CREATOR")
public class CreatorEntity {

	@Id
	@Column(name = "ID")
	private Long id;

	@Column(name = "FIRST_NAME")
	private String firstName;

	@Column(name = "MIDDLE_NAME")
	private String middleName;

	@Column(name = "LAST_NAME")
	private String lastName;

	@Column(name = "SUFFIX")
	private String suffix;

	@Column(name = "FULL_NAME")
	private String fullName;

	@Column(name = "MODIFIED")
	private Date modified;

	@Column(name = "PATH_THUMBNAIL")
	private String pathThumbnail;

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTERS_CREATORS", joinColumns = @JoinColumn(name = "CREATOR"), inverseJoinColumns = @JoinColumn(name = "CHARACTER"))
	private List<CharacterEntity> character = new ArrayList<CharacterEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "COMICS_CREATORS", joinColumns = @JoinColumn(name = "CREATOR"), inverseJoinColumns = @JoinColumn(name = "COMIC"))
	private List<ComicEntity> comics = new ArrayList<ComicEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "STORIES_CREATORS", joinColumns = @JoinColumn(name = "CREATOR"), inverseJoinColumns = @JoinColumn(name = "STORIE"))
	private List<StorieEntity> stories = new ArrayList<StorieEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "SERIES_CREATORS", joinColumns = @JoinColumn(name = "CREATOR"), inverseJoinColumns = @JoinColumn(name = "SERIE"))
	private List<SerieEntity> series = new ArrayList<SerieEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "EVENTS_CREATORS", joinColumns = @JoinColumn(name = "CREATOR"), inverseJoinColumns = @JoinColumn(name = "EVENT"))
	private List<EventEntity> events = new ArrayList<EventEntity>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getSuffix() {
		return suffix;
	}

	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public Date getModified() {
		return modified;
	}

	public void setModified(Date modified) {
		this.modified = modified;
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

	public List<StorieEntity> getStories() {
		return stories;
	}

	public void setStories(List<StorieEntity> stories) {
		this.stories = stories;
	}

	public List<SerieEntity> getSeries() {
		return series;
	}

	public void setSeries(List<SerieEntity> series) {
		this.series = series;
	}

	public List<EventEntity> getEvents() {
		return events;
	}

	public void setEvents(List<EventEntity> events) {
		this.events = events;
	}

}
