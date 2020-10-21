console.log('모먼트립 파이팅!');

/* 요소 불러오기 */
const section01 = document.querySelector('.section01');
const section02 = document.querySelector('.section02');
// const section01 = document.querySelector('.section01');
// const section01 = document.querySelector('.section01');
// const section01 = document.querySelector('.section01');
// const section01 = document.querySelector('.section01');

const headerLogo = document.querySelector('header > .logo');
const titleAll = document.querySelector('.titleAll');

const mmm_frame = document.querySelector('.mmm_frame');

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
    if(scl > 1500 && scl < 3250){
        section01.style.visibility = "hidden";
        section02.style.visibility = "visible";
    }
    else if(scl <= 1500){
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
        building[0].style.left = 5 - ((scl - 2800) * (5+15)/400) + "%";
        building[1].style.left = 8.59 - ((scl - 2800) * (8.59+15)/400) + "%";
        building[2].style.left = 14.89 - ((scl - 2800) * (14.89+15)/400) + "%";
        building[3].style.left = 29.01 - ((scl - 2800) * (29.01+15)/400) + "%";
        building[4].style.left = 35 - ((scl - 2800) * (35+15)/400) + "%";
        building[5].style.left = 42.5 - ((scl - 2800) * (42.5+15)/400) + "%";
        childu_con.style.left = 28 - ((scl - 2800)* (28 + 20)/400) + "%";
        colorG = 107 + ((scl - 2800) * (199 - 107)/400);
        colorB = 104 + ((scl - 2800) * (164 - 104)/400);
        ground.style.backgroundColor = "rgb(99," + colorG + "," + colorB + ")";
        ground_dashed.style.left = 0 - ((scl - 2800)*100/400) + "%";
    }
    if(scl > 3200){
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
        //section intro 사라지기
        intro_sec02.style.opacity = "0";
        intro_sec02.style.transform = "translateY(100px)";
    }
    if(scl > 3250){
        section02.style.visibility = "hidden";
    }
    /*section03 영역 제어*/
    if(scl < 2900){
        mountain_namsan.style.left = "100%";
    }
    if(scl >= 2900 && scl < 4500){
        mountain_namsan.style.transition = "0.1s";
        mountain_namsan.style.left = 100 - ((scl - 2900) * (100+59.5)/1600) + "%";

        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.left = 110 - ((scl - 2900) * (110 - 55)/1600) + "%";
    }
    if(scl > 4500){
        mountain_namsan.style.left = "-59.5%";
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