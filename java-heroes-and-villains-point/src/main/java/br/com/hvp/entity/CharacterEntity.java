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
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(schema = "QUADRINHOS", name = "CHARACTER")
public class CharacterEntity {

	@Id
	@Column(name = "ID")
	private Long id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "DESCRIPTION")
	private String description;

	@Column(name = "BIOGRAPHY")
	private String biography;

	@Column(name = "MODIFIED")
	private Date modified;

	@Column(name = "FAVORITE")
	private char favorite;

	@Column(name = "PATH_THUMBNAIL")
	private String pathThumbnail;

	@OneToOne(fetch = FetchType.LAZY, cascade={CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
	@JoinColumn(name = "CLASSIFICATION", insertable = true, updatable = true) // Esta coluna está na tabela "CLASSIFICATION".
	private ClassificationEntity classification;

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTERS_COMICS", joinColumns = @JoinColumn(name = "CHARACTER"), inverseJoinColumns = @JoinColumn(name = "COMIC"))
	private List<ComicEntity> comics = new ArrayList<ComicEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTERS_CREATORS", joinColumns = @JoinColumn(name = "CHARACTER"), inverseJoinColumns = @JoinColumn(name = "CREATOR"))
	private List<CreatorEntity> creators = new ArrayList<CreatorEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTERS_STORIES", joinColumns = @JoinColumn(name = "CHARACTER"), inverseJoinColumns = @JoinColumn(name = "STORIE"))
	private List<StorieEntity> stories = new ArrayList<StorieEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTERS_SERIES", joinColumns = @JoinColumn(name = "CHARACTER"), inverseJoinColumns = @JoinColumn(name = "SERIE"))
	private List<SerieEntity> series = new ArrayList<SerieEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTERS_EVENTS", joinColumns = @JoinColumn(name = "CHARACTER"), inverseJoinColumns = @JoinColumn(name = "EVENT"))
	private List<EventEntity> events = new ArrayList<EventEntity>();

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getBiography() {
		return biography;
	}

	public void setBiography(String biography) {
		this.biography = biography;
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

	public ClassificationEntity getClassification() {
		return classification;
	}

	public void setClassification(ClassificationEntity classification) {
		this.classification = classification;
	}

	public List<ComicEntity> getComics() {
		return comics;
	}

	public void setComics(List<ComicEntity> comics) {
		this.comics = comics;
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
