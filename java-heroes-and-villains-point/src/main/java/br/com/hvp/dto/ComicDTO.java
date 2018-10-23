package br.com.hvp.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ComicDTO {

	private Long id;
	private String title;
	private String description;
	private String variantdescription;
	private String isbn;
	private Date modified;
	private char favorite;
	private String pathThumbnail;
	private List<CharacterDTO> character = new ArrayList<CharacterDTO>();
	private List<CreatorDTO> creators = new ArrayList<CreatorDTO>();
	private List<StorieDTO> stories = new ArrayList<StorieDTO>();
	private List<SerieDTO> series = new ArrayList<SerieDTO>();
	private List<EventDTO> events = new ArrayList<EventDTO>();

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

	public String getVariantdescription() {
		return variantdescription;
	}

	public void setVariantdescription(String variantdescription) {
		this.variantdescription = variantdescription;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
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
