package br.com.hvp.controller.client;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.api.services.gmail.model.Label;
import com.google.api.services.gmail.model.Message;

import br.com.hvp.dto.SendMailDTO;

@RequestMapping(value = "/gmail")
public interface GmailClient {
	
	@PostMapping(value="/sendMail", headers = "content-type=application/json")
	public Message SendMail(SendMailDTO sendMail) throws Exception;
	
	@PostMapping(value="/mailBox", headers = "content-type=application/json")
	public List<Message> listMessagesMatchingQuery(String userId, String query) throws Exception;
	
	@GetMapping(value="/getLabels")
	public List<Label> getLabels() throws Exception;
	
}
