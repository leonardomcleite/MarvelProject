package br.com.hvp.exception;

/**
 * 
 * Exception do tipo unchecked
 *
 */
public class GenericException extends Exception {

	private static final long serialVersionUID = -534984530028312884L;

	public GenericException(String message, Throwable cause) {
		super(message, cause);
	}

	public GenericException(String message) {
		super(message);
	}

	public GenericException(Throwable cause) {
		super(cause);
	}

}
