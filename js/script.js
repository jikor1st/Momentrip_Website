console.log('모먼트립 파이팅!');

/* 요소 불러오기 */
const section01 = document.querySelector('.section01');
const section02 = document.querySelector('.section02');
const section03 = document.querySelector('.section03');
// const section01 = document.querySelector('.section01');
// const section01 = document.querySelector('.section01');
// const section01 = document.querySelector('.section01');

const headerLogo = document.querySelector('header > .logo');
const titleAll = document.querySelector('.titleAll');

/*앱화면 */
const fixed_background = document.querySelector('.fixed_background');
const mmm_frame = document.querySelector('.mmm_frame');
const mmm_con = document.querySelector('.mmm_con');
let mmm_El = document.querySelectorAll('.mmm_El');
const mmm_logo = document.querySelector('.mmm_logo');
const mainVideo = document.querySelector('.mainVideo');
const mmm_icon = document.querySelector('.icon');

const mainCharacter_con = document.querySelector('.main_character_con'); // 주인공캐릭터_con
const mainCharacter = document.querySelector('.main_character'); // 주인공캐릭터
const cha_shadow = document.querySelector('.cha_shadow');

/*section02 */
const childu_con = document.querySelector('.childu_con'); // 칠두캐릭터_con
const childu = document.querySelector('.childu');
const childu_bubble = document.querySelector('.cha02_bub'); // 칠두 말풍선
/* 건물 불러오기 */
let building = document.querySelectorAll('.building');
building = Array.prototype.slice.call(building);
/*section intro02 */
const intro_sec02 = document.querySelector('.intro_sec02');

/* section03 */
const mountain_namsan = document.querySelector('.mountain_namsan'); // 남산타워산배경
const plain_sec03 = document.querySelector('.background_sec03 > .plane');
const yeahna_con = document.querySelector('.yeahna_con');
const yeahna = document.querySelector('.yeahna');
const yeahna_bubble = document.querySelector('.cha03_bub');
//섹션03 말풍선모음
const bC01 = document.querySelector('.bubCon_sec03 > .bC01');
const bC02 = document.querySelector('.bubCon_sec03 > .bC02');
const bC03 = document.querySelector('.bubCon_sec03 > .bC03');
//섹션 03 설명
const intro_sec03 = document.querySelector('.intro_sec03');
// 섹션 03 풀들
let sec03Grass = document.querySelectorAll('.yeahna_con > .grass');

/*section04 불러오기 */
const mainVideo_intro = document.querySelector('.mainVideo_intro');
const mountain_sec04 = document.querySelector('.mountain_sec04');

/*section05 불러오기 */
const environment_sec05 = document.querySelector('.environment_sec05');
const ship = document.querySelector('.sea > .ship');
const sea = document.querySelector('.sea');

/*section06 불러오기 */
const today = document.querySelector('.today');
const service01 = document.querySelector('.service01');

const ground = document.querySelector('.ground'); // 땅
const ground_dashed = document.querySelector('.ground_dashed'); // 땅 선

// 윈도우가 로드되기 전.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
/* 변수 생성 */
let scl = 0;
let mcSrc01 = 0;
let mcSrc02 = 0;
let colorR = 0;
let colorG = 0;
let colorB = 0;


