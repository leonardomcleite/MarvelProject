package br.com.hvp.service.interfaces;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.hvp.dto.CreateGameDTO;
import br.com.hvp.dto.EnterGameDTO;
import br.com.hvp.dto.GameDTO;
import br.com.hvp.dto.UserDTO;

@RequestMapping(value = "/game")
public interface GameInterface {
	
	@PostMapping(value = "/create", headers = "content-type=application/json")
	public GameDTO createGame(CreateGameDTO paramsGame) throws Exception;
	
	@PostMapping(value = "/start", headers = "content-type=application/json")
	public GameDTO startGame(Long idGame) throws Exception;
	
	@PostMapping(value = "/enter", headers = "content-type=application/json")
	public GameDTO enterGame(EnterGameDTO paramsGame) throws Exception;
	
	@GetMapping(value = "/list-games")
	public List<GameDTO> listGames() throws Exception;
	
	@GetMapping(value = "/my-turn")
	public boolean roundPlayer(Long player, Long game) throws Exception;
	
	@GetMapping(value = "/winner")
	public String roundWinner(UserDTO user) throws Exception;

	@PostMapping(value = "/make-a-move", headers = "content-type=application/json")
	public void makeMove(String classification) throws Exception;
	
	@GetMapping(value = "/stage")
	public int stageGame() throws Exception;
}
