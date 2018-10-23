package br.com.hvp.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.Base64;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.Label;
import com.google.api.services.gmail.model.ListLabelsResponse;
import com.google.api.services.gmail.model.ListMessagesResponse;
import com.google.api.services.gmail.model.Message;


@Service
public class GmailApiService {
		private static final String APPLICATION_NAME = "projeto visualizacao de dados";
		private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
		private static final String TOKENS_DIRECTORY_PATH = "tokens";

	    /**
	     * Global instance of the scopes required by this quickstart.
	     * If modifying these scopes, delete your previously saved tokens/ folder.
	     */
		private static final List<String> SCOPES = Collections.singletonList(GmailScopes.MAIL_GOOGLE_COM);
	    private static final String CREDENTIALS_FILE_PATH = "credentials.json";

	    /**
	     * Creates an authorized Credential object.
	     * @param HTTP_TRANSPORT The network HTTP Transport.
	     * @return An authorized Credential object.
	     * @throws IOException If the credentials.json file cannot be found.
	     */
	    private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {
	    	// Load client secrets.
	        InputStream in = GmailApiService.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
	        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));
	        
	        // Build flow and trigger user authorization request.
	        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
	                HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
	                .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
	                .setAccessType("offline")
	                .build();
	        return new AuthorizationCodeInstalledApp(flow, new LocalServerReceiver()).authorize("user");
	    }

	    public List<Label> getLabels() throws IOException, GeneralSecurityException {
	    	// Build a new authorized API client service.
	        final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
	        Gmail service = new Gmail.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
	                .setApplicationName(APPLICATION_NAME)
	                .build();

	        // Print the labels in the user's account.
	        String user = "me";
	        ListLabelsResponse listResponse = service.users().labels().list(user).execute();
	        List<Label> labels = listResponse.getLabels();
	        if (labels.isEmpty()) {
	            System.out.println("No labels found.");
	        } else {
	            System.out.println("Labels:");
	            for (Label label : labels) {
	                System.out.printf("- %s\n", label.getName());
	            }
	        }
	        return labels;
	    }
	    
	    /**
	     * Create a MimeMessage using the parameters provided.
	     *
	     * @param to email address of the receiver
	     * @param from email address of the sender, the mailbox account
	     * @param subject subject of the email
	     * @param bodyText body text of the email
	     * @return the MimeMessage to be used to send email
	     * @throws MessagingException
	     */
	    public MimeMessage createEmail(String to, String from, String subject, String bodyText) throws MessagingException {
	        Properties props = new Properties();
	        Session session = Session.getDefaultInstance(props, null);

	        MimeMessage email = new MimeMessage(session);

	        email.setFrom(new InternetAddress(from));
	        email.addRecipient(javax.mail.Message.RecipientType.TO,
	                new InternetAddress(to));
	        email.setSubject(subject);
	        email.setText(bodyText);
	        return email;
	    }
	    
	    /**
	     * Create a message from an email.
	     *
	     * @param emailContent Email to be set to raw of message
	     * @return a message containing a base64url encoded email
	     * @throws IOException
	     * @throws MessagingException
	     */
	    public static Message createMessageWithEmail(MimeMessage email) throws MessagingException, IOException {
    	    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    	    email.writeTo(baos);
    	    String encodedEmail = Base64.encodeBase64URLSafeString(baos.toByteArray());
    	    Message message = new Message();
    	    message.setRaw(encodedEmail);
    	    return message;
    	  }
	    
	    /**
	     * Send an email from the user's mailbox to its recipient.
	     *
	     * @param service Authorized Gmail API instance.
	     * @param userId User's email address. The special value "me"
	     * can be used to indicate the authenticated user.
	     * @param emailContent Email to be sent.
	     * @return The sent message
	     * @throws MessagingException
	     * @throws IOException
	     * @throws GeneralSecurityException 
	     */
	    public Message sendMessage(String userId, MimeMessage emailContent) throws MessagingException, IOException, GeneralSecurityException {
	    	final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
	        Gmail service = new Gmail.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
	                .setApplicationName(APPLICATION_NAME)
	                .build();
	        
	        Message message = createMessageWithEmail(emailContent);
	        
	        try {
	        	message = service.users().messages().send(userId, message).execute();
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}
	        
	        System.out.println("Message id: " + message.getId());
	        System.out.println(message.toPrettyString());
	        return message;
	    }

	    
	    /**
	     * List all Messages of the user's mailbox matching the query.
	     *
	     * @param service Authorized Gmail API instance.
	     * @param userId User's email address. The special value "me"
	     * can be used to indicate the authenticated user.
	     * @param query String used to filter the Messages listed.
	     * @throws IOException
	     * @throws GeneralSecurityException 
	     */
	    public List<Message> listMessagesMatchingQuery(String userId, String query) throws IOException, GeneralSecurityException {
	    	final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
	    	Gmail service = new Gmail.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
	    			.setApplicationName(APPLICATION_NAME)
	    			.build();
	    	
	    	ListMessagesResponse response = service.users().messages().list(userId).setQ(query).execute();

	      List<Message> messages = new ArrayList<Message>();
	      while (response.getMessages() != null) {
	        messages.addAll(response.getMessages());
	        if (response.getNextPageToken() != null) {
	          String pageToken = response.getNextPageToken();
	          response = service.users().messages().list(userId).setQ(query)
	              .setPageToken(pageToken).execute();
	        } else {
	          break;
	        }
	      }

	      for (Message message : messages) {
	        System.out.println(message.toPrettyString());
	      }

	      return messages;
	    }

	    /**
	     * List all Messages of the user's mailbox with labelIds applied.
	     *
	     * @param service Authorized Gmail API instance.
	     * @param userId User's email address. The special value "me"
	     * can be used to indicate the authenticated user.
	     * @param labelIds Only return Messages with these labelIds applied.
	     * @throws IOException
	     * @throws GeneralSecurityException 
	     */
	    public List<Message> listMessagesWithLabels(String userId, List<String> labelIds) throws IOException, GeneralSecurityException {
	    	final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
	    	Gmail service = new Gmail.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
	    			.setApplicationName(APPLICATION_NAME)
	    			.build();

	    	ListMessagesResponse response = service.users().messages().list(userId)
	          .setLabelIds(labelIds).execute();

	      List<Message> messages = new ArrayList<Message>();
	      while (response.getMessages() != null) {
	        messages.addAll(response.getMessages());
	        if (response.getNextPageToken() != null) {
	          String pageToken = response.getNextPageToken();
	          response = service.users().messages().list(userId).setLabelIds(labelIds)
	              .setPageToken(pageToken).execute();
	        } else {
	          break;
	        }
	      }

	      for (Message message : messages) {
	        System.out.println(message.toPrettyString());
	      }

	      return messages;
	    }

}
