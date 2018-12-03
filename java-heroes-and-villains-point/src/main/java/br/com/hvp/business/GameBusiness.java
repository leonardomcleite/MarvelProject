package br.com.hvp.business;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import br.com.hvp.dto.GameDTO;
import br.com.hvp.dto.RulesGameDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.entity.CardsEntity;
import br.com.hvp.entity.CharacterEntity;
import br.com.hvp.entity.GameEntity;
import br.com.hvp.entity.PlayerEntity;
import br.com.hvp.entity.UserEntity;
import br.com.hvp.mapper.BeanMapper;
import br.com.hvp.repository.CharacterRepository;
import br.com.hvp.repository.GameRepository;

@Controller
public class GameBusiness {

	@Autowired
	private BeanMapper beanMapper;

	@Autowired
	private GameRepository gameRepository;

	@Autowired
	private CharacterRepository characterRepository;

	@Autowired
	private GameBusinessWebSocket gameBusinessWebSocket;

	public GameDTO createGame(UserDTO user, RulesGameDTO rules) {
//		Cria Game
		GameEntity game = new GameEntity();
		game.setTimePlayed(rules.getTimePlayed());
		game.setCardsPerPlayer(rules.getCardsPerPlayer());
		game.setDate(new Date());
		game.setStage(0);

//		Buscar Personagens "Elegiveis (Com imagens e caracteristicas)"
		List<CardsEntity> cardsEntity = new ArrayList<>();
		List<CharacterEntity> characterEntity = characterRepository.findByCharacterEligible();

//		Seleciona aleatoriamente x personagens
		List<Integer> random = this.generateListRandomNumbers(0, rules.getCardsPerPlayer());
		for (int i = 0; i < random.size(); i++) {
			cardsEntity.add(new CardsEntity(characterEntity.get(random.get(i)), ""));
		}

		PlayerEntity player = new PlayerEntity();
		player.setUser(beanMapper.map(user, UserEntity.class));
		player.setCards(cardsEntity);

		List<PlayerEntity> players = new ArrayList<PlayerEntity>();
		players.add(player);

		gameRepository.save(game);
		game.setRoundPlayer(player.getId());
		gameRepository.flush();

		gameBusinessWebSocket.sendList();

		return beanMapper.map(game, GameDTO.class);
	}

	public List<Integer> generateListRandomNumbers(Integer from, Integer to) {
		List<Integer> array = new ArrayList<>();
		for (int i = 0; i < array.size(); i++) {
			array.add((Integer) new Random().nextInt(to - from) + from);
		}
		return array;
	}

	public GameDTO StartGame(Long idGame) {
		Optional<GameEntity> optionalGame = gameRepository.findById(idGame);

		optionalGame.ifPresent(game -> {
			game.setStage(1);
			gameRepository.save(game);
		});

		GameDTO gameDTO = beanMapper.map(optionalGame, GameDTO.class);

		gameBusinessWebSocket.sendGame(gameDTO);

		return gameDTO;
	}

	public GameDTO EnterGame(GameDTO game, UserDTO user) {
//		Buscar Personagens "Elegiveis (Com imagens e caracteristicas)"
		List<CardsEntity> cardsEntity = new ArrayList<>();
		List<CharacterEntity> characterEntity = characterRepository.findByCharacterEligible();

//		Seleciona aleatoriamente x personagens
		List<Integer> random = this.generateListRandomNumbers(0, game.getCardsPerPlayer());
		for (int i = 0; i < random.size(); i++) {
			cardsEntity.add(new CardsEntity(characterEntity.get(random.get(i)), ""));
		}

		PlayerEntity player = new PlayerEntity();
		player.setUser(beanMapper.map(user, UserEntity.class));
		player.setCards(cardsEntity);

		Optional<GameEntity> optionalGame = gameRepository.findById(game.getId());

		optionalGame.ifPresent(gameE -> {
			List<PlayerEntity> plyr = new ArrayList<>();
			plyr.add(player);
			gameE.setPlayer(plyr);
			gameRepository.save(gameE);
		});

		GameDTO gameDTO = beanMapper.map(optionalGame, GameDTO.class);

		gameBusinessWebSocket.sendGame(gameDTO);

		return gameDTO;
	}

	public List<GameDTO> ListGames() {
		return beanMapper.mapList(gameRepository.listOpenGames(), GameDTO.class);
	}

	public boolean roundPlayer(Long player, Long game) {
		return gameRepository.roundPlayer(player, game);
	}

}
