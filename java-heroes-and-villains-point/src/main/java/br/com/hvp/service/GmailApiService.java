package br.com.hvp.service;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.api.services.gmail.model.Label;
import com.google.api.services.gmail.model.Message;

import br.com.hvp.business.GmailBusiness;
import br.com.hvp.dto.SendMailDTO;
import br.com.hvp.service.interfaces.GmailInterface;

@RestController
@CrossOrigin
public class GmailApiService implements GmailInterface {
		
	@Autowired
	private GmailBusiness gmailBusiness;
	
	@Override
	public Message SendMail(@Valid @RequestBody SendMailDTO sendMail) throws Exception {
		return this.gmailBusiness.sendMessage("me", this.gmailBusiness.createEmail(sendMail.getTo(), sendMail.getFrom(), sendMail.getSubject(), sendMail.getBodyText()));
	}
	
	@Override
	public List<Label> getLabels() throws Exception {
		return this.gmailBusiness.getLabels();
	}
	
	@Override
	public List<Message> listMessagesMatchingQuery(String userId, String query) throws Exception {
		List<String> list = new ArrayList<String>(); list.add("INBOX");
		return this.gmailBusiness.listMessagesWithLabels(userId, list);
	}
	
}
