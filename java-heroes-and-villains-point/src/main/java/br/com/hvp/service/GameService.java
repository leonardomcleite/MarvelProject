package br.com.hvp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.business.GameBusiness;
import br.com.hvp.dto.GameDTO;
import br.com.hvp.dto.RulesGameDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.service.interfaces.GameInterface;

@RestController
@CrossOrigin
public class GameService implements GameInterface {
	
	@Autowired
	private GameBusiness gameBusiness;

	@Override
	public GameDTO createGame(UserDTO user, RulesGameDTO rules) throws Exception {
		return this.gameBusiness.createGame(user, rules);
	}

	@Override
	public GameDTO startGame(Long idGame) throws Exception {
		return this.gameBusiness.StartGame(idGame);
	}

	@Override
	public GameDTO enterGame(GameDTO game, UserDTO user) throws Exception {
		return this.gameBusiness.EnterGame(game, user);
	}

	@Override
	public List<GameDTO> listGames() throws Exception {
		return this.gameBusiness.ListGames();
	}

	@Override
	public boolean roundPlayer(Long player, Long game) throws Exception {
		return this.gameBusiness.roundPlayer(player, game);
	}

	@Override
	public String roundWinner(UserDTO user) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void makeMove(String classification) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int stageGame() throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	

}
