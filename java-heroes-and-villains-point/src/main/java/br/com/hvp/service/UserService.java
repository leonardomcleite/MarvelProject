package br.com.hvp.service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.hvp.dto.UserAuthDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.entity.ProfileEntity;
import br.com.hvp.entity.UserEntity;
import br.com.hvp.mapper.BeanMapper;
import br.com.hvp.repository.ProfileRepository;
import br.com.hvp.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private GmailApiService gmailApiService;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProfileRepository profileRepository;
	
	@Autowired
	private BeanMapper beanMapper;

	@PersistenceContext	
	private EntityManager entityManager;
	
	@Transactional
	public UserDTO registerUser(UserDTO user) throws MessagingException, IOException, GeneralSecurityException, ParseException {
		UserEntity userEntity = new UserEntity();
		List<ProfileEntity> listProfiles = this.profileRepository.findAll();
		for (ProfileEntity profilesEntity : listProfiles) {
			if (profilesEntity.getNameProfile().equals("CLIENTE")) {
				ArrayList<ProfileEntity> temp = new ArrayList<ProfileEntity>();
				temp.add(profilesEntity);
				userEntity.setProfile(temp);
			}
		}
		
		SimpleDateFormat date = new SimpleDateFormat("dd/MM/yyyy");
		Date dateFormated = date.parse(user.getDtBirth());
		userEntity.setDtBirth(dateFormated);
		userEntity.setName(user.getName());
		userEntity.setSex(user.getSex());
		userEntity.setUserId(user.getUser());
		userEntity.setEmail(user.getEmail());
		userEntity.setPassword(user.getPassword());
		userEntity.setStatus(0);
		userEntity.setCdConfirmation(generateNumberRandom());
		userEntity = this.userRepository.save(userEntity);

		String emailAplication = "leonardo.castroleite@gmail.com";
		String subject = "Confirmação de Cadastro Quadrinhos";
		String body = "Informe este código para efetivar seu cadastro: " + userEntity.getCdConfirmation();

		MimeMessage emailContent = this.gmailApiService.createEmail(user.getEmail(), emailAplication, subject, body);
		this.gmailApiService.sendMessage("me", emailContent);
		beanMapper = new BeanMapper();
		return beanMapper.map(userEntity, UserDTO.class);
	}

	public UserDTO confirmRegister(UserDTO user) {		
		UserEntity userEntity = this.confirmUserImpl(user);
		beanMapper = new BeanMapper();
		return beanMapper.map(userEntity, UserDTO.class);
	}
	
	public UserDTO confirmExistentUser(UserAuthDTO user) {		
		UserEntity userEntity = this.confirmExistentUserImpl(user);
		beanMapper = new BeanMapper();
		return beanMapper.map(userEntity, UserDTO.class);
	}

	public String generateNumberRandom() {
		return Integer.toString(new Random().nextInt(90000) + 10000);
	}
	
	public UserDTO loginUser(UserAuthDTO user) throws Exception {
		UserEntity userEntity = this.loginUserImpl(user);
		beanMapper = new BeanMapper();
		return beanMapper.map(userEntity, UserDTO.class);
	}
	
//	======================================= Implementations ===============================================
	
	public UserEntity confirmUserImpl(UserDTO user) {	
		String jpql = "select usr from "+UserEntity.class.getSimpleName()+" as usr  WHERE usr.id = :id and usr.cdConfirmation = :cdConfirmation order by ";
		TypedQuery<UserEntity> createQuery = this.entityManager.createQuery(jpql, UserEntity.class);
		createQuery.setParameter("id", user.getId());
		createQuery.setParameter("cdConfirmation", user.getCdConfirmation());
		UserEntity usersEntity = createQuery.getSingleResult();
		usersEntity.setStatus(1);
		this.userRepository.flush();

		return createQuery.getSingleResult();
	}
	
	public UserEntity confirmExistentUserImpl(UserAuthDTO user) {
		UserEntity usersEntity = this.loginUserImpl(user);
		if (usersEntity == null) {
			return usersEntity;
		} else {			
			usersEntity.setStatus(1);
			this.userRepository.flush();
			return usersEntity;
		}
	}
 	
	public UserEntity loginUserImpl(UserAuthDTO user) {
		String where;
		String keyValue;
		if (user.getUser() != null && !user.getUser().isEmpty()) {
			where = "usr.userId like :key";
			keyValue = user.getUser();
		} else {
			where = "usr.email like :key";
			keyValue = user.getEmail();
		}
		String jpql = "select usr from "+UserEntity.class.getSimpleName()+" as usr  WHERE "+where+" and usr.password like :password";
		TypedQuery<UserEntity> createQuery = this.entityManager.createQuery(jpql, UserEntity.class);
		createQuery.setParameter("key", keyValue);
		createQuery.setParameter("password", user.getPassword());
		
		try {			
			return createQuery.getSingleResult();
		} catch (Exception e) {
			return new UserEntity();
		}
	}
}
