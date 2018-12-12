package br.com.hvp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.business.GameBusiness;
import br.com.hvp.dto.CreateGameDTO;
import br.com.hvp.dto.EnterGameDTO;
import br.com.hvp.dto.GameDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.service.interfaces.GameInterface;

@RestController
@CrossOrigin
public class GameService implements GameInterface {
	
	@Autowired
	private GameBusiness gameBusiness;

	@Override
	public GameDTO createGame(@RequestBody CreateGameDTO paramsGame) throws Exception {
		return this.gameBusiness.createGame(paramsGame.getUser(), paramsGame.getRules());
	}

	@Override
	public GameDTO startGame(@RequestBody Long idGame) throws Exception {
		return this.gameBusiness.StartGame(idGame);
	}

	@Override
	public GameDTO enterGame(@RequestBody EnterGameDTO paramsGame) throws Exception {
		return this.gameBusiness.EnterGame(paramsGame.getGame(), paramsGame.getUser());
	}

	@Override
	public List<GameDTO> listGames() throws Exception {
		return this.gameBusiness.ListGames();
	}

	@Override
	public boolean roundPlayer(@RequestBody Long player, Long game) throws Exception {
		return this.gameBusiness.roundPlayer(player, game);
	}

	@Override
	public String roundWinner(@RequestBody UserDTO user) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void makeMove(@RequestBody String classification) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int stageGame() throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	

}
