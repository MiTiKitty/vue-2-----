// 当前模块，进行api接口的统一管理
import requests from "./request";
import mockRequests from "./mockRequest";

/**
 * 3级联动接口
 * 
 * api/product/getBaseCategoryList
 * GET
 * 无参数
 * @returns 请求结果 
 */
export const reqCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
};

/**
 * mock/banner/list
 * @returns 图片列表
 */
export const reqBannerList = () => {
    return mockRequests({
        url: '/banner/list',
        method: 'get'
    })
}