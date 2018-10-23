package br.com.hvp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.controller.client.ProfileClient;
import br.com.hvp.dto.ProfileDTO;
import br.com.hvp.service.ProfileService;

@RestController
@CrossOrigin
public class ProfileController implements ProfileClient {
	
	@Autowired
	private ProfileService profilesService;
	
	@Override
	public void createProfile(@RequestBody ProfileDTO profileAndMenus) throws Exception {
		this.profilesService.createProfile(profileAndMenus);
	}
	
	@Override
	public void updateProfile(@RequestBody ProfileDTO profileAndMenus) throws Exception {
		this.profilesService.updateProfile(profileAndMenus);
	}
	
	@Override
	public List<ProfileDTO> listProfiles() throws Exception {
		return this.profilesService.listProfiles();
	}
	
	@Override
	public void deleteProfile(@RequestBody List<ProfileDTO> profiles) throws Exception {
		this.profilesService.deleteProfiles(profiles);
	}

}
