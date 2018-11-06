package br.com.hvp.service.interfaces;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.hvp.dto.LobbyGameDTO;
import br.com.hvp.dto.PlayerDTO;
import br.com.hvp.dto.UserDTO;

@RequestMapping(value = "/game")
public interface GameInterface {
	
	@PostMapping(value = "/start", headers = "content-type=application/json")
	public void startGame(PlayerDTO player) throws Exception;
	
	@PostMapping(value = "/enter", headers = "content-type=application/json")
	public LobbyGameDTO enterGame(UserDTO user) throws Exception;
	
	@GetMapping(value = "/list-lobbys")
	public LobbyGameDTO listLobbys() throws Exception;
	
	@GetMapping(value = "/my-turn")
	public boolean roundPlayer(UserDTO user) throws Exception;
	
	@GetMapping(value = "/winner")
	public String roundWinner(UserDTO user) throws Exception;

	@PostMapping(value = "/make-a-move", headers = "content-type=application/json")
	public void makeMove(String classification) throws Exception;
	
	@GetMapping(value = "/stage")
	public int stageGame() throws Exception;
}
