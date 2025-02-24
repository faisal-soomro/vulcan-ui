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


import * as runtime from '../runtime';
import type {
  Asset,
  AssetUpdatePayload,
  Assetresponse,
  CreateAssetPayload,
  DiscoveredAssetsPayload,
  Job,
  Listassetentry,
} from '../models';
import {
    AssetFromJSON,
    AssetToJSON,
    AssetUpdatePayloadFromJSON,
    AssetUpdatePayloadToJSON,
    AssetresponseFromJSON,
    AssetresponseToJSON,
    CreateAssetPayloadFromJSON,
    CreateAssetPayloadToJSON,
    DiscoveredAssetsPayloadFromJSON,
    DiscoveredAssetsPayloadToJSON,
    JobFromJSON,
    JobToJSON,
    ListassetentryFromJSON,
    ListassetentryToJSON,
} from '../models';

export interface AssetsCreateRequest {
    teamId: string;
    payload: CreateAssetPayload;
}

export interface AssetsCreateMultiStatusRequest {
    teamId: string;
    payload: CreateAssetPayload;
}

export interface AssetsDeleteRequest {
    assetId: string;
    teamId: string;
}

export interface AssetsDiscoverRequest {
    teamId: string;
    payload: DiscoveredAssetsPayload;
}

export interface AssetsListRequest {
    teamId: string;
    identifier?: string;
}

export interface AssetsShowRequest {
    assetId: string;
    teamId: string;
}

export interface AssetsUpdateRequest {
    assetId: string;
    teamId: string;
    payload: AssetUpdatePayload;
}

/**
 * 
 */
export class AssetsApi extends runtime.BaseAPI {

    /**
     * Creates assets in bulk mode.    This operation accepts an array of assets, an optional array of group identifiers, an optional map of annotations, and returns an array of successfully created assets.    If no groups are specified, assets will be added to the team\'s Default group.    If one of the specified assets already exists for the team but is currently not associated with the requested groups, the association is created.    If for any reason, the creation of an asset fails, an error message will be returned referencing the failed asset and the entire operation will be rolled back.    ---    Valid asset types:    - AWSAccount    - DomainName    - Hostname    - IP    - IPRange    - DockerImage    - WebAddress    - GitRepository    ---    If the asset type is informed, then Vulcan will use that value to create the new asset.    Otherwise, Vulcan will try to automatically discover the asset type.    Notice that this may result in Vulcan creating more than one asset.    For instance, an user trying to create an asset for \"vulcan.example.com\", without specifying the asset type, will end up with two assets created:    - vulcan.example.com (DomainName) and    - vulcan.example.com (Hostname).
     * create assets
     */
    async assetsCreateRaw(requestParameters: AssetsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Asset>>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling assetsCreate.');
        }

