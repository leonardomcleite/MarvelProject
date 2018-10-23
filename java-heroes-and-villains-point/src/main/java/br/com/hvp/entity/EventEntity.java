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
@Table(schema = "QUADRINHOS", name = "EVENT")
public class EventEntity {

	@Id
	@Column(name = "ID")
	private Long id;

	@Column(name = "TITLE")
	private String title;

	@Column(name = "DESCRIPTION")
	private String description;

	@Column(name = "MODIFIED")
	private Date modified;

	@Column(name = "GO")
	private Date go;

	@Column(name = "END")
	private Date end;

	@Column(name = "FAVORITE")
	private char favorite;

	@Column(name = "PATH_THUMBNAIL")
	private String pathThumbnail;

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "CHARACTERS_EVENTS", joinColumns = @JoinColumn(name = "EVENT"), inverseJoinColumns = @JoinColumn(name = "CHARACTER"))
	private List<CharacterEntity> character = new ArrayList<CharacterEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "COMICS_EVENTS", joinColumns = @JoinColumn(name = "EVENT"), inverseJoinColumns = @JoinColumn(name = "COMIC"))
	private List<ComicEntity> comics = new ArrayList<ComicEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "EVENTS_CREATORS", joinColumns = @JoinColumn(name = "EVENT"), inverseJoinColumns = @JoinColumn(name = "CREATOR"))
	private List<CreatorEntity> creators = new ArrayList<CreatorEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "STORIES_EVENTS", joinColumns = @JoinColumn(name = "EVENT"), inverseJoinColumns = @JoinColumn(name = "STORIE"))
	private List<StorieEntity> stories = new ArrayList<StorieEntity>();

	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinTable(name = "SERIES_EVENTS", joinColumns = @JoinColumn(name = "EVENT"), inverseJoinColumns = @JoinColumn(name = "SERIE"))
	private List<SerieEntity> series = new ArrayList<SerieEntity>();

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

	public Date getGo() {
		return go;
	}

	public void setGo(Date go) {
		this.go = go;
	}

	public Date getEnd() {
		return end;
	}

	public void setEnd(Date end) {
		this.end = end;
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

}
