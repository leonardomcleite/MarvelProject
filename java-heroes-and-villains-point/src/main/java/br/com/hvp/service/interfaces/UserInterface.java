package br.com.hvp.service.interfaces;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.hvp.dto.UserAuthDTO;
import br.com.hvp.dto.UserDTO;

@RequestMapping(value = "/user")
public interface UserInterface {

	@PostMapping(value = "/register-user", headers = "content-type=application/json")
	public UserDTO registerUser(UserDTO user) throws Exception;

	@PostMapping(value = "/confirm-register", headers = "content-type=application/json")
	public UserDTO confirmRegister(UserDTO user) throws Exception;

	@GetMapping(value = "/list-users")
	public List<UserDTO> listUsers() throws Exception;

	@PostMapping(value = "/login-user", headers = "content-type=application/json")
	public UserDTO loginUser(UserAuthDTO user) throws Exception;

	@PostMapping(value = "/confirm-existent-user", headers = "content-type=application/json")
	public UserDTO confirmExistentUser(UserAuthDTO user) throws Exception;

}
