import {JSONSchema7} from "json-schema";
import {WithType} from "../common";

// @ts-ignore
export interface CustomAuth extends JSONSchema7, WithType<'object'> {
}

export interface BasicAuth extends WithType<'basic'> {
}

export interface OAuth2 extends WithType<'oauth2'> {
}

export interface WSSE extends WithType<'wsse'> {
}

export type Authentication = BasicAuth | OAuth2 | WSSE | CustomAuth;

export type AuthTypes = Authentication['type'];

export type SecuritySchemeName = string;

export type WithSecuritySchemes = {
  securitySchemes: Record<SecuritySchemeName, Authentication>;
}
