"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.travelDtoToPostTravelResponse = exports.postTravelRequestToCreateItemDto = void 0;
function postTravelRequestToCreateItemDto(postTravelRequest) {
    // hge
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var newTravelDto = {
        /*
        date: postTravelRequest.date,
        */
        country: postTravelRequest.country,
        /*
        city: postTravelRequest.city,
        category: postTravelRequest.category,
        subcategory: postTravelRequest.subcategory,
        description: postTravelRequest.description,
        cost: postTravelRequest.cost,
        paidOption: postTravelRequest.paidOption,
        note: postTravelRequest.note,
        */
    };
    return newTravelDto;
}
exports.postTravelRequestToCreateItemDto = postTravelRequestToCreateItemDto;
function travelDtoToPostTravelResponse(dto) {
    var res = {
        itemId: dto.itemId,
        /*
        date: dto.date,
        */
        country: dto.country,
        /*
        city: dto.city,
        category: dto.category,
        subcategory: dto.subcategory,
        description: dto.description,
        cost: dto.cost,
        paidOption: dto.paidOption,
        note: dto.note,
        */
    };
    return res;
}
exports.travelDtoToPostTravelResponse = travelDtoToPostTravelResponse;
