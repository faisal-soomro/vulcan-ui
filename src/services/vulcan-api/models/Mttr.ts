/* tslint:disable */
/* eslint-disable */
/**
 * Vulcan API
 * Public API for Vulcan Vulnerability Scan Engine
 *
 * The version of the OpenAPI document: 1.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Statstotal } from './Statstotal';
import {
    StatstotalFromJSON,
    StatstotalFromJSONTyped,
    StatstotalToJSON,
} from './Statstotal';

/**
 * MTTR stats (default view)
 * @export
 * @interface Mttr
 */
export interface Mttr {
    /**
     * 
     * @type {Statstotal}
     * @memberof Mttr
     */
    mttr?: Statstotal;
}

/**
 * Check if a given object implements the Mttr interface.
 */
export function instanceOfMttr(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MttrFromJSON(json: any): Mttr {
    return MttrFromJSONTyped(json, false);
}

export function MttrFromJSONTyped(json: any, ignoreDiscriminator: boolean): Mttr {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mttr': !exists(json, 'mttr') ? undefined : StatstotalFromJSON(json['mttr']),
    };
}

export function MttrToJSON(value?: Mttr | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mttr': StatstotalToJSON(value.mttr),
    };
}

