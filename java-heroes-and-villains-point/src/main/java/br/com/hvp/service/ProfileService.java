package br.com.hvp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.hvp.dto.MenuDTO;
import br.com.hvp.dto.ProfileDTO;
import br.com.hvp.entity.MenuEntity;
import br.com.hvp.entity.ProfileEntity;
import br.com.hvp.mapper.BeanMapper;
import br.com.hvp.repository.MenuRepository;
import br.com.hvp.repository.ProfileRepository;

@Service
public class ProfileService {
	
	@Autowired
	ProfileRepository profileRepository;
	
	@Autowired
	MenuRepository menuRepository;
	
	public void createProfile(ProfileDTO profile) {
		ProfileEntity profileEntity = new ProfileEntity();
		profileEntity.setNameProfile(profile.getNameProfile());
		
		List<Long> ids = new ArrayList<>();
		for (MenuDTO menuDTO : profile.getMenus()) {
			ids.add(menuDTO.getId());
		}
		List<MenuEntity> menusEntity = menuRepository.findAllById(ids);
		profileEntity.setMenus(menusEntity);
		
		profileRepository.save(profileEntity);
	}
	
	public void updateProfile(ProfileDTO profile) {
		Optional<ProfileEntity> profileOptional = this.profileRepository.findById(profile.getId());
		
		List<Long> ids = new ArrayList<>();
		for (MenuDTO menuDTO : profile.getMenus()) {
			ids.add(menuDTO.getId());
		}
		List<MenuEntity> menusEntity = menuRepository.findAllById(ids);
		
		if(profileOptional.isPresent()){
			ProfileEntity profilesEntity = profileOptional.get();
			profilesEntity.setMenus(menusEntity);
			this.profileRepository.flush();
		}
	}

	public List<ProfileDTO> listProfiles() {
		BeanMapper beanMapper = new BeanMapper();
		return beanMapper.mapList(profileRepository.findAll(), ProfileDTO.class);
	}
	
	public void deleteProfiles(List<ProfileDTO> profiles) {
		BeanMapper beanMapper = new BeanMapper();
		List<ProfileEntity> profilesEntity = beanMapper.mapList(profiles, ProfileEntity.class);
		profileRepository.deleteAll(profilesEntity);
	}

}
