
  function previewImage(input,previewId,containerId) {
    var preview = document.getElementById(previewId);
    var imgContainer = document.querySelector('.hide-container-img');
    var imgContainer = document.getElementById(containerId);
    var closeIcon = document.getElementById('close-icon');
    console.log(imgContainer)
    var file = input.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      imgContainer.style.display = 'none';
      preview.style.display = 'block';
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }
  // function deleteImage(previewId) {
  //   // var preview = document.getElementById('preview');
  //   var preview = document.getElementById(previewId);
  //   var previewContainer = document.getElementById('preview-container');
    
  //   var closeIcon = document.getElementById('close-icon');
  
  //   preview.src = '';
  //   previewContainer.style.display = 'none';
  // }


  function deleteImage(previewId) {
    var preview = document.getElementById(previewId);
    var previewContainer = preview.parentNode;
    console.log(previewContainer)
  
    preview.src = '';
    previewContainer.style.display = 'none';
}