        if (requestParameters.payload === null || requestParameters.payload === undefined) {
            throw new runtime.RequiredError('payload','Required parameter requestParameters.payload was null or undefined when calling assetsCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/assets`.replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAssetPayloadToJSON(requestParameters.payload),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AssetFromJSON));
    }

    /**
     * Creates assets in bulk mode.    This operation accepts an array of assets, an optional array of group identifiers, an optional map of annotations, and returns an array of successfully created assets.    If no groups are specified, assets will be added to the team\'s Default group.    If one of the specified assets already exists for the team but is currently not associated with the requested groups, the association is created.    If for any reason, the creation of an asset fails, an error message will be returned referencing the failed asset and the entire operation will be rolled back.    ---    Valid asset types:    - AWSAccount    - DomainName    - Hostname    - IP    - IPRange    - DockerImage    - WebAddress    - GitRepository    ---    If the asset type is informed, then Vulcan will use that value to create the new asset.    Otherwise, Vulcan will try to automatically discover the asset type.    Notice that this may result in Vulcan creating more than one asset.    For instance, an user trying to create an asset for \"vulcan.example.com\", without specifying the asset type, will end up with two assets created:    - vulcan.example.com (DomainName) and    - vulcan.example.com (Hostname).
     * create assets
     */
    async assetsCreate(requestParameters: AssetsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Asset>> {
        const response = await this.assetsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates assets in bulk mode (MultiStatus).    This operation is similar to the \"Create Assets in Bulk Mode\", with 2 main differences:    - This endpoint is not atomic. Each asset creation request will succeed or fail indenpendently of the other requests.    - This endpoint will return an array of AssetResponse in the following way:     · For each asset with specified type, returns an AssetResponse indicating the success or failure for its creation.     · For each asset with no type specified and successfully created, returns one AssetResponse for each auto detected asset.     · For each asset detected from the ones with no type indicated which their creation produced an error, returns one AssetResponse indicating the failure for its creation specifying its detected type.    In the case of all assets being successfully created, this endpoint will return status code 201-Created.     Otherwise, it will return a 207-MultiStatus code, indicating that at least one of the requested operations failed.    
     * createMultiStatus assets
     */
    async assetsCreateMultiStatusRaw(requestParameters: AssetsCreateMultiStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Assetresponse>>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling assetsCreateMultiStatus.');
        }

        if (requestParameters.payload === null || requestParameters.payload === undefined) {
            throw new runtime.RequiredError('payload','Required parameter requestParameters.payload was null or undefined when calling assetsCreateMultiStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/assets/multistatus`.replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAssetPayloadToJSON(requestParameters.payload),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AssetresponseFromJSON));
    }

    /**
     * Creates assets in bulk mode (MultiStatus).    This operation is similar to the \"Create Assets in Bulk Mode\", with 2 main differences:    - This endpoint is not atomic. Each asset creation request will succeed or fail indenpendently of the other requests.    - This endpoint will return an array of AssetResponse in the following way:     · For each asset with specified type, returns an AssetResponse indicating the success or failure for its creation.     · For each asset with no type specified and successfully created, returns one AssetResponse for each auto detected asset.     · For each asset detected from the ones with no type indicated which their creation produced an error, returns one AssetResponse indicating the failure for its creation specifying its detected type.    In the case of all assets being successfully created, this endpoint will return status code 201-Created.     Otherwise, it will return a 207-MultiStatus code, indicating that at least one of the requested operations failed.    
     * createMultiStatus assets
     */
    async assetsCreateMultiStatus(requestParameters: AssetsCreateMultiStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Assetresponse>> {
        const response = await this.assetsCreateMultiStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an asset.
     * delete assets
     */
    async assetsDeleteRaw(requestParameters: AssetsDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.assetId === null || requestParameters.assetId === undefined) {
            throw new runtime.RequiredError('assetId','Required parameter requestParameters.assetId was null or undefined when calling assetsDelete.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling assetsDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/assets/{asset_id}`.replace(`{${"asset_id"}}`, encodeURIComponent(String(requestParameters.assetId))).replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an asset.
     * delete assets
     */
    async assetsDelete(requestParameters: AssetsDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assetsDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint receives a list of assets with embedded asset annotations, and the group name where to be added. It should be used by third-party asset discovery services to onboard the discovered assets into Vulcan. The provided list of assets will overwrite the assets previously present in the group, in a way that:   - Assets that do not exist in the team will be created and associated to the   group   - Assets that were already existing in the team but not associated to the   group will be associated   - Existing assets where the scannable field or the annotations are different   will be updated accordingly   - Assets that were associated to the group and now are not present in the   provided list will be de-associated from the group if they belong to any   other group, or deleted otherwise Because of the latency of this operation the endpoint is asynchronous. It returns a 202-Accepted HTTP response with the Job information in the response body.  The discovery group name must end with \'-discovered-assets\' to not mess with manually managed asset groups. Also the first part of the name should identify the discovery service using the endpoint, for example: serviceX-discovered-assets. Also be aware that the provided annotations may differ from the ones that will be stored, because they will include a prefix to not mess with any other annotations already present in the asset.  Duplicated assets (same identifier and type) in the payload are ignored if all their attributes are matching. Otherwise they produce an error and the job is aborted.
     * discover assets
     */
    async assetsDiscoverRaw(requestParameters: AssetsDiscoverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Job>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling assetsDiscover.');
        }

        if (requestParameters.payload === null || requestParameters.payload === undefined) {
            throw new runtime.RequiredError('payload','Required parameter requestParameters.payload was null or undefined when calling assetsDiscover.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/assets/discovery`.replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DiscoveredAssetsPayloadToJSON(requestParameters.payload),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobFromJSON(jsonValue));
    }

    /**
     * This endpoint receives a list of assets with embedded asset annotations, and the group name where to be added. It should be used by third-party asset discovery services to onboard the discovered assets into Vulcan. The provided list of assets will overwrite the assets previously present in the group, in a way that:   - Assets that do not exist in the team will be created and associated to the   group   - Assets that were already existing in the team but not associated to the   group will be associated   - Existing assets where the scannable field or the annotations are different   will be updated accordingly   - Assets that were associated to the group and now are not present in the   provided list will be de-associated from the group if they belong to any   other group, or deleted otherwise Because of the latency of this operation the endpoint is asynchronous. It returns a 202-Accepted HTTP response with the Job information in the response body.  The discovery group name must end with \'-discovered-assets\' to not mess with manually managed asset groups. Also the first part of the name should identify the discovery service using the endpoint, for example: serviceX-discovered-assets. Also be aware that the provided annotations may differ from the ones that will be stored, because they will include a prefix to not mess with any other annotations already present in the asset.  Duplicated assets (same identifier and type) in the payload are ignored if all their attributes are matching. Otherwise they produce an error and the job is aborted.
     * discover assets
     */
    async assetsDiscover(requestParameters: AssetsDiscoverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Job> {
        const response = await this.assetsDiscoverRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all assets from a team.
     * list assets
     */
    async assetsListRaw(requestParameters: AssetsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Listassetentry>>> {
        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling assetsList.');
        }

        const queryParameters: any = {};

        if (requestParameters.identifier !== undefined) {
            queryParameters['identifier'] = requestParameters.identifier;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/assets`.replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ListassetentryFromJSON));
    }

    /**
     * List all assets from a team.
     * list assets
     */
    async assetsList(requestParameters: AssetsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Listassetentry>> {
        const response = await this.assetsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Describe an asset.
     * show assets
     */
    async assetsShowRaw(requestParameters: AssetsShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Asset>> {
        if (requestParameters.assetId === null || requestParameters.assetId === undefined) {
            throw new runtime.RequiredError('assetId','Required parameter requestParameters.assetId was null or undefined when calling assetsShow.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling assetsShow.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/assets/{asset_id}`.replace(`{${"asset_id"}}`, encodeURIComponent(String(requestParameters.assetId))).replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * Describe an asset.
     * show assets
     */
    async assetsShow(requestParameters: AssetsShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Asset> {
        const response = await this.assetsShowRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an asset.   Asset type and identifier can not be modified.
     * update assets
     */
    async assetsUpdateRaw(requestParameters: AssetsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Asset>> {
        if (requestParameters.assetId === null || requestParameters.assetId === undefined) {
            throw new runtime.RequiredError('assetId','Required parameter requestParameters.assetId was null or undefined when calling assetsUpdate.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling assetsUpdate.');
        }

        if (requestParameters.payload === null || requestParameters.payload === undefined) {
            throw new runtime.RequiredError('payload','Required parameter requestParameters.payload was null or undefined when calling assetsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/teams/{team_id}/assets/{asset_id}`.replace(`{${"asset_id"}}`, encodeURIComponent(String(requestParameters.assetId))).replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AssetUpdatePayloadToJSON(requestParameters.payload),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * Update an asset.   Asset type and identifier can not be modified.
     * update assets
     */
    async assetsUpdate(requestParameters: AssetsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Asset> {
        const response = await this.assetsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
