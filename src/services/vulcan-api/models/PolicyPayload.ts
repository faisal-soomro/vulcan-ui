/* tslint:disable */
/* eslint-disable */
/**
 * Vulcan API
 * Public API for Vulcan Vulnerability Scan Engine
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PolicyPayload
 */
export interface PolicyPayload {
    /**
     * name
     * @type {string}
     * @memberof PolicyPayload
     */
    name: string;
}

export function PolicyPayloadFromJSON(json: any): PolicyPayload {
    return PolicyPayloadFromJSONTyped(json, false);
}

export function PolicyPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function PolicyPayloadToJSON(value?: PolicyPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}


