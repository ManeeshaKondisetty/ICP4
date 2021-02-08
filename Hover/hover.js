function upDate(previewPic) {
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */
    document.getElementById("image").style.backgroundImage = 'url('+document.getElementById(previewPic.id).src+')';
    document.getElementById("image").innerHTML=document.getElementById(previewPic.id).alt;
}

function unDo() {
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the original-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */
    document.getElementById("image").style.backgroundImage = '';
    document.getElementById("image").innerHTML="Hover over an image \n below to display here.";
}
