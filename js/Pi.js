init(){
	
	canvas.width = 512;
  canvas.height = 288;
  ar cameraPlane = new THREE.PlaneGeometry(512, 512);
  cameraMesh.position.z = -200;
}
  function animate() {
    if (context) {
      var piImage = new Image();

      piImage.onload = function() {
        console.log('Drawing image');
        context.drawImage(piImage, 0, 0, canvas.width, canvas.height);

        texture.needsUpdate = true;
      }

      piImage.src = "http://192.168.1.29/html/cam_pic.php?time=" + new Date().getTime();
    }

    requestAnimationFrame(animate);

    update();
    render();
  }
	
	
