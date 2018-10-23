package br.com.hvp.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CreatorDTO {

	private Long id;
	private String firstName;
	private String middleName;
	private String lastName;
	private String suffix;
	private String fullName;
	private Date modified;
	private String pathThumbnail;
	private List<CharacterDTO> character = new ArrayList<CharacterDTO>();
	private List<ComicDTO> comics = new ArrayList<ComicDTO>();
	private List<StorieDTO> stories = new ArrayList<StorieDTO>();
	private List<SerieDTO> series = new ArrayList<SerieDTO>();
	private List<EventDTO> events = new ArrayList<EventDTO>();

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

	public List<CharacterDTO> getCharacter() {
		return character;
	}

	public void setCharacter(List<CharacterDTO> character) {
		this.character = character;
	}

	public List<ComicDTO> getComics() {
		return comics;
	}

	public void setComics(List<ComicDTO> comics) {
		this.comics = comics;
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
