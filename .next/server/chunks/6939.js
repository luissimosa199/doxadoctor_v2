"use strict";
exports.id = 6939;
exports.ids = [6939];
exports.modules = {

/***/ 9049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ convertToJpeg)
/* harmony export */ });
function convertToJpeg(pngFile) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            if (!context) {
                throw "canvas.getContext(2d) is false";
            }
            context.drawImage(img, 0, 0);
            canvas.toBlob((blob)=>{
                if (blob) {
                    const reader = new FileReader();
                    reader.onloadend = function() {
                        if (reader.result) {
                            resolve(reader.result);
                        } else {
                            reject(new Error("Failed to convert image to JPEG"));
                        }
                    };
                    reader.onerror = function() {
                        reject(new Error("Failed to convert image to JPEG"));
                    };
                    reader.readAsDataURL(blob);
                } else {
                    reject(new Error("Failed to convert image to JPEG"));
                }
            }, "image/jpeg", 0.9 // JPEG quality (0.0 - 1.0)
            );
        };
        img.onerror = function() {
            reject(new Error("Failed to load image"));
        };
        img.src = URL.createObjectURL(pngFile);
    });
}


/***/ }),

/***/ 6939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $S: () => (/* binding */ sendData),
/* harmony export */   BI: () => (/* binding */ handleDeleteImage),
/* harmony export */   Ef: () => (/* binding */ handleFileAdding),
/* harmony export */   J4: () => (/* binding */ getCurrentDateTimeString),
/* harmony export */   J8: () => (/* binding */ createPhotoData),
/* harmony export */   Od: () => (/* binding */ handleFileChange),
/* harmony export */   X4: () => (/* binding */ createDataObject),
/* harmony export */   eg: () => (/* binding */ uploadImages),
/* harmony export */   re: () => (/* binding */ editData),
/* harmony export */   tr: () => (/* binding */ handleCaptionChange)
/* harmony export */ });
/* unused harmony exports handleNewFileChange, generateSlug */
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _convertToJpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9049);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);
uuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CLOUDINARY_CLOUD_NAME = "dahu3rii0";
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
                const convertedFile = await (0,_convertToJpeg__WEBPACK_IMPORTED_MODULE_2__/* .convertToJpeg */ .u)(file);
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: "Error",
                text: `Error ${response.statusText}`,
                icon: "error"
            });
        }
        return response;
    } catch (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: "Error",
                text: `Error ${response.statusText}`,
                icon: "error"
            });
        }
        return response;
    } catch (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
        components.push(uuidv4().slice(0, 5));
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