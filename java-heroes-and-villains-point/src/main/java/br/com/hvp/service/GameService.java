package br.com.hvp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.business.CharacterBusiness;
import br.com.hvp.business.GameBusiness;
import br.com.hvp.dto.LobbyGameDTO;
import br.com.hvp.dto.PlayerDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.service.interfaces.GameInterface;

@RestController
@CrossOrigin
public class GameService implements GameInterface {
	
	@Autowired
	private GameBusiness gameBusiness;

	@Override
	public void startGame(PlayerDTO player) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public LobbyGameDTO enterGame(UserDTO user) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LobbyGameDTO listLobbys() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean roundPlayer(UserDTO user) throws Exception {
		// TODO Auto-generated method stub
		return false;
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
