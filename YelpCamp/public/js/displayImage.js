window.onload = function () {
    const fileUploader   = document.querySelector('.form-control-file[type="file"]');
    const btnDels        = document.querySelectorAll('.btn.--rm-image');
    const imageList      = document.querySelectorAll('span.file-name');
    let   fileArr        = [];

    if (fileUploader) {
        fileUploader.addEventListener('change', e => {
            document.querySelectorAll('.img-item.new-img').forEach(item => item.remove());
            delete fileArr;
            fileArr = Array.from(e.target.files);
            fileArr.forEach((file, i) => addFileToList(file, i, fileArr));
        })
    }

    if (btnDels.length > 0) {
        btnDels.forEach((btn) => {
            btn.addEventListener('click', e => {
                const imageId = e.target.dataset.id;
                document.querySelector(`input[data-image-id="${imageId}"]`).setAttribute('checked', 'true');
                e.target.parentElement.remove();
            })
        })
    }

    if (imageList.length > 0) {
        imageList.forEach(file => {
            const imgStyle = file.parentElement.querySelector('.img-preview').style;
            imgStyle.background = `url(${file.dataset.imageUrl})`;
            imgStyle.backgroundSize = 'contain';
            file.addEventListener('mouseenter', e => {
                e.target.classList.add('is-show');
            });
            file.addEventListener('mouseout', e => {
                e.target.classList.remove('is-show');
            });
        });
    }
}

/**
 * 
 * @param {*} file 
 * @param {*} index 
 * @param {*} fileBuffer 
 */
const addFileToList = function (file, index, currentFiles) {
    const imageContainer = document.querySelector('.file-container');
    const fileItem       = document.createElement('div');
    const reader         = new FileReader();
    reader.onload = (function(file) {
        return function(e) {
            fileItem.classList.add('img-item', 'new-img');
            fileItem.innerHTML = `<span class="file-name">${file.name}</span>`
                                + `<span class="btn --rm-image" data-file-id="${index}">`
                                +   `<svg xmlns="http://www.w3.org/2000/svg" width="18.576" height="20.037" viewBox="0 0 18.576 20.037">`
                                +     `<g id="Capa_1" data-name="Capa 1" transform="translate(-229.89 -323.451)">`
                                +       `<path id="Path_422" data-name="Path 422" d="M247.525,326.8h-4.171V324.29a.839.839,0,0,0-.839-.839H235.84a.839.839,0,0,0-.839.839h0V326.8h-4.17a.839.839,0,1,0-.2,1.665.774.774,0,0,0,.2,0h.827v12.524a2.5,2.5,0,0,0,2.5,2.5h10.019a2.5,2.5,0,0,0,2.505-2.5V328.46h.839a.839.839,0,1,0,.2-1.665A.774.774,0,0,0,247.525,326.8Zm-10.858-1.678h5.009V326.8h-5.009Zm8.353,15.867a.839.839,0,0,1-.839.839H234.162a.839.839,0,0,1-.826-.839V328.46H245.02Z">`
                                +       `</path>`
                                +       `<path id="Path_423" data-name="Path 423" d="M236.667,330.126a.827.827,0,0,0-.827.826v7.527a.827.827,0,0,0,.814.839h.013a.839.839,0,0,0,.839-.839h0v-7.514a.839.839,0,0,0-.839-.839Z"></path> <path id="Path_424" data-name="Path 424" d="M241.676,330.126a.826.826,0,0,0-.826.826v7.527a.826.826,0,0,0,.814.839h.012a.839.839,0,0,0,.839-.839h0v-7.514a.839.839,0,0,0-.839-.839Z">`
                                +       `</path>`
                                +     `</g>`
                                +   `</svg>`
                                + `</span>`
                                + `<div class="img-preview"><img src="${e.target.result}"><div>`;

            imageContainer.appendChild(fileItem);
            fileItem.querySelector('.btn.--rm-image').addEventListener('click', e => {
                removeFileFromList(e.target, currentFiles);
            })
            const currentFile = fileItem.querySelector('span.file-name');
            currentFile.addEventListener('mouseenter', e => {
                e.target.classList.add('is-show');
            });
            currentFile.addEventListener('mouseout', e => {
                e.target.classList.remove('is-show');
            });
        }
    })(file)

    reader.readAsDataURL(file);
}

const removeFileFromList = function (ele, currentFiles) {
    const fileList    = document.querySelector('.form-control-file[type="file"]');
    const newFileList = new DataTransfer();

    delete currentFiles[ele.dataset.fileId];
    currentFiles.forEach(file => newFileList.items.add(file));
    delete fileList.files;
    fileList.files = newFileList.files;
    ele.parentElement.remove(); 
}
