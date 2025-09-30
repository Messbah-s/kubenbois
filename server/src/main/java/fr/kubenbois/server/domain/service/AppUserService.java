package fr.kubenbois.server.domain.service;

import fr.kubenbois.server.dal.dao.AppUserDAO;
import fr.kubenbois.server.domain.exception.KubenboisUsernameAlreadyExistException;
import fr.kubenbois.server.domain.exception.KubenboisUsernameNotFoundException;
import fr.kubenbois.server.domain.model.AppUser;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AppUserService implements UserDetailsService {

    private final AppUserDAO appUserDAO;
    private final PasswordEncoder passwordEncoder;

    public AppUserService(AppUserDAO appUserDAO, PasswordEncoder passwordEncoder) {
        this.appUserDAO = appUserDAO;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            AppUser appUser = appUserDAO.findUserByUsername(username.toLowerCase());
            return new User(username, appUser.getPassword(), new ArrayList<>());
        } catch (KubenboisUsernameNotFoundException e) {
            throw new UsernameNotFoundException(e.getMessage());
        }
    }

    public void registerAppUser(String username, String password) {
        if (appUserDAO.existsUserByUsername(username.toLowerCase())) {
            throw new KubenboisUsernameAlreadyExistException(username);
        }
        AppUser appUser = new AppUser();
        appUser.setUsername(username.toLowerCase());
        appUser.setPassword(passwordEncoder.encode(password));
        appUserDAO.save(appUser);
    }
}
