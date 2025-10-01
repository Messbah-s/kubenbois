package fr.kubenbois.server.dal.dao;

import fr.kubenbois.server.dal.mapper.AppUserMapper;
import fr.kubenbois.server.dal.repository.AppUserRepository;
import fr.kubenbois.server.domain.exception.KubenboisUsernameNotFoundException;
import fr.kubenbois.server.domain.model.AppUser;
import org.springframework.stereotype.Component;

@Component
public class AppUserDAO {

    private final AppUserMapper appUserMapper;
    private final AppUserRepository appUserRepository;

    public AppUserDAO(AppUserMapper appUserMapper, AppUserRepository appUserRepository) {
        this.appUserMapper = appUserMapper;
        this.appUserRepository = appUserRepository;
    }

    public AppUser findUserByUsername(String username) throws KubenboisUsernameNotFoundException {
        return appUserMapper.toAppUser(appUserRepository.findByUsername(username)
                .orElseThrow(() -> new KubenboisUsernameNotFoundException(username)));
    }

    public Boolean existsUserByUsername(String username) {
        return appUserRepository.existsByUsername(username);
    }

    public void save(AppUser appUser) {
        appUserRepository.save(appUserMapper.toAppUserEntity(appUser));
    }
}
