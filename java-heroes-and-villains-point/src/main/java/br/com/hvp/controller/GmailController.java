package br.com.hvp.controller;

import java.util.ArrayList;
import java.util.List;

import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.api.services.gmail.model.Label;
import com.google.api.services.gmail.model.Message;

import br.com.hvp.controller.client.GmailClient;
import br.com.hvp.dto.SendMailDTO;
import br.com.hvp.service.GmailApiService;

@RestController
@CrossOrigin
public class GmailController implements GmailClient {
	
	@Autowired
	private GmailApiService gmail;
	
	@Override
	public Message SendMail(@Valid @RequestBody SendMailDTO sendMail) throws Exception {
		MimeMessage emailContent = this.gmail.createEmail(sendMail.getTo(), sendMail.getFrom(), sendMail.getSubject(), sendMail.getBodyText());
		Message message = this.gmail.sendMessage("me", emailContent);
		return message;
	}
	
	@Override
	public List<Label> getLabels() throws Exception {
		List<Label>  labels = this.gmail.getLabels();
		return labels;
	}
	
	@Override
	public List<Message> listMessagesMatchingQuery(String userId, String query) throws Exception {
		List<String> list = new ArrayList<String>();
		list.add("INBOX");
		List<Message> messages = this.gmail.listMessagesWithLabels(userId, list);
		return messages;
	}

}
