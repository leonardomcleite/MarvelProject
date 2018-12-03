package br.com.hvp.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Controller;

import br.com.hvp.dto.GameDTO;
import br.com.hvp.mapper.BeanMapper;
import br.com.hvp.repository.GameRepository;

@Controller
public class GameBusinessWebSocket {

	@Autowired
	private BeanMapper beanMapper;

	@Autowired
	private GameRepository gameRepository;

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	@Async("sendList")
	public void sendList() {
		simpMessagingTemplate.convertAndSend("/topic/listGames", ListGames());
	}

	@Async("sendGame")
	public void sendGame(GameDTO game) {
		simpMessagingTemplate.convertAndSend("/topic/game", game);
	}

	public List<GameDTO> ListGames() {
		return beanMapper.mapList(gameRepository.listOpenGames(), GameDTO.class);
	}

}
