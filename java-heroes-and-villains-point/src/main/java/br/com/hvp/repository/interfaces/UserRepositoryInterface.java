package br.com.hvp.repository.interfaces;

import br.com.hvp.dto.UserAuthDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.entity.UserEntity;

public interface UserRepositoryInterface {
	
	UserEntity confirmUserImpl(UserDTO user);

	UserEntity confirmExistentUserImpl(UserAuthDTO user);

	UserEntity loginUserImpl(UserAuthDTO user);

}
