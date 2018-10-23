package br.com.hvp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.business.ProfileBusiness;
import br.com.hvp.dto.ProfileDTO;
import br.com.hvp.service.interfaces.ProfileInterface;

@RestController
@CrossOrigin
public class ProfileService implements ProfileInterface {

	@Autowired
	private ProfileBusiness profileBusiness;

	@Override
	public void createProfile(@RequestBody ProfileDTO profileAndMenus) throws Exception {
		this.profileBusiness.createProfile(profileAndMenus);
	}

	@Override
	public void updateProfile(@RequestBody ProfileDTO profileAndMenus) throws Exception {
		this.profileBusiness.updateProfile(profileAndMenus);
	}

	@Override
	public List<ProfileDTO> listProfiles() throws Exception {
		return this.profileBusiness.listProfiles();
	}

	@Override
	public void deleteProfile(@RequestBody List<ProfileDTO> profiles) throws Exception {
		this.profileBusiness.deleteProfiles(profiles);
	}

}
