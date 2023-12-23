"use strict";
(() => {
var exports = {};
exports.id = 1432;
exports.ids = [1432];
exports.modules = {

/***/ 8134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "cloudinary"
const external_cloudinary_namespaceObject = require("cloudinary");
var external_cloudinary_default = /*#__PURE__*/__webpack_require__.n(external_cloudinary_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/uploadToCloudinary.ts

external_cloudinary_default().v2.config({
    cloud_name: "dahu3rii0",
    api_key: "363681863725993",
    api_secret: "8s6uL1fV584VjYTSM_j06b6_aUg"
});
async function handler(req, res) {
    const { method } = req;
    switch(method){
        case "POST":
            const fileStr = req.body.data;
            try {
                const uploadedResponse = await external_cloudinary_default().v2.uploader.upload(fileStr, {
                    upload_preset: "qxkzlm62"
                });
                if (uploadedResponse) {
                    const { api_key, signature, ...responseData } = uploadedResponse;
                    res.status(200).json({
                        success: true,
                        data: responseData
                    });
                } else {
                    res.status(500).json({
                        success: false,
                        data: "No image uploaded"
                    });
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    success: false,
                    data: error
                });
            }
            break;
        default:
            res.setHeader("Allow", [
                "POST"
            ]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
const config = {
    api: {
        bodyParser: {
            sizeLimit: "100mb"
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8134));
module.exports = __webpack_exports__;

})();