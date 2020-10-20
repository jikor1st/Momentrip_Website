console.log('모먼트립 파이팅!');

/* 요소 불러오기 */
const section01 = document.querySelector('.section01');

const mmm_frame = document.querySelector('.mmm_frame');
const mainCharacter_con = document.querySelector('.main_character_con'); // 주인공캐릭터_con
const mainCharacter = document.querySelector('.main_character'); // 주인공캐릭터
const cha_shadow = document.querySelector('.cha_shadow');

// 윈도우가 로드되기 전.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
/* 변수 생성 */
let scl = 0;
let mcSrc01 = 0;
let mcSrc02 = 0;


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
    }
    else if(scl >= 500){
        mainCharacter_motion(); // 주인공 캐릭터 모션
    }
    // 주인공 경사 내려감
    // mmm frame 초기 사라지는 인터랙션
    if(scl >= 500 && scl < 900){
        mmm_frame.style.transition = "0.3s";
        mmm_frame.style.top = 50 + ((scl - 500) /5) + "%";
        mmm_frame.style.opacity = 100 - (scl - 500)/4 + "%";
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
}

window.addEventListener('scroll', onScrollWindow);

function mainCharacter_setting(){
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