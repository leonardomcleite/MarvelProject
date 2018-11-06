package br.com.hvp.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import br.com.hvp.dto.GameDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.repository.GamePlayersRepository;
import br.com.hvp.repository.GameRepository;

@Controller
public class GameBusiness {
	
	@Autowired
	private GameRepository gameRepository;
	
//	@Autowired
//	private GamePlayersRepository gamePlayersRepository;
	
	public GameDTO enterGameImpl(UserDTO user) {
		return null;
	}

}
