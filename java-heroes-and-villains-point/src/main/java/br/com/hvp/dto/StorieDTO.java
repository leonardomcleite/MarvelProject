package br.com.hvp.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class StorieDTO {

	private Long id;
	private String title;
	private String description;
	private Date modified;
	private char favorite;
	private String pathThumbnail;
	private List<CharacterDTO> character = new ArrayList<CharacterDTO>();
	private List<SerieDTO> series = new ArrayList<SerieDTO>();
	private List<EventDTO> events = new ArrayList<EventDTO>();
	private List<ComicDTO> comics = new ArrayList<ComicDTO>();
	private List<CreatorDTO> creators = new ArrayList<CreatorDTO>();

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

	public List<CharacterDTO> getCharacter() {
		return character;
	}

	public void setCharacter(List<CharacterDTO> character) {
		this.character = character;
	}

	public List<SerieDTO> getSeries() {
		return series;
	}

	public void setSeries(List<SerieDTO> series) {
		this.series = series;
	}

	public List<EventDTO> getEvents() {
		return events;
	}

	public void setEvents(List<EventDTO> events) {
		this.events = events;
	}

	public List<ComicDTO> getComics() {
		return comics;
	}

	public void setComics(List<ComicDTO> comics) {
		this.comics = comics;
	}

	public List<CreatorDTO> getCreators() {
		return creators;
	}

	public void setCreators(List<CreatorDTO> creators) {
		this.creators = creators;
	}

}
