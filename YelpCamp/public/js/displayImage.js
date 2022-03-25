const imageContainer = document.querySelector('.file-container');
const fileUploader   = document.querySelector('.form-control-file[type="file"]');

fileUploader.addEventListener('change', e => {
    const fileList = e.target.files;
    console.log(fileList);
    for (let i = 0; i < fileList.length; i++) {
        addToImageList(imageContainer, fileList[i]);
    }
})

const addToImageList = function (parentElement, file) {
    const domFile = document.createElement('div');
    const input   = document.createElement('input');
    domFile.classList.add('img-item');
    domFile.innerHTML = `<span class="file-name">${file.name}</span> <span class="btn --rm-image"> <svg xmlns="http://www.w3.org/2000/svg" width="18.576" height="20.037" viewBox="0 0 18.576 20.037"> <g id="Capa_1" data-name="Capa 1" transform="translate(-229.89 -323.451)"> <path id="Path_422" data-name="Path 422" d="M247.525,326.8h-4.171V324.29a.839.839,0,0,0-.839-.839H235.84a.839.839,0,0,0-.839.839h0V326.8h-4.17a.839.839,0,1,0-.2,1.665.774.774,0,0,0,.2,0h.827v12.524a2.5,2.5,0,0,0,2.5,2.5h10.019a2.5,2.5,0,0,0,2.505-2.5V328.46h.839a.839.839,0,1,0,.2-1.665A.774.774,0,0,0,247.525,326.8Zm-10.858-1.678h5.009V326.8h-5.009Zm8.353,15.867a.839.839,0,0,1-.839.839H234.162a.839.839,0,0,1-.826-.839V328.46H245.02Z" fill="#096bef"></path> <path id="Path_423" data-name="Path 423" d="M236.667,330.126a.827.827,0,0,0-.827.826v7.527a.827.827,0,0,0,.814.839h.013a.839.839,0,0,0,.839-.839h0v-7.514a.839.839,0,0,0-.839-.839Z" fill="#096bef"></path> <path id="Path_424" data-name="Path 424" d="M241.676,330.126a.826.826,0,0,0-.826.826v7.527a.826.826,0,0,0,.814.839h.012a.839.839,0,0,0,.839-.839h0v-7.514a.839.839,0,0,0-.839-.839Z" fill="#096bef"></path> </g> </svg> </span>`;
    input.classList.add('d-none');
    input.setAttribute('name', 'camground.image');
    input.setAttribute('value', file.name);

    parentElement.appendChild(domFile);
    if(document.body != null){
        document.body.appendChild(input);
    }
}