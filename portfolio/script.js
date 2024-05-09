var typer = new Typed(".text", {
  strings: ["Forntend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDeplay: 1000,
  loop: true,
});
const circle = document.querySelectorAll(".circle");
circle.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percentage");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += '<div class="points" style="--i:${i};--rot:${rotate}deg"></div>';
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll(".poins");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});
/*
<h1 class="sub">My<span>Skills</span></h1>
    <section>
      <div class="container1" id="skill">
        <h1 class="heading1">Technical Skills</h1>
        <div class="Technical-bars">
          <div class="bar">
            <i style="color: #c95d2e" class="fa-brands fa-html5"></i>
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line-html">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style="color: #147bbc" class="fa-brands fa-css3-alt"></i>
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line-css">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style="color: #b0bc1e" class="fa-brands fa-js"></i>
            <div class="info">
              <span>Javascript</span>
            </div>
            <div class="progress-line-javascript">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style="color: #c32ec9" class="fa-brands fa-java"></i>
            <div class="info">
              <span>Java</span>
            </div>
            <div class="progress-line-java">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>CPP</span>
            </div>
            <div class="progress-line-cpp">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>







 <section>
      <div class="container1" id="skill">
        <h1 class="heading1"><center>Technical Skills</center></h1>
        <div class="Technical-bars">
          <div class="bar">
            <i style="color: #c95d2e" class="fa-brands fa-html5"></i>
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style="color: #147bbc" class="fa-brands fa-css3-alt"></i>
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line css">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style="color: #b0bc1e" class="fa-brands fa-js"></i>
            <div class="info">
              <span>Javascript</span>
            </div>
            <div class="progress-line javascript">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style="color: #c32ec9" class="fa-brands fa-java"></i>
            <div class="info">
              <span>Java</span>
            </div>
            <div class="progress-line java">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>CPP</span>
            </div>
            <div class="progress-line-cpp">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script src="script.js"></script>
  </body>
</html>







section {
  display: flex;
  flex-wrap: wrap;
}
.continer1 {
  width: 600px;
  height: 500px;
  padding: 75px 90px;
  margin-left: 120px;
}
.heading1 {
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 5px;
  margin-bottom: 50px;
}
.bar {
  font-size: 23px;
}
.Technical-bars .bar {
  margin-top: 40px 0;
}
.Technical-bars .bar:first-child {
  margin-top: 0;
}
.Technical-bars.bar:last-child {
  margin-bottom: 0;
}
.Technical-bars .bar .info {
  margin-bottom: 5px;
}
.Technical-bars .bar .info span {
  font-size: 17px;
  font-weight: 500;
  animation: showText 0.5s 1 linear forwards;
  opacity: 0;
}
.Technical-bars .bar .progress-line-html {
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 5px;
  background-color: #000000;
  animation: animate 1s cubic-bezier(1, 0, 0, 5, 1) forwards;
  transform-origin: left;
}
.Technical-bars .bar .progress-line {
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 5px;
  background-color: #000000;
  animation: animate 1s cubic-bezier(1, 0, 0, 5, 1) forwards;
  transform-origin: left;
}

@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}
.Technical-bars .bar .progress-line span {
  height: 100%;
  background-color: #ff99cc;
  position: absolute;
  border-radius: 10px;
  animation: animate 1s 1s cubic-bezier(1, 0, 0, 5, 1) forwards;
  transform-origin: left;
}
.progress-line.html span {
  width: 90%;
}
.progress-line.css span {
  width: 50%;
}
.progress-line.javascript span {
  width: 90%;
}
.progress-line.java span {
  width: 90%;
}
*/
