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


import * as runtime from '../runtime';
import {
    Schedule,
    ScheduleFromJSON,
    ScheduleToJSON,
    ScheduleUpdatePayload,
    ScheduleUpdatePayloadFromJSON,
    ScheduleUpdatePayloadToJSON,
} from '../models';

export interface ScheduleDeleteRequest {
    programId: string;
    teamId: string;
}

export interface ScheduleUpdateRequest {
    programId: string;
    teamId: string;
    payload: ScheduleUpdatePayload;
}

/**
 * 
 */
export class ScheduleApi extends runtime.BaseAPI {

    /**
     * Delete a schedule.
     * delete schedule
     */
    async scheduleDeleteRaw(requestParameters: ScheduleDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.programId === null || requestParameters.programId === undefined) {
            throw new runtime.RequiredError('programId','Required parameter requestParameters.programId was null or undefined when calling scheduleDelete.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling scheduleDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/programs/{program_id}/schedule`.replace(`{${"program_id"}}`, encodeURIComponent(String(requestParameters.programId))).replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a schedule.
     * delete schedule
     */
    async scheduleDelete(requestParameters: ScheduleDeleteRequest): Promise<void> {
        await this.scheduleDeleteRaw(requestParameters);
    }

    /**
     * Update information about a schedule.
     * update schedule
     */
    async scheduleUpdateRaw(requestParameters: ScheduleUpdateRequest): Promise<runtime.ApiResponse<Schedule>> {
        if (requestParameters.programId === null || requestParameters.programId === undefined) {
            throw new runtime.RequiredError('programId','Required parameter requestParameters.programId was null or undefined when calling scheduleUpdate.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling scheduleUpdate.');
        }

        if (requestParameters.payload === null || requestParameters.payload === undefined) {
            throw new runtime.RequiredError('payload','Required parameter requestParameters.payload was null or undefined when calling scheduleUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/programs/{program_id}/schedule`.replace(`{${"program_id"}}`, encodeURIComponent(String(requestParameters.programId))).replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScheduleUpdatePayloadToJSON(requestParameters.payload),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScheduleFromJSON(jsonValue));
    }

    /**
     * Update information about a schedule.
     * update schedule
     */
    async scheduleUpdate(requestParameters: ScheduleUpdateRequest): Promise<Schedule> {
        const response = await this.scheduleUpdateRaw(requestParameters);
        return await response.value();
    }

}
