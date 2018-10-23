package br.com.hvp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.controller.client.UserClient;
import br.com.hvp.dto.UserAuthDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.service.UserService;

@RestController
@CrossOrigin
public class UserController implements UserClient {
	
	@Autowired
	public UserService usersService;

	@Override
	public UserDTO registerUser(@Valid @RequestBody UserDTO user) throws Exception {
		return this.usersService.registerUser(user);
	}
	
	@Override
	public UserDTO confirmRegister(@RequestBody UserDTO user) throws Exception {
		return this.usersService.confirmRegister(user);
	}
	
	@Override
	public UserDTO confirmExistentUser(@RequestBody UserAuthDTO user) throws Exception {
		return this.usersService.confirmExistentUser(user);
	}
	
	@Override
	public UserDTO loginUser(@RequestBody UserAuthDTO user) throws Exception {
		return this.usersService.loginUser(user);
	}

	@Override
	public List<UserDTO> listUsers() throws Exception {
		return null;
	}

}