function onScrollWindow(e){
    scl = window.scrollY;
    // 스크롤값 백퍼센트 값으로 반환.
    //scl = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))*100;
    
    console.log(scl);
    //motion.style.left = 0 + ((scl - 500) * 50)/1500 + "%";
        //                이전값 스크롤 시작점 도달값 두개차
    if(scl <= 500){
        mmm_frame.style.top = "50%";
        mmm_frame.style.opacity ="100%";
        section01.style.transform = "translateX(0)";
        mainCharacter_con.style.bottom = "22.5%";
        mainCharacter_con.style.transform = "translateX(-50%) rotateZ(0)";
        headerLogo.style.left = "50%";
        headerLogo.style.top = "39.274%";
        headerLogo.style.opacity = "100%";
        titleAll.style.opacity = "0";
        titleAll.style.visibility = "hidden";
    }
    else if(scl >= 500){
        mainCharacter_motion(); // 주인공 캐릭터 모션
    }
    if(scl >= 800){
        mmm_frame.style.top = "100%";
        mmm_frame.style.opacity ="0%";
        headerLogo.style.opacity = "0";
        titleAll.style.opacity = "100%";
        titleAll.style.visibility = "visible";
    }
    // 주인공 경사 내려감
    // mmm frame 초기 사라지는 인터랙션
    if(scl >= 500 && scl < 800){
        mmm_frame.style.transition = "0.3s";
        mmm_frame.style.top = 50 + ((scl - 500) * (50 + 50)/300) + "%";
        mmm_frame.style.opacity = 100 - (scl - 500) * (50+50)/300 + "%";
        headerLogo.style.transition = "0.8s";
        headerLogo.style.opacity = 100 - ((scl - 500) * 100/300) + "%";
        titleAll.style.visibility = "visible";
        titleAll.style.transition = "0.1s";
        titleAll.style.opacity = 0 + ((scl - 500) * 100/300) + "%";
        // headerLogo.style.top = "4.479%";
    }
    if(scl <= 250){
        mainCharacter.style.transform = "translate(-50%,-65%)  scale(1.4) rotateZ(-12deg) rotateX(0)";
        cha_shadow.style.bottom = "-15px";
        cha_shadow.style.transform = "translate(-50%,0) scaleX(10)";
        cha_shadow.style.width = "15px";
        cha_shadow.style.height = "15px";
    }

    if(scl >= 250){
        mainCharacter.style.transition = "0.4s ease-in";
        mainCharacter.style.transform = "translate(-50%,0)  scale(1) rotateZ(0) rotateX(0)";
        cha_shadow.style.transition = "0.4s ease-in";
        cha_shadow.style.bottom = "-3.8px";
        cha_shadow.style.transform = "translate(-50%,0) scaleX(18)";
        cha_shadow.style.width = "6px";
        cha_shadow.style.height = "6px";
    }

    if(scl >= 750){
        mainCharacter_con.style.bottom = "13.5%";
    }
    if(scl >= 1000){
        mainCharacter_con.style.bottom = "3%";
        mainCharacter_con.style.transform = "translateX(-50%) rotateZ(0)";
    }
    if(scl >= 500 && scl < 750){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.bottom = 22.5 + (((scl-500) * 9)/250*-1) + "%";
        mainCharacter_con.style.transform = "translateX(-50%) rotateZ(" + ((scl - 500) * 8.5)/250 + "deg)";
    }
    else if(scl >= 750 && scl < 1000){
        mainCharacter_con.style.bottom = 13.5 + (((scl - 750) * 10.5)/250*-1) + "%";
        mainCharacter_con.style.transform = "translateX(-50%) rotateZ(" + 8.5 + ((scl - 750) / 8.5)/ 350 + "deg)"; // 해결이 안됨
        // mainCharacter_con.style.transform = "rotateZ(0)";
    }
    if(scl >= 500 && scl < 1500){
        section01.style.transition = "0.1s";
        section01.style.transform = "translateX(" + (0 + ((scl - 500) * 160)/1000)*-1 + "%)";
    }
    if(scl >= 1900){
        titleAll.style.opacity = "0";
    }
    if(scl >= 1400 && scl < 1900){
        titleAll.style.opacity = 100 - ((scl - 1400) * 100 / 500) + "%";
    }
    /*section01,02 visible 제어 */
    if(scl >= 1500 && scl < 3250){
        section01.style.visibility = "hidden";
        section02.style.visibility = "visible";
    }
    else if(scl < 1500){
        section01.style.visibility = "visible";
        section02.style.visibility = "hidden";
    }
    if(scl < 1350){
        ground.style.backgroundColor = "rgb(99,199,164)";
    }
    else if(scl > 1700){
        ground.style.backgroundColor = "rgb(99,107,104)";
    }
    if(scl >= 1350 && scl < 1700){
        ground.style.transition = "0.1s";
        colorG = 199 + ((scl-1350) * (199-107)/350*-1);
        colorB = 164 + ((scl-1350) * (164-104)/350*-1);
        ground.style.backgroundColor = "rgb(99," + colorG + "," + colorB + ")";
        //console.log(ground.style.backgroundColor);
    }
    /*section02 건물 컨트롤 */
    if(scl < 1700){
        building[0].style.left = "100%";
        building[1].style.left = "100%";
        building[2].style.left = "100%";
        building[3].style.left = "100%";
        building[4].style.left = "100%";
        building[5].style.left = "100%";
        childu_con.style.left = "100%";
        childu_bubble.style.marginLeft = "0";
        mainCharacter_con.style.left = "50%";
        ground_dashed.style.left = "100%";
    }
    
    if(scl >= 2550){
        building[0].style.left = "5%";
        building[1].style.left = "8.59%";
        building[2].style.left = "14.89%";
        building[3].style.left = "29.01%";
        building[4].style.left = "35%";
        building[5].style.left = "42.5%";
        // 칠두 크기 키우기
        childu.style.transition = "1s";
        childu.style.transform = "scale(6)";
        childu_con.style.left = "28%";
        // 칠두 말풍선 없애기.
        childu_bubble.style.transition = "0.8s";
        childu_bubble.style.opacity = "0";
        childu_bubble.style.visibility = "hidden";
        childu_bubble.style.marginLeft = "-100%";

        ground_dashed.style.left = "0";
        intro_sec02.style.transition = "0.7s";
        intro_sec02.style.opacity = "1";
        intro_sec02.style.transform = "translateY(0)";
    }
    if(scl >= 2800){
        mainCharacter_con.style.left = "110%";
        
    }
    
    if(scl >= 1700 && scl < 2550){
        for(var i = 0;i < building.length;i++){
            building[i].style.transition = "0.1s";
        }
        building[0].style.left = 100 - ((scl - 1700) * (100-5)/850) + "%";
        building[1].style.left = 100 - ((scl - 1700) * (100-8.59)/850) + "%";
        building[2].style.left = 100 - ((scl - 1700) * (100-14.89)/850) + "%";
        building[3].style.left = 100 - ((scl - 1700) * (100-29.01)/850) + "%";
        building[4].style.left = 100 - ((scl - 1700) * (100-35)/850) + "%";
        building[5].style.left = 100 - ((scl - 1700) * (100-42.5)/850) + "%";
        childu_con.style.transition = "0.11s";
        childu_con.style.left = 100 - ((scl - 1700)* (100- 28)/850) + "%";
        childu_bubble.style.transition = "0.1s";
        childu_bubble.style.marginLeft = 0 - ((scl - 1700) * 100/850) + "%";
        ground_dashed.style.transition = "0.1s";
        ground_dashed.style.left = 100 - ((scl - 1700)* 100/850) + "%";
    }
    if(scl >= 1800 && scl < 2800){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.left = 50 + ((scl - 1800) * 110/1000) + "%";
    }
    if(scl < 2550){
        //칠두 다시원래크기로
        childu.style.transition = "0.4s";
        childu.style.transform = "scale(1)";
        //칠두 말풍선 다시 나타나기
        childu_bubble.style.visibility = "visible";
        childu_bubble.style.transition = "0.4s";
        childu_bubble.style.opacity = "100%";
        childu_bubble.style.animation = "bubble 3s linear infinite";

        intro_sec02.style.opacity = "0";
        intro_sec02.style.transform = "translateY(100px)";
    }

    /*section02 사라지기 */
    //section 건물 사라지게, 칠두사라지게, 그라운드선 없어지게
    if(scl >= 2800 && scl < 3200){
        for(var i = 0;i < building.length;i++){
            building[i].style.transition = "0.1s";
        }
        building[0].style.left = 5 - ((scl - 2800) * (5+15)/400) + "%";
        building[1].style.left = 8.59 - ((scl - 2800) * (8.59+15)/400) + "%";
        building[2].style.left = 14.89 - ((scl - 2800) * (14.89+15)/400) + "%";
        building[3].style.left = 29.01 - ((scl - 2800) * (29.01+15)/400) + "%";
        building[4].style.left = 35 - ((scl - 2800) * (35+15)/400) + "%";
        building[5].style.left = 42.5 - ((scl - 2800) * (42.5+15)/400) + "%";
        childu_con.style.transition = "0.15s";
        childu_con.style.left = 28 - ((scl - 2800)* (28 + 20)/400) + "%";
        colorG = 107 + ((scl - 2800) * (199 - 107)/400);
        colorB = 104 + ((scl - 2800) * (164 - 104)/400);
        ground.style.transition = "0.1s";
        ground.style.backgroundColor = "rgb(99," + colorG + "," + colorB + ")";
        ground_dashed.style.transition = "0.1s";
        ground_dashed.style.left = 0 - ((scl - 2800)*100/400) + "%";
    }
    if(scl >= 3200){
        building[0].style.left = "-15%";
        building[1].style.left = "-15%";
        building[2].style.left = "-15%";
        building[3].style.left = "-15%";
        building[4].style.left = "-15%";
        building[5].style.left = "-15%";
        childu_con.style.left = "-20%";
        ground.style.backgroundColor = "rgb(99,199,164)";
        ground_dashed.style.left = "-100%";
    }
    if(scl >= 3000){
        //칠두 다시원래크기로
        childu.style.transition = "2s ease-out";
        childu.style.transform = "scale(1)";
        //칠두 말풍선 다시 나타나기
        childu_bubble.style.visibility = "visible";
        childu_bubble.style.transition = "0.4s";
        childu_bubble.style.opacity = "100%";
        childu_bubble.style.animation = "bubble 3s linear infinite";
        //
        intro_sec02.style.transition = "0.7s";
        intro_sec02.style.opacity = "0";
        intro_sec02.style.transform = "translateY(100px)";
    }
    if(scl >= 3250){
        section02.style.visibility = "hidden";
    }
    /*section03 영역 제어*/
    // 남산타워 배경 나오기
    if(scl >= 2900){
        section03.style.visibility = "visible";
    }
    if(scl < 2900){
        section03.style.visibility = "hidden";
        mountain_namsan.style.left = "100%";
    }
    if(scl >= 2900 && scl < 4800){
        mountain_namsan.style.transition = "0.1s";
        mountain_namsan.style.left = 100 - ((scl - 2900) * (100+59.5)/1900) + "%";  
    } 
    // 메인케릭터 다시 등장
    if(scl >= 3400){
        mainCharacter_con.style.left = "80%";
    }
    if(scl >= 2850 && scl < 3400){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.left = 110 - ((scl - 2850) * (110 - 80)/550) + "%";
    }
    
    if(scl >= 4800){
        mountain_namsan.style.left = "-59.5%";
        //예나 크기 키우기
        yeahna.style.transition = "1s";
        yeahna.style.transform = "scale(5)";
        yeahna_con.style.left = "48%";
        // 풀크기 키우기
        for(var i =0;i < sec03Grass.length;i++){
            sec03Grass[i].style.transition = "1s";
            sec03Grass[i].style.transform = "scale(4)";
            sec03Grass[0].style.transform = "rotateZ(-5deg) scale(4)";
        }
        sec03Grass[0].style.marginLeft = "-40%";
        sec03Grass[1].style.marginLeft = "30%";
        sec03Grass[2].style.marginLeft = "55%";
        //예나 말풍선 안보이게
        yeahna_bubble.style.transition = "0.8s";
        yeahna_bubble.style.opacity = "0";
        // yeahna_bubble.style.marginLeft = "-100%";
        //말풍선 모음 등장
        bC01.style.transition = "0.7s";
        bC01.style.opacity = "1";
        bC01.style.bottom = "0";
        bC02.style.transition = "0.7s 0.15s";
        bC02.style.opacity = "1";
        bC02.style.bottom = "0";
        bC03.style.transition = "0.7s 0.3s";
        bC03.style.opacity = "1";
        bC03.style.bottom = "0";
        //설명 section03등장
        intro_sec03.style.transition = "0.7s";
        intro_sec03.style.opacity = "1";
        intro_sec03.style.transform = "translateY(0)";
    }
    // 예나 등장
    if(scl >= 3500 && scl < 4800){
        yeahna_con.style.transition = "0.1s";
        yeahna_con.style.left = 110 - ((scl - 3500) * (110 - 48)/1300) + "%";
        yeahna_bubble.style.transition = "0.1s";
        yeahna_bubble.style.marginLeft = 0 - ((scl - 3500) * 50/1300) + "%";
    }
    if(scl < 4800){
        // 예나 다시 원래 크기로
        yeahna.style.transition = "1s";
        yeahna.style.transform = "scale(1)";
        yeahna_bubble.style.transition = "0.8s";
        yeahna_bubble.style.opacity = "100%";
        // 풀 원래크기로
        for(var i =0;i < sec03Grass.length;i++){
            sec03Grass[i].style.transition = "0.4s";
            sec03Grass[i].style.transform = "scale(1)";
            sec03Grass[0].style.transform = "rotateZ(-5deg) scale(1)";
        }
        sec03Grass[0].style.marginLeft = "0";
        sec03Grass[1].style.marginLeft = "0";
        sec03Grass[2].style.marginLeft = "0";

        intro_sec03.style.transition = "0.7s";
        intro_sec03.style.opacity = "0";
        intro_sec03.style.transform = "translateY(100px)";

        bC01.style.opacity = "0";
        bC01.style.bottom = "-50px";
        bC02.style.opacity = "0";
        bC02.style.bottom = "-50px";
        bC03.style.opacity = "0";
        bC03.style.bottom = "-50px";
    }
    /*section03 제거 */
    if(scl >= 5500){
        yeahna.style.transition = "0.5s";
        yeahna.style.transform = "scale(1)";
        yeahna_bubble.style.transition = "0.4s";
        yeahna_bubble.style.opacity = "100%";
        // 풀 원래크기로
        for(var i =0;i < sec03Grass.length;i++){
            sec03Grass[i].style.transition = "0.4s";
            sec03Grass[i].style.transform = "scale(1)";
            sec03Grass[0].style.transform = "rotateZ(-5deg) scale(1)";
        }
        sec03Grass[0].style.marginLeft = "0";
        sec03Grass[1].style.marginLeft = "0";
        sec03Grass[2].style.marginLeft = "0";

        intro_sec03.style.transition = "0.7s";
        intro_sec03.style.opacity = "0";
        intro_sec03.style.transform = "translateY(100px)";

        
        bC01.style.opacity = "0";
        bC01.style.bottom = "-50px";
        bC02.style.opacity = "0";
        bC02.style.bottom = "-50px";
        bC03.style.opacity = "0";
        bC03.style.bottom = "-50px";
    }
    if(scl >= 5500 && scl < 6100){
        yeahna_con.style.transition = "0.1s";
        yeahna_con.style.left = 48 - ((scl - 5500) * (110 - 48)/600) + "%";
        mountain_namsan.style.left = -59.5 - ((scl - 5500) * (100 - 59.5)/600) + "%";

        mainCharacter_con.style.left = 80 - ((scl - 5550) * (80 - 50)/600) + "%";
    }
    if(scl >= 6100){
        yeahna_con.style.transition = "0.1s";
        yeahna_con.style.left = "-110%";
        mountain_namsan.style.left = "-100%";
        mainCharacter_con.style.left = "50%";
        section03.style.visibility = "hidden";
    }

    /*section04 영역 */
    //section04 mmm 세팅
    if(scl <= 3000){
        mmm_logo.style.top = "18.75%";
    }
    if(scl > 3000 && scl < 5000){
        for(var i=0;i<mmm_El.length;i++){
            mmm_El[i].style.transition = "0s";
            mmm_El[i].style.visibility ="visible";
        }
        fixed_background.style.zIndex = "-1";
        mmm_frame.style.transition = "0s";
        mmm_frame.style.width = "322px";
        mmm_frame.style.height = "680px";
        mmm_frame.style.borderRadius = "35px";
        mmm_frame.style.border="1px solid #DBDBDB";
        mmm_frame.style.top = "50%";
        mmm_frame.style.left = "50%";
        mmm_frame.style.transform = "translate(-50%,-50%)";
        mmm_frame.style.backgroundColor = "#ffffff";

        mmm_logo.style.top = "50%";
        mmm_logo.style.backgroundColor = "#46C6C5";

        mainVideo.style.visibilty = "hidden";
        mainVideo.style.opacity = "0%";

        mmm_con.style.transition = "0s";
        mmm_con.style.width = "295px";
        mmm_con.style.height = "640px";
    }
    if(scl >= 5000){
        for(var i=0;i<mmm_El.length;i++){
            mmm_El[i].style.transition = "0s";
            mmm_El[i].style.visibility ="hidden";
        }
        mmm_El[1].style.visibility="visible";
        mmm_frame.style.transition = "0s";
        mmm_frame.style.width = "61px";
        mmm_frame.style.height = "61px";
        mmm_frame.style.borderRadius = "15px";
        mmm_frame.style.border="none";
        mmm_frame.style.top = "30%";
        mmm_frame.style.left = "50%";
        mmm_frame.style.opacity = "0%";
        mmm_frame.style.transform = "translate(-50%,0)";

        mmm_con.style.transition = "0s";
        mmm_con.style.width = "61px";
        mmm_con.style.height = "61px";

        mainVideo.style.visibilty = "visible";
        mainVideo.style.opacity = "0%";
    }
    if(scl < 5700 && scl >= 5000){
        mmm_frame.style.opacity = "0%";
        mainVideo_intro.style.opacity = "0%";
    }
    if(scl >= 5700 && scl < 6600){
        mmm_frame.style.transition = "0.1s";
        mmm_frame.style.opacity = 0 + ((scl - 5700)*100/900) + "%";
        mainVideo_intro.style.transition = "0.1s";
        mainVideo_intro.style.opacity = 0 + ((scl - 5700)*100/900) + "%";
    }
    if(scl >= 6600){
        mmm_frame.style.opacity = "100%";
        mainVideo_intro.style.opacity = "100%";
    }
    if(scl < 5550){
        mountain_sec04.style.left = "100%";
    }else if(scl >= 8000){
        mountain_sec04.style.left = "0%";
    }
    if(scl >= 5550 && 8000){
        mountain_sec04.style.left = 100 - ((scl - 5550)*100/(8000-5550)) + "%";
    }
    // 영상으로 바뀌게끔 시작
    if(scl > 5000 && scl < 7000){
        fixed_background.style.zIndex = "-1";
        mmm_frame.style.transition = "0.1s ease";
        mmm_frame.style.width = "61px";
        mmm_frame.style.height = "61px";
        mmm_frame.style.top = "30%";
        mmm_frame.style.borderRadius = "15px";
        mmm_con.style.transition = "0.1s ease";
        mmm_con.style.width = "61px";
        mmm_con.style.height = "61px";
        mmm_con.style.borderRadius = "15px";
    }
    // 메인 영상 나오기
    if(scl >= 6800 && scl < 7400){
        mainVideo_intro.style.opacity = 100 - ((scl - 6800)*100/600) + "%";
    }
    if(scl >= 7400){
        mainVideo_intro.style.transition = "0.1s";
        mainVideo_intro.style.opacity = "0%";
    }
    if(scl >= 7000 && scl < 8500){
        fixed_background.style.zIndex = "3000";
        mmm_frame.style.transition = "0.15s ease";
        // mmm_frame.style.width = "calc(61px + (100% - 61px))";
        mmm_frame.style.width = "calc(61px + (" + ((scl-7000) *100/1500) + "% ))";
        mmm_frame.style.height = "calc(61px + (" + ((scl-7000) *100/1500) + "vh))";
        mmm_frame.style.backgroundColor = "#3EC6C6";
        mmm_frame.style.top = 30 - ((scl - 7000)*30/1500) + "%";
        mmm_frame.style.borderRadius = 15 - ((scl - 7000)*(0-15)/1500) + "px";
        mmm_con.style.transition = "0.15s ease";
        mmm_con.style.width = "calc(61px + (" + ((scl-7000) *100/1500) + "%))";
        mmm_con.style.height = "calc(61px + (" + ((scl-7000) *100/1500) + "vh))";
        mmm_con.style.borderRadius = 15 - ((scl - 7000)*(0-15)/1500) + "px";

        mmm_logo.style.backgroundColor = "unset";
        mainVideo.style.visibility = "visible";
        mainVideo.style.opacity = 0 + (((scl - 7000)*100/1500)) + "%";
    }
    if(scl >= 8500){
        mmm_frame.style.transition = "0.1s";
        mmm_frame.style.width = "100%";
        mmm_frame.style.height = "100vh";
        mmm_frame.style.top = "0%";
        mmm_frame.style.borderRadius = "0px";

        mmm_con.style.transition = "0.1s ease";
        mmm_con.style.width = "100%";
        mmm_con.style.height = "100vh";
        mmm_con.style.borderRadius = "0px";

        mainVideo.style.opacity = "100%";
        mainVideo.style.visibility = "visible";
    }
    // 메인 영상 지우기
    if(scl >= 9500 && scl < 10500){
        fixed_background.style.zIndex = "3000";
        mmm_frame.style.transition = "0.15s ease";
        let mfc = 100 - ((scl-9500)*100/1000);
        mmm_frame.style.width = "calc(" + mfc + "% + 61px)";
        mmm_frame.style.height = "calc(" + mfc + "vh + 61px)";
        mmm_frame.style.backgroundColor = "#3EC6C6";
        mmm_frame.style.top = 0 + ((scl - 9500)*37/1000) + "%";
        mmm_frame.style.borderRadius = 0 + ((scl - 9500)*15/1000) + "px";
        mmm_con.style.transition = "0.15s ease";
        mmm_con.style.width = "calc(" + mfc + "% + 61px)";
        mmm_con.style.height = "calc(" + mfc + "vh + 61px)";
        mmm_con.style.borderRadius = 0 + ((scl - 9500)*15/1000) + "px";

        mmm_logo.style.backgroundColor = "unset";

        mainVideo.style.visibility = "visible";
        mainVideo.style.opacity = 100 - (((scl - 9500)*100/1000)) + "%";
    }
    if(scl >= 10500){
        mmm_frame.style.width = "61px";
        mmm_frame.style.height = "61px";
        mmm_frame.style.top = "37%";
        mmm_con.style.width = "61px";
        mmm_con.style.height = "61px";

        mmm_frame.style.borderRadius = "15px";
        mmm_con.style.borderRadius = "15px";
        mainVideo.style.opacity = "0";
        mainVideo.style.visibility = "hidden";
    }
    //모먼트립이 필요한 사람들 "끝"
    /*모먼트립과 함께 여행을 시작해 보세요 "시작" */
    if(scl < 7000){
        titleAll.style.transition = "0s";
        titleAll.innerHTML = "<span>모먼트립</span>이 필요한 사람들은?";
        titleAll.style.opacity = "0%";
        titleAll.style.top = "50%";
    }
    if(scl >= 10100 && scl < 10600){
        titleAll.innerHTML = "<span>모먼트립</span>과 함께 여행을 시작해 보세요";
        titleAll.style.transition = "0.1s";
        titleAll.style.opacity = 0 + ((scl - 10100)*100/500) + "%";
        titleAll.style.top = "50%";
    }
    if(scl >= 10600 && scl < 11000){
        mmm_frame.style.opacity = 100 - ((scl - 10600)*100/400) + "%";
    }
    if(scl >= 11000){
        mmm_frame.style.opacity = "0";
    }
    if(scl >= 10600){
        titleAll.style.opacity = "100%";
    }
    if(scl < 10000){
    }
    /*바다배경 나오기 */
    if(scl >= 10000 && scl < 14000){
        environment_sec05.style.visibilty = "visible";
        environment_sec05.style.transition = "0.1s";
        environment_sec05.style.left = 70 - ((scl - 10000)*(70+230)/4000) + "%";
        ship.style.transition = "0.1s";
        ship.style.left = 100 - ((scl - 10000)*(100+100)/4000) + "%";
    }
    if(scl < 11200){
        sea.style.transition = "0.1s";
        sea.style.height = "82px";
    }
    if(scl >= 11200 && scl < 14000){
        sea.style.transition = "0.1s";
        sea.style.height = 82 - ((scl - 11200)*82/(14000-11200)) + "px";
    }
    if(scl >= 14000){
        sea.style.transition = "0.1s";
        sea.style.height = "0px";
    }
    /*바다나오기 */
    if(scl < 8600){
        sea.style.visibility = "hidden";
        environment_sec05.style.left = "100%";
        environment_sec05.style.visibilty = "hidden";
    }
    if(scl >= 8600){
        sea.style.visibility = "visible";
    }
    // 모먼트립과 함께 여행을 떠나보세요 글씨 사라지게
    
    if(scl >= 11200 && 11800){
        titleAll.style.transition = "0.1s";
        titleAll.style.opacity = 100 - ((scl - 11200)*100/(11800-11200)) + "%";
    }

    /*section 06* 01 여행 기록 추가 시작*/

    /*사전 mmm_frame 세팅 */
    if(scl >= 11800){
        for(var i=0;i<mmm_El.length;i++){
            mmm_El[i].style.transition = "0s";
            mmm_El[i].style.visibility ="hidden";
        }
        mmm_El[3].style.opacity = "0";
        mmm_El[3].style.visibility = "visible";
        mmm_frame.style.transition ="0s";
        mmm_frame.style.width = "77px";
        mmm_frame.style.height = "77px";
        mmm_frame.style.top = "50%";
        mmm_frame.style.left = "60%";
        mmm_frame.style.backgroundColor = "#ffffff";
        mmm_frame.style.transform = "translate(-50%,-50%)";
        mmm_con.style.transition ="0s";
        mmm_con.style.width = "77px";
        mmm_con.style.height = "77px";
        mmm_frame.style.borderRadius = "15px";
        mmm_con.style.borderRadius = "15px";

        mainVideo.style.visibility = "hidden";
        
    }
    //today 글씨 나오기
    if(scl < 11800){
        today.style.opacity = "0";
    }
    if(scl >= 11800 && scl < 12400){
        today.style.transition = "0.1s";
        today.style.opacity = 0 + ((scl - 11800)*100/(12400-11800)) + "%";
    }
    if(scl < 12400){
        today.style.left = "50%";
        service01.style.transition = "0.1s";
        service01.style.left = "60%";
        service01.style.opacity = "0%";
    }
    if(scl >= 12400 && scl < 13400){
        today.style.trantion = "0.1s";
        today.style.left = 50 - ((scl - 12400)*(50-25)/1000) + "%";
        today.style.opacity = 100 - ((scl - 12400)*100/1000) + "%";
        service01.style.transition = "0.1s";
        service01.style.left = 60 - ((scl - 12400)*(60-50)/1000) + "%";
        service01.style.opacity = 0 + ((scl - 12400)*100/1000) + "%";

        mmm_frame.style.transition = "0.1s";
        mmm_frame.style.opacity = 0 + ((scl - 12400)*100/1000) + "%";
        mmm_frame.style.left = 60 - ((scl - 12400)*(60-50)/1000) + "%";

        mmm_icon.style.transition = "0";
        mmm_icon.style.opacity = "100%";
        mmm_icon.style.visibility = "visible";
    }
    if(scl >= 13400){
        today.style.trantion = "0.1s";
        today.style.left = "25%";
        today.style.opacity = "0%";
        service01.style.transition = "0.1s";
        service01.style.left = "50%";
        service01.style.opacity = "100%";

        mmm_icon.style.transition = "0.7s ease";
        mmm_icon.style.opacity = "100%";
        mmm_icon.style.visibility = "visible";
        mmm_frame.style.transition = "0.1s";
        mmm_frame.style.opacity = "100%";
        mmm_frame.style.left = "50%";
    }
    if(scl <= 11800){
    }
    if(scl < 14000){
       
    }
    if(scl < 14000 && scl > 13500){
        mmm_frame.style.transition = "0.7s ease";
        mmm_frame.style.width = "77px";
        mmm_frame.style.height = "77px";
        mmm_frame.style.top = "50%";
        mmm_frame.style.backgroundColor = "#ffffff";
        mmm_frame.style.transform = "translate(-50%,-50%)";
        mmm_icon.style.transition = "0.7s ease";
        mmm_con.style.transition = "0.7s ease";
        mmm_con.style.width = "77px";
        mmm_con.style.height = "77px";
        mmm_frame.style.borderRadius = "15px";
        mmm_con.style.borderRadius = "15px";

        ground.style.transition = "0.7s ease";
        ground.style.height = "35px";
    }
    if(scl >= 14000 && scl < 15000){
        mmm_frame.style.transition = "0.7s ease";
        mmm_frame.style.width = "322px";
        mmm_frame.style.height = "680px";
        mmm_frame.style.border = "1px solid #DBDBDB";
        mmm_frame.style.borderRadius = "35px";
        mmm_icon.style.transition = "0.7s ease";
        mmm_icon.style.opacity = "0%";
        mmm_icon.style.visibility = "hidden";
        mmm_con.style.transition = "0.7s ease";
        mmm_con.style.borderRadius = "30px";
        mmm_con.style.width = "295px";
        mmm_con.style.height = "640px";

        ground.style.transition = "0.7s ease";
        ground.style.height = "0%";
    }
    if(scl >= 13400 && scl < 14000){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.left = 50 + ((scl - 13400) * (110 - 50)/600) + "%";
    }
    if(scl >= 14000){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.left = "110%";
    }
}

window.addEventListener('scroll', onScrollWindow);

Character_setting();
function Character_setting(){
    mcSrc01 = 0;
    mcSrc02 = 0;
}
function mainCharacter_motion(){
    mcSrc02++;
    if(mcSrc02 > 9 ){
        mcSrc02 = 0;
        mcSrc01++;
    }
    else if(mcSrc01 == 4 && mcSrc02 == 7){
        mcSrc01 = 0;
        mcSrc02 = 0;
    }
    mainCharacter.src = "./asset/motion/main_character/main_character_0" + mcSrc01 + mcSrc02 + ".png";
}
