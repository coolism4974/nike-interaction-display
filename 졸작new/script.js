window.onload = function () {
  if (window.screen.width / window.screen.height >= 820 / 1106) {
    console.log("아이패드 화면 비율입니다.");

    let URL = "https://teachablemachine.withgoogle.com/models/3zs0J62G_/";

    let firstPage = document.getElementById("firstPage");
    let secondPage = document.getElementById("secondPage");
    let thirdPage = document.getElementById("thirdPage");
    let fourthPage = document.getElementById("fourthPage");
    let fifthPage = document.getElementById("fifthPage");
    let sixthPage = document.getElementById("sixthPage");
    let seventhPage = document.getElementById("seventhPage");

    let characters = document.getElementsByClassName("characters");
    let characterShadow = document.getElementsByClassName("characterShadow");

    characterShadow[0].style.left = "16%";
    characterShadow[0].style.top = "-59.5%";
    characterShadow[0].style.width = "11vw";
    characterShadow[0].style.height = "1.5vw";

    characterShadow[1].style.left = "32%";
    characterShadow[1].style.top = "-42%";
    characterShadow[1].style.width = "16vw";

    characterShadow[2].style.left = "46%";
    characterShadow[2].style.top = "-64.5%";
    characterShadow[2].style.width = "16vw";

    characterShadow[3].style.right = "24%";
    characterShadow[3].style.top = "-62%";
    characterShadow[3].style.width = "16vw";

    characterShadow[4].style.right = "6%";
    characterShadow[4].style.top = "-45%";
    characterShadow[4].style.width = "16vw";

    let pages = document.getElementsByClassName("pages");

    let blackHall = document.getElementById("blackHallBox");
    let blackCircle = document.getElementById("blackHall");
    let shadow = document.getElementById("shadow");
    let eyes = document.getElementById("eyes");
    let arm = document.getElementById("firstArm");

    const video = document.getElementById("video");

    let blackEyes = document.getElementsByClassName("blackEyes");

    let shoesTalk = document.getElementsByClassName("shoesTalk");
    let selectBox = document.getElementById("selectBox");
    let shPosX = window.innerWidth / 2 - shoesTalk[0].clientWidth / 2;
    let shPosY = selectBox.offsetTop + selectBox.clientHeight;
    shoesTalk[0].style.transform =
      "translate(" + shPosX + "px, " + shPosY + "px)";

    let shoes = document.getElementsByClassName("shoes");
    let shoeslistBox = document.getElementsByClassName("bbBox");
    let firstLeftButton = document.getElementById("leftButton01");
    let firstRightButton = document.getElementById("rightButton01");
    let firstLeftText = document.getElementById("leftText01");
    let firstRightText = document.getElementById("rightText01");

    let secondLeftButton = document.getElementById("leftButton02");
    let secondRightButton = document.getElementById("rightButton02");
    let secondLeftText = document.getElementById("leftText02");
    let secondRightText = document.getElementById("rightText02");

    let buttonNum01 = -100;

    let clothChangeimg = document.getElementById("clothChangeimg");
    let clothChangeimg02 = document.getElementById("clothChangeimg02");

    let shText = document.getElementById("shText");
    let shText02 = document.getElementById("shText02");

    let cloud0 = document.getElementsByClassName("cloud0");
    let cloud1 = document.getElementsByClassName("cloud1");
    let window2 = document.getElementsByClassName("window2");

    cloud0[2].style.animation = "movingAnimation 6s linear infinite";
    cloud1[2].style.animation = "movingAnimation2 6s linear infinite";

    let trainingTextArray = [
      "트레이닝화는 운동을 할 때<br>부상을 막아줄 수 있는<br> 아주 고마운 녀석이야!",
      "무조건 비싸다고 좋은게 아니라는 말씀!<br>자신한테 꼭 맞는 트레이닝화를 찾아보는게 어때?",
      "생각보다 트레이닝화의 종류는 많다고!<br>각기다른 신발이 주는 매력!<br>아래를 클릭해봐!",
    ];
    let casualTextArray = [
      "아이코닉한 나이키 신발!<br>아래의 신발들을 클릭해봐!",
      "일상생활에서 이런 신발은 어때?<br>다양하지?<br>구경해볼래?",
      "이 신발을 보고있는 당신!<br>오~ 잘 어울리겠는데?",
    ];
    let runningTextArray = [
      "우리는 다양한 환경에서 러닝을 하지!<br>러닝화라고 다 똑같지 않단말이야!<br>아래의 다양한 러닝화를 클릭해 봐!",
      "러닝할 때 러닝화를 신어야 하냐고?<br>신고 안신고의 차이! <br>이번기회에 느껴보는게 어때?",
      "무조건 비싸다고 좋은게 아니라는 말씀!<br>자신한테 꼭 맞는 러닝화를 찾아보는게 어때?",
    ];
    let trainingTextArray02 = [
      "트레이닝화는 운동을 할 때<br>부상을 막아줄 수 있는<br> 아주 고마운 녀석이야!",
      "무조건 비싸다고 좋은게 아니라는 말씀!<br>자신한테 꼭 맞는 트레이닝화를 찾아보는게 어때?",
      "생각보다 트레이닝화의 종류는 많다고!<br>각기다른 신발이 주는 매력!<br>아래를 클릭해봐!",
    ];
    let casualTextArray02 = [
      "아이코닉한 나이키 신발!<br>아래의 신발들을 클릭해봐!",
      "일상생활에서 이런 신발은 어때?<br>다양하지?<br>구경해볼래?",
      "이 신발을 보고있는 당신!<br>오~ 잘 어울리겠는데?",
    ];
    let runningTextArray02 = [
      "우리는 다양한 환경에서 러닝을 하지!<br>러닝화라고 다 똑같지 않단말이야!<br>아래의 다양한 러닝화를 클릭해 봐!",
      "러닝할 때 러닝화를 신어야 하냐고?<br>신고 안신고의 차이! <br>이번기회에 느껴보는게 어때?",
      "무조건 비싸다고 좋은게 아니라는 말씀!<br>자신한테 꼭 맞는 러닝화를 찾아보는게 어때?",
    ];

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 뒤로가기 애니메이션

    let backButtons = document.getElementsByClassName("backBox");

    for (let g = 0; g < backButtons.length; g++) {
      backButtons[g].addEventListener("click", () => {
        let pagenumber = g + 2;
        let value = g % 2;
        if (pagenumber > 1) {
          let childList = pages[pagenumber].childNodes;
          for (let m = 0; m < pages[pagenumber].childNodes.length; m++) {
            if (childList[m].nodeName.toLowerCase() == "div") {
              childList[m].style.transition = "all 0.6s";
              childList[m].style.opacity = "0";
            }
          }
        }
        if (value == 0) {
          pages[pagenumber].style.transform = "translate(100vw)";
        } else if (value == 1) {
          pages[pagenumber].style.transform = "translate(-100vw)";
        }
        if (g > 2) {
          firstLeftButton.style.transform = "translate(-20.356vw)";
          firstRightButton.style.transform = "translate(20.356vw)";
          setTimeout(() => {
            firstLeftText.innerHTML = "트<br>레<br>이<br>닝";
            firstRightText.innerHTML = "러<br>닝";
          }, 500);
          shoeslistBox[0].style.transform = "translateX(-100vw)";
          buttonNum01 = -100;
        }
        if (pagenumber > 2 && pagenumber < 5) {
          for (let y = 0; y < clothes.length; y++) {
            clothChangeimg.src = "img/clothes/clothimg0.png";
            clothChangeimg02.src = "img/clothes/clothimg13.png";
            if (y < 12) {
              smallClothes[y].src = "img/clothes/clothimg" + (y + 1) + ".png";
            } else {
              smallClothes[y].src = "img/clothes/clothimg" + (y + 2) + ".png";
            }
          }
        }
        if (pagenumber > 2 && pagenumber < 4) {
          chTalk[0].style.transform = "translateX(100vw)";
          chTalkContent.innerHTML = "오 굿굿";
        }
        if (pagenumber > 3 && pagenumber < 5) {
          chTalk[1].style.transform = "translateX(100vw)";
          chTalkContent.innerHTML = "오 굿굿";
        }
        if (pagenumber > 5 && pagenumber < 7) {
          let shoesVideo = document.getElementsByClassName("shoesVideo")[0];

          shoesVideo.removeChild(shoesVideo.lastChild);
        }
      });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 첫번째 페이지 기본 애니메이션

    let firstPageInterval = setInterval(() => {
      eyes.style.transform = "translateY(0)";
      arm.style.transform = "translate(0, 0) scale(2)";
      setTimeout(() => {
        arm.classList.add("armClass");
        arm.addEventListener("animationend", () => {
          arm.classList.remove("armClass");
        });
        setTimeout(() => {
          eyes.style.transform = "translateY(36vh)";
          arm.style.transform = "translate(-28vw, 0) scale(2)";
        }, 1500);
      }, 3000);
    }, 8000);

    cloud0[0].addEventListener("animationend", () => {
      cloud0[0].style.animation = "movingAnimation 6s linear infinite";
    });

    cloud1[0].addEventListener("animationend", () => {
      setTimeout(() => {
        cloud1[0].style.animation = "movingAnimation2 6s linear infinite";
      }, 500);
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 첫번째 페이지 카메라 불러오기

    // "e1c88cf2bee30842f6e53f9baa362a96f096c8882f17cad616d2f840c0b352a8" 핸드폰 카메라 deviceID
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then(function (stream) {
        video.srcObject = stream;
      });

    let video2 = document.getElementById("video2");
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then(function (stream) {
        video2.srcObject = stream;
      });

    let video3 = document.getElementById("video3");
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then(function (stream) {
        video3.srcObject = stream;
      });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////// 포즈넷 눈 쳐다보는 애니메이션 관련 파트

    let pauseIs = true;
    posenet.load().then((model) => {
      video.onloadeddata = (e) => {
        predict();
      };
      function predict() {
        model.estimateMultiplePoses(video).then((pose) => {
          let value = Math.floor(pose[0].keypoints[0].position.x);
          let positionValue = 140 + -140 * (value / 1280) - 70;
          if (positionValue > -70 && positionValue < 70) {
            for (let q = 0; q < blackEyes.length; q++) {
              blackEyes[q].style.transform =
                "translateX(" + positionValue + "%)";
            }
          }
          // console.log(positionValue);
        });
        if (pauseIs === true) {
          let raf = requestAnimationFrame(predict);
        } else {
          cancelAnimationFrame(raf);
        }
      }
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////첫번째 > 두번째페이지 이동 관련파트

    blackHall.addEventListener("click", () => {
      pauseIs = false;

      //버튼 눌렀을 때 동그라미 돌아가는 애니메이션
      blackHall.style.transform = "rotateY(360deg)";
      blackHall.style.animation = "blackhallAnimation 1s";
      blackCircle.style.backgroundColor = "#ea6d1b";
      blackCircle.style.animation = "circleAnimation 1s";

      cloud0[1].style.animation = "none";
      cloud0[1].style.transform = "translateY(-14vh)";
      cloud1[1].style.animation = "none";
      cloud1[1].style.transform = "translateY(-14vh)";
      window2[0].style.transform = "translateY(-40vh)";

      clearInterval(firstPageInterval);

      //동그라미 애니메이션이 끝나면 이벤트 발생
      blackHall.addEventListener("animationend", () => {
        blackHall.style.opacity = "0";

        eyes.style.transition = "all 0.6s ease-in-out";
        eyes.style.transform = "translateY(0)";
        arm.style.transition = "all 0.6s ease-in-out";
        arm.style.transform = "translate(0, 0) scale(2)";

        setTimeout(() => {
          // eyes.style.animation = 'none'
          // arm.style.animation  = 'none'
          setTimeout(() => {
            eyes.style.animation = "stay 4s";
            arm.style.animation = "handUp 4s";
            setTimeout(() => {
              secondPage.style.transition = "all ease-out 1.2s";
              secondPage.style.transform = "translate(0)";
              setTimeout(() => {
                for (let t = 0; t < characters.length; t++) {
                  characters[t].style.transform =
                    "translate(0, " + window.innerHeight + "px)";
                  characters[t].style.animation = "charactersAnimation 2s";
                  characterShadow[t].style.opacity = "1";
                  characterShadow[t].style.animation = "shadowAnimation 2s";
                }
                cloud0[1].style.animation = "cloudAnimation 1s ease-in";
                cloud1[1].style.animation = "cloudAnimation 1s ease-in";
                window2[0].style.animation = "windowAnimation 1s ease-in";

                cloud0[1].style.transform = "translateY(0vh)";
                cloud1[1].style.transform = "translateY(0vh)";
                window2[0].style.transform = "translateY(0vh)";

                cloud0[1].addEventListener("animationend", () => {
                  cloud0[1].style.animation =
                    "movingAnimation 6s linear infinite";
                });

                cloud1[1].addEventListener("animationend", () => {
                  setTimeout(() => {
                    cloud1[1].style.animation =
                      "movingAnimation2 6s linear infinite";
                  }, 500);
                });
              }, 1000);
            }, 2200);
          }, 500);
        }, 1200);
      });
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////// 멤버쉽 페이지

    let movieContent = document.getElementById("movieContent");
    let membershipTitle = document.getElementById("membershipTitle");
    let infoIcon = document.getElementById("infoIconBox");
    let infoImg = document.getElementById("infoImg");
    let infoBox = document.getElementById("infoBox");

    movieContent.addEventListener("click", () => {
      infoIcon.style.transform = "translateY(-8vw)";
      membershipTitle.style.opacity = "0";
      infoImg.style.opacity = "0";
      setTimeout(() => {
        infoIcon.style.width = "88vw";
        infoIcon.style.height = "88vw";
        setTimeout(() => {
          infoBox.style.opacity = "1";
          infoIcon.style.opacity = "0";
        }, 600);
      }, 600);
    });

    let playButton = document.getElementById("playButton");
    let infoVideo = document.getElementById("infoVideo");
    let progressBar = document.getElementById("playBar2");
    let touchBar = document.getElementById("playBar");
    let playCircle = document.getElementById("playCircle");
    let blackCutton = document.getElementById("blackCutton");

    playButton.addEventListener("click", () => {
      playButton.style.opacity = "1";
      if (infoVideo.paused) {
        playButton.src = "img/pausedButton.png";
        infoVideo.play();
        blackCutton.style.opacity = "0";
      } else {
        playButton.src = "img/playButton.png";
        infoVideo.pause();
        blackCutton.style.opacity = "0.5";
      }
      setTimeout(() => {
        playButton.style.opacity = "0";
      }, 1000);
    });

    infoVideo.addEventListener("timeupdate", () => {
      let percent = (infoVideo.currentTime / infoVideo.duration) * 100;
      progressBar.style.width = percent + "%";
      playCircle.style.left = percent - 2.5 + "%";

      touchBar.addEventListener("click", (event) => {
        let clickX = event.clientX - touchBar.getBoundingClientRect().left;
        var percentage = (clickX / touchBar.offsetWidth) * 100;
        infoVideo.currentTime = (percentage / 100) * infoVideo.duration;
        playCircle.style.left = percentage - 2.5 + "%";
      });
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////캐릭터 자동 이동 관련 파트
    characters[0].addEventListener("animationend", () => {
      characters[0].style.transition = "all 0.3s";
      characters[1].style.transition = "all 0.3s";
      characters[2].style.transition = "all 0.3s";
      characters[3].style.transition = "all 0.3s";
      characters[4].style.transition = "all 0.3s";

      ////////////////////////////////////////////////////////캐릭터 말풍선

      setInterval(() => {
        let talkBoxes = document.getElementsByClassName("talkBox");

        let randomTalk = Math.floor(Math.random() * 4);

        // talkBoxes[randomTalk].style.opacity = "0.7";

        talkBoxes[0].style.marginLeft = "0vw";
        talkBoxes[1].style.marginLeft = "0vw";
        talkBoxes[2].style.marginLeft = "0vw";
        talkBoxes[3].style.marginLeft = "0vw";

        talkBoxes[0].style.opacity = "0.7";
        talkBoxes[1].style.opacity = "0.7";
        talkBoxes[2].style.opacity = "0.7";
        talkBoxes[3].style.opacity = "0.7";
        talkBoxes[4].style.opacity = "0.7";
      }, 2000);

      // setInterval(() => {
      //   let talkBoxes = document.getElementsByClassName("talkBox");

      //   talkBoxes[0].style.opacity = "0";
      //   talkBoxes[1].style.opacity = "0";
      //   talkBoxes[2].style.opacity = "0";
      //   talkBoxes[3].style.opacity = "0";
      //   talkBoxes[4].style.opacity = "0";
      // }, 8000);

      setInterval(() => {
        let talkBoxes = document.getElementsByClassName("talkBox");

        let moveValue = 10;

        let talk01 = characters[0].getBoundingClientRect();
        let talk02 = characters[1].getBoundingClientRect();
        let talk03 = characters[2].getBoundingClientRect();
        let talk04 = characters[3].getBoundingClientRect();
        let talk05 = characters[4].getBoundingClientRect();

        let talkX01 = talk01.left;
        let talkY01 = talk01.top - talkBoxes[0].clientHeight;
        let talkX02 = talk02.left;
        let talkY02 = talk02.top - talkBoxes[0].clientHeight;
        let talkX03 = talk03.left;
        let talkY03 = talk03.top - talkBoxes[0].clientHeight;
        let talkX04 = talk04.left;
        let talkY04 = talk04.top - talkBoxes[0].clientHeight;
        let talkX05 = talk05.left;
        let talkY05 = talk05.top - talkBoxes[0].clientHeight;

        talkBoxes[0].style.left = talkX01 + "px";
        talkBoxes[0].style.top = talkY01 + "px";
        talkBoxes[1].style.left = talkX02 + "px";
        talkBoxes[1].style.top = talkY02 + "px";
        talkBoxes[2].style.left = talkX03 + "px";
        talkBoxes[2].style.top = talkY03 + "px";
        talkBoxes[3].style.left = talkX04 + "px";
        talkBoxes[3].style.top = talkY04 + "px";
        talkBoxes[4].style.left = talkX05 + "px";
        talkBoxes[4].style.top = talkY05 + "px";

        let randomNum01 = Math.floor(Math.random() * 5);
        let randomNum02 = Math.floor(Math.random() * 5);
        let randomNum03 = Math.floor(Math.random() * 5);
        let randomNum04 = Math.floor(Math.random() * 5);
        let randomNum05 = Math.floor(Math.random() * 5);

        let posX01 = characters[0].offsetLeft;
        let posY01 = characters[0].offsetTop;

        let posX02 = characters[1].offsetLeft;
        let posY02 = characters[1].offsetTop;

        let posX03 = characters[2].offsetLeft;
        let posY03 = characters[2].offsetTop;

        let posX04 = characters[3].offsetLeft;
        let posY04 = characters[3].offsetTop;

        let posX05 = characters[4].offsetLeft;
        let posY05 = characters[4].offsetTop;

        let posXX01 = characterShadow[0].offsetLeft;
        let posYY01 = characterShadow[0].offsetTop;

        let posXX02 = characterShadow[1].offsetLeft;
        let posYY02 = characterShadow[1].offsetTop;

        let posXX03 = characterShadow[2].offsetLeft;
        let posYY03 = characterShadow[2].offsetTop;

        let posXX04 = characterShadow[3].offsetLeft;
        let posYY04 = characterShadow[3].offsetTop;

        let posXX05 = characterShadow[4].offsetLeft;
        let posYY05 = characterShadow[4].offsetTop;

        ////////////////////////////////////////////////////////캐릭터 1번

        if (randomNum01 < 1) {
          characters[0].style.top = posY01 + moveValue + "px";

          characterShadow[0].style.top = posYY01 + moveValue + "px";

          talkBoxes[0].style.left = talkX01 + "px";
          talkBoxes[0].style.top = talkY01 + moveValue + "px";
          if (posY01 > -190) {
            characters[0].style.top = posY01 - moveValue + "px";

            characterShadow[0].style.top = posYY01 - moveValue + "px";

            talkBoxes[0].style.left = talkX01 + "px";
            talkBoxes[0].style.top = talkY01 - moveValue + "px";
          }
        } else if (randomNum01 >= 1 && randomNum01 < 2) {
          characters[0].style.top = posY01 - moveValue + "px";

          characterShadow[0].style.top = posYY01 - moveValue + "px";

          talkBoxes[0].style.left = talkX01 + "px";
          talkBoxes[0].style.top = talkY01 - moveValue + "px";
        } else if (randomNum01 >= 2 && randomNum01 < 3) {
          characters[0].style.left = posX01 + moveValue + "px";

          characterShadow[0].style.left = posXX01 + moveValue + "px";

          talkBoxes[0].style.left = talkX01 + moveValue + "px";
          talkBoxes[0].style.top = talkY01 + "px";
          if (posX01 > 820) {
            characters[0].style.left = posX01 - moveValue + "px";

            characterShadow[0].style.left = posXX01 - moveValue + "px";

            talkBoxes[0].style.left = talkX01 - moveValue + "px";
            talkBoxes[0].style.top = talkY01 + "px";
          }
        } else if (randomNum01 >= 3 && randomNum01 < 4) {
          characters[0].style.left = posX01 - moveValue + "px";

          characterShadow[0].style.left = posXX01 - moveValue + "px";

          talkBoxes[0].style.left = talkX01 - moveValue + "px";
          talkBoxes[0].style.top = talkY01 + "px";
          if (posX01 < 40) {
            characters[0].style.left = posX01 + moveValue + "px";

            characterShadow[0].style.left = posXX01 + moveValue + "px";

            talkBoxes[0].style.left = talkX01 + moveValue + "px";
            talkBoxes[0].style.top = talkY01 + "px";
          }
        } else if (randomNum01 >= 4 && randomNum01 < 5) {
          characters[0].style.top = posY01 + "px";

          characterShadow[0].style.top = posYY01 + "px";

          talkBoxes[0].style.left = talkX01 + "px";
          talkBoxes[0].style.top = talkY01 + "px";
        }

        ////////////////////////////////////////////////////////캐릭터 2번

        if (randomNum02 < 1) {
          characters[1].style.top = posY02 + moveValue + "px";

          characterShadow[1].style.top = posYY02 + moveValue + "px";

          talkBoxes[1].style.left = talkX02 + "px";
          talkBoxes[1].style.top = talkY02 + moveValue + "px";
          if (posY02 > -190) {
            characters[1].style.top = posY02 - moveValue + "px";

            characterShadow[1].style.top = posYY02 - moveValue + "px";

            talkBoxes[1].style.left = talkX02 + "px";
            talkBoxes[1].style.top = talkY02 - moveValue + "px";
          }
        } else if (randomNum02 >= 1 && randomNum02 < 2) {
          characters[1].style.top = posY02 - moveValue + "px";

          characterShadow[1].style.top = posYY02 - moveValue + "px";

          talkBoxes[1].style.left = talkX02 + "px";
          talkBoxes[1].style.top = talkY02 - moveValue + "px";
        } else if (randomNum02 >= 2 && randomNum02 < 3) {
          characters[1].style.left = posX02 + moveValue + "px";

          characterShadow[1].style.left = posXX02 + moveValue + "px";

          talkBoxes[1].style.left = talkX02 + moveValue + "px";
          talkBoxes[1].style.top = talkY02 + "px";
          if (posX02 > 820) {
            characters[1].style.left = posX02 - moveValue + "px";

            characterShadow[1].style.left = posXX02 - moveValue + "px";

            talkBoxes[1].style.left = talkX02 - moveValue + "px";
            talkBoxes[1].style.top = talkY02 + "px";
          }
        } else if (randomNum02 >= 3 && randomNum02 < 4) {
          characters[1].style.left = posX02 - moveValue + "px";

          characterShadow[1].style.left = posXX02 - moveValue + "px";

          talkBoxes[1].style.left = talkX02 - moveValue + "px";
          talkBoxes[1].style.top = talkY02 + "px";
          if (posX02 < 40) {
            characters[1].style.left = posX02 + moveValue + "px";

            characterShadow[1].style.left = posXX02 + moveValue + "px";

            talkBoxes[1].style.left = talkX02 + moveValue + "px";
            talkBoxes[1].style.top = talkY02 + "px";
          }
        } else if (randomNum02 >= 4 && randomNum02 < 5) {
          characters[1].style.top = posY02 + "px";

          characterShadow[1].style.top = posYY02 + "px";

          talkBoxes[1].style.left = talkX02 + "px";
          talkBoxes[1].style.top = talkY02 + "px";
        }

        ////////////////////////////////////////////////////////캐릭터 3번

        if (randomNum03 < 1) {
          characters[2].style.top = posY03 + moveValue + "px";

          characterShadow[2].style.top = posYY03 + moveValue + "px";

          talkBoxes[2].style.left = talkX03 + "px";
          talkBoxes[2].style.top = talkY03 + moveValue + "px";
          if (posY03 > -190) {
            characters[2].style.top = posY03 - moveValue + "px";

            characterShadow[2].style.top = posYY03 - moveValue + "px";

            talkBoxes[2].style.left = talkX03 + "px";
            talkBoxes[2].style.top = talkY03 - moveValue + "px";
          }
        } else if (randomNum03 >= 1 && randomNum03 < 2) {
          characters[2].style.top = posY03 - moveValue + "px";

          characterShadow[2].style.top = posYY03 - moveValue + "px";

          talkBoxes[2].style.left = talkX03 + "px";
          talkBoxes[2].style.top = talkY03 - moveValue + "px";
        } else if (randomNum03 >= 2 && randomNum03 < 3) {
          characters[2].style.left = posX03 + moveValue + "px";

          characterShadow[2].style.left = posXX03 + moveValue + "px";

          talkBoxes[2].style.left = talkX03 + moveValue + "px";
          talkBoxes[2].style.top = talkY03 + "px";
          if (posX03 > 820) {
            characters[2].style.left = posX03 - moveValue + "px";

            characterShadow[2].style.left = posXX03 - moveValue + "px";

            talkBoxes[2].style.left = talkX03 - moveValue + "px";
            talkBoxes[2].style.top = talkY03 + "px";
          }
        } else if (randomNum03 >= 3 && randomNum03 < 4) {
          characters[2].style.left = posX03 - moveValue + "px";

          characterShadow[2].style.left = posXX03 - moveValue + "px";

          talkBoxes[2].style.left = talkX03 - moveValue + "px";
          talkBoxes[2].style.top = talkY03 + "px";
          if (posX03 < 40) {
            characters[2].style.left = posX03 + moveValue + "px";

            characterShadow[2].style.left = posXX03 + moveValue + "px";

            talkBoxes[2].style.left = talkX03 + moveValue + "px";
            talkBoxes[2].style.top = talkY03 + "px";
          }
        } else if (randomNum03 >= 4 && randomNum03 < 5) {
          characters[2].style.top = posY03 + "px";

          characterShadow[2].style.top = posYY03 + "px";

          talkBoxes[2].style.left = talkX03 + "px";
          talkBoxes[2].style.top = talkY03 + "px";
        }

        ////////////////////////////////////////////////////////캐릭터 4번

        if (randomNum04 < 1) {
          characters[3].style.top = posY04 + moveValue + "px";

          characterShadow[3].style.top = posYY04 + moveValue + "px";

          talkBoxes[3].style.left = talkX04 + "px";
          talkBoxes[3].style.top = talkY04 + moveValue + "px";
          if (posY04 > -190) {
            characters[3].style.top = posY04 - moveValue + "px";

            characterShadow[3].style.top = posYY04 - moveValue + "px";

            talkBoxes[3].style.left = talkX04 + "px";
            talkBoxes[3].style.top = talkY04 - moveValue + "px";
          }
        } else if (randomNum04 >= 1 && randomNum04 < 2) {
          characters[3].style.top = posY04 - moveValue + "px";

          characterShadow[3].style.top = posYY04 - moveValue + "px";

          talkBoxes[3].style.left = talkX04 + "px";
          talkBoxes[3].style.top = talkY04 - moveValue + "px";
        } else if (randomNum04 >= 2 && randomNum04 < 3) {
          characters[3].style.left = posX04 + moveValue + "px";

          characterShadow[3].style.left = posXX04 + moveValue + "px";

          talkBoxes[3].style.left = talkX04 + moveValue + "px";
          talkBoxes[3].style.top = talkY04 + "px";
          if (posX04 > 1420) {
            characters[3].style.left = posX04 - moveValue + "px";

            characterShadow[3].style.left = posXX04 - moveValue + "px";

            talkBoxes[3].style.left = talkX04 - moveValue + "px";
            talkBoxes[3].style.top = talkY04 + "px";
          }
        } else if (randomNum04 >= 3 && randomNum04 < 4) {
          characters[3].style.left = posX04 - moveValue + "px";

          characterShadow[3].style.left = posXX04 - moveValue + "px";

          talkBoxes[3].style.left = talkX04 - moveValue + "px";
          talkBoxes[3].style.top = talkY04 + "px";
          if (posX04 < 40) {
            characters[3].style.left = posX04 + moveValue + "px";

            characterShadow[3].style.left = posXX04 + moveValue + "px";

            talkBoxes[3].style.left = talkX04 + moveValue + "px";
            talkBoxes[3].style.top = talkY04 + "px";
          }
        } else if (randomNum04 >= 4 && randomNum04 < 5) {
          characters[3].style.top = posY04 + "px";

          characterShadow[3].style.top = posYY04 + "px";

          talkBoxes[3].style.left = talkX04 + "px";
          talkBoxes[3].style.top = talkY04 + "px";
        }

        ////////////////////////////////////////////////////////캐릭터 5번
        if (randomNum05 < 1) {
          characters[4].style.top = posY05 + moveValue + "px";

          characterShadow[4].style.top = posYY05 + moveValue + "px";

          talkBoxes[4].style.left = talkX05 + "px";
          talkBoxes[4].style.top = talkY05 + moveValue + "px";
          if (posY05 > -190) {
            characters[4].style.top = posY05 - moveValue + "px";

            characterShadow[4].style.top = posYY05 - moveValue + "px";

            talkBoxes[4].style.left = talkX05 + "px";
            talkBoxes[4].style.top = talkY05 - moveValue + "px";
          }
        } else if (randomNum05 >= 1 && randomNum05 < 2) {
          characters[4].style.top = posY05 - moveValue + "px";

          characterShadow[4].style.top = posYY05 - moveValue + "px";

          talkBoxes[4].style.left = talkX05 + "px";
          talkBoxes[4].style.top = talkY05 - moveValue + "px";
        } else if (randomNum05 >= 2 && randomNum05 < 3) {
          characters[4].style.left = posX05 + moveValue + "px";

          characterShadow[4].style.left = posXX05 + moveValue + "px";

          talkBoxes[4].style.left = talkX05 + moveValue + "px";
          talkBoxes[4].style.top = talkY05 + "px";
          if (posX05 > 1420) {
            characters[4].style.left = posX05 - moveValue + "px";

            characterShadow[4].style.left = posXX05 - moveValue + "px";

            talkBoxes[4].style.left = talkX05 - moveValue + "px";
            talkBoxes[4].style.top = talkY05 + "px";
          }
        } else if (randomNum05 >= 3 && randomNum05 < 4) {
          characters[4].style.left = posX05 - moveValue + "px";

          characterShadow[4].style.left = posXX05 - moveValue + "px";

          talkBoxes[4].style.left = talkX05 - moveValue + "px";
          talkBoxes[4].style.top = talkY05 + "px";
          if (posX05 < 40) {
            characters[4].style.left = posX05 + moveValue + "px";

            characterShadow[4].style.left = posXX05 + moveValue + "px";

            talkBoxes[4].style.left = talkX05 + moveValue + "px";
            talkBoxes[4].style.top = talkY05 + "px";
          }
        } else if (randomNum05 >= 4 && randomNum05 < 5) {
          characters[4].style.top = posY05 + "px";

          characterShadow[4].style.top = posYY05 + "px";

          talkBoxes[4].style.left = talkX05 + "px";
          talkBoxes[4].style.top = talkY05 + "px";
        }
      }, 1000);
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 캐릭터 누르면 이동하는 부분
    for (let c = 0; c < pages.length; c++) {
      let pagenumber = c;
      if (pagenumber > 1) {
        let childList = pages[pagenumber].childNodes;
        for (let m = 0; m < pages[pagenumber].childNodes.length; m++) {
          if (childList[m].nodeName.toLowerCase() == "div") {
            childList[m].style.transition = "all 0.6s ease-in-out";
            childList[m].style.opacity = "0";
          }
        }
      }
    }

    for (let i = 0; i < characters.length; i++) {
      characters[i].addEventListener("click", async () => {
        let pagenumber = i + 2;
        pages[pagenumber].style.transform = "translateX(0)";
        let childNodes = pages[pagenumber].childNodes;
        for (let m = 0; m < pages[pagenumber].childNodes.length; m++) {
          if (childNodes[m].nodeName.toLowerCase() == "div") {
            setTimeout(() => {
              childNodes[m].style.opacity = "1";
            }, m * 200);
          }
        }
        if (pagenumber > 4 && pagenumber < 6) {
          var casualText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = casualTextArray[randomText];
            }, 2000);
          }, 8000);

          firstLeftButton.addEventListener("click", () => {
            clearInterval(casualText);
          });
          firstRightButton.addEventListener("click", () => {
            clearInterval(casualText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(casualText);
          });
        }

        if (pagenumber > 5 && pagenumber < 7) {
          let model, webcam, maxPredictions;

          let modelURL = URL + "model.json";
          let metadataURL = URL + "metadata.json";

          model = await tmImage.load(modelURL, metadataURL);

          maxPredictions = model.getTotalClasses();

          let shoesVideo = document.getElementsByClassName("shoesVideo")[0];

          const flip = true;
          webcam = new tmImage.Webcam(
            shoesVideo.clientWidth,
            shoesVideo.clientHeight,
            flip
          );
          await webcam.setup();
          await webcam.play();
          window.requestAnimationFrame(loop);

          shoesVideo.appendChild(webcam.canvas);

          async function loop() {
            webcam.update(); // update the webcam frame
            await predict();
            window.requestAnimationFrame(loop);
          }

          async function predict() {
            let dark = document.getElementById("asdf");
            const prediction = await model.predict(webcam.canvas);
            for (let i = 0; i < maxPredictions; i++) {
              const classPrediction =
                prediction[0].className +
                ": " +
                prediction[0].probability.toFixed(2) +
                "<br>" +
                prediction[1].className +
                ": " +
                prediction[1].probability.toFixed(2) +
                "<br>" +
                prediction[2].className +
                ": " +
                prediction[2].probability.toFixed(2) +
                "<br>" +
                prediction[3].className +
                ": " +
                prediction[3].probability.toFixed(2) +
                "<br>" +
                prediction[4].className +
                ": " +
                prediction[4].probability.toFixed(2);
            }

            let shoesinfoBox = document.getElementsByClassName("shoesinfoBox");
            let imgBox = document.getElementById("imgBox");
            let textBox = document.getElementById("textBox");
            let buyQrCode = document.getElementById("buyQrCode");

            let shoesTitle = document.getElementById("shoesTitle");
            let shoesSex = document.getElementById("shoesSex");
            let sheosPrice = document.getElementById("sheosPrice");
            let sheosParagraph = document.getElementById("sheosParagraph");

            let returnButton02 = document.getElementById("returnBox02");

            let buyButton = document.getElementById("buyButton");

            let bigInfo = document.getElementById("shoesinfo");

            let smallInfo = document.getElementsByClassName("smallInfo");

            let returnButtonNum = 0;

            let shoesCh = document.getElementsByClassName("chTalk")[2];
            let shoesTk = document.getElementById("chTalkContent3");

            if (prediction[0].probability.toFixed(2) * 100 > 95) {
              returnButton02.style.display = "flex";

              shoesCh.style.transform = "translateX(0)";

              shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
              setTimeout(() => {
                shoesTk.innerHTML =
                  "전 페이지로 돌아갈려면 왼쪽에 있는 버튼을 눌러줘!";
              }, 600);

              bigInfo.src = "img/shoesCamera/Pegasus4_0.png";

              smallInfo[0].src = "img/shoesCamera/Pegasus4_1.png";
              smallInfo[1].src = "img/shoesCamera/Pegasus4_2.png";
              smallInfo[2].src = "img/shoesCamera/Pegasus4_3.png";
              smallInfo[3].src = "img/shoesCamera/Pegasus4_4.png";
              smallInfo[4].src = "img/shoesCamera/Pegasus4_5.png";

              shoesTitle.innerHTML = "나이키 페가수스 트레일 4";
              shoesSex.innerHTML = "남성 트레일 러닝화";
              sheosPrice.innerHTML = "87,400원";
              sheosParagraph.innerHTML =
                "러닝은 새로운 모험과 목표를 향해 달리는 여러분을 도로에서 트레일까지 이끌어줄 일상 속 작은 습관입니다. 나이키 페가수스 트레일 4는 지지력과 탄력 있는 착화감을 선사하여 러닝을 계속 이어 나가게 도와줍니다. 험준한 지면에서 러닝을 지속할 수 있도록 언더풋 접지력을 제공하며 도로에서도 부드러운 착화감을 선사합니다. 신발 끈으로 중족부 지지력을 조절해 최상의 핏과 착화감을 찾아낼 수 있습니다. 걸음에 날개를 달아주는 든든한 지원군이 여러분의 여정에 함께합니다. 이제 달려볼 시간입니다.";

              returnButton02.addEventListener("click", () => {
                if (returnButtonNum === 1) {
                  imgBox.style.transform = "translateX(0)";
                  textBox.style.transform = "translateX(0)";
                  shoesinfoBox[0].style.backgroundColor = "white";
                  buyQrCode.style.opacity = 0;

                  returnButtonNum = 0;

                  shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
                } else {
                  shoesinfoBox[0].style.opacity = 0;
                  imgBox.style.transform = "translateX(-60vw)";
                  textBox.style.transform = "translateX(60vw)";
                  shoesinfoBox[0].style.backgroundColor = "white";

                  returnButton02.style.display = "none";

                  shoesCh.style.transform = "translateX(100vw)";
                }
              });

              shoesinfoBox[0].style.opacity = 1;

              setTimeout(() => {
                imgBox.style.transform = "translateX(0)";
                textBox.style.transform = "translateX(0)";
              }, 300);

              buyButton.addEventListener("click", () => {
                returnButtonNum = 1;
                imgBox.style.transform = "translateX(-60vw)";
                textBox.style.transform = "translateX(60vw)";
                setTimeout(() => {
                  shoesinfoBox[0].style.backgroundColor = "black";
                  buyQrCode.style.opacity = 1;

                  shoesTk.innerHTML = "화면의 QR코드를 찍어봐!";
                }, 600);
              });
            } else if (prediction[1].probability.toFixed(2) * 100 > 95) {
              shoesCh.style.transform = "translateX(0)";

              shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
              setTimeout(() => {
                shoesTk.innerHTML =
                  "전 페이지로 돌아갈려면 왼쪽에 있는 버튼을 눌러줘!?";
              }, 600);

              returnButton02.style.display = "flex";

              bigInfo.src = "img/shoesCamera/Pegasus3_0.png";

              smallInfo[0].src = "img/shoesCamera/Pegasus3_1.png";
              smallInfo[1].src = "img/shoesCamera/binImg.png";
              smallInfo[2].src = "img/shoesCamera/binImg.png";
              smallInfo[3].src = "img/shoesCamera/binImg.png";
              smallInfo[4].src = "img/shoesCamera/binImg.png";

              shoesTitle.innerHTML = "나이키 페가수스 트레일 3";
              shoesSex.innerHTML = "남성 트레일 러닝화";
              sheosPrice.innerHTML = "159,000원";
              sheosParagraph.innerHTML =
                "러닝은 새로운 모험과 목표를 향해 달리는 여러분을 도로에서 트레일까지 이끌어줄 일상 속 작은 습관입니다. 나이키 페가수스 트레일 4는 지지력과 탄력 있는 착화감을 선사하여 러닝을 계속 이어 나가게 도와줍니다. 험준한 지면에서 러닝을 지속할 수 있도록 언더풋 접지력을 제공하며 도로에서도 부드러운 착화감을 선사합니다. 신발 끈으로 중족부 지지력을 조절해 최상의 핏과 착화감을 찾아낼 수 있습니다. 걸음에 날개를 달아주는 든든한 지원군이 여러분의 여정에 함께합니다. 이제 달려볼 시간입니다.";

              returnButton02.addEventListener("click", () => {
                if (returnButtonNum === 1) {
                  imgBox.style.transform = "translateX(0)";
                  textBox.style.transform = "translateX(0)";
                  shoesinfoBox[0].style.backgroundColor = "white";
                  buyQrCode.style.opacity = 0;

                  returnButtonNum = 0;

                  shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
                } else {
                  shoesinfoBox[0].style.opacity = 0;
                  imgBox.style.transform = "translateX(-60vw)";
                  textBox.style.transform = "translateX(60vw)";
                  shoesinfoBox[0].style.backgroundColor = "white";

                  returnButton02.style.display = "none";

                  shoesCh.style.transform = "translateX(100vw)";
                }
              });

              shoesinfoBox[0].style.opacity = 1;

              setTimeout(() => {
                imgBox.style.transform = "translateX(0)";
                textBox.style.transform = "translateX(0)";
              }, 300);

              buyButton.addEventListener("click", () => {
                returnButtonNum = 1;
                imgBox.style.transform = "translateX(-60vw)";
                textBox.style.transform = "translateX(60vw)";
                setTimeout(() => {
                  shoesinfoBox[0].style.backgroundColor = "black";
                  buyQrCode.style.opacity = 1;

                  shoesTk.innerHTML = "화면의 QR코드를 찍어봐!";
                }, 600);
              });
            } else if (prediction[3].probability.toFixed(2) * 100 > 95) {
              shoesCh.style.transform = "translateX(0)";

              shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
              setTimeout(() => {
                shoesTk.innerHTML =
                  "전 페이지로 돌아갈려면 왼쪽에 있는 버튼을 눌러줘!";
              }, 600);
              returnButton02.style.display = "flex";

              bigInfo.src = "img/shoesCamera/next2_0.png";

              smallInfo[0].src = "img/shoesCamera/next2_1.png";
              smallInfo[1].src = "img/shoesCamera/next2_2.png";
              smallInfo[2].src = "img/shoesCamera/next2_3.png";
              smallInfo[3].src = "img/shoesCamera/binImg.png";
              smallInfo[4].src = "img/shoesCamera/binImg.png";

              shoesTitle.innerHTML =
                "나이키 줌X 베이퍼플라이 넥스트 2 글레이셔 블루";
              shoesSex.innerHTML = "남성 로드 레이싱화";
              sheosPrice.innerHTML = "269,000원";
              sheosParagraph.innerHTML =
                "러닝은 새로운 모험과 목표를 향해 달리는 여러분을 도로에서 트레일까지 이끌어줄 일상 속 작은 습관입니다. 나이키 페가수스 트레일 4는 지지력과 탄력 있는 착화감을 선사하여 러닝을 계속 이어 나가게 도와줍니다. 험준한 지면에서 러닝을 지속할 수 있도록 언더풋 접지력을 제공하며 도로에서도 부드러운 착화감을 선사합니다. 신발 끈으로 중족부 지지력을 조절해 최상의 핏과 착화감을 찾아낼 수 있습니다. 걸음에 날개를 달아주는 든든한 지원군이 여러분의 여정에 함께합니다. 이제 달려볼 시간입니다.";

              returnButton02.addEventListener("click", () => {
                if (returnButtonNum === 1) {
                  imgBox.style.transform = "translateX(0)";
                  textBox.style.transform = "translateX(0)";
                  shoesinfoBox[0].style.backgroundColor = "white";
                  buyQrCode.style.opacity = 0;

                  returnButtonNum = 0;

                  shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
                } else {
                  shoesinfoBox[0].style.opacity = 0;
                  imgBox.style.transform = "translateX(-60vw)";
                  textBox.style.transform = "translateX(60vw)";
                  shoesinfoBox[0].style.backgroundColor = "white";

                  returnButton02.style.display = "none";

                  shoesCh.style.transform = "translateX(100vw)";
                }
              });

              shoesinfoBox[0].style.opacity = 1;

              setTimeout(() => {
                imgBox.style.transform = "translateX(0)";
                textBox.style.transform = "translateX(0)";
              }, 300);

              buyButton.addEventListener("click", () => {
                returnButtonNum = 1;
                imgBox.style.transform = "translateX(-60vw)";
                textBox.style.transform = "translateX(60vw)";
                setTimeout(() => {
                  shoesinfoBox[0].style.backgroundColor = "black";
                  buyQrCode.style.opacity = 1;

                  shoesTk.innerHTML = "화면의 QR코드를 찍어봐!";
                }, 600);
              });
            }
          }
        }
      });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 옷 페이지

    let clothes = document.getElementsByClassName("clothes");

    let clothimg = document.getElementById("clothimg");
    let clothimg02 = document.getElementById("clothimg02");

    let smallClothes = document.getElementsByClassName("smallClothes");

    let chTalk = document.getElementsByClassName("chTalk");
    let chTalkContent = document.getElementById("chTalkContent");
    let chTalkContent2 = document.getElementById("chTalkContent2");

    let clothNum = 0;

    let clothCharacters = document.getElementsByClassName("ctCharacter");

    for (let y = 0; y < clothes.length; y++) {
      clothes[y].addEventListener("click", () => {
        let qrCode = document.getElementById("qrCode");

        qrCode.style.opacity = 0;

        if (y < 12) {
          clothCharacters[0].src = "img/characters/clothCharacterDown0.gif";
          setTimeout(() => {
            clothCharacters[0].src =
              "img/characters/clothCharacterStanding0.gif";
          }, 600);
        } else {
          clothCharacters[1].src = "img/characters/clothCharacterDown1.gif";
          setTimeout(() => {
            clothCharacters[1].src =
              "img/characters/clothCharacterStanding1.gif";
          }, 600);
        }
        if (y < 12) {
          chTalk[0].style.transform = "translateX(0)";
          let talkList = [
            "오!! 완전 잘어울리는데?",
            "너보다 잘 어울리는 사람이 없겠는데?",
            "와~ 너무 잘어울리는데?",
          ];
          let randomTalk = Math.floor(Math.random() * talkList.length);
          chTalkContent.innerHTML = talkList[randomTalk];
          setTimeout(() => {
            chTalkContent.innerHTML =
              "직원에게 말하면<br>어디있는지 알려줄거야!";
          }, 4000);
        } else {
          chTalk[1].style.transform = "translateX(0)";
          let talkList = [
            "오!! 완전 잘어울리는데?",
            "너보다 잘 어울리는 사람이 없겠는데?",
            "와~ 너무 잘어울리는데?",
          ];
          let randomTalk = Math.floor(Math.random() * talkList.length);
          chTalkContent2.innerHTML = talkList[randomTalk];
          setTimeout(() => {
            chTalkContent2.innerHTML =
              "이 옷을 구매하고 싶으면 나를 터치해 줘!";
          }, 4000);
        }
        if (y < clothes.length / 2 / 2) {
          clothes[y].style.transform =
            "translateX(-" +
            (clothes[y].clientWidth + clothes[y].offsetLeft) +
            "px)";
          clothimg.style.transform = "translateY(130vw)";
        } else if (y < clothes.length / 2) {
          clothes[y].style.transform =
            "translateX(" +
            (clothes[y].clientWidth + clothes[y].offsetLeft) +
            "px)";
          clothimg.style.transform = "translateY(130vw)";
        } else if (y < clothes.length / 2 + clothes.length / 2 / 2) {
          clothes[y].style.transform =
            "translateX(-" +
            (clothes[y].clientWidth + clothes[y].offsetLeft) +
            "px)";
          clothimg02.style.transform = "translateY(130vw)";
        } else {
          clothes[y].style.transform =
            "translateX(" +
            (clothes[y].clientWidth + clothes[y].offsetLeft) +
            "px)";
          clothimg02.style.transform = "translateY(130vw)";
        }
        setTimeout(() => {
          let change1 = clothChangeimg.src;
          let change2 = clothChangeimg02.src;
          if (y < 12) {
            clothChangeimg.src = smallClothes[y].src;
            smallClothes[y].src = change1;
          } else {
            clothChangeimg02.src = smallClothes[y].src;
            smallClothes[y].src = change2;
          }
          clothes[y].style.transform = "translateX(0vw)";
          clothimg.style.transform = "translateY(0)";
          clothimg02.style.transform = "translateY(0)";

          clothNum = y + 1;
        }, 600);
      });
    }

    let qrCode = document.getElementById("qrCode");

    chTalk[1].addEventListener("click", () => {
      if (
        chTalkContent2.innerHTML === "이 옷을 구매하고 싶으면 나를 터치해 줘!"
      ) {
        qrCode.style.display = "flex";
        setTimeout(() => {
          qrCode.style.opacity = "1";
        }, 300);
      }
    });

    let closeButton = document.getElementById("closeButton");

    closeButton.addEventListener("click", () => {
      qrCode.style.opacity = 0;
      closeButton.style.transform = "rotate(360deg)";
      setTimeout(() => {
        qrCode.style.display = "none";
        closeButton.style.transform = "rotate(0deg)";
      }, 300);
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 신발 페이지 선택하면 발동되는 애니메이션

    firstLeftButton.addEventListener("click", () => {
      buttonNum01 = buttonNum01 + 100;

      firstLeftButton.style.transition = "all 0.9s";
      firstRightButton.style.transition = "all 0.9s";
      firstLeftButton.style.transform = "translate(-42vw)";
      firstRightButton.style.transform = "translate(42vw)";
      shoesTalk[0].style.opacity = "0";

      setTimeout(() => {
        firstRightText.innerHTML = "캐<br>주<br>얼";
        firstRightButton.style.transform = "translate(20.356vw)";

        if (buttonNum01 > -100) {
          firstLeftButton.style.transform = "translateX(-42vw)";
          shoesTalk[0].style.opacity = "1";
          shText.innerHTML = trainingTextArray[0];
          var trainingText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = trainingTextArray[randomText];
            }, 2000);
          }, 8000);

          firstRightButton.addEventListener("click", () => {
            clearInterval(trainingText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(trainingText);
          });
        } else {
          firstLeftButton.style.transform = "translateX(-20.356vw)";
          firstLeftText.innerHTML = "트<br>레<br>이<br>닝";
          firstRightText.innerHTML = "러<br>닝";

          shoesTalk[0].style.opacity = "1";
          shText.innerHTML = casualTextArray[0];
          var casualText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = casualTextArray[randomText];
            }, 2000);
          }, 8000);

          firstLeftButton.addEventListener("click", () => {
            clearInterval(casualText);
          });
          firstRightButton.addEventListener("click", () => {
            clearInterval(casualText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(casualText);
          });
        }
        shoeslistBox[0].style.transform = "translateX(" + buttonNum01 + "vw)";
      }, 900);
    });

    firstRightButton.addEventListener("click", () => {
      buttonNum01 = buttonNum01 - 100;
      shoesTalk[0].style.opacity = "0";

      firstLeftButton.style.transition = "all 0.9s";
      firstRightButton.style.transition = "all 0.9s";
      firstLeftButton.style.transform = "translate(-42vw)";
      firstRightButton.style.transform = "translate(42vw)";

      setTimeout(() => {
        firstLeftText.innerHTML = "캐<br>주<br>얼";
        firstLeftButton.style.transform = "translate(-20.356vw)";

        if (buttonNum01 < -100) {
          firstRightButton.style.transform = "translateX(42vw)";

          shoesTalk[0].style.opacity = "1";
          shText.innerHTML = runningTextArray[0];
          var runningingText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = runningTextArray[randomText];
            }, 2000);
          }, 8000);

          firstLeftButton.addEventListener("click", () => {
            clearInterval(runningingText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(runningingText);
          });
        } else {
          firstRightButton.style.transform = "translateX(20.356vw)";
          firstLeftText.innerHTML = "트<br>레<br>이<br>닝";
          firstRightText.innerHTML = "러<br>닝";

          shoesTalk[0].style.opacity = "1";
          shText.innerHTML = casualTextArray[0];
          var casualText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = casualTextArray[randomText];
            }, 2000);
          }, 8000);

          firstLeftButton.addEventListener("click", () => {
            clearInterval(casualText);
          });
          firstRightButton.addEventListener("click", () => {
            clearInterval(casualText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(casualText);
          });
        }
        shoeslistBox[0].style.transform = "translateX(" + buttonNum01 + "vw)";
      }, 900);
    });

    let titleArray01 = [
      "나이키 시티 트레이너 3",
      "나이키 프리 메트콘 4",
      "나이키 레전드 에센셜 2",
      "나이키 모티바",
      "나이키 로말레오 4",
      "나이키 메트콘 8 AMP",
      "나이키  데이브레이크",
      "킬샷 2 레더",
      "에어맥스 2017",
      "나이키  에어포스 1 유니티 로우",
      "에어맥스 1 프리미엄",
      "ACG 목",
      "나이키 리액트 마일러3",
      "나이키 페가수스 트레일3",
      "나이키 페가수스 39",
      "나이키 리액트 인피니티 런 FK 2",
      "줌플라이  5",
      "페가수스 트레일4",
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
      "nineth",
      "tenth",
      "eleventh",
      "twelveth",
      "thirteenth",
      "fourteenth",
      "fifteenth",
      "sixteenth",
      "seventeenth",
      "eighteenth",
    ];

    let paragraphArray01 = [
      "나이키 시티 트레이너3는 스트레칭 부터 스프린트까지, 모든 타입의 워크아웃에 최적화되어 있습니다. 통기성과 내구성이 뛰어난 매쉬를 사용하고 부드러운 파일론 폼이 강도높은 워크아웃 중에도 충격을 흡수해 줍니다.",
      "유연성과 안정성을 겸비한 나이키 프리 메트콘 4는 트레이닝 프로그램에서 최고의 기량을 발휘하도록 도와줍니다. 한층 새로워진 '체인 링크' 메쉬 소재는 민첩성 훈련을 하며 속도를 높이는 동안에도 시원하고 유연한 착화감을 전해주며, 중족부와 뒤꿈치의 지지력으로 무거운 중량을 들어 올리는 웨이트 트레이닝 시 발을 든든하게 잡아줍니다.",
      "나이키 레전드 에센셜 2 은 통기성이 뛰어나고 무거운 무게를 들 때도 뛰어난 안정성을 제공합니다. 마모가 심한 부분을 견고한 고무 트레드로 강화해 다양한 트레이닝 지면에서 접지력을 제공합니다.",
      "나이키 모티바는 하루 중 어떤 일을 마주하든 나만의 페이스로 나아갈 수 있도록 도와줍니다. 독특한 패턴의 밑창과 과장된 로커 디테일이 만나 매우 매끄럽고, 쿠셔닝이 뛰어나며, 편안한 착화감을 선사합니다. 이는 편안하게 걷고, 조깅하고, 러닝한 후 돌아와 다음 산책에 여유롭게 나설 수 있는 자신감을 얻는다는 뜻이죠. 일상 속 모든 움직임을 위한 최적의 지지력을 선사합니다.",
      "나이키 로말레오 4는 힘을 발휘할 수 있는 안정적인 디자인으로 지지력이 뛰어난 중창과 큼직하고 평평한 밑창이 특징입니다. 중족부의 조절식 스트랩은 강도 높은 운동 중에 발을 안정감 있게 고정해 줍니다.",
      "이 믿을 수 있는 나이키 트레이닝화는 이전 버전보다 더 가볍고 통기성이 뛰어난 갑피를 적용해 내구성과 편안함에 관한 나이키의 기준을 충족합니다. 유산소 운동은 더욱 가볍게, 리프팅은 더욱 힘차게 하며 운동을 자신감 있게 즐겨 보세요. 이 메트콘 8 AMP는 스모키 카모플라주 컬러로 눈에 잘 띄지 않아, 사람들이 떠들고 자랑하는 동안 전력을 다해 운동에 집중할 수 있도록 도와줍니다.",
      "1979년에 출시되었던 나이키 데이브레이크가 화려했던 과거를 재현합니다. 예전과 같은 고무 와플 밑창으로 진정한 빈티지 스타일을 즐겨보세요.",
      "오리지널 로우 프로파일 테니스 신발에서 영감을 얻은 나이키 킬샷 2는 다양한 텍스처의 가죽으로 갑피를 새롭게 재해석하여 신선한 룩을 완성합니다. 부드러운 스웨이드부터 완벽한 광택의 매끄러운 가죽까지 코트 밖에서도 현대적인 감각을 자랑합니다. 최고의 퍼포먼스를 위한 고무 검 소재 밑창이 포인트를 더합니다.",
      "발 전체 길이로 맥스 에어 유닛이 적용된 나이키 에어맥스 2017은 많은 사랑을 받아온 푹신한 착화감을 전달합니다. 갑피는 조널 서포트와 통기성을 갖춘 심리스 구조이며, 몰드 폼이 발 중간 부분과 뒤꿈치를 감싸 안정감을 줍니다.",
      "여전히 눈부시게 빛나는 오리지널 농구화를 만나보세요. 코트에서 누리는 편안함에 코트 밖에서 즐기는 멋까지 간직한 이 신발은 80년대에서 영감을 받은 구조, 과감한 디테일, 농구 특유의 스타일 등 익숙한 디자인에 신선한 반전을 더했습니다. ",
      "에어맥스 1 '더티 데님'은 많은 사랑을 받았던 2003년 모델에서 영감을 받은 아이템으로, 스니커즈의 리더인 에어맥스에 완벽한 빈티지의 매력을 더했습니다. 무심한 듯 매일 신어보세요. 프리미엄 가죽과 워시드 데님은 시간이 흐르면서 더욱 매력적인 룩을 연출합니다. ",
      "공기가 잘 통하는 리넨 어퍼가 새소리를 들으며 햇볕을 쬐거나 야생 속으로 모험을 떠날 때 완벽한 여름철 스타일을 선사합니다. 기온이 떨어져도, 보온성을 갖춘 소재가 불가에서 포근함을 느끼게 해줍니다. 구름 위를 누비는 듯한 착용감을 선사하는 드롭인 미드솔과 핏을 고정하도록 업그레이드된 끈 조임 시스템을 확인해 보세요.",
      "모든 러닝에서 누려 마땅한 쿠션감과 편안함을 만나보세요. 나이키 리액트 마일러 3은 발이 도로에 닿는 순간 부드럽고 매끄러운 느낌을 선사합니다. 뒤꿈치 안정성을 강화해 안정감을 더했으며, 오래 지속되는 접지력으로 단거리와 장거리 러닝 모두 거뜬하게 뛸 수 있습니다. ",
      "나이키 페가수스 트레일3는 많은 이들이 사랑하는 편안한 쿠션감을 그대로 유지하고 클래식 페가수스 룩에 착안한 디자인 요소를 더한 제품입니다. 거친 지형에서도 달릴 수 있는 견고한 접지력을 갖추고 있습니다. 종족부의 지지력을 높여 러닝 중에 안정감을 느낄 수 있습니다.",
      "정해진 루트를 달리든 적극적으로 새 루트를 찾아 달리든, 러닝은 일상의 습관입니다. 따라서 그에 맞는 신발이 필요합니다. 편안하고 직관적인 디자인이 든든한 지지력으로 발을 고정해 주며, 반응성이 뛰어난 줌 에어 쿠셔닝이 발걸음에 탄력을 더해줍니다. ",
      "견고하고 내구성이 우수하며 장거리 러닝 내내 발을 안정적으로 잡아줍니다. 플라이와이어 기술이 발 중간 부분에 추가적인 지지력과 안정감을 선사합니다. 또한 나이키 리액트 기술을 적용한 견고한 경량 폼이 매끄럽고 반응성이 뛰어난 착용감을 선사하고 발이 지면에세 떨어질 때는 유연성을, 발이 앞으로 나아갈 때는 매끄러운 느낌을, 발이 지면에 닿을 때는 쿠셔닝을 제공합니다.",
      "가장 좋아하는 레이스에 참가할 때도, 그 이후 몇 달 후에도 얼마든지 신을 수 있는 내구성 좋은 디자인으로 주말의 트레이닝 러닝과 레이스 당일 사이의 차이의 간격을 좁혀줍니다. 편안함과 안정감을 제공하면서도 추진력을 제공해 속도감과 산뜻한 느낌을 선사합니다. 이런 종류의 다기능성은 러닝 제품군에서 쉽게 찾아볼 수 없습니다. 모든 걸 가질 순 없다고 누가 말했던가요?",
      "지지력과 탄력 있는 착화감을 선사하여 러닝을 계속 이어 나가게 도와줍니다. 험준한 지면에서 러닝을 지속할 수 있도록 언더풋 접지력을 제공하며 도로에서도 부드러운 착화감을 선사합니다. 신발 끈으로 중족부 지지력을 조절해 최상의 핏과 착화감을 찾아낼 수 있습니다. ",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
    ];

    let mapPosition = [
      "현재 자리에서 <br> 좌측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측으로 <br> 이동하세요!",
    ];

    let returnButton = document.getElementById("returnBox");
    let shoesImg = document.getElementsByClassName("shoesimg");

    for (let q = 0; q < shoes.length; q++) {
      shoes[q].addEventListener("click", function shoesClick() {
        if (q < 18) {
          returnButton.style.display = "flex";
          shoesTalk[0].style.opacity = "0";
        }
        shoes[q].style.padding = "1.5vw";
        shoes[q].style.justifyContent = "space-between";

        if (q < 18) {
          firstLeftButton.style.transition = "all 0.9s";
          firstRightButton.style.transition = "all 0.9s";
          firstLeftButton.style.transform = "translate(-42vw)";
          firstRightButton.style.transform = "translate(42vw)";
        } else {
          secondLeftButton.style.transition = "all 0.9s";
          secondRightButton.style.transition = "all 0.9s";
          secondLeftButton.style.transform = "translate(-42vw)";
          secondRightButton.style.transform = "translate(42vw)";
        }
        touchPreventionBox.style.opacity = "1";

        let shoesPositionX =
          shoes[q].parentNode.parentNode.offsetLeft +
          shoes[q].parentNode.parentNode.clientWidth / 2 -
          (shoes[q].offsetLeft + shoes[q].clientWidth / 2);

        let shoesPositionY =
          window.innerHeight / 1.5 -
          (shoes[q].offsetTop + shoes[q].clientHeight / 2);

        shoes[q].style.transition = "all 1.3s";

        shoes[q].style.position = "relative";

        shoes[q].style.transform =
          "translate(" +
          shoesPositionX +
          "px," +
          shoesPositionY +
          "px) scale(1.5)";

        setTimeout(() => {
          shoes[q].style.borderRadius = "0.8vw";
          shoes[q].style.transform =
            "translate(" +
            shoesPositionX +
            "px," +
            shoesPositionY +
            "px) scale(4)";
          shoesImg[q].style.transform = " translateY(2vw) scale(0.5)";

          let touchPrevention =
            document.getElementsByClassName("touchPrevention");
          touchPrevention[0].style.display = "flex";

          let touchPreventionBox =
            document.getElementById("touchPreventionBox");

          let showBox = document.getElementById("mapButton");
          let buttonName = document.getElementById("buttonName");

          let h1 = document.createElement("h1");
          let p = document.createElement("p");
          let div = document.createElement("div");

          let mapContent = document.getElementById("mapimg");
          let mapimg = document.getElementById("mapimgBox");
          let mapimgText = document.getElementById("mapimgText");

          shoes[q].append(h1);
          shoes[q].append(p);
          shoes[q].append(div);

          returnButton.addEventListener("click", () => {
            returnButton.style.display = "none";
            shoes[q].style.justifyContent = "center";
            shoesImg[q].style.opacity = "1";
            shoesImg[q].style.transform = " translateY(0vw) scale(1)";

            shoesTalk[0].style.opacity = "1";

            mapimg.style.opacity = "0";
            mapimgText.style.opacity = "0";

            touchPreventionBox.style.opacity = "0";
            showBox.style.width = "54%";
            showBox.style.marginBottom = "5.5vw";
            showBox.style.position = "absolute";
            showBox.style.transform = "translateY(0vw) scale(1)";

            if (q < 6) {
              firstLeftButton.style.transform = "translate(-42vw)";
              firstRightButton.style.transform = "translate(20.356vw)";
            } else if (q < 12) {
              firstLeftButton.style.transform = "translate(-20.356vw)";
              firstRightButton.style.transform = "translate(20.356vw)";
            } else if (q < 18) {
              firstLeftButton.style.transform = "translate(-20.356vw)";
              firstRightButton.style.transform = "translate(42vw)";
            } else if (q < 24) {
              secondLeftButton.style.transform = "translate(-42vw)";
              secondRightButton.style.transform = "translate(20.356vw)";
            } else if (q < 30) {
              secondLeftButton.style.transform = "translate(-20.356vw)";
              secondRightButton.style.transform = "translate(20.356vw)";
            } else if (q < 36) {
              secondLeftButton.style.transform = "translate(-20.356vw)";
              secondRightButton.style.transform = "translate(42vw)";
            }

            shoes[q].style.borderRadius = "100%";
            shoes[q].style.transform = "translate(0, 0) scale(1)";
            showBox.style.opacity = "0";
            shoes[q].removeChild(h1);
            shoes[q].removeChild(p);
            shoes[q].removeChild(div);
            for (let w = 0; w < shoes.length; w++) {
              if (w != q) {
                shoes[w].style.opacity = "1";
                shoes[w].style.pointerEvents = "auto";
              }
            }
            setTimeout(() => {
              touchPrevention[0].style.display = "none";
              mapContent.style.display = "none";
              buttonName.style.opacity = "1";
            }, 500);
          });

          if (q < 18) {
            buttonName.innerHTML = "위치보기";
          }

          shoes[q].childNodes[3].innerHTML = titleArray01[q];
          shoes[q].childNodes[4].innerHTML = paragraphArray01[q];
          setTimeout(() => {
            shoes[q].childNodes[1].style.opacity = "1";
            shoes[q].childNodes[3].style.opacity = "1";
            shoes[q].childNodes[4].style.opacity = "1";
            shoes[q].childNodes[5].style.opacity = "0";
            showBox.style.opacity = "1";
          }, 600);
          showBox.addEventListener("click", () => {
            shoes[q].childNodes[1].style.opacity = "0";
            shoes[q].childNodes[3].style.opacity = "0";
            shoes[q].childNodes[4].style.opacity = "0";
            shoes[q].childNodes[5].style.opacity = "0";
            buttonName.style.opacity = "0";
            showBox.style.transition = "all 0.9s";
            showBox.style.width = "12%";
            showBox.style.marginBottom = "0";
            showBox.style.position = "absolute";
            showBox.style.transform =
              "translateY(-" +
              (touchPreventionBox.clientHeight / 2 - showBox.clientHeight / 2) +
              "px)";

            mapContent.style.display = "flex";
            if (q < 18) {
              mapimg.src = "img/mapimg/mapimg" + q + ".png";
              mapimgText.innerHTML = mapPosition[q];
            }

            setTimeout(() => {
              showBox.style.transform =
                "translateY(-" +
                (touchPreventionBox.clientHeight / 2 -
                  showBox.clientHeight / 2) +
                "px) scale(12)";
              mapimg.style.opacity = "1";
              mapimgText.style.opacity = "1";
            }, 1000);
          });
        }, 400);

        for (let w = 0; w < shoes.length; w++) {
          if (w != q) {
            shoes[w].style.opacity = "0";
            shoes[w].style.pointerEvents = "none";
          }
        }
      });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 카메라를 활용한 신발 안내 화면

    let shoesInfo = document.getElementById("shoesinfo");
    let smallInfo = document.getElementsByClassName("smallInfo");

    for (let i = 0; i < smallInfo.length; i++) {
      smallInfo[i].addEventListener("click", () => {
        let infoData = shoesInfo.src;

        if (smallInfo[i].src.indexOf("bin") > 0) {
          shoesInfo.src = shoesInfo.src;
          smallInfo[i].src = smallInfo[i].src;
        } else {
          shoesInfo.src = smallInfo[i].src;

          smallInfo[i].src = infoData;
        }
      });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 행동이 없으면 새로고침하는 기능

    // 페이지가 로드되었을 때 실행되는 함수
    window.addEventListener("load", function () {
      // 5분(300000 밀리초) 타이머 시작
      var timer = setTimeout(refreshPage, 300000);

      // 클릭 이벤트가 발생하면 타이머를 재설정
      document.addEventListener("click", function () {
        clearTimeout(timer);
        timer = setTimeout(refreshPage, 300000);
      });
    });

    // 페이지를 새로고침하는 함수
    function refreshPage() {
      location.reload();
    }
  } else {
    console.log("매장 디스플레이 화면 비율입니다.");

    let URL = "https://teachablemachine.withgoogle.com/models/3zs0J62G_/";

    let firstPage = document.getElementById("firstPage");
    let secondPage = document.getElementById("secondPage");
    let thirdPage = document.getElementById("thirdPage");
    let fourthPage = document.getElementById("fourthPage");
    let fifthPage = document.getElementById("fifthPage");
    let sixthPage = document.getElementById("sixthPage");
    let seventhPage = document.getElementById("seventhPage");

    let characters = document.getElementsByClassName("characters");
    let characterShadow = document.getElementsByClassName("characterShadow");

    characterShadow[0].style.left = "16%";
    characterShadow[0].style.top = "-29.5%";
    characterShadow[0].style.width = "11vw";
    characterShadow[0].style.height = "1.5vw";

    characterShadow[1].style.left = "32%";
    characterShadow[1].style.top = "-14%";
    characterShadow[1].style.width = "16vw";

    characterShadow[2].style.left = "46%";
    characterShadow[2].style.top = "-36.5%";
    characterShadow[2].style.width = "16vw";

    characterShadow[3].style.right = "24%";
    characterShadow[3].style.top = "-32%";
    characterShadow[3].style.width = "16vw";

    characterShadow[4].style.right = "6%";
    characterShadow[4].style.top = "-15%";
    characterShadow[4].style.width = "16vw";

    let pages = document.getElementsByClassName("pages");

    let blackHall = document.getElementById("blackHallBox");
    let blackCircle = document.getElementById("blackHall");
    let shadow = document.getElementById("shadow");
    let eyes = document.getElementById("eyes");
    let arm = document.getElementById("firstArm");

    const video = document.getElementById("video");

    let blackEyes = document.getElementsByClassName("blackEyes");

    let shoesTalk = document.getElementsByClassName("shoesTalk");
    let selectBox = document.getElementById("selectBox");
    let shPosX = window.innerWidth / 2 - shoesTalk[0].clientWidth / 2;
    let shPosY = selectBox.offsetTop + selectBox.clientHeight;
    shoesTalk[0].style.transform =
      "translate(" + shPosX + "px, " + shPosY + "px)";

    let shoes = document.getElementsByClassName("shoes");
    let shoeslistBox = document.getElementsByClassName("bbBox");
    let firstLeftButton = document.getElementById("leftButton01");
    let firstRightButton = document.getElementById("rightButton01");
    let firstLeftText = document.getElementById("leftText01");
    let firstRightText = document.getElementById("rightText01");

    let secondLeftButton = document.getElementById("leftButton02");
    let secondRightButton = document.getElementById("rightButton02");
    let secondLeftText = document.getElementById("leftText02");
    let secondRightText = document.getElementById("rightText02");

    let buttonNum01 = -100;

    let clothChangeimg = document.getElementById("clothChangeimg");
    let clothChangeimg02 = document.getElementById("clothChangeimg02");

    let shText = document.getElementById("shText");
    let shText02 = document.getElementById("shText02");

    let cloud0 = document.getElementsByClassName("cloud0");
    let cloud1 = document.getElementsByClassName("cloud1");
    let window2 = document.getElementsByClassName("window2");

    cloud0[2].style.animation = "movingAnimation 6s linear infinite";
    cloud1[2].style.animation = "movingAnimation2 6s linear infinite";

    let trainingTextArray = [
      "트레이닝화는 운동을 할 때<br>부상을 막아줄 수 있는<br> 아주 고마운 녀석이야!",
      "무조건 비싸다고 좋은게 아니라는 말씀!<br>자신한테 꼭 맞는 트레이닝화를 찾아보는게 어때?",
      "생각보다 트레이닝화의 종류는 많다고!<br>각기다른 신발이 주는 매력!<br>아래를 클릭해봐!",
    ];
    let casualTextArray = [
      "아이코닉한 나이키 신발!<br>아래의 신발들을 클릭해봐!",
      "일상생활에서 이런 신발은 어때?<br>다양하지?<br>구경해볼래?",
      "이 신발을 보고있는 당신!<br>오~ 잘 어울리겠는데?",
    ];
    let runningTextArray = [
      "우리는 다양한 환경에서 러닝을 하지!<br>러닝화라고 다 똑같지 않단말이야!<br>아래의 다양한 러닝화를 클릭해 봐!",
      "러닝할 때 러닝화를 신어야 하냐고?<br>신고 안신고의 차이! <br>이번기회에 느껴보는게 어때?",
      "무조건 비싸다고 좋은게 아니라는 말씀!<br>자신한테 꼭 맞는 러닝화를 찾아보는게 어때?",
    ];
    let trainingTextArray02 = [
      "트레이닝화는 운동을 할 때<br>부상을 막아줄 수 있는<br> 아주 고마운 녀석이야!",
      "무조건 비싸다고 좋은게 아니라는 말씀!<br>자신한테 꼭 맞는 트레이닝화를 찾아보는게 어때?",
      "생각보다 트레이닝화의 종류는 많다고!<br>각기다른 신발이 주는 매력!<br>아래를 클릭해봐!",
    ];
    let casualTextArray02 = [
      "아이코닉한 나이키 신발!<br>아래의 신발들을 클릭해봐!",
      "일상생활에서 이런 신발은 어때?<br>다양하지?<br>구경해볼래?",
      "이 신발을 보고있는 당신!<br>오~ 잘 어울리겠는데?",
    ];
    let runningTextArray02 = [
      "우리는 다양한 환경에서 러닝을 하지!<br>러닝화라고 다 똑같지 않단말이야!<br>아래의 다양한 러닝화를 클릭해 봐!",
      "러닝할 때 러닝화를 신어야 하냐고?<br>신고 안신고의 차이! <br>이번기회에 느껴보는게 어때?",
      "무조건 비싸다고 좋은게 아니라는 말씀!<br>자신한테 꼭 맞는 러닝화를 찾아보는게 어때?",
    ];

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 뒤로가기 애니메이션

    let backButtons = document.getElementsByClassName("backBox");

    for (let g = 0; g < backButtons.length; g++) {
      backButtons[g].addEventListener("click", () => {
        let pagenumber = g + 2;
        let value = g % 2;
        if (pagenumber > 1) {
          let childList = pages[pagenumber].childNodes;
          for (let m = 0; m < pages[pagenumber].childNodes.length; m++) {
            if (childList[m].nodeName.toLowerCase() == "div") {
              childList[m].style.transition = "all 0.6s";
              childList[m].style.opacity = "0";
            }
          }
        }
        if (value == 0) {
          pages[pagenumber].style.transform = "translate(100vw)";
        } else if (value == 1) {
          pages[pagenumber].style.transform = "translate(-100vw)";
        }
        if (g > 2) {
          firstLeftButton.style.transform = "translate(-20.356vw)";
          firstRightButton.style.transform = "translate(20.356vw)";
          setTimeout(() => {
            firstLeftText.innerHTML = "트<br>레<br>이<br>닝";
            firstRightText.innerHTML = "러<br>닝";
          }, 500);
          shoeslistBox[0].style.transform = "translateX(-100vw)";
          buttonNum01 = -100;
        }
        if (pagenumber > 2 && pagenumber < 5) {
          for (let y = 0; y < clothes.length; y++) {
            clothChangeimg.src = "img/clothes/clothimg0.png";
            clothChangeimg02.src = "img/clothes/clothimg13.png";
            if (y < 12) {
              smallClothes[y].src = "img/clothes/clothimg" + (y + 1) + ".png";
            } else {
              smallClothes[y].src = "img/clothes/clothimg" + (y + 2) + ".png";
            }
          }
        }
        if (pagenumber > 2 && pagenumber < 4) {
          chTalk[0].style.transform = "translateX(100vw)";
          chTalkContent.innerHTML = "오 굿굿";
        }
        if (pagenumber > 3 && pagenumber < 5) {
          chTalk[1].style.transform = "translateX(100vw)";
          chTalkContent.innerHTML = "오 굿굿";
        }
        if (pagenumber > 5 && pagenumber < 7) {
          let shoesVideo = document.getElementsByClassName("shoesVideo")[0];

          shoesVideo.removeChild(shoesVideo.lastChild);
        }
      });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 첫번째 페이지 기본 애니메이션

    let firstPageInterval = setInterval(() => {
      eyes.style.transform = "translateY(0)";
      arm.style.transform = "translate(0, 0) scale(2)";
      setTimeout(() => {
        arm.classList.add("armClass");
        arm.addEventListener("animationend", () => {
          arm.classList.remove("armClass");
        });
        setTimeout(() => {
          eyes.style.transform = "translateY(28vh)";
          arm.style.transform = "translate(-28vw, 0) scale(2)";
        }, 1500);
      }, 3000);
    }, 8000);

    cloud0[0].addEventListener("animationend", () => {
      cloud0[0].style.animation = "movingAnimation 6s linear infinite";
    });

    cloud1[0].addEventListener("animationend", () => {
      setTimeout(() => {
        cloud1[0].style.animation = "movingAnimation2 6s linear infinite";
      }, 500);
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 첫번째 페이지 카메라 불러오기

    // "e1c88cf2bee30842f6e53f9baa362a96f096c8882f17cad616d2f840c0b352a8" 핸드폰 카메라 deviceID
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then(function (stream) {
        video.srcObject = stream;
      });

    let video2 = document.getElementById("video2");
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then(function (stream) {
        video2.srcObject = stream;
      });

    let video3 = document.getElementById("video3");
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then(function (stream) {
        video3.srcObject = stream;
      });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////// 포즈넷 눈 쳐다보는 애니메이션 관련 파트

    let pauseIs = true;
    posenet.load().then((model) => {
      video.onloadeddata = (e) => {
        predict();
      };
      function predict() {
        model.estimateMultiplePoses(video).then((pose) => {
          let value = Math.floor(pose[0].keypoints[0].position.x);
          let positionValue = 140 + -140 * (value / 1280) - 70;
          if (positionValue > -70 && positionValue < 70) {
            for (let q = 0; q < blackEyes.length; q++) {
              blackEyes[q].style.transform =
                "translateX(" + positionValue + "%)";
            }
          }
          // console.log(positionValue);
        });
        if (pauseIs === true) {
          let raf = requestAnimationFrame(predict);
        } else {
          cancelAnimationFrame(raf);
        }
      }
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////첫번째 > 두번째페이지 이동 관련파트

    blackHall.addEventListener("click", () => {
      pauseIs = false;

      //버튼 눌렀을 때 동그라미 돌아가는 애니메이션
      blackHall.style.transform = "rotateY(360deg)";
      blackHall.style.animation = "blackhallAnimation 1s";
      blackCircle.style.backgroundColor = "#ea6d1b";
      blackCircle.style.animation = "circleAnimation 1s";

      cloud0[1].style.animation = "none";
      cloud0[1].style.transform = "translateY(-14vh)";
      cloud1[1].style.animation = "none";
      cloud1[1].style.transform = "translateY(-14vh)";
      window2[0].style.transform = "translateY(-40vh)";

      clearInterval(firstPageInterval);

      //동그라미 애니메이션이 끝나면 이벤트 발생
      blackHall.addEventListener("animationend", () => {
        blackHall.style.opacity = "0";

        eyes.style.transition = "all 0.6s ease-in-out";
        eyes.style.transform = "translateY(0)";
        arm.style.transition = "all 0.6s ease-in-out";
        arm.style.transform = "translate(0, 0) scale(2)";

        setTimeout(() => {
          // eyes.style.animation = 'none'
          // arm.style.animation  = 'none'
          setTimeout(() => {
            eyes.style.animation = "stay 4s";
            arm.style.animation = "handUp 4s";
            setTimeout(() => {
              secondPage.style.transition = "all ease-out 1.2s";
              secondPage.style.transform = "translate(0)";
              setTimeout(() => {
                for (let t = 0; t < characters.length; t++) {
                  characters[t].style.transform =
                    "translate(0, " + window.innerHeight + "px)";
                  characters[t].style.animation = "charactersAnimation 2s";
                  characterShadow[t].style.opacity = "1";
                  characterShadow[t].style.animation = "shadowAnimation 2s";
                }
                cloud0[1].style.animation = "cloudAnimation 1s ease-in";
                cloud1[1].style.animation = "cloudAnimation 1s ease-in";
                window2[0].style.animation = "windowAnimation 1s ease-in";

                cloud0[1].style.transform = "translateY(0vh)";
                cloud1[1].style.transform = "translateY(0vh)";
                window2[0].style.transform = "translateY(0vh)";

                cloud0[1].addEventListener("animationend", () => {
                  cloud0[1].style.animation =
                    "movingAnimation 6s linear infinite";
                });

                cloud1[1].addEventListener("animationend", () => {
                  setTimeout(() => {
                    cloud1[1].style.animation =
                      "movingAnimation2 6s linear infinite";
                  }, 500);
                });
              }, 1000);
            }, 2200);
          }, 500);
        }, 1200);
      });
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////// 멤버쉽 페이지

    let movieContent = document.getElementById("movieContent");
    let membershipTitle = document.getElementById("membershipTitle");
    let infoIcon = document.getElementById("infoIconBox");
    let infoImg = document.getElementById("infoImg");
    let infoBox = document.getElementById("infoBox");

    movieContent.addEventListener("click", () => {
      infoIcon.style.transform = "translateY(-8vw)";
      membershipTitle.style.opacity = "0";
      infoImg.style.opacity = "0";
      setTimeout(() => {
        infoIcon.style.width = "88vw";
        infoIcon.style.height = "88vw";
        setTimeout(() => {
          infoBox.style.opacity = "1";
          infoIcon.style.opacity = "0";
        }, 600);
      }, 600);
    });

    let playButton = document.getElementById("playButton");
    let infoVideo = document.getElementById("infoVideo");
    let progressBar = document.getElementById("playBar2");
    let touchBar = document.getElementById("playBar");
    let playCircle = document.getElementById("playCircle");
    let blackCutton = document.getElementById("blackCutton");

    playButton.addEventListener("click", () => {
      playButton.style.opacity = "1";
      if (infoVideo.paused) {
        playButton.src = "img/pausedButton.png";
        infoVideo.play();
        blackCutton.style.opacity = "0";
      } else {
        playButton.src = "img/playButton.png";
        infoVideo.pause();
        blackCutton.style.opacity = "0.5";
      }
      setTimeout(() => {
        playButton.style.opacity = "0";
      }, 1000);
    });

    infoVideo.addEventListener("timeupdate", () => {
      let percent = (infoVideo.currentTime / infoVideo.duration) * 100;
      progressBar.style.width = percent + "%";
      playCircle.style.left = percent - 2.5 + "%";

      touchBar.addEventListener("click", (event) => {
        let clickX = event.clientX - touchBar.getBoundingClientRect().left;
        var percentage = (clickX / touchBar.offsetWidth) * 100;
        infoVideo.currentTime = (percentage / 100) * infoVideo.duration;
        playCircle.style.left = percentage - 2.5 + "%";
      });
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////캐릭터 자동 이동 관련 파트
    characters[0].addEventListener("animationend", () => {
      characters[0].style.transition = "all 0.3s";
      characters[1].style.transition = "all 0.3s";
      characters[2].style.transition = "all 0.3s";
      characters[3].style.transition = "all 0.3s";
      characters[4].style.transition = "all 0.3s";

      ////////////////////////////////////////////////////////캐릭터 말풍선

      setInterval(() => {
        let talkBoxes = document.getElementsByClassName("talkBox");

        let randomTalk = Math.floor(Math.random() * 4);

        // talkBoxes[randomTalk].style.opacity = "0.7";

        talkBoxes[0].style.marginLeft = "4vw";
        talkBoxes[1].style.marginLeft = "4vw";
        talkBoxes[2].style.marginLeft = "4vw";
        talkBoxes[3].style.marginLeft = "4vw";

        talkBoxes[0].style.opacity = "0.7";
        talkBoxes[1].style.opacity = "0.7";
        talkBoxes[2].style.opacity = "0.7";
        talkBoxes[3].style.opacity = "0.7";
        talkBoxes[4].style.opacity = "0.7";
      }, 2000);

      // setInterval(() => {
      //   let talkBoxes = document.getElementsByClassName("talkBox");

      //   talkBoxes[0].style.opacity = "0";
      //   talkBoxes[1].style.opacity = "0";
      //   talkBoxes[2].style.opacity = "0";
      //   talkBoxes[3].style.opacity = "0";
      //   talkBoxes[4].style.opacity = "0";
      // }, 8000);

      setInterval(() => {
        let talkBoxes = document.getElementsByClassName("talkBox");

        let moveValue = 20;

        let talk01 = characters[0].getBoundingClientRect();
        let talk02 = characters[1].getBoundingClientRect();
        let talk03 = characters[2].getBoundingClientRect();
        let talk04 = characters[3].getBoundingClientRect();
        let talk05 = characters[4].getBoundingClientRect();

        let talkX01 = talk01.left;
        let talkY01 = talk01.top - talkBoxes[0].clientHeight;
        let talkX02 = talk02.left;
        let talkY02 = talk02.top - talkBoxes[0].clientHeight;
        let talkX03 = talk03.left;
        let talkY03 = talk03.top - talkBoxes[0].clientHeight;
        let talkX04 = talk04.left;
        let talkY04 = talk04.top - talkBoxes[0].clientHeight;
        let talkX05 = talk05.left;
        let talkY05 = talk05.top - talkBoxes[0].clientHeight;

        talkBoxes[0].style.left = talkX01 + "px";
        talkBoxes[0].style.top = talkY01 + "px";
        talkBoxes[1].style.left = talkX02 + "px";
        talkBoxes[1].style.top = talkY02 + "px";
        talkBoxes[2].style.left = talkX03 + "px";
        talkBoxes[2].style.top = talkY03 + "px";
        talkBoxes[3].style.left = talkX04 + "px";
        talkBoxes[3].style.top = talkY04 + "px";
        talkBoxes[4].style.left = talkX05 + "px";
        talkBoxes[4].style.top = talkY05 + "px";

        let randomNum01 = Math.floor(Math.random() * 5);
        let randomNum02 = Math.floor(Math.random() * 5);
        let randomNum03 = Math.floor(Math.random() * 5);
        let randomNum04 = Math.floor(Math.random() * 5);
        let randomNum05 = Math.floor(Math.random() * 5);

        let posX01 = characters[0].offsetLeft;
        let posY01 = characters[0].offsetTop;

        let posX02 = characters[1].offsetLeft;
        let posY02 = characters[1].offsetTop;

        let posX03 = characters[2].offsetLeft;
        let posY03 = characters[2].offsetTop;

        let posX04 = characters[3].offsetLeft;
        let posY04 = characters[3].offsetTop;

        let posX05 = characters[4].offsetLeft;
        let posY05 = characters[4].offsetTop;

        let posXX01 = characterShadow[0].offsetLeft;
        let posYY01 = characterShadow[0].offsetTop;

        let posXX02 = characterShadow[1].offsetLeft;
        let posYY02 = characterShadow[1].offsetTop;

        let posXX03 = characterShadow[2].offsetLeft;
        let posYY03 = characterShadow[2].offsetTop;

        let posXX04 = characterShadow[3].offsetLeft;
        let posYY04 = characterShadow[3].offsetTop;

        let posXX05 = characterShadow[4].offsetLeft;
        let posYY05 = characterShadow[4].offsetTop;

        ////////////////////////////////////////////////////////캐릭터 1번

        if (randomNum01 < 1) {
          characters[0].style.top = posY01 + moveValue + "px";

          characterShadow[0].style.top = posYY01 + moveValue + "px";

          talkBoxes[0].style.left = talkX01 + "px";
          talkBoxes[0].style.top = talkY01 + moveValue + "px";
          if (posY01 > -190) {
            characters[0].style.top = posY01 - moveValue + "px";

            characterShadow[0].style.top = posYY01 - moveValue + "px";

            talkBoxes[0].style.left = talkX01 + "px";
            talkBoxes[0].style.top = talkY01 - moveValue + "px";
          }
        } else if (randomNum01 >= 1 && randomNum01 < 2) {
          characters[0].style.top = posY01 - moveValue + "px";

          characterShadow[0].style.top = posYY01 - moveValue + "px";

          talkBoxes[0].style.left = talkX01 + "px";
          talkBoxes[0].style.top = talkY01 - moveValue + "px";
        } else if (randomNum01 >= 2 && randomNum01 < 3) {
          characters[0].style.left = posX01 + moveValue + "px";

          characterShadow[0].style.left = posXX01 + moveValue + "px";

          talkBoxes[0].style.left = talkX01 + moveValue + "px";
          talkBoxes[0].style.top = talkY01 + "px";
          if (posX01 > 820) {
            characters[0].style.left = posX01 - moveValue + "px";

            characterShadow[0].style.left = posXX01 - moveValue + "px";

            talkBoxes[0].style.left = talkX01 - moveValue + "px";
            talkBoxes[0].style.top = talkY01 + "px";
          }
        } else if (randomNum01 >= 3 && randomNum01 < 4) {
          characters[0].style.left = posX01 - moveValue + "px";

          characterShadow[0].style.left = posXX01 - moveValue + "px";

          talkBoxes[0].style.left = talkX01 - moveValue + "px";
          talkBoxes[0].style.top = talkY01 + "px";
          if (posX01 < 40) {
            characters[0].style.left = posX01 + moveValue + "px";

            characterShadow[0].style.left = posXX01 + moveValue + "px";

            talkBoxes[0].style.left = talkX01 + moveValue + "px";
            talkBoxes[0].style.top = talkY01 + "px";
          }
        } else if (randomNum01 >= 4 && randomNum01 < 5) {
          characters[0].style.top = posY01 + "px";

          characterShadow[0].style.top = posYY01 + "px";

          talkBoxes[0].style.left = talkX01 + "px";
          talkBoxes[0].style.top = talkY01 + "px";
        }

        ////////////////////////////////////////////////////////캐릭터 2번

        if (randomNum02 < 1) {
          characters[1].style.top = posY02 + moveValue + "px";

          characterShadow[1].style.top = posYY02 + moveValue + "px";

          talkBoxes[1].style.left = talkX02 + "px";
          talkBoxes[1].style.top = talkY02 + moveValue + "px";
          if (posY02 > -190) {
            characters[1].style.top = posY02 - moveValue + "px";

            characterShadow[1].style.top = posYY02 - moveValue + "px";

            talkBoxes[1].style.left = talkX02 + "px";
            talkBoxes[1].style.top = talkY02 - moveValue + "px";
          }
        } else if (randomNum02 >= 1 && randomNum02 < 2) {
          characters[1].style.top = posY02 - moveValue + "px";

          characterShadow[1].style.top = posYY02 - moveValue + "px";

          talkBoxes[1].style.left = talkX02 + "px";
          talkBoxes[1].style.top = talkY02 - moveValue + "px";
        } else if (randomNum02 >= 2 && randomNum02 < 3) {
          characters[1].style.left = posX02 + moveValue + "px";

          characterShadow[1].style.left = posXX02 + moveValue + "px";

          talkBoxes[1].style.left = talkX02 + moveValue + "px";
          talkBoxes[1].style.top = talkY02 + "px";
          if (posX02 > 820) {
            characters[1].style.left = posX02 - moveValue + "px";

            characterShadow[1].style.left = posXX02 - moveValue + "px";

            talkBoxes[1].style.left = talkX02 - moveValue + "px";
            talkBoxes[1].style.top = talkY02 + "px";
          }
        } else if (randomNum02 >= 3 && randomNum02 < 4) {
          characters[1].style.left = posX02 - moveValue + "px";

          characterShadow[1].style.left = posXX02 - moveValue + "px";

          talkBoxes[1].style.left = talkX02 - moveValue + "px";
          talkBoxes[1].style.top = talkY02 + "px";
          if (posX02 < 40) {
            characters[1].style.left = posX02 + moveValue + "px";

            characterShadow[1].style.left = posXX02 + moveValue + "px";

            talkBoxes[1].style.left = talkX02 + moveValue + "px";
            talkBoxes[1].style.top = talkY02 + "px";
          }
        } else if (randomNum02 >= 4 && randomNum02 < 5) {
          characters[1].style.top = posY02 + "px";

          characterShadow[1].style.top = posYY02 + "px";

          talkBoxes[1].style.left = talkX02 + "px";
          talkBoxes[1].style.top = talkY02 + "px";
        }

        ////////////////////////////////////////////////////////캐릭터 3번

        if (randomNum03 < 1) {
          characters[2].style.top = posY03 + moveValue + "px";

          characterShadow[2].style.top = posYY03 + moveValue + "px";

          talkBoxes[2].style.left = talkX03 + "px";
          talkBoxes[2].style.top = talkY03 + moveValue + "px";
          if (posY03 > -190) {
            characters[2].style.top = posY03 - moveValue + "px";

            characterShadow[2].style.top = posYY03 - moveValue + "px";

            talkBoxes[2].style.left = talkX03 + "px";
            talkBoxes[2].style.top = talkY03 - moveValue + "px";
          }
        } else if (randomNum03 >= 1 && randomNum03 < 2) {
          characters[2].style.top = posY03 - moveValue + "px";

          characterShadow[2].style.top = posYY03 - moveValue + "px";

          talkBoxes[2].style.left = talkX03 + "px";
          talkBoxes[2].style.top = talkY03 - moveValue + "px";
        } else if (randomNum03 >= 2 && randomNum03 < 3) {
          characters[2].style.left = posX03 + moveValue + "px";

          characterShadow[2].style.left = posXX03 + moveValue + "px";

          talkBoxes[2].style.left = talkX03 + moveValue + "px";
          talkBoxes[2].style.top = talkY03 + "px";
          if (posX03 > 820) {
            characters[2].style.left = posX03 - moveValue + "px";

            characterShadow[2].style.left = posXX03 - moveValue + "px";

            talkBoxes[2].style.left = talkX03 - moveValue + "px";
            talkBoxes[2].style.top = talkY03 + "px";
          }
        } else if (randomNum03 >= 3 && randomNum03 < 4) {
          characters[2].style.left = posX03 - moveValue + "px";

          characterShadow[2].style.left = posXX03 - moveValue + "px";

          talkBoxes[2].style.left = talkX03 - moveValue + "px";
          talkBoxes[2].style.top = talkY03 + "px";
          if (posX03 < 40) {
            characters[2].style.left = posX03 + moveValue + "px";

            characterShadow[2].style.left = posXX03 + moveValue + "px";

            talkBoxes[2].style.left = talkX03 + moveValue + "px";
            talkBoxes[2].style.top = talkY03 + "px";
          }
        } else if (randomNum03 >= 4 && randomNum03 < 5) {
          characters[2].style.top = posY03 + "px";

          characterShadow[2].style.top = posYY03 + "px";

          talkBoxes[2].style.left = talkX03 + "px";
          talkBoxes[2].style.top = talkY03 + "px";
        }

        ////////////////////////////////////////////////////////캐릭터 4번

        if (randomNum04 < 1) {
          characters[3].style.top = posY04 + moveValue + "px";

          characterShadow[3].style.top = posYY04 + moveValue + "px";

          talkBoxes[3].style.left = talkX04 + "px";
          talkBoxes[3].style.top = talkY04 + moveValue + "px";
          if (posY04 > -190) {
            characters[3].style.top = posY04 - moveValue + "px";

            characterShadow[3].style.top = posYY04 - moveValue + "px";

            talkBoxes[3].style.left = talkX04 + "px";
            talkBoxes[3].style.top = talkY04 - moveValue + "px";
          }
        } else if (randomNum04 >= 1 && randomNum04 < 2) {
          characters[3].style.top = posY04 - moveValue + "px";

          characterShadow[3].style.top = posYY04 - moveValue + "px";

          talkBoxes[3].style.left = talkX04 + "px";
          talkBoxes[3].style.top = talkY04 - moveValue + "px";
        } else if (randomNum04 >= 2 && randomNum04 < 3) {
          characters[3].style.left = posX04 + moveValue + "px";

          characterShadow[3].style.left = posXX04 + moveValue + "px";

          talkBoxes[3].style.left = talkX04 + moveValue + "px";
          talkBoxes[3].style.top = talkY04 + "px";
          if (posX04 > 1420) {
            characters[3].style.left = posX04 - moveValue + "px";

            characterShadow[3].style.left = posXX04 - moveValue + "px";

            talkBoxes[3].style.left = talkX04 - moveValue + "px";
            talkBoxes[3].style.top = talkY04 + "px";
          }
        } else if (randomNum04 >= 3 && randomNum04 < 4) {
          characters[3].style.left = posX04 - moveValue + "px";

          characterShadow[3].style.left = posXX04 - moveValue + "px";

          talkBoxes[3].style.left = talkX04 - moveValue + "px";
          talkBoxes[3].style.top = talkY04 + "px";
          if (posX04 < 40) {
            characters[3].style.left = posX04 + moveValue + "px";

            characterShadow[3].style.left = posXX04 + moveValue + "px";

            talkBoxes[3].style.left = talkX04 + moveValue + "px";
            talkBoxes[3].style.top = talkY04 + "px";
          }
        } else if (randomNum04 >= 4 && randomNum04 < 5) {
          characters[3].style.top = posY04 + "px";

          characterShadow[3].style.top = posYY04 + "px";

          talkBoxes[3].style.left = talkX04 + "px";
          talkBoxes[3].style.top = talkY04 + "px";
        }

        ////////////////////////////////////////////////////////캐릭터 5번
        if (randomNum05 < 1) {
          characters[4].style.top = posY05 + moveValue + "px";

          characterShadow[4].style.top = posYY05 + moveValue + "px";

          talkBoxes[4].style.left = talkX05 + "px";
          talkBoxes[4].style.top = talkY05 + moveValue + "px";
          if (posY05 > -190) {
            characters[4].style.top = posY05 - moveValue + "px";

            characterShadow[4].style.top = posYY05 - moveValue + "px";

            talkBoxes[4].style.left = talkX05 + "px";
            talkBoxes[4].style.top = talkY05 - moveValue + "px";
          }
        } else if (randomNum05 >= 1 && randomNum05 < 2) {
          characters[4].style.top = posY05 - moveValue + "px";

          characterShadow[4].style.top = posYY05 - moveValue + "px";

          talkBoxes[4].style.left = talkX05 + "px";
          talkBoxes[4].style.top = talkY05 - moveValue + "px";
        } else if (randomNum05 >= 2 && randomNum05 < 3) {
          characters[4].style.left = posX05 + moveValue + "px";

          characterShadow[4].style.left = posXX05 + moveValue + "px";

          talkBoxes[4].style.left = talkX05 + moveValue + "px";
          talkBoxes[4].style.top = talkY05 + "px";
          if (posX05 > 1420) {
            characters[4].style.left = posX05 - moveValue + "px";

            characterShadow[4].style.left = posXX05 - moveValue + "px";

            talkBoxes[4].style.left = talkX05 - moveValue + "px";
            talkBoxes[4].style.top = talkY05 + "px";
          }
        } else if (randomNum05 >= 3 && randomNum05 < 4) {
          characters[4].style.left = posX05 - moveValue + "px";

          characterShadow[4].style.left = posXX05 - moveValue + "px";

          talkBoxes[4].style.left = talkX05 - moveValue + "px";
          talkBoxes[4].style.top = talkY05 + "px";
          if (posX05 < 40) {
            characters[4].style.left = posX05 + moveValue + "px";

            characterShadow[4].style.left = posXX05 + moveValue + "px";

            talkBoxes[4].style.left = talkX05 + moveValue + "px";
            talkBoxes[4].style.top = talkY05 + "px";
          }
        } else if (randomNum05 >= 4 && randomNum05 < 5) {
          characters[4].style.top = posY05 + "px";

          characterShadow[4].style.top = posYY05 + "px";

          talkBoxes[4].style.left = talkX05 + "px";
          talkBoxes[4].style.top = talkY05 + "px";
        }
      }, 1000);
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 캐릭터 누르면 이동하는 부분
    for (let c = 0; c < pages.length; c++) {
      let pagenumber = c;
      if (pagenumber > 1) {
        let childList = pages[pagenumber].childNodes;
        for (let m = 0; m < pages[pagenumber].childNodes.length; m++) {
          if (childList[m].nodeName.toLowerCase() == "div") {
            childList[m].style.transition = "all 0.6s ease-in-out";
            childList[m].style.opacity = "0";
          }
        }
      }
    }

    for (let i = 0; i < characters.length; i++) {
      characters[i].addEventListener("click", async () => {
        let pagenumber = i + 2;
        pages[pagenumber].style.transform = "translateX(0)";
        let childNodes = pages[pagenumber].childNodes;
        for (let m = 0; m < pages[pagenumber].childNodes.length; m++) {
          if (childNodes[m].nodeName.toLowerCase() == "div") {
            setTimeout(() => {
              childNodes[m].style.opacity = "1";
            }, m * 200);
          }
        }
        if (pagenumber > 4 && pagenumber < 6) {
          var casualText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = casualTextArray[randomText];
            }, 2000);
          }, 8000);

          firstLeftButton.addEventListener("click", () => {
            clearInterval(casualText);
          });
          firstRightButton.addEventListener("click", () => {
            clearInterval(casualText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(casualText);
          });
        }

        if (pagenumber > 5 && pagenumber < 7) {
          let model, webcam, maxPredictions;

          let modelURL = URL + "model.json";
          let metadataURL = URL + "metadata.json";

          model = await tmImage.load(modelURL, metadataURL);

          maxPredictions = model.getTotalClasses();

          let shoesVideo = document.getElementsByClassName("shoesVideo")[0];

          const flip = true;
          webcam = new tmImage.Webcam(
            shoesVideo.clientWidth,
            shoesVideo.clientHeight,
            flip
          );
          await webcam.setup();
          await webcam.play();
          window.requestAnimationFrame(loop);

          shoesVideo.appendChild(webcam.canvas);

          async function loop() {
            webcam.update(); // update the webcam frame
            await predict();
            window.requestAnimationFrame(loop);
          }

          async function predict() {
            let dark = document.getElementById("asdf");
            const prediction = await model.predict(webcam.canvas);
            for (let i = 0; i < maxPredictions; i++) {
              const classPrediction =
                prediction[0].className +
                ": " +
                prediction[0].probability.toFixed(2) +
                "<br>" +
                prediction[1].className +
                ": " +
                prediction[1].probability.toFixed(2) +
                "<br>" +
                prediction[2].className +
                ": " +
                prediction[2].probability.toFixed(2) +
                "<br>" +
                prediction[3].className +
                ": " +
                prediction[3].probability.toFixed(2) +
                "<br>" +
                prediction[4].className +
                ": " +
                prediction[4].probability.toFixed(2);
            }

            let shoesinfoBox = document.getElementsByClassName("shoesinfoBox");
            let imgBox = document.getElementById("imgBox");
            let textBox = document.getElementById("textBox");
            let buyQrCode = document.getElementById("buyQrCode");

            let shoesTitle = document.getElementById("shoesTitle");
            let shoesSex = document.getElementById("shoesSex");
            let sheosPrice = document.getElementById("sheosPrice");
            let sheosParagraph = document.getElementById("sheosParagraph");

            let returnButton02 = document.getElementById("returnBox02");

            let buyButton = document.getElementById("buyButton");

            let bigInfo = document.getElementById("shoesinfo");

            let smallInfo = document.getElementsByClassName("smallInfo");

            let returnButtonNum = 0;

            let shoesCh = document.getElementsByClassName("chTalk")[2];
            let shoesTk = document.getElementById("chTalkContent3");

            if (prediction[0].probability.toFixed(2) * 100 > 95) {
              returnButton02.style.display = "flex";

              shoesCh.style.transform = "translateX(0)";

              shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
              setTimeout(() => {
                shoesTk.innerHTML =
                  "전 페이지로 돌아갈려면 왼쪽에 있는 버튼을 눌러줘!";
              }, 600);

              bigInfo.src = "img/shoesCamera/Pegasus4_0.png";

              smallInfo[0].src = "img/shoesCamera/Pegasus4_1.png";
              smallInfo[1].src = "img/shoesCamera/Pegasus4_2.png";
              smallInfo[2].src = "img/shoesCamera/Pegasus4_3.png";
              smallInfo[3].src = "img/shoesCamera/Pegasus4_4.png";
              smallInfo[4].src = "img/shoesCamera/Pegasus4_5.png";

              shoesTitle.innerHTML = "나이키 페가수스 트레일 4";
              shoesSex.innerHTML = "남성 트레일 러닝화";
              sheosPrice.innerHTML = "87,400원";
              sheosParagraph.innerHTML =
                "러닝은 새로운 모험과 목표를 향해 달리는 여러분을 도로에서 트레일까지 이끌어줄 일상 속 작은 습관입니다. 나이키 페가수스 트레일 4는 지지력과 탄력 있는 착화감을 선사하여 러닝을 계속 이어 나가게 도와줍니다. 험준한 지면에서 러닝을 지속할 수 있도록 언더풋 접지력을 제공하며 도로에서도 부드러운 착화감을 선사합니다. 신발 끈으로 중족부 지지력을 조절해 최상의 핏과 착화감을 찾아낼 수 있습니다. 걸음에 날개를 달아주는 든든한 지원군이 여러분의 여정에 함께합니다. 이제 달려볼 시간입니다.";

              returnButton02.addEventListener("click", () => {
                if (returnButtonNum === 1) {
                  imgBox.style.transform = "translateX(0)";
                  textBox.style.transform = "translateX(0)";
                  shoesinfoBox[0].style.backgroundColor = "white";
                  buyQrCode.style.opacity = 0;

                  returnButtonNum = 0;

                  shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
                } else {
                  shoesinfoBox[0].style.opacity = 0;
                  imgBox.style.transform = "translateX(-60vw)";
                  textBox.style.transform = "translateX(60vw)";
                  shoesinfoBox[0].style.backgroundColor = "white";

                  returnButton02.style.display = "none";

                  shoesCh.style.transform = "translateX(100vw)";
                }
              });

              shoesinfoBox[0].style.opacity = 1;

              setTimeout(() => {
                imgBox.style.transform = "translateX(0)";
                textBox.style.transform = "translateX(0)";
              }, 300);

              buyButton.addEventListener("click", () => {
                returnButtonNum = 1;
                imgBox.style.transform = "translateX(-60vw)";
                textBox.style.transform = "translateX(60vw)";
                setTimeout(() => {
                  shoesinfoBox[0].style.backgroundColor = "black";
                  buyQrCode.style.opacity = 1;

                  shoesTk.innerHTML = "화면의 QR코드를 찍어봐!";
                }, 600);
              });
            } else if (prediction[1].probability.toFixed(2) * 100 > 95) {
              shoesCh.style.transform = "translateX(0)";

              shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
              setTimeout(() => {
                shoesTk.innerHTML =
                  "전 페이지로 돌아갈려면 왼쪽에 있는 버튼을 눌러줘!?";
              }, 600);

              returnButton02.style.display = "flex";

              bigInfo.src = "img/shoesCamera/Pegasus3_0.png";

              smallInfo[0].src = "img/shoesCamera/Pegasus3_1.png";
              smallInfo[1].src = "img/shoesCamera/binImg.png";
              smallInfo[2].src = "img/shoesCamera/binImg.png";
              smallInfo[3].src = "img/shoesCamera/binImg.png";
              smallInfo[4].src = "img/shoesCamera/binImg.png";

              shoesTitle.innerHTML = "나이키 페가수스 트레일 3";
              shoesSex.innerHTML = "남성 트레일 러닝화";
              sheosPrice.innerHTML = "159,000원";
              sheosParagraph.innerHTML =
                "러닝은 새로운 모험과 목표를 향해 달리는 여러분을 도로에서 트레일까지 이끌어줄 일상 속 작은 습관입니다. 나이키 페가수스 트레일 4는 지지력과 탄력 있는 착화감을 선사하여 러닝을 계속 이어 나가게 도와줍니다. 험준한 지면에서 러닝을 지속할 수 있도록 언더풋 접지력을 제공하며 도로에서도 부드러운 착화감을 선사합니다. 신발 끈으로 중족부 지지력을 조절해 최상의 핏과 착화감을 찾아낼 수 있습니다. 걸음에 날개를 달아주는 든든한 지원군이 여러분의 여정에 함께합니다. 이제 달려볼 시간입니다.";

              returnButton02.addEventListener("click", () => {
                if (returnButtonNum === 1) {
                  imgBox.style.transform = "translateX(0)";
                  textBox.style.transform = "translateX(0)";
                  shoesinfoBox[0].style.backgroundColor = "white";
                  buyQrCode.style.opacity = 0;

                  returnButtonNum = 0;

                  shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
                } else {
                  shoesinfoBox[0].style.opacity = 0;
                  imgBox.style.transform = "translateX(-60vw)";
                  textBox.style.transform = "translateX(60vw)";
                  shoesinfoBox[0].style.backgroundColor = "white";

                  returnButton02.style.display = "none";

                  shoesCh.style.transform = "translateX(100vw)";
                }
              });

              shoesinfoBox[0].style.opacity = 1;

              setTimeout(() => {
                imgBox.style.transform = "translateX(0)";
                textBox.style.transform = "translateX(0)";
              }, 300);

              buyButton.addEventListener("click", () => {
                returnButtonNum = 1;
                imgBox.style.transform = "translateX(-60vw)";
                textBox.style.transform = "translateX(60vw)";
                setTimeout(() => {
                  shoesinfoBox[0].style.backgroundColor = "black";
                  buyQrCode.style.opacity = 1;

                  shoesTk.innerHTML = "화면의 QR코드를 찍어봐!";
                }, 600);
              });
            } else if (prediction[3].probability.toFixed(2) * 100 > 95) {
              shoesCh.style.transform = "translateX(0)";

              shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
              setTimeout(() => {
                shoesTk.innerHTML =
                  "전 페이지로 돌아갈려면 왼쪽에 있는 버튼을 눌러줘!";
              }, 600);
              returnButton02.style.display = "flex";

              bigInfo.src = "img/shoesCamera/next2_0.png";

              smallInfo[0].src = "img/shoesCamera/next2_1.png";
              smallInfo[1].src = "img/shoesCamera/next2_2.png";
              smallInfo[2].src = "img/shoesCamera/next2_3.png";
              smallInfo[3].src = "img/shoesCamera/binImg.png";
              smallInfo[4].src = "img/shoesCamera/binImg.png";

              shoesTitle.innerHTML =
                "나이키 줌X 베이퍼플라이 넥스트 2 글레이셔 블루";
              shoesSex.innerHTML = "남성 로드 레이싱화";
              sheosPrice.innerHTML = "269,000원";
              sheosParagraph.innerHTML =
                "러닝은 새로운 모험과 목표를 향해 달리는 여러분을 도로에서 트레일까지 이끌어줄 일상 속 작은 습관입니다. 나이키 페가수스 트레일 4는 지지력과 탄력 있는 착화감을 선사하여 러닝을 계속 이어 나가게 도와줍니다. 험준한 지면에서 러닝을 지속할 수 있도록 언더풋 접지력을 제공하며 도로에서도 부드러운 착화감을 선사합니다. 신발 끈으로 중족부 지지력을 조절해 최상의 핏과 착화감을 찾아낼 수 있습니다. 걸음에 날개를 달아주는 든든한 지원군이 여러분의 여정에 함께합니다. 이제 달려볼 시간입니다.";

              returnButton02.addEventListener("click", () => {
                if (returnButtonNum === 1) {
                  imgBox.style.transform = "translateX(0)";
                  textBox.style.transform = "translateX(0)";
                  shoesinfoBox[0].style.backgroundColor = "white";
                  buyQrCode.style.opacity = 0;

                  returnButtonNum = 0;

                  shoesTk.innerHTML = "오 정말 멋진 신발인걸?";
                } else {
                  shoesinfoBox[0].style.opacity = 0;
                  imgBox.style.transform = "translateX(-60vw)";
                  textBox.style.transform = "translateX(60vw)";
                  shoesinfoBox[0].style.backgroundColor = "white";

                  returnButton02.style.display = "none";

                  shoesCh.style.transform = "translateX(100vw)";
                }
              });

              shoesinfoBox[0].style.opacity = 1;

              setTimeout(() => {
                imgBox.style.transform = "translateX(0)";
                textBox.style.transform = "translateX(0)";
              }, 300);

              buyButton.addEventListener("click", () => {
                returnButtonNum = 1;
                imgBox.style.transform = "translateX(-60vw)";
                textBox.style.transform = "translateX(60vw)";
                setTimeout(() => {
                  shoesinfoBox[0].style.backgroundColor = "black";
                  buyQrCode.style.opacity = 1;

                  shoesTk.innerHTML = "화면의 QR코드를 찍어봐!";
                }, 600);
              });
            }
          }
        }
      });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 옷 페이지

    let clothes = document.getElementsByClassName("clothes");

    let clothimg = document.getElementById("clothimg");
    let clothimg02 = document.getElementById("clothimg02");

    let smallClothes = document.getElementsByClassName("smallClothes");

    let chTalk = document.getElementsByClassName("chTalk");
    let chTalkContent = document.getElementById("chTalkContent");
    let chTalkContent2 = document.getElementById("chTalkContent2");

    let clothNum = 0;

    let clothCharacters = document.getElementsByClassName("ctCharacter");

    for (let y = 0; y < clothes.length; y++) {
      clothes[y].addEventListener("click", () => {
        let qrCode = document.getElementById("qrCode");

        qrCode.style.opacity = 0;

        if (y < 12) {
          clothCharacters[0].src = "img/characters/clothCharacterDown0.gif";
          setTimeout(() => {
            clothCharacters[0].src =
              "img/characters/clothCharacterStanding0.gif";
          }, 600);
        } else {
          clothCharacters[1].src = "img/characters/clothCharacterDown1.gif";
          setTimeout(() => {
            clothCharacters[1].src =
              "img/characters/clothCharacterStanding1.gif";
          }, 600);
        }
        if (y < 12) {
          chTalk[0].style.transform = "translateX(0)";
          let talkList = [
            "오!! 완전 잘어울리는데?",
            "너보다 잘 어울리는 사람이 없겠는데?",
            "와~ 너무 잘어울리는데?",
          ];
          let randomTalk = Math.floor(Math.random() * talkList.length);
          chTalkContent.innerHTML = talkList[randomTalk];
          setTimeout(() => {
            chTalkContent.innerHTML =
              "직원에게 말하면<br>어디있는지 알려줄거야!";
          }, 4000);
        } else {
          chTalk[1].style.transform = "translateX(0)";
          let talkList = [
            "오!! 완전 잘어울리는데?",
            "너보다 잘 어울리는 사람이 없겠는데?",
            "와~ 너무 잘어울리는데?",
          ];
          let randomTalk = Math.floor(Math.random() * talkList.length);
          chTalkContent2.innerHTML = talkList[randomTalk];
          setTimeout(() => {
            chTalkContent2.innerHTML =
              "이 옷을 구매하고 싶으면 나를 터치해 줘!";
          }, 4000);
        }
        if (y < clothes.length / 2 / 2) {
          clothes[y].style.transform =
            "translateX(-" +
            (clothes[y].clientWidth + clothes[y].offsetLeft) +
            "px)";
          clothimg.style.transform = "translateY(130vw)";
        } else if (y < clothes.length / 2) {
          clothes[y].style.transform =
            "translateX(" +
            (clothes[y].clientWidth + clothes[y].offsetLeft) +
            "px)";
          clothimg.style.transform = "translateY(130vw)";
        } else if (y < clothes.length / 2 + clothes.length / 2 / 2) {
          clothes[y].style.transform =
            "translateX(-" +
            (clothes[y].clientWidth + clothes[y].offsetLeft) +
            "px)";
          clothimg02.style.transform = "translateY(130vw)";
        } else {
          clothes[y].style.transform =
            "translateX(" +
            (clothes[y].clientWidth + clothes[y].offsetLeft) +
            "px)";
          clothimg02.style.transform = "translateY(130vw)";
        }
        setTimeout(() => {
          let change1 = clothChangeimg.src;
          let change2 = clothChangeimg02.src;
          if (y < 12) {
            clothChangeimg.src = smallClothes[y].src;
            smallClothes[y].src = change1;
          } else {
            clothChangeimg02.src = smallClothes[y].src;
            smallClothes[y].src = change2;
          }
          clothes[y].style.transform = "translateX(0vw)";
          clothimg.style.transform = "translateY(0)";
          clothimg02.style.transform = "translateY(0)";

          clothNum = y + 1;
        }, 600);
      });
    }

    let qrCode = document.getElementById("qrCode");

    chTalk[1].addEventListener("click", () => {
      if (
        chTalkContent2.innerHTML === "이 옷을 구매하고 싶으면 나를 터치해 줘!"
      ) {
        qrCode.style.display = "flex";
        setTimeout(() => {
          qrCode.style.opacity = "1";
        }, 300);
      }
    });

    let closeButton = document.getElementById("closeButton");

    closeButton.addEventListener("click", () => {
      qrCode.style.opacity = 0;
      closeButton.style.transform = "rotate(360deg)";
      setTimeout(() => {
        qrCode.style.display = "none";
        closeButton.style.transform = "rotate(0deg)";
      }, 300);
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 신발 페이지 선택하면 발동되는 애니메이션

    firstLeftButton.addEventListener("click", () => {
      buttonNum01 = buttonNum01 + 100;

      firstLeftButton.style.transition = "all 0.9s";
      firstRightButton.style.transition = "all 0.9s";
      firstLeftButton.style.transform = "translate(-42vw)";
      firstRightButton.style.transform = "translate(42vw)";
      shoesTalk[0].style.opacity = "0";

      setTimeout(() => {
        firstRightText.innerHTML = "캐<br>주<br>얼";
        firstRightButton.style.transform = "translate(20.356vw)";

        if (buttonNum01 > -100) {
          firstLeftButton.style.transform = "translateX(-42vw)";
          shoesTalk[0].style.opacity = "1";
          shText.innerHTML = trainingTextArray[0];
          var trainingText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = trainingTextArray[randomText];
            }, 2000);
          }, 8000);

          firstRightButton.addEventListener("click", () => {
            clearInterval(trainingText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(trainingText);
          });
        } else {
          firstLeftButton.style.transform = "translateX(-20.356vw)";
          firstLeftText.innerHTML = "트<br>레<br>이<br>닝";
          firstRightText.innerHTML = "러<br>닝";

          shoesTalk[0].style.opacity = "1";
          shText.innerHTML = casualTextArray[0];
          var casualText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = casualTextArray[randomText];
            }, 2000);
          }, 8000);

          firstLeftButton.addEventListener("click", () => {
            clearInterval(casualText);
          });
          firstRightButton.addEventListener("click", () => {
            clearInterval(casualText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(casualText);
          });
        }
        shoeslistBox[0].style.transform = "translateX(" + buttonNum01 + "vw)";
      }, 900);
    });

    firstRightButton.addEventListener("click", () => {
      buttonNum01 = buttonNum01 - 100;
      shoesTalk[0].style.opacity = "0";

      firstLeftButton.style.transition = "all 0.9s";
      firstRightButton.style.transition = "all 0.9s";
      firstLeftButton.style.transform = "translate(-42vw)";
      firstRightButton.style.transform = "translate(42vw)";

      setTimeout(() => {
        firstLeftText.innerHTML = "캐<br>주<br>얼";
        firstLeftButton.style.transform = "translate(-20.356vw)";

        if (buttonNum01 < -100) {
          firstRightButton.style.transform = "translateX(42vw)";

          shoesTalk[0].style.opacity = "1";
          shText.innerHTML = runningTextArray[0];
          var runningingText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = runningTextArray[randomText];
            }, 2000);
          }, 8000);

          firstLeftButton.addEventListener("click", () => {
            clearInterval(runningingText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(runningingText);
          });
        } else {
          firstRightButton.style.transform = "translateX(20.356vw)";
          firstLeftText.innerHTML = "트<br>레<br>이<br>닝";
          firstRightText.innerHTML = "러<br>닝";

          shoesTalk[0].style.opacity = "1";
          shText.innerHTML = casualTextArray[0];
          var casualText = setInterval(function casual() {
            shoesTalk[0].style.opacity = "0";
            setTimeout(() => {
              shoesTalk[0].style.opacity = "1";
              let randomText = Math.floor(Math.random() * 3);
              shText.innerHTML = casualTextArray[randomText];
            }, 2000);
          }, 8000);

          firstLeftButton.addEventListener("click", () => {
            clearInterval(casualText);
          });
          firstRightButton.addEventListener("click", () => {
            clearInterval(casualText);
          });

          backButtons[3].addEventListener("click", () => {
            clearInterval(casualText);
          });
        }
        shoeslistBox[0].style.transform = "translateX(" + buttonNum01 + "vw)";
      }, 900);
    });

    let titleArray01 = [
      "나이키 시티 트레이너 3",
      "나이키 프리 메트콘 4",
      "나이키 레전드 에센셜 2",
      "나이키 모티바",
      "나이키 로말레오 4",
      "나이키 메트콘 8 AMP",
      "나이키  데이브레이크",
      "킬샷 2 레더",
      "에어맥스 2017",
      "나이키  에어포스 1 유니티 로우",
      "에어맥스 1 프리미엄",
      "ACG 목",
      "나이키 리액트 마일러3",
      "나이키 페가수스 트레일3",
      "나이키 페가수스 39",
      "나이키 리액트 인피니티 런 FK 2",
      "줌플라이  5",
      "페가수스 트레일4",
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
      "nineth",
      "tenth",
      "eleventh",
      "twelveth",
      "thirteenth",
      "fourteenth",
      "fifteenth",
      "sixteenth",
      "seventeenth",
      "eighteenth",
    ];

    let paragraphArray01 = [
      "나이키 시티 트레이너3는 스트레칭 부터 스프린트까지, 모든 타입의 워크아웃에 최적화되어 있습니다. 통기성과 내구성이 뛰어난 매쉬를 사용하고 부드러운 파일론 폼이 강도높은 워크아웃 중에도 충격을 흡수해 줍니다.",
      "유연성과 안정성을 겸비한 나이키 프리 메트콘 4는 트레이닝 프로그램에서 최고의 기량을 발휘하도록 도와줍니다. 한층 새로워진 '체인 링크' 메쉬 소재는 민첩성 훈련을 하며 속도를 높이는 동안에도 시원하고 유연한 착화감을 전해주며, 중족부와 뒤꿈치의 지지력으로 무거운 중량을 들어 올리는 웨이트 트레이닝 시 발을 든든하게 잡아줍니다.",
      "나이키 레전드 에센셜 2 은 통기성이 뛰어나고 무거운 무게를 들 때도 뛰어난 안정성을 제공합니다. 마모가 심한 부분을 견고한 고무 트레드로 강화해 다양한 트레이닝 지면에서 접지력을 제공합니다.",
      "나이키 모티바는 하루 중 어떤 일을 마주하든 나만의 페이스로 나아갈 수 있도록 도와줍니다. 독특한 패턴의 밑창과 과장된 로커 디테일이 만나 매우 매끄럽고, 쿠셔닝이 뛰어나며, 편안한 착화감을 선사합니다. 이는 편안하게 걷고, 조깅하고, 러닝한 후 돌아와 다음 산책에 여유롭게 나설 수 있는 자신감을 얻는다는 뜻이죠. 일상 속 모든 움직임을 위한 최적의 지지력을 선사합니다.",
      "나이키 로말레오 4는 힘을 발휘할 수 있는 안정적인 디자인으로 지지력이 뛰어난 중창과 큼직하고 평평한 밑창이 특징입니다. 중족부의 조절식 스트랩은 강도 높은 운동 중에 발을 안정감 있게 고정해 줍니다.",
      "이 믿을 수 있는 나이키 트레이닝화는 이전 버전보다 더 가볍고 통기성이 뛰어난 갑피를 적용해 내구성과 편안함에 관한 나이키의 기준을 충족합니다. 유산소 운동은 더욱 가볍게, 리프팅은 더욱 힘차게 하며 운동을 자신감 있게 즐겨 보세요. 이 메트콘 8 AMP는 스모키 카모플라주 컬러로 눈에 잘 띄지 않아, 사람들이 떠들고 자랑하는 동안 전력을 다해 운동에 집중할 수 있도록 도와줍니다.",
      "1979년에 출시되었던 나이키 데이브레이크가 화려했던 과거를 재현합니다. 예전과 같은 고무 와플 밑창으로 진정한 빈티지 스타일을 즐겨보세요.",
      "오리지널 로우 프로파일 테니스 신발에서 영감을 얻은 나이키 킬샷 2는 다양한 텍스처의 가죽으로 갑피를 새롭게 재해석하여 신선한 룩을 완성합니다. 부드러운 스웨이드부터 완벽한 광택의 매끄러운 가죽까지 코트 밖에서도 현대적인 감각을 자랑합니다. 최고의 퍼포먼스를 위한 고무 검 소재 밑창이 포인트를 더합니다.",
      "발 전체 길이로 맥스 에어 유닛이 적용된 나이키 에어맥스 2017은 많은 사랑을 받아온 푹신한 착화감을 전달합니다. 갑피는 조널 서포트와 통기성을 갖춘 심리스 구조이며, 몰드 폼이 발 중간 부분과 뒤꿈치를 감싸 안정감을 줍니다.",
      "여전히 눈부시게 빛나는 오리지널 농구화를 만나보세요. 코트에서 누리는 편안함에 코트 밖에서 즐기는 멋까지 간직한 이 신발은 80년대에서 영감을 받은 구조, 과감한 디테일, 농구 특유의 스타일 등 익숙한 디자인에 신선한 반전을 더했습니다. ",
      "에어맥스 1 '더티 데님'은 많은 사랑을 받았던 2003년 모델에서 영감을 받은 아이템으로, 스니커즈의 리더인 에어맥스에 완벽한 빈티지의 매력을 더했습니다. 무심한 듯 매일 신어보세요. 프리미엄 가죽과 워시드 데님은 시간이 흐르면서 더욱 매력적인 룩을 연출합니다. ",
      "공기가 잘 통하는 리넨 어퍼가 새소리를 들으며 햇볕을 쬐거나 야생 속으로 모험을 떠날 때 완벽한 여름철 스타일을 선사합니다. 기온이 떨어져도, 보온성을 갖춘 소재가 불가에서 포근함을 느끼게 해줍니다. 구름 위를 누비는 듯한 착용감을 선사하는 드롭인 미드솔과 핏을 고정하도록 업그레이드된 끈 조임 시스템을 확인해 보세요.",
      "모든 러닝에서 누려 마땅한 쿠션감과 편안함을 만나보세요. 나이키 리액트 마일러 3은 발이 도로에 닿는 순간 부드럽고 매끄러운 느낌을 선사합니다. 뒤꿈치 안정성을 강화해 안정감을 더했으며, 오래 지속되는 접지력으로 단거리와 장거리 러닝 모두 거뜬하게 뛸 수 있습니다. ",
      "나이키 페가수스 트레일3는 많은 이들이 사랑하는 편안한 쿠션감을 그대로 유지하고 클래식 페가수스 룩에 착안한 디자인 요소를 더한 제품입니다. 거친 지형에서도 달릴 수 있는 견고한 접지력을 갖추고 있습니다. 종족부의 지지력을 높여 러닝 중에 안정감을 느낄 수 있습니다.",
      "정해진 루트를 달리든 적극적으로 새 루트를 찾아 달리든, 러닝은 일상의 습관입니다. 따라서 그에 맞는 신발이 필요합니다. 편안하고 직관적인 디자인이 든든한 지지력으로 발을 고정해 주며, 반응성이 뛰어난 줌 에어 쿠셔닝이 발걸음에 탄력을 더해줍니다. ",
      "견고하고 내구성이 우수하며 장거리 러닝 내내 발을 안정적으로 잡아줍니다. 플라이와이어 기술이 발 중간 부분에 추가적인 지지력과 안정감을 선사합니다. 또한 나이키 리액트 기술을 적용한 견고한 경량 폼이 매끄럽고 반응성이 뛰어난 착용감을 선사하고 발이 지면에세 떨어질 때는 유연성을, 발이 앞으로 나아갈 때는 매끄러운 느낌을, 발이 지면에 닿을 때는 쿠셔닝을 제공합니다.",
      "가장 좋아하는 레이스에 참가할 때도, 그 이후 몇 달 후에도 얼마든지 신을 수 있는 내구성 좋은 디자인으로 주말의 트레이닝 러닝과 레이스 당일 사이의 차이의 간격을 좁혀줍니다. 편안함과 안정감을 제공하면서도 추진력을 제공해 속도감과 산뜻한 느낌을 선사합니다. 이런 종류의 다기능성은 러닝 제품군에서 쉽게 찾아볼 수 없습니다. 모든 걸 가질 순 없다고 누가 말했던가요?",
      "지지력과 탄력 있는 착화감을 선사하여 러닝을 계속 이어 나가게 도와줍니다. 험준한 지면에서 러닝을 지속할 수 있도록 언더풋 접지력을 제공하며 도로에서도 부드러운 착화감을 선사합니다. 신발 끈으로 중족부 지지력을 조절해 최상의 핏과 착화감을 찾아낼 수 있습니다. ",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
      "//",
    ];

    let mapPosition = [
      "현재 자리에서 <br> 좌측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 좌측 하단으로 <br> 이동하세요!",
      "현재 자리에서 <br> 우측으로 <br> 이동하세요!",
    ];

    let returnButton = document.getElementById("returnBox");
    let shoesImg = document.getElementsByClassName("shoesimg");

    for (let q = 0; q < shoes.length; q++) {
      shoes[q].addEventListener("click", function shoesClick() {
        if (q < 18) {
          returnButton.style.display = "flex";
          shoesTalk[0].style.opacity = "0";
        }
        shoes[q].style.padding = "1.5vw";
        shoes[q].style.justifyContent = "space-between";

        if (q < 18) {
          firstLeftButton.style.transition = "all 0.9s";
          firstRightButton.style.transition = "all 0.9s";
          firstLeftButton.style.transform = "translate(-42vw)";
          firstRightButton.style.transform = "translate(42vw)";
        } else {
          secondLeftButton.style.transition = "all 0.9s";
          secondRightButton.style.transition = "all 0.9s";
          secondLeftButton.style.transform = "translate(-42vw)";
          secondRightButton.style.transform = "translate(42vw)";
        }
        touchPreventionBox.style.opacity = "1";

        let shoesPositionX =
          shoes[q].parentNode.parentNode.offsetLeft +
          shoes[q].parentNode.parentNode.clientWidth / 2 -
          (shoes[q].offsetLeft + shoes[q].clientWidth / 2);

        let shoesPositionY =
          window.innerHeight / 1.5 -
          (shoes[q].offsetTop + shoes[q].clientHeight / 2);

        shoes[q].style.transition = "all 1.3s";

        shoes[q].style.position = "relative";

        shoes[q].style.transform =
          "translate(" +
          shoesPositionX +
          "px," +
          shoesPositionY +
          "px) scale(1.5)";

        setTimeout(() => {
          shoes[q].style.borderRadius = "0.8vw";
          shoes[q].style.transform =
            "translate(" +
            shoesPositionX +
            "px," +
            shoesPositionY +
            "px) scale(4)";
          shoesImg[q].style.transform = " translateY(2vw) scale(0.5)";

          let touchPrevention =
            document.getElementsByClassName("touchPrevention");
          touchPrevention[0].style.display = "flex";

          let touchPreventionBox =
            document.getElementById("touchPreventionBox");

          let showBox = document.getElementById("mapButton");
          let buttonName = document.getElementById("buttonName");

          let h1 = document.createElement("h1");
          let p = document.createElement("p");
          let div = document.createElement("div");

          let mapContent = document.getElementById("mapimg");
          let mapimg = document.getElementById("mapimgBox");
          let mapimgText = document.getElementById("mapimgText");

          shoes[q].append(h1);
          shoes[q].append(p);
          shoes[q].append(div);

          returnButton.addEventListener("click", () => {
            returnButton.style.display = "none";
            shoes[q].style.justifyContent = "center";
            shoesImg[q].style.opacity = "1";
            shoesImg[q].style.transform = " translateY(0vw) scale(1)";

            shoesTalk[0].style.opacity = "1";

            mapimg.style.opacity = "0";
            mapimgText.style.opacity = "0";

            touchPreventionBox.style.opacity = "0";
            showBox.style.width = "54%";
            showBox.style.marginBottom = "5.5vw";
            showBox.style.position = "absolute";
            showBox.style.transform = "translateY(0vw) scale(1)";

            if (q < 6) {
              firstLeftButton.style.transform = "translate(-42vw)";
              firstRightButton.style.transform = "translate(20.356vw)";
            } else if (q < 12) {
              firstLeftButton.style.transform = "translate(-20.356vw)";
              firstRightButton.style.transform = "translate(20.356vw)";
            } else if (q < 18) {
              firstLeftButton.style.transform = "translate(-20.356vw)";
              firstRightButton.style.transform = "translate(42vw)";
            } else if (q < 24) {
              secondLeftButton.style.transform = "translate(-42vw)";
              secondRightButton.style.transform = "translate(20.356vw)";
            } else if (q < 30) {
              secondLeftButton.style.transform = "translate(-20.356vw)";
              secondRightButton.style.transform = "translate(20.356vw)";
            } else if (q < 36) {
              secondLeftButton.style.transform = "translate(-20.356vw)";
              secondRightButton.style.transform = "translate(42vw)";
            }

            shoes[q].style.borderRadius = "100%";
            shoes[q].style.transform = "translate(0, 0) scale(1)";
            showBox.style.opacity = "0";
            shoes[q].removeChild(h1);
            shoes[q].removeChild(p);
            shoes[q].removeChild(div);
            for (let w = 0; w < shoes.length; w++) {
              if (w != q) {
                shoes[w].style.opacity = "1";
                shoes[w].style.pointerEvents = "auto";
              }
            }
            setTimeout(() => {
              touchPrevention[0].style.display = "none";
              mapContent.style.display = "none";
              buttonName.style.opacity = "1";
            }, 500);
          });

          if (q < 18) {
            buttonName.innerHTML = "위치보기";
          }

          shoes[q].childNodes[3].innerHTML = titleArray01[q];
          shoes[q].childNodes[4].innerHTML = paragraphArray01[q];
          setTimeout(() => {
            shoes[q].childNodes[1].style.opacity = "1";
            shoes[q].childNodes[3].style.opacity = "1";
            shoes[q].childNodes[4].style.opacity = "1";
            shoes[q].childNodes[5].style.opacity = "1";
            showBox.style.opacity = "1";
          }, 600);
          showBox.addEventListener("click", () => {
            shoes[q].childNodes[1].style.opacity = "0";
            shoes[q].childNodes[3].style.opacity = "0";
            shoes[q].childNodes[4].style.opacity = "0";
            shoes[q].childNodes[5].style.opacity = "0";
            buttonName.style.opacity = "0";
            showBox.style.transition = "all 0.9s";
            showBox.style.width = "12%";
            showBox.style.marginBottom = "0";
            showBox.style.position = "absolute";
            showBox.style.transform =
              "translateY(-" +
              (touchPreventionBox.clientHeight / 2 - showBox.clientHeight / 2) +
              "px)";

            mapContent.style.display = "flex";
            if (q < 18) {
              mapimg.src = "img/mapimg/mapimg" + q + ".png";
              mapimgText.innerHTML = mapPosition[q];
            }

            setTimeout(() => {
              showBox.style.transform =
                "translateY(-" +
                (touchPreventionBox.clientHeight / 2 -
                  showBox.clientHeight / 2) +
                "px) scale(12)";
              mapimg.style.opacity = "1";
              mapimgText.style.opacity = "1";
            }, 1000);
          });
        }, 400);

        for (let w = 0; w < shoes.length; w++) {
          if (w != q) {
            shoes[w].style.opacity = "0";
            shoes[w].style.pointerEvents = "none";
          }
        }
      });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 카메라를 활용한 신발 안내 화면

    let shoesInfo = document.getElementById("shoesinfo");
    let smallInfo = document.getElementsByClassName("smallInfo");

    for (let i = 0; i < smallInfo.length; i++) {
      smallInfo[i].addEventListener("click", () => {
        let infoData = shoesInfo.src;

        if (smallInfo[i].src.indexOf("bin") > 0) {
          shoesInfo.src = shoesInfo.src;
          smallInfo[i].src = smallInfo[i].src;
        } else {
          shoesInfo.src = smallInfo[i].src;

          smallInfo[i].src = infoData;
        }
      });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////// 행동이 없으면 새로고침하는 기능

    // 페이지가 로드되었을 때 실행되는 함수
    window.addEventListener("load", function () {
      // 5분(300000 밀리초) 타이머 시작
      var timer = setTimeout(refreshPage, 300000);

      // 클릭 이벤트가 발생하면 타이머를 재설정
      document.addEventListener("click", function () {
        clearTimeout(timer);
        timer = setTimeout(refreshPage, 300000);
      });
    });

    // 페이지를 새로고침하는 함수
    function refreshPage() {
      location.reload();
    }
  }
};
