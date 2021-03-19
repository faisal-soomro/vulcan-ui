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
    DigestPayload,
    DigestPayloadFromJSON,
    DigestPayloadToJSON,
} from '../models';

export interface ReportSendDigestRequest {
    teamId: string;
    payload: DigestPayload;
}

/**
 * 
 */
export class ReportApi extends runtime.BaseAPI {

    /**
     * Send digest report. If no dates are specified, the time range will be set for the last 30 days.
     * send digest report
     */
    async reportSendDigestRaw(requestParameters: ReportSendDigestRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling reportSendDigest.');
        }

        if (requestParameters.payload === null || requestParameters.payload === undefined) {
            throw new runtime.RequiredError('payload','Required parameter requestParameters.payload was null or undefined when calling reportSendDigest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/report/digest`.replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DigestPayloadToJSON(requestParameters.payload),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Send digest report. If no dates are specified, the time range will be set for the last 30 days.
     * send digest report
     */
    async reportSendDigest(requestParameters: ReportSendDigestRequest): Promise<void> {
        await this.reportSendDigestRaw(requestParameters);
    }

}
