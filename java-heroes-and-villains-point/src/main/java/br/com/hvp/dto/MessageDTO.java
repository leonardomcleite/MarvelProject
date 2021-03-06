package br.com.hvp.dto;

public class MessageDTO {
	private int status;
	private String message;
	private String type;

	public MessageDTO(int status, String message, String type) {
		this.status = status;
		this.message = message;
		this.type = type;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
