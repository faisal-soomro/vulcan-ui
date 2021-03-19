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
 * @interface ScanPayload
 */
export interface ScanPayload {
    /**
     * Program ID
     * @type {string}
     * @memberof ScanPayload
     */
    programId: string;
    /**
     * Group ID
     * @type {Date}
     * @memberof ScanPayload
     */
    scheduledTime?: Date;
}

export function ScanPayloadFromJSON(json: any): ScanPayload {
    return ScanPayloadFromJSONTyped(json, false);
}

export function ScanPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScanPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'programId': json['program_id'],
        'scheduledTime': !exists(json, 'scheduled_time') ? undefined : (new Date(json['scheduled_time'])),
    };
}

export function ScanPayloadToJSON(value?: ScanPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'program_id': value.programId,
        'scheduled_time': value.scheduledTime === undefined ? undefined : (value.scheduledTime.toISOString()),
    };
}


