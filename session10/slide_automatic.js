var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      } 
      slides[slideIndex].style.display = "block";  
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 3s
      setTimeout(showSlides, 3000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
