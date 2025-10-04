package fr.kubenbois.server.dal.dao;

import fr.kubenbois.server.dal.mapper.AppUserMapper;
import fr.kubenbois.server.dal.repository.AppUserRepository;
import fr.kubenbois.server.domain.exception.UsernameNotFoundException;
import fr.kubenbois.server.domain.model.AppUser;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class AppUserDAO {

    private final AppUserMapper appUserMapper;
    private final AppUserRepository appUserRepository;

    public AppUser findUserByUsername(String username) throws UsernameNotFoundException {
        return appUserMapper.toAppUser(appUserRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username)));
    }

    public Boolean existsUserByUsername(String username) {
        return appUserRepository.existsByUsername(username);
    }

    public void save(AppUser appUser) {
        appUserRepository.save(appUserMapper.toAppUserEntity(appUser));
    }
}
