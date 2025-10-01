/* tslint:disable */
/* eslint-disable */

declare namespace Kubenbois {

    interface LoginRequest {
        password: string;
        username: string;
    }

    interface LoginResponse {
        refreshToken: string;
        token: string;
    }

    interface RefreshDTO {
        token: string;
    }

    interface RegisterRequest {
        password: string;
        username: string;
    }

}
