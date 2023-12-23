"use strict";
(() => {
var exports = {};
exports.id = 4491;
exports.ids = [4491];
exports.modules = {

/***/ 3868:
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ 752:
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 2080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3511);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1092);
/* harmony import */ var _utils_formHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9878);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_models__WEBPACK_IMPORTED_MODULE_0__, _utils_formHelpers__WEBPACK_IMPORTED_MODULE_2__]);
([_db_models__WEBPACK_IMPORTED_MODULE_0__, _utils_formHelpers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// api/timeline



async function handler(req, res) {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    if (req.method === "GET") {
        const { tags, page } = req.query;
        const perPage = 10;
        const skip = page ? parseInt(page) * perPage : 0;
        if (tags) {
            const tagsArray = Array.isArray(tags) ? tags : [
                tags
            ];
            const regexPatterns = tagsArray.map((tag)=>new RegExp(`^${tag}`, "i"));
            const response = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.find({
                tags: {
                    $in: regexPatterns
                }
            }).sort({
                createdAt: -1
            }).skip(skip).limit(perPage).lean();
            res.status(200).json(response);
        } else {
            const response = await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.find({}).sort({
                createdAt: -1
            }).skip(skip).limit(perPage).lean();
            res.status(200).json(response);
        }
    } else if (req.method === "POST") {
        const { mainText, photo, length, tags, authorId, authorName, links } = JSON.parse(req.body);
        let baseSlug = (0,_utils_formHelpers__WEBPACK_IMPORTED_MODULE_2__/* .generateSlug */ .GD)(JSON.parse(req.body), 35, 50);
        let slug = baseSlug;
        let counter = 1;
        while(await _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ.exists({
            urlSlug: slug
        })){
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
        const timeline = new _db_models__WEBPACK_IMPORTED_MODULE_0__/* .TimeLineModel */ .HQ({
            mainText: mainText || "",
            photo: photo,
            length: length,
            tags: tags,
            links: links,
            authorId: authorId,
            authorName: authorName,
            urlSlug: slug
        });
        await timeline.save();
        res.status(200).json(timeline.toJSON());
    } else {
        res.status(405).json({
            error: "Method not allowed"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GD: () => (/* binding */ generateSlug)
/* harmony export */ });
/* unused harmony exports uploadImages, handleFileChange, handleNewFileChange, handleFileAdding, handleCaptionChange, handleDeleteImage, sendData, editData, getCurrentDateTimeString, createPhotoData, createDataObject */
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);
uuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CLOUDINARY_CLOUD_NAME = (/* unused pure expression or super */ null && ("dahu3rii0"));
const CLOUDINARY_UPLOAD_PRESET = (/* unused pure expression or super */ null && ("qxkzlm62"));
const uploadImages = async (event)=>{
    let urls = [];
    if (event.target.files) {
        const files = Array.from(event.target.files);
        urls = await Promise.all(files.map(async (e)=>{
            let file = e;
            const pngRgx = /\/png$/;
            const isPng = pngRgx.test(file.type);
            if (isPng) {
                const convertedFile = await convertToJpeg(file);
                file = convertedFile;
            }
            // Upload to Cloudinary
            const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "qxkzlm62");
            const response = await fetch(url, {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.secure_url;
            } else {
                throw new Error("Upload failed");
            }
        }));
        return urls;
    }
};
const handleFileChange = (event)=>{
    return new Promise((resolve, reject)=>{
        const files = event.target.files;
        const newPreviews = [];
        if (files && files.length > 0) {
            let processedFiles = 0;
            for(let i = 0; i < files.length; i++){
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    const dataURL = reader.result;
                    newPreviews.push(dataURL);
                    processedFiles++;
                    if (processedFiles === files.length) {
                        resolve(newPreviews);
                    }
                };
                reader.onerror = ()=>{
                    reject(new Error("Failed to read file"));
                };
                reader.readAsDataURL(files[i]);
            }
        } else {
            resolve([]);
        }
    });
};
const handleNewFileChange = (event)=>{
    return new Promise((resolve, reject)=>{
        const files = event.target.files;
        const newPreviews = [];
        if (files && files.length > 0) {
            let processedFiles = 0;
            for(let i = 0; i < files.length; i++){
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    const dataURL = reader.result;
                    newPreviews.push(dataURL);
                    processedFiles++;
                    if (processedFiles === files.length) {
                        resolve(newPreviews);
                    }
                };
                reader.onerror = ()=>{
                    reject(new Error("Failed to read file"));
                };
                reader.readAsDataURL(files[i]);
            }
        } else {
            resolve([]);
        }
    });
};
const handleFileAdding = (event, setImages)=>{
    return new Promise((resolve, reject)=>{
        const files = event.target.files;
        if (files && files.length > 0) {
            let newPreviews = [];
            let processedFiles = 0;
            for(let i = 0; i < files.length; i++){
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    const dataURL = reader.result;
                    newPreviews.push(dataURL);
                    processedFiles++;
                    if (processedFiles === files.length) {
                        // Add the new previews to the existing images
                        setImages((prevImages)=>[
                                ...prevImages,
                                ...newPreviews
                            ]);
                        resolve();
                    }
                };
                reader.onerror = ()=>{
                    reject(new Error("Failed to read file"));
                };
                reader.readAsDataURL(files[i]);
            }
        } else {
            setImages([]);
            resolve();
        }
    });
};
const handleCaptionChange = (event, idx, imagesCaption, setImagesCaptions)=>{
    const updatedImages = imagesCaption.map((item, i)=>{
        if (i === idx) {
            item.value = event.target.value;
        }
        return item;
    });
    const indexExists = imagesCaption.some((item)=>item.idx === idx);
    if (!indexExists) {
        updatedImages.push({
            idx,
            value: event.target.value
        });
    }
    setImagesCaptions(updatedImages);
};
const handleDeleteImage = (event, currentIdx, setImages, setPreviews)=>{
    event.preventDefault();
    setImages((prevImages)=>prevImages.filter((e, idx)=>idx !== currentIdx));
    setPreviews((prevImages)=>prevImages.filter((e, idx)=>idx !== currentIdx));
};
const sendData = async (data)=>{
    try {
        const response = await fetch("/api/timeline", {
            method: "POST",
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            Swal.fire({
                title: "Error",
                text: `Error ${response.statusText}`,
                icon: "error"
            });
        }
        return response;
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: `Error ${error}`,
            icon: "error"
        });
        throw error;
    }
};
const editData = async (data)=>{
    try {
        const response = await fetch(`/api/timeline/${data._id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            Swal.fire({
                title: "Error",
                text: `Error ${response.statusText}`,
                icon: "error"
            });
        }
        return response;
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: `Error ${error}`,
            icon: "error"
        });
        throw error;
    }
};
const getCurrentDateTimeString = ()=>{
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().padStart(4, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
};
const createPhotoData = (paths, imagesCaption)=>{
    return paths.map((path, photoIdx)=>{
        const caption = imagesCaption.find((e)=>e.idx === photoIdx)?.value;
        return {
            url: path,
            idx: photoIdx,
            caption: caption
        };
    });
};
const createDataObject = (data, photos, tagsList, session, linksList)=>{
    return {
        mainText: data.mainText || "",
        photo: photos,
        length: photos.length,
        tags: tagsList,
        authorId: session?.user?.email ?? "defaultId",
        authorName: session?.user?.name ?? "defaultName",
        links: linksList
    };
};
function generateSlug(post, minLength = 10, maxLength = 50) {
    const components = [];
    const cleanWord = (word)=>{
        return word.toLowerCase().replace(/[^\w]/g, "");
    };
    // If there's a mainText, add it.
    if (post.mainText) {
        components.push(...post.mainText.split(/\s+/).map(cleanWord));
    }
    // If the length after adding mainText is less than minimum OR there's no mainText, then consider tags.
    if (!post.mainText || components.join("-").length < minLength) {
        if (post.tags) {
            components.push(...post.tags.map(cleanWord));
        }
    }
    // If the length is still less than minimum after adding mainText and tags, add the author's name.
    if (components.join("-").length < minLength && post.authorName) {
        components.push(cleanWord(post.authorName));
    }
    // If the length is still under the minimum, add the date.
    if (components.join("-").length < minLength) {
        const today = new Date();
        const dateString = today.toISOString().split("T")[0]; // format: "yyyy-mm-dd"
        components.push(dateString);
    }
    // If after all these steps, the length is still under the minimum, append a partial UUID.
    if (components.join("-").length < minLength) {
        components.push((0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)().slice(0, 5));
    }
    // Construct the slug and limit length if necessary
    let slug = components.join("-");
    if (slug.length > maxLength) {
        slug = slug.slice(0, maxLength);
    }
    return slug;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2246,5352,3511], () => (__webpack_exec__(2080)));
module.exports = __webpack_exports__;

})();