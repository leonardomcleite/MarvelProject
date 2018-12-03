package br.com.hvp.websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.hvp.websocket.dto.MensagemDTO;

@Controller
@CrossOrigin
public class WebSocketReceivedMessage {

	@MessageMapping("/messages")
	@SendTo("/topic/messages")
	public MensagemDTO sendMessage(@Payload MensagemDTO chatMessage) {
		return chatMessage;
	}

}
