import $ from "jquery";
import APIUrls from "./constants/apiUrls";

export default {
  getProductById: (productId, successCallback) => {
    $.ajax({
      url: APIUrls.PRODUCT_SERVICE(productId),
      contentType: 'application/json',
      success: successCallback
    });
  }
};
