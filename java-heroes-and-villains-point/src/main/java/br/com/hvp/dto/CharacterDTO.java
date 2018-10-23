package br.com.hvp.dto;

import java.util.Date;
import java.util.List;

public class CharacterDTO {

	private Long id;
	private String name;
	private String description;
	private String biography;
	private Date modified;
	private char favorite;
	private String pathThumbnail;
	private ClassificationDTO classification;
	private List<ComicDTO> comics;
	private List<CreatorDTO> creators;
	private List<StorieDTO> stories;
	private List<SerieDTO> series;
	private List<EventDTO> events;

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

	public ClassificationDTO getClassification() {
		return classification;
	}

	public void setClassification(ClassificationDTO classification) {
		this.classification = classification;
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

	public List<StorieDTO> getStories() {
		return stories;
	}

	public void setStories(List<StorieDTO> stories) {
		this.stories = stories;
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

}
