/* tslint:disable */
/* eslint-disable */

declare namespace Kubenbois {

    interface ErrorResponse {
        code: string[];
        date: Date;
        message: string;
        status: HttpStatus;
    }

    interface GameDTO {
        description: string;
        image: string;
        playerMax: number;
        playerMini: number;
        titre: string;
        url: string;
    }

    interface InitAppDTO {
        games: GameDTO[];
    }

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

    /**
     * Values:
     * - `CONTINUE`
     * - `SWITCHING_PROTOCOLS`
     * - `PROCESSING`
     * - `EARLY_HINTS`
     * - `CHECKPOINT` - @deprecated since 6.0.5
     * - `OK`
     * - `CREATED`
     * - `ACCEPTED`
     * - `NON_AUTHORITATIVE_INFORMATION`
     * - `NO_CONTENT`
     * - `RESET_CONTENT`
     * - `PARTIAL_CONTENT`
     * - `MULTI_STATUS`
     * - `ALREADY_REPORTED`
     * - `IM_USED`
     * - `MULTIPLE_CHOICES`
     * - `MOVED_PERMANENTLY`
     * - `FOUND`
     * - `MOVED_TEMPORARILY` - @deprecated
     * - `SEE_OTHER`
     * - `NOT_MODIFIED`
     * - `USE_PROXY` - @deprecated
     * - `TEMPORARY_REDIRECT`
     * - `PERMANENT_REDIRECT`
     * - `BAD_REQUEST`
     * - `UNAUTHORIZED`
     * - `PAYMENT_REQUIRED`
     * - `FORBIDDEN`
     * - `NOT_FOUND`
     * - `METHOD_NOT_ALLOWED`
     * - `NOT_ACCEPTABLE`
     * - `PROXY_AUTHENTICATION_REQUIRED`
     * - `REQUEST_TIMEOUT`
     * - `CONFLICT`
     * - `GONE`
     * - `LENGTH_REQUIRED`
     * - `PRECONDITION_FAILED`
     * - `PAYLOAD_TOO_LARGE`
     * - `REQUEST_ENTITY_TOO_LARGE` - @deprecated
     * - `URI_TOO_LONG`
     * - `REQUEST_URI_TOO_LONG` - @deprecated
     * - `UNSUPPORTED_MEDIA_TYPE`
     * - `REQUESTED_RANGE_NOT_SATISFIABLE`
     * - `EXPECTATION_FAILED`
     * - `I_AM_A_TEAPOT`
     * - `INSUFFICIENT_SPACE_ON_RESOURCE` - @deprecated
     * - `METHOD_FAILURE` - @deprecated
     * - `DESTINATION_LOCKED` - @deprecated
     * - `UNPROCESSABLE_ENTITY`
     * - `LOCKED`
     * - `FAILED_DEPENDENCY`
     * - `TOO_EARLY`
     * - `UPGRADE_REQUIRED`
     * - `PRECONDITION_REQUIRED`
     * - `TOO_MANY_REQUESTS`
     * - `REQUEST_HEADER_FIELDS_TOO_LARGE`
     * - `UNAVAILABLE_FOR_LEGAL_REASONS`
     * - `INTERNAL_SERVER_ERROR`
     * - `NOT_IMPLEMENTED`
     * - `BAD_GATEWAY`
     * - `SERVICE_UNAVAILABLE`
     * - `GATEWAY_TIMEOUT`
     * - `HTTP_VERSION_NOT_SUPPORTED`
     * - `VARIANT_ALSO_NEGOTIATES`
     * - `INSUFFICIENT_STORAGE`
     * - `LOOP_DETECTED`
     * - `BANDWIDTH_LIMIT_EXCEEDED`
     * - `NOT_EXTENDED`
     * - `NETWORK_AUTHENTICATION_REQUIRED`
     */
    type HttpStatus = "CONTINUE" | "SWITCHING_PROTOCOLS" | "PROCESSING" | "EARLY_HINTS" | "CHECKPOINT" | "OK" | "CREATED" | "ACCEPTED" | "NON_AUTHORITATIVE_INFORMATION" | "NO_CONTENT" | "RESET_CONTENT" | "PARTIAL_CONTENT" | "MULTI_STATUS" | "ALREADY_REPORTED" | "IM_USED" | "MULTIPLE_CHOICES" | "MOVED_PERMANENTLY" | "FOUND" | "MOVED_TEMPORARILY" | "SEE_OTHER" | "NOT_MODIFIED" | "USE_PROXY" | "TEMPORARY_REDIRECT" | "PERMANENT_REDIRECT" | "BAD_REQUEST" | "UNAUTHORIZED" | "PAYMENT_REQUIRED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_ALLOWED" | "NOT_ACCEPTABLE" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUEST_TIMEOUT" | "CONFLICT" | "GONE" | "LENGTH_REQUIRED" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "REQUEST_ENTITY_TOO_LARGE" | "URI_TOO_LONG" | "REQUEST_URI_TOO_LONG" | "UNSUPPORTED_MEDIA_TYPE" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "EXPECTATION_FAILED" | "I_AM_A_TEAPOT" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "METHOD_FAILURE" | "DESTINATION_LOCKED" | "UNPROCESSABLE_ENTITY" | "LOCKED" | "FAILED_DEPENDENCY" | "TOO_EARLY" | "UPGRADE_REQUIRED" | "PRECONDITION_REQUIRED" | "TOO_MANY_REQUESTS" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "BAD_GATEWAY" | "SERVICE_UNAVAILABLE" | "GATEWAY_TIMEOUT" | "HTTP_VERSION_NOT_SUPPORTED" | "VARIANT_ALSO_NEGOTIATES" | "INSUFFICIENT_STORAGE" | "LOOP_DETECTED" | "BANDWIDTH_LIMIT_EXCEEDED" | "NOT_EXTENDED" | "NETWORK_AUTHENTICATION_REQUIRED";

}
