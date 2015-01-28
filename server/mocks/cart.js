module.exports = function(app) {
  var express = require('express');
  var cartRouter = express.Router();

  cartRouter.get('/', function(req, res) {
    res.send({
      "cart": {
        "id": "cart1",
        "merchandiseCost": "$7.99",
        "shippingCost": "$7.00",
        "giftWrapCost": "$0.00",
        "taxAmount": "$0.00",
        "estimatedDutyAmount": "$100.00",
        "dutyAmount": "$0.00",
        "discountAmount": "$0.00",
        "merchandiseCostAfterDiscount": "$7.99",
        "orderTotal": "$14.99",
        "freeShippingAmount": "$100.00",
        "amountToFreeShipping": "$92.01",
        "percentToFreeShipping": 0.18,
        "includeGiftReceipt": true,
        "isInternationalShipping": false,
        "isBmlPromoQualified": false,
        "shippingMethod": "STANDARD",
        "commerceItems": ["ci4322000484", "ci4322000485"],
        "shippingAddress": "shippingAddressId",
        "paymentMethod": "paymentMethodId",
        "giftCards": [],
        "discountCodes": []
      },
      "commerceItems": [{
        "id": "ci4322000484",
        "quantity": 1,
        "discountAmount": "$0.00",
        "totalListPrice": "$22.95",
        "totalDiscountedPrice": "$15.00",
        "itemSalePrice": "$0.99",
        "itemListPrice": "$0.99",
        "percentageOff": 0.10,
        "skuId": "0019141704BD",
        "productId": "0220_4272_400",
        "containerProductId": "0220_4272",
        "categoryId": "cat12312312",
        "styleId": "4272",
        "classId": "0220",
        "colorId": "400",
        "brandName": "AEO",
        "brandDisplayName": "AE",
        "color": "Blue",
        "displayName": "Aerie Striped V-Neck T-Shirt",
        "image": "//aeo-o.scene7.com/is/image/aeo/5494_8708_856_f",
        "size1": "32",
        "size2": "34",
        "displaySize": "32 x 34",
        "giftWrapTo": "",
        "giftWrapFrom": "",
        "giftWrapId": "",
        "giftWrapMessage": "",
        "giftCardEmail": "",
        "giftCardPhone": "",
        "giftCardTo": "",
        "isGiftCard": false,
        "isShopRunnerAvailable": false,
        "isHazmat": false,
        "isGWP": false,
        "isInternationallyShippable": true,
        "isDiscounted": true
      },{
        "id": "ci4322000485",
        "quantity": 1,
        "discountAmount": "$0.00",
        "totalListPrice": "$0.99",
        "totalDiscountedPrice": "$0.99",
        "itemSalePrice": "$0.99",
        "itemListPrice": "$0.99",
        "percentageOff": 0.10,
        "skuId": "0019141704BD",
        "productId": "0220_4272_400",
        "containerProductId": "0220_4272",
        "categoryId": "cat12312312",
        "styleId": "4272",
        "classId": "0220",
        "colorId": "400",
        "brandName": "AEO",
        "brandDisplayName": "AE",
        "color": "Blue",
        "displayName": "AEO Relaxed Straight Khaki",
        "image": "//aeo-o.scene7.com/is/image/aeo/0124_3117_221_f",
        "size1": "32",
        "size2": "34",
        "displaySize": "32 x 34",
        "giftWrapTo": "",
        "giftWrapFrom": "",
        "giftWrapId": "",
        "giftWrapMessage": "",
        "giftCardEmail": "",
        "giftCardPhone": "",
        "giftCardTo": "",
        "isGiftCard": false,
        "isShopRunnerAvailable": false,
        "isHazmat": false,
        "isGWP": false,
        "isInternationallyShippable": true,
        "isDiscounted": true
      }]
    });
  });

  cartRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  cartRouter.get('/:id', function(req, res) {
    res.send({
      'cart': {
        id: req.params.id
      }
    });
  });

  cartRouter.put('/:id', function(req, res) {
    res.send({
      'cart': {
        id: req.params.id
      }
    });
  });

  cartRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/cart', cartRouter);
};
