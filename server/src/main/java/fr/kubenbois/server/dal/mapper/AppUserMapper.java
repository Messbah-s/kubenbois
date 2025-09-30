package fr.kubenbois.server.dal.mapper;

import fr.kubenbois.server.dal.entity.AppUserEntity;
import fr.kubenbois.server.domain.model.AppUser;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class AppUserMapper {

    public AppUser toAppUser(AppUserEntity entity) {
        AppUser appUser = new AppUser();
        appUser.setId(entity.getId());
        appUser.setUsername(entity.getUsername());
        appUser.setPassword(entity.getPassword());
        return appUser;
    }

    public AppUserEntity toAppUserEntity(AppUser appUser) {
        AppUserEntity entity = new AppUserEntity();
        entity.setId(appUser.getId());
        entity.setUsername(appUser.getUsername());
        entity.setPassword(appUser.getPassword());
        return entity;
    }
}
