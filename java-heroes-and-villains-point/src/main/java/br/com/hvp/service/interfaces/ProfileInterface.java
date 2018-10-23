package br.com.hvp.service.interfaces;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.hvp.dto.ProfileDTO;

@RequestMapping(value = "/profile")
public interface ProfileInterface {

	@PostMapping(value = "/create", headers = "content-type=application/json")
	public void createProfile(ProfileDTO profileAndMenus) throws Exception;

	@PostMapping(value = "/update", headers = "content-type=application/json")
	public void updateProfile(ProfileDTO profileAndMenus) throws Exception;

	@GetMapping(value = "/list")
	public List<ProfileDTO> listProfiles() throws Exception;

	@PostMapping(value = "/delete", headers = "content-type=application/json")
	public void deleteProfile(List<ProfileDTO> profiles) throws Exception;

}
