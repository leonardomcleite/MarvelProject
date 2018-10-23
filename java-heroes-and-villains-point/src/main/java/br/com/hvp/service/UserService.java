package br.com.hvp.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.business.UserBusiness;
import br.com.hvp.dto.UserAuthDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.service.interfaces.UserInterface;

@RestController
@CrossOrigin
public class UserService implements UserInterface {

	@Autowired
	public UserBusiness userBusiness;

	@Override
	public UserDTO registerUser(@Valid @RequestBody UserDTO user) throws Exception {
		return this.userBusiness.registerUser(user);
	}

	@Override
	public UserDTO confirmRegister(@RequestBody UserDTO user) throws Exception {
		return this.userBusiness.confirmRegister(user);
	}

	@Override
	public UserDTO confirmExistentUser(@RequestBody UserAuthDTO user) throws Exception {
		return this.userBusiness.confirmExistentUser(user);
	}

	@Override
	public UserDTO loginUser(@RequestBody UserAuthDTO user) throws Exception {
		return this.userBusiness.loginUser(user);
	}

	@Override
	public List<UserDTO> listUsers() throws Exception {
		return null;
	}

}
