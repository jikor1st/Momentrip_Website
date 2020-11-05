console.log('모먼트립 파이팅!');

/* 요소 불러오기 */
const section01 = document.querySelector('.section01');
const section02 = document.querySelector('.section02');
const section03 = document.querySelector('.section03');
// const section01 = document.querySelector('.section01');
// const section01 = document.querySelector('.section01');
// const section01 = document.querySelector('.section01');

const all_slide = document.querySelector('.all_slide');
const headerLogo = document.querySelector('header > .logo');
const headerLogoA = document.querySelector('header > .logo > a');
const logo_left_top = document.querySelector('.logo_left_top');
const titleAll = document.querySelector('.titleAll');
const explain_con = document.querySelector('.explain_con');

/*start background */
const start_background = document.querySelector('.start_background');
const start_btn = document.querySelector('.start_btn');

/*네비게이션 요소 */
const asset_con = document.querySelector('.asset_con');
const asset_btn = document.querySelector('.asset_btn');
const asset_exit = document.querySelector('.asset_exit');
const asset_background = document.querySelector('.asset_background');
const asset_content_con = document.querySelector('.asset_content_con');
const asset_content = document.querySelector('.asset_content');
const asset_slider_con = document.querySelector('.asset_slider_con');
const asset_slider = document.querySelector('.asset_slider');

/*앱화면 */
const fixed_background = document.querySelector('.fixed_background');
const mmm_frame = document.querySelector('.mmm_frame');
const mmm_con = document.querySelector('.mmm_con');
let mmm_El = document.querySelectorAll('.mmm_El');
const mmm_logo = document.querySelector('.mmm_logo');
const mainVideo = document.querySelector('.mainVideo');
const mmm_icon = document.querySelector('.icon01');
const mmm_icon02 = document.querySelector('.icon02');

const mainCharacter_con = document.querySelector('.main_character_con'); // 주인공캐릭터_con
let mt = 0;
const mainCharacter = document.querySelector('.main_character'); // 주인공캐릭터
const cha_shadow = document.querySelector('.cha_shadow');
let mCAB = true;

/* 백그라운드 비디오 불러오기 */
const backgroundVideo = document.querySelector('.section07_video');
const backgroundVideo_C = document.querySelector('.background_video');

/*app01 여행기록추가 앱화면 불러오기*/
const app01 = document.querySelector('.app01');
const app01_ui = document.querySelector('.app01_ui');
const app01_before = document.querySelector('.app01_before');
const app01_after = document.querySelector('.app01_after');

let app01_profile = document.querySelectorAll('.app01_profile > img');
let app01_start = document.querySelectorAll('.app01_start');
let app01_startIcon = document.querySelectorAll('.app01_start > img');
let app01_startP = document.querySelectorAll('.app01_start > p');

const oneRow_check = document.querySelector('.oneRow > .oRCheck');
const twoRow_check = document.querySelector('.twoRow > .oRCheck');

const nowDay = document.querySelector('.nowDay');
let oneRowP = document.querySelectorAll('.oneRow > p');
let twoRowP = document.querySelectorAll('.twoRow > .p');

/*질문기록 푸쉬 불러오기 */
const pushQ_con = document.querySelector('.pushQ_con');
/*질문기록 불러오기 */
const app02 = document.querySelector('.app02');
const app02_con = document.querySelector('.app02_con');
/* 질문기록 비디오 불러오기 */
const app02_video_con = document.querySelector('.app02_video_con');
const app02_video = document.querySelector('.app02_video');
const app02_opacity = document.querySelector('.app02_opacity');
/*질문 기록 요소들 불러오기 */
const app02_Q = document.querySelector('.app02_Q');
const app02_A = document.querySelector('.app02_A');
const app02_AA = document.querySelector('.app02_AA');
const app02_btn = document.querySelector('.app02_btn');
const app02_L = document.querySelector('.app02_L');
const app02_pic = document.querySelector('.app02_pic');
const app02_inVoice = document.querySelector('.app02_inVoice');
const app02_outVoice = document.querySelector('.app02_outVoice');
const app02_time01 = document.querySelector('.app02_time01');
const app02_time02 = document.querySelector('.app02_time02');
const app02_record = document.querySelector('.app02_record');

/*기록보관함 앱 불러오기 app03*/
const app03 = document.querySelector('.app03');
const app03_flex_con = document.querySelector('.app03_flex_con');
const app03_flex01 = document.querySelector('.app03_flex01');
const app03_flex02 = document.querySelector('.app03_flex02');
const app03_main01 = document.querySelector('.app03_main01');
const app03_main02 = document.querySelector('.app03_main02');
const app03_main_el_con01 = document.querySelector('.app03_main_el_con01');
const app03_main_el_con02 = document.querySelector('.app03_main_el_con02');
const app03_record = document.querySelector('.app03_record');
const app03_video = document.querySelector('.app03_video');

/*app04 기록물 제작하기 템플릿 불러오기 */
const app04 = document.querySelector('.app04');
const app04_flex = document.querySelector('.app04_flex');
const app04_zoomP = document.querySelector('.app04_zoomP');
const app04_btn01 = document.querySelector('.app04_btn01');
const app04_btn02 = document.querySelector('.app04_btn02');
const app04_font_btn = document.querySelector('.app04_font_btn');
const app04_color_btn = document.querySelector('.app04_color_btn');
const app04_font = document.querySelector('.app04_font');
const app04_color = document.querySelector('.app04_color');
const app04_font_this = document.querySelector('.app04_font_this');
const app04_color_this = document.querySelector('.app04_color_this');
let san_ = document.querySelectorAll('.san_');
san_ = Array.prototype.slice.call(san_);
let a04C = document.querySelectorAll('.a04C');
a04C = Array.prototype.slice.call(a04C);

const app04_plusImg = document.querySelector('.app04_plusImg');
const app04_addImg = document.querySelector('.app04_addImg');
const app04_plus_btn = document.querySelector('.app04_plus_btn');
const app04_plus_btn_con = document.querySelector('.app04_plus_btn_con');
const app04_title = document.querySelector('.app04_title');
let app04_praphR = document.querySelectorAll('.app04_praphR');

let app02T01_01 = 0;
let app02T02_01 = 0;
let app02T03_01 = 0;

let app02T01_02 = 0;
let app02T02_02 = 0;
let app02T03_02 = 0;

var timeSet01;
var timeSet02;
var tSB01 = false;
var tSB02 = false;
var tSI01 = false;
var tSI02 = false;
var moVF = false;
var moVS = false;

let app02_TypeEach = document.querySelectorAll('.app02_TypeEach');
const app02_Type_con = document.querySelector(".app02_Type_con");
let Q_icon = document.querySelectorAll('.Q_icon');
const app02_Now = document.querySelector(".app02_Now");
const service02_intro01DD = document.querySelector('.service02_intro01 > dl > dd')

/*section02 */
const childu_con = document.querySelector('.childu_con'); // 칠두캐릭터_con
const childu = document.querySelector('.childu');
const childu_bubble = document.querySelector('.cha02_bub'); // 칠두 말풍선
let tf = 0;
let tf2 = 0;
/* 건물 불러오기 */
let building = document.querySelectorAll('.building');
building = Array.prototype.slice.call(building);
let bt01 = 0;
let bt02 = 0;
let bt03 = 0;
let bt04 = 0;
let bt05 = 0;
let bt06 = 0;
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
const service01_intro01 = document.querySelector('.service01_intro01');
const service01_intro02 = document.querySelector('.service01_intro02');

/*section07 불러오기 */
const service02 = document.querySelector('.service02');
const mall_con_sec07 = document.querySelector('.mall_con_sec07');
const music_con = document.querySelector('.music_con');
const service02_intro01 = document.querySelector('.service02_intro01');
const service02_tS = document.querySelector('.service02_intro01 > dl > dt > span');
const cha01_bub = document.querySelector('.cha01_bub');
let mcT = 0;

/*section08 불러오기 */
const mountain_sec08 = document.querySelector('.mountain_sec08');
const service03 = document.querySelector('.service03');
const service03_intro01 = document.querySelector('.service03_intro01');
const service03_intro02 = document.querySelector('.service03_intro02');
/*section08 기록물 영역 */
let recordsEl_con = document.querySelectorAll('.recordsEl_con');
/*section09 기록물 제작하기 영역*/
const service04 = document.querySelector('.service04');
const section09_sanmi = document.querySelector('.section09_sanmi');
const section09_book = document.querySelector('.section09_book');
const section09_book_con = document.querySelector('.section09_book_con');
const service04_intro01 = document.querySelector('.service04_intro01');
const app04_video_con = document.querySelector('.app04_video_con');
const app04_video = document.querySelector('.app04_video');

const service04_intro02 = document.querySelector('.service04_intro02');
const service04_intro03 = document.querySelector('.service04_intro03');
const service04_intro04 = document.querySelector('.service04_intro04');
/*section10 기록물 공유하기 영역 */
const icon05 = document.querySelector('.icon05');
const service05 = document.querySelector('.service05');
let balloon = document.querySelectorAll('.balloon');
let blt01 = 0;
let blt02 = 0;
let blt03 = 0;
let blt04 = 0;
let fullHG = 0;
let i05W = 0;
let i05B = 0;
let i05S = 0;
let apcT = 0;
const amusement_park_con = document.querySelector('.amusement_park_con');
/*app05 불러오기 */
const service05_intro01 = document.querySelector('.service05_intro01');
const service05_intro02 = document.querySelector('.service05_intro02');
const service05_intro03 = document.querySelector('.service05_intro03');

const app05_flex = document.querySelector('.app05_flex');
const app05_video01 = document.querySelector('.app05_video01');
const app05_video02 = document.querySelector('.app05_video02');

/*last section 땅 변수 */
let lGW = 0;
let lGH = 0;
/*last section 불러오기 */
const last_section = document.querySelector('.last_section');
const last_records_con = document.querySelector('.last_records_con');
const last_book = document.querySelector('.last_book');
const last_book_cover = document.querySelector('.last_book_cover');
let lBH = last_book.height;

let la_fix = document.querySelectorAll('.la_fix');
const last_cas = document.querySelector('.last_cas');
const last_pic = document.querySelector('.last_pic');
const last_stic = document.querySelector('.last_stic');
const last_lp = document.querySelector('.last_lp');
const last_shadow = document.querySelector('.last_shadow');
let lcR = 0;
let lpR = 0;
let llR = 0;
const last_slogan_con = document.querySelector('.last_slogan_con');
const last_inform = document.querySelector('.last_inform');

/* 땅 불러오기 */
const ground = document.querySelector('.ground'); // 땅

// 윈도우가 로드되기 전.

window.onbeforeunload = function (){
    window.scrollTo(0,0);
};

const background_music = document.querySelector('.background_music');
const music_muted = document.querySelector('.music_muted');
/*음악 버튼 */
const musicC_btn = document.querySelector('.musicC_btn');
let musicToggle = true;
let music_line = document.querySelectorAll('.music_line');

/* 변수 생성 */
let scl = 0;
let mcSrc01 = 0;
let mcSrc02 = 0;
let colorR = 0;
let colorG = 0;
let colorB = 0;

let allScl = 0;
function onScrollWindow(e){
    scl = window.scrollY;
    // 스크롤값 백퍼센트 값으로 반환.
    allScl = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
    //scl = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))*100;

    all_slide.style.transition = "0.05s";
    all_slide.style.transform = "scaleX(" + allScl + ")";
    console.log(scl);
    //motion.style.left = 0 + ((scl - 500) * 50)/1500 + "%";
        //                이전값 스크롤 시작점 도달값 두개차
    if(scl < 500){
        mmm_frame.style.top = "50%";
        mmm_frame.style.opacity ="100%";
        section01.style.transform = "translateX(0)";
        mainCharacter_con.style.bottom = "22.5%";
        mainCharacter_con.style.transform = "translateX(0) rotateZ(0)";
        mainCharacter_con.style.left = "45%";
        headerLogo.style.left = "50%";
        headerLogo.style.top = "39.274%";
        headerLogo.style.opacity = "100%";
        titleAll.style.opacity = "0%";

        explain_con.style.visibility = "visible";
        explain_con.style.transition = "0.1s";
        explain_con.style.opacity = "100%";

        logo_left_top.style.transition = "0.8s";
        logo_left_top.style.visibility = "hidden";
        logo_left_top.style.opacity = "0";
        headerLogoA.style.visibility = "visible";
    }
    if(scl >= 500){
        mainCharacter_motion(); // 주인공 캐릭터 모션
        titleAll.style.transition = "0.1s";
    }
    // 주인공 경사 내려감
    // mmm frame 초기 사라지는 인터랙션
    if(scl >= 500 && scl < 800){
        mmm_frame.style.transition = "0.3s";
        mmm_frame.style.top = 50 + ((scl - 500) * (50 + 50)/300) + "%";
        mmm_frame.style.opacity = 100 - (scl - 500) * (50+50)/300 + "%";
        headerLogoA.style.visibility = "visible";
        headerLogo.style.transition = "0.8s, top 0s, left 0s, transform 0s";
        headerLogo.style.opacity = 100 - ((scl - 500) * 100/300) + "%";
        headerLogo.style.transform = "translate(-50%,-50%)";
        titleAll.style.transition = "0.1s";
        titleAll.style.opacity = 0 + ((scl - 500) * 100/300) + "%";
        
        logo_left_top.style.visibility = "visible";
        logo_left_top.style.transition = "0.8s";
        logo_left_top.style.opacity = 0 + ((scl - 500) * 100/300) + "%";

        explain_con.style.visibility = "visible";
        explain_con.style.transition = "0.1s";
        explain_con.style.opacity = 100 - ((scl - 500)*100/300) + "%";
    }
    if(scl >= 800){
        mmm_frame.style.top = "100%";
        mmm_frame.style.opacity ="0%";
        headerLogo.style.opacity = "0";
        headerLogo.style.visibility = "hidden";
        headerLogoA.style.visibility = "hidden";
        titleAll.style.opacity = "100%";

        explain_con.style.visibility = "hidden";
        explain_con.style.transition = "0.1s";
        explain_con.style.opacity = "0";

        logo_left_top.style.transition = "0.8s";
        logo_left_top.style.visibility = "visible";
        logo_left_top.style.opacity = "100%";
    }
    if(scl < 250){
        mainCharacter.style.transition = "0.4s ease-in";
        mainCharacter.style.transform = "translate(0,-85%)  scale(1.6) rotateZ(-18deg) rotateX(0)";
        if(mCAB == false){
            mCAB = true;
            setTimeout(function(){
                mainCharacter.style.animation = "mainChaM 4s linear 0s infinite alternate both";
            },400);
        }
        cha_shadow.style.bottom = "-15px";
        cha_shadow.style.transform = "translate(0,0) scaleX(10)";
        cha_shadow.style.width = "15px";
        cha_shadow.style.height = "15px";
    }

    if(scl >= 250){
        
        mainCharacter.style.animation = "none";
        setTimeout(function(){
            mainCharacter.style.transition = "0.4s ease-in";
            mainCharacter.style.transform = "translate(0,0)  scale(1) rotateZ(0) rotateX(0)";
            mCAB = false;
        },10);
        
        cha_shadow.style.transition = "0.4s ease-in";
        cha_shadow.style.bottom = "-3.8px";
        cha_shadow.style.transform = "translate(0,0) scaleX(18)";
        cha_shadow.style.width = "6px";
        cha_shadow.style.height = "6px";
    }

    if(scl >= 1000 && scl < 2800){
        mainCharacter_con.style.transform = "translateX(0) rotateZ(0)";
    }
    if(scl >= 1000 && scl < 37200){
        mainCharacter_con.style.bottom = "3%";
    }
    if(scl >= 500 && scl < 750){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.bottom = 22.5 + (((scl-500) * 9)/250*-1) + "%";
        mainCharacter_con.style.transform = "translateX(0) rotateZ(" + ((scl - 500) * 8.5)/250 + "deg)";
    }
    else if(scl >= 750 && scl < 1000){
        mainCharacter_con.style.bottom = 13.5 + (((scl - 750) * 10.5)/250*-1) + "%";
        tf = 8.5 + ((scl - 750) / 7)/ 350;
        mainCharacter_con.style.transform = "translateX(0) rotateZ(" + tf + "deg)";
    }
    if(scl > 750){
        headerLogo.style.transition = "0.8s, top 0s, left 0s, transform 0s";
    }
    if(scl < 500){
        section01.style.transition = "0.1s";
        section01.style.transform = "translateX(0)";
    }
    if(scl >= 500 && scl < 1500){
        section01.style.transition = "0.1s";
        section01.style.transform = "translateX(" + (0 + ((scl - 500) * 160)/1000)*-1 + "%)";
    }
    if(scl >= 1500){
        section01.style.transition = "0.1s";
        section01.style.transform = "translateX(-160%)";
    }
    if(scl < 1400 && scl > 800){
        titleAll.style.opacity = "100%";
    }
    if(scl >= 1400 && scl < 1900){
        titleAll.style.opacity = 100 - ((scl - 1400) * 100 / 500) + "%";
    }
    if(scl >= 1900){
        titleAll.style.opacity = "0%";
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
    }
    /*section02 건물 컨트롤 */
    if(scl < 1700){
        building[0].style.transform = "translateX(0)";
        building[1].style.transform = "translateX(0)";
        building[2].style.transform = "translateX(0)";
        building[3].style.transform = "translateX(0)";
        building[4].style.transform = "translateX(0)";
        building[5].style.transform = "translateX(0)";
        childu_con.style.left = "100%";
        childu_con.style.transform = "translateX(0)";
        childu_bubble.style.marginLeft = "0";
    }
    
    if(scl >= 2550){
        building[0].style.transform = "translateX(-95vw)";
        building[1].style.transform = "translateX(-91.41vw)";
        building[2].style.transform = "translateX(-85.11vw)";
        building[3].style.transform = "translateX(-70.99vw)";
        building[4].style.transform = "translateX(-65vw)";
        building[5].style.transform = "translateX(-57.5vw)";
        // 칠두 크기 키우기
        childu.style.transition = "1s";
        childu.style.transform = "scale(6)";
        childu_con.style.transform = "translateX(-72vw)";
        // 칠두 말풍선 없애기.
        childu_bubble.style.transition = "0.8s";
        childu_bubble.style.opacity = "0";
        childu_bubble.style.visibility = "hidden";
        childu_bubble.style.marginLeft = "-100%";

        intro_sec02.style.transition = "0.7s";
        intro_sec02.style.opacity = "1";
        intro_sec02.style.transform = "translateY(0)";
    }
    
    
    if(scl >= 1700 && scl < 2550){
        for(var i = 0;i < building.length;i++){
            building[i].style.transition = "0.1s";
        }
        bt01 = 0 - ((scl - 1700) * (100-5)/850);
        bt02 = 0 - ((scl - 1700) * (100-8.59)/850);
        bt03 = 0 - ((scl - 1700) * (100-14.89)/850);
        bt04 = 0 - ((scl - 1700) * (100-29.01)/850);
        bt05 = 0 - ((scl - 1700) * (100-35)/850);
        bt06 = 0 - ((scl - 1700) * (100-42.5)/850);

        building[0].style.transform = "translateX(" + bt01 + "vw)";
        building[1].style.transform = "translateX(" + bt02 + "vw)";
        building[2].style.transform = "translateX(" + bt03 + "vw)";
        building[3].style.transform = "translateX(" + bt04 + "vw)";
        building[4].style.transform = "translateX(" + bt05 + "vw)";
        building[5].style.transform = "translateX(" + bt06 + "vw)";
        childu_con.style.transition = "0.1s ease";
        tf = 0 - ((scl - 1700)* 72/850);
        childu_con.style.transform = "translateX(" + tf + "vw)";
        childu_bubble.style.transition = "0.1s";
        childu_bubble.style.marginLeft = 0 - ((scl - 1700) * 100/850) + "%";
    }
    if(scl >= 1800 && scl < 2800){
        mainCharacter_con.style.transition = "0.1s";
        mt = 0 + ((scl - 1800)*62/1000);
        mainCharacter_con.style.transform = "translateX(" + mt + "vw)";

    }else if(scl >= 2800){
        mainCharacter_con.style.transform = "translateX(62vw)";
        
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
        bt01 = -95 - ((scl - 2800) * (210-95)/400);
        bt02 = -91.41 - ((scl - 2800) * (210-91.41)/400);
        bt03 = -85.11 - ((scl - 2800) * (210-85.11)/400);
        bt04 = -70.99 - ((scl - 2800) * (210-70.99)/400);
        bt05 = -65 - ((scl - 2800) * (210-65)/400);
        bt06 = -57.5 - ((scl - 2800) * (210-57.5)/400);
        
        building[0].style.transform = "translateX(" + bt01 + "vw)";
        building[1].style.transform = "translateX(" + bt02 + "vw)";
        building[2].style.transform = "translateX(" + bt03 + "vw)";
        building[3].style.transform = "translateX(" + bt04 + "vw)";
        building[4].style.transform = "translateX(" + bt05 + "vw)";
        building[5].style.transform = "translateX(" + bt06 + "vw)";
        childu_con.style.transition = "0.1s";
        tf = -72 - ((scl - 2800)* (120 - 72)/400);
        childu_con.style.transform = "translateX(" + tf + "vw)";
        colorG = 107 + ((scl - 2800) * (199 - 107)/400);
        colorB = 104 + ((scl - 2800) * (164 - 104)/400);
        ground.style.transition = "0.1s";
        ground.style.backgroundColor = "rgb(99," + colorG + "," + colorB + ")";
    }
    if(scl >= 3200){
        building[0].style.transform = "translateX(-210vw)";
        building[1].style.transform = "translateX(-210vw)";
        building[2].style.transform = "translateX(-210vw)";
        building[3].style.transform = "translateX(-210vw)";
        building[4].style.transform = "translateX(-210vw)";
        building[5].style.transform = "translateX(-210vw)";
        childu_con.style.transform = "translateX(-210vw)";
        ground.style.backgroundColor = "rgb(99,199,164)";
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
        mountain_namsan.style.transform = "translateX(0)";
    }
    if(scl >= 2900 && scl < 4800){
        mountain_namsan.style.transition = "0.1s";
        tf = 0 - ((scl - 2900) * 159.5)/1900;
        mountain_namsan.style.transform = "translateX(" + tf + "vw)";
    } 
    // 메인케릭터 다시 등장
    if(scl >= 3400 && scl < 6100){
        mainCharacter_con.style.transform = "translateX(30vw)";
    }
    if(scl >= 2850 && scl < 3400){
        mainCharacter_con.style.transition = "0.1s";
        mt = 62 - ((scl - 2850) * (62 - 30)/550);
        mainCharacter_con.style.transform = "translateX(" + mt  + "vw)";
    }
    
    if(scl >= 4800){
        mountain_namsan.style.transform = "translateX(-159.5vw)";
        //예나 크기 키우기
        yeahna.style.transition = "1s";
        yeahna.style.transform = "scale(4.5)";
        yeahna_con.style.transform = "translateX(-63vw)";
        // 풀크기 키우기
        for(var i =0;i < sec03Grass.length;i++){
            sec03Grass[i].style.transition = "1s";
            sec03Grass[i].style.transform = "scale(4)";
            sec03Grass[0].style.transform = "rotateZ(-5deg) scale(3)";
        }
        sec03Grass[0].style.marginLeft = "-40%";
        sec03Grass[1].style.marginLeft = "30%";
        sec03Grass[2].style.marginLeft = "55%";
        //예나 말풍선 안보이게
        yeahna_bubble.style.transition = "0.8s";
        yeahna_bubble.style.opacity = "0";
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
        tf = 0 - ((scl - 3500) * 62)/1300;
        yeahna_con.style.transform = "translateX(" + tf + "vw)";
        yeahna_bubble.style.transition = "0.1s";
        yeahna_bubble.style.marginLeft = 0 - ((scl - 3500) * 50/1300) + "%";
    }
    else if(scl < 3500){
        yeahna_con.style.transition = "0.1s";
        yeahna_con.style.transform = "translateX(62vw)";
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
        tf = -63 - ((scl - 5500) * (130 - 63))/600;
        yeahna_con.style.transform = "translateX(" + tf + "vw)";
        tf2 = -159.5 - ((scl - 5500) * (210 - 159.5)/600);
        mountain_namsan.style.transform = "translateX(" + tf2 + "vw)";
        mt = 30 - ((scl - 5550) * 30/600);
        mainCharacter_con.style.transform = "translateX(" + mt + "vw)";
    }else if(scl >= 6100 && scl < 13400){
        mainCharacter_con.style.transform = "translateX(0)";
    }
    if(scl >= 6100){
        yeahna_con.style.transition = "0.1s";
        yeahna_con.style.transform = "translateX(-130vw)";
        mountain_namsan.style.transform = "translateX(-210vw)";
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

        mmm_logo.style.visibility = "visible";
        mmm_logo.style.top = "50%";
        mmm_logo.style.backgroundColor = "#46C6C5";

        mainVideo.style.visibility = "hidden";
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
        mmm_logo.style.top = "50%";
        mmm_con.style.transition = "0s";
        mmm_con.style.width = "61px";
        mmm_con.style.height = "61px";

        mainVideo.style.visibility = "hidden";
        mainVideo.style.opacity = "0%";
    }
    if(scl < 5700 && scl >= 5000){
        mmm_frame.style.opacity = "0%";
    }
    if(scl < 5700){
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
        mountain_sec04.style.transition = "0.1s";
        mountain_sec04.style.transform = "translateX(0)";
    }else if(scl >= 8000){
        mountain_sec04.style.transition = "0.1s";
        mountain_sec04.style.transform = "translateX(-210vw)";
    }
    if(scl >= 5550 && 8000){
        mountain_sec04.style.transition = "0.1s";
        tf = 0 - ((scl - 5550)*210/(8000-5550));
        mountain_sec04.style.transform = "translateX(" + tf + "vw)";
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
        mmm_logo.style.visibility = "visible";
        mmm_logo.style.opacity = "100%";
    }
    // 메인 영상 나오기
    if(scl >= 6800 && scl < 7400){
        mainVideo_intro.style.opacity = 100 - ((scl - 6800)*100/600) + "%";
        mmm_logo.style.visibility = "hidden";
    }
    if(scl >= 7400){
        mainVideo_intro.style.transition = "0.1s";
        mainVideo_intro.style.opacity = "0%";
        mmm_logo.style.visibility = "hidden";
    }
    if(scl >= 7000){
        fixed_background.style.zIndex = "3000";
    }
    if(scl >= 7000 && scl < 8500){
        fixed_background.style.zIndex = "3000";
        mmm_frame.style.transition = "0.15s ease";
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
        mmm_logo.style.visibility = "visible";
        mainVideo.style.opacity = "0";
        mainVideo.style.visibility = "hidden";
    }
    //모먼트립이 필요한 사람들 "끝"
    /*모먼트립과 함께 여행을 시작해 보세요 "시작" */
    if(scl < 7000 && scl > 3000){
        titleAll.style.transition = "0s";
        titleAll.innerHTML = "<span>모먼트립</span>이 필요한 사람들은?";
        titleAll.style.opacity = "0%";
        titleAll.style.top = "50%";
    }
    if(scl > 7000){
        titleAll.innerHTML = "<span>모먼트립</span>과 함께 여행을 시작해 보세요";
    }
    if(scl < 10100 && scl > 6000){
        titleAll.style.opacity = "0%";
    }
    if(scl >= 10100 && scl < 10600){
        
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
    if(scl < 9500){
        environment_sec05.style.transition = "0.1s";
        environment_sec05.style.left = "70%";
        environment_sec05.style.transform = "translateX(0)";
        ship.style.transition = "0.1s";
        ship.style.transform = "translateX(0)";
    }
    /*바다배경 나오기 */
    if(scl >= 9500 && scl < 14000){
        environment_sec05.style.visibility = "visible";
        environment_sec05.style.transition = "0.1s";
        tf = 0 -((scl - 9500)*(330)/4500);
        environment_sec05.style.transform = "translateX(" + tf + "vw)";
        ship.style.transition = "0.1s";
        tf2 = 0 - ((scl - 9500)*(100+110)/4500);
        ship.style.transform = "translateX(" + tf2 + "vw)";
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
        environment_sec05.style.transition = "0.1s";
        environment_sec05.style.transform = "translateX(-330vw)";
        ship.style.transition = "0.1s";
        ship.style.transform = "translateX(-210vw)";
    }
    /*바다나오기 */
    if(scl < 8600){
        sea.style.visibility = "hidden";
        environment_sec05.style.left = "100%";
        environment_sec05.style.visibility = "hidden";
    }
    if(scl >= 8600){
        sea.style.visibility = "visible";
    }
    // 모먼트립과 함께 여행을 떠나보세요 글씨 사라지게
    if(scl < 11200 && scl > 10800){
        titleAll.style.opacity = "100%";
    }
    if(scl >= 11200 && scl < 11800){
        titleAll.style.transition = "0.1s";
        titleAll.style.opacity = 100 - ((scl - 11200)*100/(11800-11200)) + "%";
    }
    if(scl >= 11800 && scl && 11000){
        titleAll.style.opacity = "0";
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
        mmm_icon.style.opacity = "0%";
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
    if(scl < 14000 && scl > 13500){
        mmm_frame.style.transition = "0.7s ease, border 0.2s";
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

        ground.style.transition = "height 0.7s ease, backgroundColor 0s 0.8s";
        ground.style.height = "35px";
        ground.style.backgroundColor = "#63C7A4";

        /* 여행기록 추가 없애기 */
        app01.style.transition = "opacity 0.4s, transform 0.4s ease";
        app01.style.transform = "translateY(50px)";
        app01.style.opacity = "0";

        app01_ui.style.transition = "0.4s";
        app01_ui.style.transform = "translateY(75px)";
        app01_ui.style.opacity = "0";

        oneRow_check.style.transition = "0.4s";
        oneRow_check.style.width = "0";

        for(var i = 0;i < oneRowP.length;i++){
            oneRowP[i].style.transition = "0.4s";
            oneRowP[i].style.color = "#ffffff";
        }

        service01_intro01.style.transition = "0.4s";
        service01_intro01.style.transform = "translateX(75px)";
        service01_intro01.style.opacity = "0";
    }
    if(scl >= 14000 && scl < 16000){
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

        ground.style.transition = "height 0.7s ease, backgroundColor 0s 0.8s";
        ground.style.height = "0%";
        ground.style.backgroundColor = "#63C7A4";
    }
    /*여행기록 추가 지난순간기록 나오기 */
    if(scl < 14000){
        service01_intro01.style.transition = "0.4s";
        service01_intro01.style.transform = "translateX(75px)";
        service01_intro01.style.opacity = "0";
        app01.style.visibility = "hidden";
    }
    if(scl >= 14000 && scl < 14500){
        app01.style.visibility = "visible";

        /* 여행기록 추가 나오기 */
        app01.style.transition = "opacity 0.6s 0.7s, transform 0.2s 0.7s ease";
        app01.style.transform = "translateY(0)";
        app01.style.opacity = "100%";

        app01_ui.style.transition = "opacity 0.7s 0.8s, transform 0.3s 0.8s";
        app01_ui.style.transform = "translateY(0)";
        app01_ui.style.opacity = "100%";

        oneRow_check.style.transition = "0.4s 0.9s";
        oneRow_check.style.width = "70px";

        for(var i = 0;i < oneRowP.length;i++){
            oneRowP[i].style.transition = "0.5s 0.9s";
            oneRowP[i].style.color = "#46C6C5";
        }
        service01_intro01.style.transition = "0.8s 0.1s ease";
        service01_intro01.style.transform = "translateX(0)";
        service01_intro01.style.opacity = "100%";

        /*앞으로의 순간 지우기 */
        service01_intro02.style.transition = "0.4s";
        service01_intro02.style.transform = "translateX(-75px)";
        service01_intro02.style.opacity = "0";

        app01_after.style.transition = "0.6s";
        app01_after.style.opacity = "0%";

        app01_ui.style.transition = "0.7s ease-in-out";
        app01_ui.style.bottom = "-71px";

        //앞으로순간 선택 지우기
        twoRow_check.style.transition = "0.4s";
        twoRow_check.style.width = "0px";

        nowDay.style.transition = "0.4s";
        nowDay.style.backgroundColor = "unset";
        nowDay.style.border = "2px solid #ffffff"
        nowDay.style.color = "#ffffff";
        for(var i = 0;i < twoRowP.length;i++){
            twoRowP[i].style.transition = "0.5s";
            twoRowP[i].style.color = "#ffffff";
        }
        for(var i = 0;i < oneRowP.length;i++){
            oneRowP[i].style.transition = "0.5s";
            oneRowP[i].style.color = "#46C6C5";
        }
        // 프로필 지우기
        for(var i = 0;i<app01_profile.length;i++){
            app01_profile[i].style.transition = "0.4s";
            app01_profile[i].style.transform = "translateY(20px)";
            app01_profile[i].style.opacity = "0";
        }
        //출발시간 버튼 사라지기
        for(var i = 0;i<app01_start.length;i++){
            app01_start[i].style.transition = "0.2s";
            app01_start[i].style.backgroundColor = "#ffffff";
            app01_start[i].style.border = "1px solid #F1F1F1";

            app01_startP[i].style.transition = "0.2s";
            app01_startP[i].style.color = "#677676";

            app01_startIcon[i].style.transition = "0.2s";
            app01_startIcon[i].style.filter = "brightness(100%)";
        }
    }
    if(scl < 14500){
        service01_intro02.style.transition = "0.8s ease";
        service01_intro02.style.transform = "translateX(-75px)";
        service01_intro02.style.opacity = "0";
        
    }
    /*여행기록추가 앞으로의 순간나오기 */
    if(scl >= 14500 && scl < 15000){
        app01.style.transition = "opacity 0.6s 0.7s, transform 0.2s 0.7s ease";
        app01.style.transform = "translateY(0)";
        app01.style.opacity = "100%";
        /* 앞으로의 순간 나오기 */
        app01_after.style.transition = "0.6s";
        app01_after.style.opacity = "100%";
        
        app01_ui.style.transition = "0.7s ease-in-out 1s";
        app01_ui.style.bottom = "0";

        //프로필차례로 나오기
        let pT = 0.4;
        for(var i = 0;i<app01_profile.length;i++){
            app01_profile[i].style.transition = "0.4s " + pT + "s";
            app01_profile[i].style.transform = "translateY(0)";
            app01_profile[i].style.opacity = "100%";
            pT += 0.4;
        }
        //출발시간 버튼 차례로 누르기
        let sT = 1;
        for(var i = 0;i<app01_start.length;i++){
            app01_start[i].style.transition = "0.2s " + sT + "s";
            app01_start[i].style.backgroundColor = "#46C6C5";
            app01_start[i].style.border = "1px solid #46C6C5";

            app01_startP[i].style.transition = "0.2s " + sT + "s";
            app01_startP[i].style.color = "#ffffff";

            app01_startIcon[i].style.transition = "0.2s " + sT + "s";
            app01_startIcon[i].style.filter = "brightness(500%)";
            sT += 0.5;
        }
        setTimeout(function(){
            app01_start[0].style.transition = "0.2s";
            app01_start[0].style.backgroundColor = "#ffffff";
            app01_start[0].style.border = "1px solid #F1F1F1";

            app01_startP[0].style.transition = "0.2s";
            app01_startP[0].style.color = "#677676";

            app01_startIcon[0].style.transition = "0.2s";
            app01_startIcon[0].style.filter = "brightness(100%)";
        },1200);
        setTimeout(function(){
            app01_start[1].style.transition = "0.2s";
            app01_start[1].style.backgroundColor = "#ffffff";
            app01_start[1].style.border = "1px solid #F1F1F1";

            app01_startP[1].style.transition = "0.2s";
            app01_startP[1].style.color = "#677676";

            app01_startIcon[1].style.transition = "0.2s";
            app01_startIcon[1].style.filter = "brightness(100%)";
        },1700);
        setTimeout(function(){
            app01_start[2].style.transition = "0.2s";
            app01_start[2].style.backgroundColor = "#ffffff";
            app01_start[2].style.border = "1px solid #F1F1F1";

            app01_startP[2].style.transition = "0.2s";
            app01_startP[2].style.color = "#677676";

            app01_startIcon[2].style.transition = "0.2s";
            app01_startIcon[2].style.filter = "brightness(100%)";
        },2200);
        
        twoRow_check.style.transition = "0.4s";
        twoRow_check.style.width = "145px";

        oneRow_check.style.transition = "0.4s";
        oneRow_check.style.width = "0px";

        nowDay.style.transition = "0.4s";
        nowDay.style.backgroundColor = "#46C6C5";
        nowDay.style.border = "2px solid #46C6C5"
        nowDay.style.color = "#ffffff";
        for(var i = 0;i < twoRowP.length;i++){
            twoRowP[i].style.transition = "0.5s";
            twoRowP[i].style.color = "#46C6C5";
        }
        for(var i = 0;i < oneRowP.length;i++){
            oneRowP[i].style.transition = "0.5s";
            oneRowP[i].style.color = "#ffffff";
        }
        service01_intro02.style.transition = "0.8s 0.1s ease";
        service01_intro02.style.transform = "translateX(0)";
        service01_intro02.style.opacity = "100%";

        // 지난 기록 순간 지우기
        service01_intro01.style.transition = "0.8s ease";
        service01_intro01.style.transform = "translateX(-75px)";
        service01_intro01.style.opacity = "0";
    }
    if(scl >= 15000){
        service01_intro02.style.transition = "0.8s ease";
        service01_intro02.style.transform = "translateX(-75px)";
        service01_intro02.style.opacity = "0";
        service01_intro01.style.transition = "0.8s ease";
        service01_intro01.style.transform = "translateX(-75px)";
        service01_intro01.style.opacity = "0";

        app01.style.visibility = "hidden";
    }
    /*여행기록 추가 캐릭터 없애기 */
    if(scl >= 13400 && scl < 14000){
        mainCharacter_con.style.transition = "0.1s";
        mt = 0 + ((scl - 13400) * (62)/600);
        mainCharacter_con.style.transform = "translateX(" + mt + "vw)";
    }else if(scl >= 14000 && scl < 15000){
        mainCharacter_con.style.transform = "translateX(62vw)";
    }
    if(scl >= 14000){
        mainCharacter_con.style.transition = "0.1s";
        service01.style.transition = "0.1s";
        service01.style.opacity = "0%";
    }
    if(scl >= 15000){
        mmm_frame.style.transition = "0.7s ease 0.1s, border 0.2s, transform 0s";
        mmm_frame.style.width = "77px";
        mmm_frame.style.height = "77px";
        mmm_frame.style.top = "50%";
        mmm_frame.style.opacity = "0";
        mmm_frame.style.backgroundColor = "#ffffff";
        mmm_frame.style.transform = "translate(-50%,-50%)";
        mmm_icon.style.transition = "0.7s ease 0.1s";
        mmm_icon.style.opacity = "0";
        mmm_con.style.transition = "0.7s ease 0.1s";
        mmm_con.style.width = "77px";
        mmm_con.style.height = "77px";
        mmm_frame.style.borderRadius = "15px";
        mmm_con.style.borderRadius = "15px";

        app01.style.transition = "0.2s";
        app01.style.transform = "translateY(50px)";
        app01.style.opacity = "0";

        service01_intro02.style.transition = "0.8s ease";
        service01_intro02.style.transform = "translateX(75px)";
        service01_intro02.style.opacity = "0";

        ground.style.transition = "height 0.7s ease, backgroundColor 0s";
        ground.style.height = "35px";
        ground.style.backgroundColor = "#D2A683";
    }
    /*여행의 모든 순간은 특별합니다 시작 */
    //주인공캐릭터 다시 나오기
    if(scl >= 14700){
        titleAll.innerHTML = "여행의 모든 <span>순간</span>은 소중합니다.";
    }
    if(scl >= 15000 && scl < 15600){
        mainCharacter_con.style.transition = "0.1s";
        mt = 62 - ((scl - 15000) *62/600);
        mainCharacter_con.style.transform = "translateX(" + mt + "vw)";
    }
    if(scl >= 15600 && scl < 21200){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.transform = "translateX(0)";
    }
    /*여행의 모든 순간은 특별합니다 나오기 */
    if(scl >= 15100 && scl < 15600){
        titleAll.style.opacity = 0 + ((scl - 15100) * 100/500) + "%";
    }
    if(scl >= 15600 && scl < 16000){
        titleAll.style.opacity = "100%";
    }
    // 타이틀 지우기
    if(scl >= 15700 && scl < 16000){
        titleAll.style.opacity = 100 - ((scl - 15600) * 100/300) + "%";
    }
    else if(scl >= 16000){
        titleAll.style.opacity = "0%";
    }
    /*랜덤 질문 기록 나오기 */
    if(scl < 15800){
        service02.style.opacity = "0";
    }
    if(scl >= 15800 && scl < 16300){
        service02.style.transition = "0.1s";
        service02.style.opacity = 0 + ((scl - 15800) * 100/500) + "%";
    }else if(scl >= 16300){
        service02.style.transition = "0.1s";
        service02.style.opacity = "100%";
    }
    // 질문 나오기전 mmm 세팅
    if(scl < 16000){
        pushQ_con.style.visibility = "hidden";
        pushQ_con.style.opacity = "0";
        pushQ_con.style.transform = "translateY(20px)";
        music_con.style.transition = "0.1s";
        music_con.style.transform = "translateX(0)";
    }
    if(scl > 15600){
        mmm_frame.style.transition ="0s";
        mmm_frame.style.width = "449px";
        mmm_frame.style.height = "166px";
        mmm_frame.style.top = "65%";
        mmm_frame.style.left = "50%";
        mmm_frame.style.backgroundColor = "#ffffff";
        mmm_frame.style.border = "1px solid #DBDBDB";
        mmm_frame.style.transform = "translate(-50%,-50%)";
        mmm_con.style.transition ="0s";
        mmm_con.style.width = "372px";
        mmm_con.style.height = "105px";
        mmm_frame.style.borderRadius = "20px";
        mmm_con.style.borderRadius = "0px";
    }
    //mall con 등장
    if(scl >= 15000 && scl < 17400){
        mall_con_sec07.style.visibility = "visible";
        mall_con_sec07.style.transition = "0.1s";
        mcT = 0 -((scl - 15000)*(210)/(17400-15000));
        mall_con_sec07.style.transform = "translateX(" + mcT +"vw)";
    }else if(scl < 15000){
        mall_con_sec07.style.visibility = "hidden";
        mall_con_sec07.style.transition = "0.1s";
        mall_con_sec07.style.transform = "translateX(0)";
    }else if(scl >= 17400){
        mall_con_sec07.style.transition = "0.1s";
        mall_con_sec07.style.transform = "translateX(-210vw)";
        mall_con_sec07.style.visibility = "hidden";
    }
    //음악가들 등장
    if(scl >= 16000 && scl <18000){
        pushQ_con.style.visibility = "visible";
        music_con.style.transition = "0.1s";
        tf = 0 - ((scl - 16000)*(130)/2000);
        music_con.style.transform = "translateX(" + tf + "vw)";
    }
    if(scl >= 18000){
        music_con.style.transition = "0.1s";
        music_con.style.transform = "translateX(-130vw)";
    }
    //질문 제거 이전
    if(scl < 16100 && scl > 15600){
        mmm_frame.style.transition ="0.7s ease";
        mmm_frame.style.top = "65%";
        mmm_frame.style.opacity = "0";
    }
    //질문 등장
    if(scl >= 16100 && scl < 18000){
        mmm_frame.style.transition ="0.7s ease";
        mmm_frame.style.top = "60%";
        mmm_frame.style.opacity = "100%";
    }
    /*여기서부터 질문기록 시작! */
    if(scl < 16200){
        backgroundVideo_C.pause();
        app02_video.pause();
    }
    if(scl < 17000){
        backgroundVideo.style.visibility = "hidden";
        backgroundVideo.style.transition = "1s ease-in-out";
        backgroundVideo.style.opacity = "0";
        app02.style.visibility = "hidden";
        app02_con.style.visibility = "hidden";
        app02_con.style.transition = "0.4s ease";
        app02_con.style.opacity = "0%";
        service02_intro01.style.transition = "0.4s"
        service02_intro01.style.opacity = "0";
        service02_intro01.style.transform = "translateX(75px)";

        cha01_bub.style.visibility = "hidden";
        cha01_bub.style.transition = "0.4s"
        cha01_bub.style.opacity = "0";
        cha01_bub.style.marginRight = "75px";
    }
    if(scl < 17000 && scl > 16200){
        mmm_frame.style.transition = "0.5s ease 0.2s, height 0.2s ease-in-out 0.2s , width 0.4s ease 0.4s";
        mmm_con.style.transition = "0.5s ease 0.2s, height 0.25s ease 0.2s , width 0.4s ease-in-out 0.2s";
        pushQ_con.style.transition = "0.2s 0.6s";
        pushQ_con.style.visibility = "visible";
        pushQ_con.style.opacity = "100%";
        pushQ_con.style.transform = "translateY(0)";
    }
    // 질문 기록 앱 나오기
    if(scl >= 17000){

        service02.style.transition = "0.1s";
        service02.style.opacity = "0%";

        backgroundVideo_C.play();
        backgroundVideo.style.visibility = "visible";
        backgroundVideo.style.transition = "1s ease-in-out";
        backgroundVideo.style.opacity = "100%";

        // 질문 푸쉬 사라지게
        pushQ_con.style.transition = "0.2s";
        pushQ_con.style.visibility = "hidden";
        pushQ_con.style.opacity = "0";
        pushQ_con.style.transform = "translateY(20px)";
        // 앱 화면 확장 및 나오기
        mmm_frame.style.transition = "0.5s ease-in-out 0.2s, width 0.25s ease 0.2s , height 0.4s ease-in-out 0.2s";
        mmm_frame.style.width = "322px";
        mmm_frame.style.height = "680px";
        mmm_frame.style.border = "1px solid #DBDBDB";
        mmm_frame.style.borderRadius = "35px";
        mmm_frame.style.top = "50%";
        mmm_frame.style.opacity = "100%";
        mmm_con.style.transition = "0.5s ease 0.2s, width 0.25s ease 0.2s , height 0.4s ease-in-out 0.2s";
        mmm_con.style.borderRadius = "30px";
        mmm_con.style.width = "295px";
        mmm_con.style.height = "640px";
        // app02 등장
        app02.style.visibility = "visible";
        app02_con.style.visibility = "visible";
        app02_con.style.transition = "0.4s ease 0.4s"
        app02_con.style.opacity = "100%";

        app02_video.play();
        // app02 서비스설명 등장
        service02_intro01.style.transition = "0.4s"
        service02_intro01.style.opacity = "100%";
        service02_intro01.style.transform = "translateX(0)";

        cha01_bub.style.visibility = "visible";
        cha01_bub.style.transition = "0.4s"
        cha01_bub.style.opacity = "100%";
        cha01_bub.style.marginRight = "0";

        app02_opacity.style.opacity = "55%";
        app02_opacity.style.backgroundColor = "#323E4A";

        app02_A.style.transition = "0.3s";
        app02_A.style.opacity = "70%";

        app02_AA.style.transition = "0.3s";
        app02_AA.style.opacity = "0%";


        app02_btn.style.transition ="0.3s ease-in";
        app02_btn.style.opacity = "100%";
        app02_btn.style.marginTop = "0";

        app02_L.style.transition ="0.3s ease-in";
        app02_L.style.opacity = "100%";

        app02_pic.style.transition = "0.3s";
        app02_pic.style.opacity = "0";
        app02_pic.style.transform = "scale(0.7) translate(-50%,-50%)";
        for(var i = 0;i<app02_TypeEach.length;i++){
            app02_TypeEach[i].classList.remove("T_C_select");
            app02_TypeEach[i].style.transition = "0.3s ease";
            Q_icon[i].style.transition = "0.25s ease";
            Q_icon[i].classList.remove("T_I_select");
        }
        app02_TypeEach[0].classList.add("T_C_select");
        app02_Type_con.style.transition = "0.3s ease";
        app02_Type_con.style.left = "0";

        Q_icon[0].classList.add("T_I_select");
        app02_Now.innerText = "질문";
        service02_tS.innerHTML = "질문";

        service02_intro01DD.style.transition = "0.4s";
        service02_intro01DD.style.opacity = "100%";
        service02_intro01DD.style.transform = "translateY(0)";
    }
    if(scl < 17500){
        app02_Q.style.transition = "0.3s";
        app02_Q.style.opacity = "100%";
    }
    if(scl >= 17500){
        for(var i = 0;i<app02_TypeEach.length;i++){
            app02_TypeEach[i].classList.remove("T_C_select");
            Q_icon[i].classList.remove("T_I_select");
        }
        app02_TypeEach[1].classList.add("T_C_select");
        app02_Type_con.style.left = "-54px";
        Q_icon[1].classList.add("T_I_select");
        app02_Now.innerText = "사진";
        service02_tS.innerHTML = "사진";

        app02_A.style.transition = "0.3s";
        app02_A.style.opacity = "0";
        app02_AA.style.transition = "0.3s";
        app02_AA.style.opacity = "100%";
        app02_Q.style.transition = "0.3s";
        app02_Q.style.opacity = "0";

        app02_btn.style.transition ="0.3s ease-in";
        app02_btn.style.opacity = "0%";
        app02_btn.style.marginTop = "-15px";

        app02_L.style.transition ="0.3s ease-in";
        app02_L.style.opacity = "0";

        app02_pic.style.transition = "0.3s";
        app02_pic.style.opacity = "100%";
        app02_pic.style.transform = "scale(1) translate(-50%,-50%)";

        cha01_bub.style.visibility = "hidden";
        cha01_bub.style.transition = "0.7s ease";
        cha01_bub.style.opacity = "0%";
        cha01_bub.style.marginRight = "100px";

        service02_intro01DD.style.transition = "0.4s";
        service02_intro01DD.style.opacity = "0";
        service02_intro01DD.style.transform = "translateY(75px)";
        service02_intro01DD.innerHTML = "랜덤한 순간에 질문을 보내주어<br/>소중한 순간들을 기록 할 수 있도록 합니다.";
        app02_time01.style.transition = "0.3s";
        app02_time01.style.opacity = "0";

        ground.style.transition = "0s";
        ground.style.backgroundColor = "#63C7A4";
    }
    if(scl >= 17500 && scl < 18000){
        tSB01 = false;
        tSI01 = false;
        clearInterval(timeSet01);
        app02T01_01 = 0;
        app02T02_01 = 0;
        app02T03_01 = 0;
    }
    if(scl >= 18000 && scl < 18500){
        for(var i = 0;i<app02_TypeEach.length;i++){
            app02_TypeEach[i].classList.remove("T_C_select");
            Q_icon[i].classList.remove("T_I_select");
        }
        app02_opacity.style.transition = "0.4s";
        app02_opacity.style.opacity = "55%";
        app02_opacity.style.backgroundColor = "#323E4A";
        
        app02_TypeEach[2].classList.add("T_C_select");
        app02_Type_con.style.left = "-108px";
        Q_icon[2].classList.add("T_I_select");
        app02_Now.innerText = "영상";
        service02_tS.innerHTML = "영상";
        service02_intro01DD.innerHTML = "놓칠 수 있는 소리들도 녹음하여<br/>그날을 더욱 생생하게 기록하여 추억하세요.";
        app02_time01.style.transition = "0.3s";
        app02_time01.style.opacity = "100%";
        app02_time02.style.transition = "0.3s";
        app02_time02.style.opacity = "0";

        app02_inVoice.style.visibility = "hidden";
        app02_outVoice.style.visibility = "hidden";
        app02_inVoice.style.transition = "0.5s ease, transform 0.2s";
        app02_outVoice.style.transition = "0.5s ease, transform 0.2s";
        app02_inVoice.style.opacity = "0";
        app02_outVoice.style.opacity = "0";
        app02_inVoice.style.transform = "translate(-50%,-50%) scaleX(0.5)";
        app02_outVoice.style.transform = "translate(-50%,-50%) scaleX(0.5)";

        if(!tSI01){
            app02_time01.innerHTML = "00:00";
            tSI01 = true;
            tSB01 = false;
        }
        moVF = false;
        moVS = false;
        clearInterval(timeSet02);
        tSB02 = false;
        tSI02 = false;
        app02T01_02 = 0;
        app02T02_02 = 0;
        app02T03_02 = 0;
        if(!tSB01){
            Timestart01();
            tSB01 = true;
        }
    }
    if(scl >= 18500){
        mmm_frame.style.transition = "0.5s ease 0.2s, height 0.2s ease-in-out 0.2s , width 0.4s ease 0.4s";
        mmm_con.style.transition = "0.5s ease 0.2s, height 0.25s ease 0.2s , width 0.4s ease-in-out 0.2s";
        for(var i = 0;i<app02_TypeEach.length;i++){
            app02_TypeEach[i].classList.remove("T_C_select");
            Q_icon[i].classList.remove("T_I_select");
        }
        app02_opacity.style.transition = "0.4s";
        app02_opacity.style.opacity = "85%";
        app02_opacity.style.backgroundColor = "#061114";

        app02_pic.style.transition = "0.3s";
        app02_pic.style.opacity = "0";
        app02_pic.style.transform = "scale(0.7) translate(-50%,-50%)";

        app02_TypeEach[3].classList.add("T_C_select");
        app02_Type_con.style.left = "-161px";
        Q_icon[3].classList.add("T_I_select");
        app02_Now.innerText = "녹음";
        service02_tS.innerHTML = "녹음";

        if(!moVS){
            clearInterval(mVIn);
            moVS = true;
        }
        if(!moVF){
            motionVoice();
            moVF = true;
        }

        service02_intro01DD.innerHTML = "놓칠 수 있는 소리들도 녹음하여<br/>그날을 더욱 생생하게 기록하여 추억하세요.";
        service02_intro01DD.style.transition = "0.4s";
        service02_intro01DD.style.opacity = "100%";
        service02_intro01DD.style.transform = "translateY(0px)";
        app02_inVoice.style.visibility = "visible";
        app02_outVoice.style.visibility = "visible";
        app02_inVoice.style.transition = "0.5s ease, transform 0.2s";
        app02_outVoice.style.transition = "0.5s ease, transform 0.2s";
        app02_inVoice.style.opacity = "100%";
        app02_outVoice.style.opacity = "100%";
        app02_inVoice.style.transform = "translate(-50%,-50%) scaleX(1)";
        app02_outVoice.style.transform = "translate(-50%,-50%) scaleX(1)";

        clearInterval(timeSet01);
        if(!tSI02){
            app02_time02.innerHTML = "00:00";
            tSI02 = true;
        }
        tSI01 = false;
        app02_time01.style.transition = "0.3s";
        app02_time01.style.opacity = "0";
        app02_time02.style.transition = "0.3s";
        app02_time02.style.opacity = "100%";
        app02T01_01 = 0;
        app02T02_01 = 0;
        app02T03_01 = 0;
        if(!tSB02){
            Timestart02();
            tSB02 = true;
        }
    }
    //app02 지우기
    if(scl < 19000){
        app02.style.transition = "0.4s";
        app02.style.opacity = "100%";
        app02.style.visibility = "visible";
        app02_record.style.transition = "0.2s ease 0s";
        app02_record.style.opacity = "0";
        app02_record.style.visibility = "hidden";
    }
    if(scl >= 17500){
        titleAll.style.top = "50%";
        titleAll.innerHTML = "<span>질문</span>이 기록되었어요!";
    }
    if(scl >= 19000){
        // 앱 화면 기록물로 바꾸기
        mmm_frame.style.transition = "0.5s ease-in-out 0.2s, width 0.25s ease 0.2s , height 0.4s ease-in-out 0.2s";
        mmm_frame.style.width = "158px";
        mmm_frame.style.height = "208px";
        mmm_frame.style.border = "1px solid #DBDBDB";
        mmm_frame.style.borderRadius = "15px";
        mmm_frame.style.top = "50%";
        mmm_frame.style.opacity = "100%";
        mmm_con.style.transition = "0.5s ease 0.2s, width 0.25s ease 0.2s , height 0.4s ease-in-out 0.2s";
        mmm_con.style.borderRadius = "15px";
        mmm_con.style.width = "158px";
        mmm_con.style.height = "208px";

        //title : 질문이 기록되었어요 나오기
        titleAll.style.top = "33%";
        titleAll.innerHTML = "<span>질문</span>이 기록되었어요!";
        titleAll.style.transition = "0.7s ease 0.5s, top 0.4s ease";
        titleAll.style.opacity = "100%";
        //기록물 사진 나오기
        app02_record.style.transition = "0.4s ease 0.6s";
        app02_record.style.opacity = "100%";
        app02_record.style.visibility = "visible";

        //app02 지우기
        app02.style.transition = "0.3s";
        app02.style.opacity = "0";
        app02.style.visibility = "hidden";
        app02_con.style.transition = "0.3s";
        app02_con.style.opacity = "0";
        app02_con.style.visibility = "hidden";

        //백그라운드 영상 제거
        backgroundVideo.style.visibility = "hidden";
        backgroundVideo.style.transition = "1s ease-in-out";
        backgroundVideo.style.opacity = "0";

        service02_intro01.style.transition = "0.4s"
        service02_intro01.style.opacity = "0";
        service02_intro01.style.transform = "translateX(75px)";

        app02_inVoice.style.visibility = "hidden";
        app02_outVoice.style.visibility = "hidden";
        app02_inVoice.style.transition = "0.5s ease, transform 0.2s";
        app02_outVoice.style.transition = "0.5s ease, transform 0.2s";
        app02_inVoice.style.opacity = "0";
        app02_outVoice.style.opacity = "0";
        app02_inVoice.style.transform = "translate(-50%,-50%) scaleX(0.5)";
        app02_outVoice.style.transform = "translate(-50%,-50%) scaleX(0.5)";

        tSB02 = false;
        app02T01_02 = 0;
        app02T02_02 = 0;
        app02T03_02 = 0;
        clearInterval(timeSet02);
        moVF = false;
        moVS = false;
        clearInterval(mVIn);
    }
    /*section08 시작 */
    if(scl < 19600 && scl > 17000){
        mmm_logo.style.visibility = "hidden";
        mmm_logo.style.transition = "0.1s";
        mmm_logo.style.opacity = "0%";
    }
    if(scl >= 19600 && scl < 20600){
        mmm_frame.style.transition = "0.1s";
        mmm_frame.style.width = 158 - ((scl - 19600)*(158-61)/1000) + "px";
        mmm_frame.style.height = 208 - ((scl - 19600)*(208-61)/1000) + "px";
        mmm_frame.style.borderRadius = "15px";
        mmm_frame.style.border="none";
        mmm_frame.style.top = "50%";
        mmm_frame.style.left = "50%";
        mmm_frame.style.opacity = "100%";
        mmm_frame.style.transform = "translate(-50%,-50%)";

        mmm_logo.style.width = "100%";
        mmm_logo.style.height = "100%";
        mmm_logo.style.visibility = "visible";
        mmm_logo.style.backgroundColor = "#46C6C5";
        mmm_logo.style.transition = "0.1s";
        mmm_logo.style.top = "50%";
        mmm_logo.style.opacity = 0 + ((scl - 19600)*100/1000) + "%";

        app02_record.style.visibility = "visible";
        app02_record.style.transition = "0.1s";
        app02_record.style.opacity = 100 - ((scl - 19600)*100/1000) + "%";
        mmm_con.style.transition = "0.1s";
        mmm_con.style.width = 158 - ((scl - 19600)*(158-61)/1000) + "px";
        mmm_con.style.height = 208 - ((scl - 19600)*(208-61)/1000) + "px";
    }
    if(scl < 19600){
        mountain_sec08.style.transtion = "0.1s";
        mountain_sec08.style.left = "100%";
        mountain_sec08.style.visibility = "hidden";
        mmm_logo.style.width = "61px";
        mmm_logo.style.height = "61px";
    }
    //title all 지우기 -> 질문이 기록되었어요!
    if(scl < 19600 && scl >= 19400){
        titleAll.style.transition = "0.1s";
        titleAll.style.opacity = "100%";
    }
    if(scl >= 19600 && scl < 20000){
        titleAll.style.transition = "0.1s";
        titleAll.style.opacity = 100 - ((scl - 19600)*100/(20000-19600)) + "%";
    }
    if(scl > 20000){
        titleAll.style.transition = "0.1s";
        titleAll.style.opacity = "0%";
    }
    // 08 산 나타나기
    if(scl < 19400){
        mountain_sec08.style.transition = "0.1s";
        mountain_sec08.style.visibility = "hidden";
        mountain_sec08.style.transform = "translateX(0vw)";
    }
    if(scl >= 19400 && scl < 21700){
        mountain_sec08.style.tranistion = "0.1s";
        mountain_sec08.style.visibility = "visible";
        tf = 0 - ((scl - 19000)*(100+110)/(21700-19400));
        mountain_sec08.style.transform = "translateX(" + tf + "vw)";
    }
    if(scl >= 21700){
        mountain_sec08.style.visibility = "hidden";
        mountain_sec08.style.transition = "0.1s";
        mountain_sec08.style.transform = "translateX(-210vw)";
    }
    // 로고 초기화
    if(scl >= 20600){
        mmm_frame.style.transition = "0.1s";
        mmm_frame.style.border="none";
        mmm_frame.style.width = "61px";
        mmm_frame.style.height = "61px";

        mmm_con.style.transition = "0.1s";
        mmm_con.style.width = "61px";
        mmm_con.style.height = "61px";

        mmm_logo.style.visibility = "visible";
        mmm_logo.style.backgroundColor = "#46C6C5";
        mmm_logo.style.transition = "0.1s";
        mmm_logo.style.top = "50%";
        mmm_logo.style.opacity = "100%";

        app02_record.style.transition = "0.1s";
        app02_record.style.opacity = "0%";
        app02_record.style.visibility = "hidden";
    }
    if(scl < 21700 && scl >= 20600){
        mmm_frame.style.transition = "0.7s ease";
        mmm_con.style.transition = "0.7s ease";
        mmm_logo.style.transition = "0.7s ease";
    }
    // 기록물들 등장!
    if(scl < 20300){
        // 기록물 안보이게하게
        for(var i = 0;i<recordsEl_con.length;i++){
            recordsEl_con[i].style.visibility = "hidden";
            recordsEl_con[i].style.transition = "0.5s ease-out";
            recordsEl_con[i].style.opacity = "0%";
        }
    }
    if(scl >= 20600){
        for(var i = 0;i<recordsEl_con.length;i++){
            recordsEl_con[i].style.visibility = "visible";
            recordsEl_con[i].style.transition = "0.5s ease-in";
            recordsEl_con[i].style.opacity = "100%";
        }
    }
    // 기록물들 나오게하기
    if(scl >= 20300){
        for(var i = 0;i<recordsEl_con.length;i++){
            recordsEl_con[i].style.visibility = "visible";
            recordsEl_con[i].style.transition = "0.5s ease-in";
            recordsEl_con[i].style.opacity = 0 + ((scl - 20300)*100/300) + "%";
            recordsEl_con[i].style.filter = "blur(0)";
        }
        recordsEl_con[0].style.left = "-480px";
        recordsEl_con[0].style.top = "-70px";
        recordsEl_con[0].style.filter = "blur(3px)";

        recordsEl_con[1].style.left = "240px";
        recordsEl_con[1].style.top = "-140px";
        recordsEl_con[1].style.filter = "blur(3px)";

        recordsEl_con[2].style.left = "-100px";
        recordsEl_con[2].style.top = "240px";
        recordsEl_con[2].style.filter = "blur(3px)";

        recordsEl_con[3].style.left = "-230px";
        recordsEl_con[3].style.top = "-310px";
        
        recordsEl_con[4].style.left = "350px";
        recordsEl_con[4].style.top = "-210px";

        recordsEl_con[5].style.left = "410px";
        recordsEl_con[5].style.top = "150px";

        recordsEl_con[6].style.left = "-370px";
        recordsEl_con[6].style.top = "40px";
    }
    // 03서비스 기록물 보관함 영역
    if(scl < 20200){
        service03.style.transition = "0.1s";
        service03.style.opacity = "0%";
        service03.style.visibility = "hidden";
    }
    if(scl >= 20200 && scl < 20600){
        service03.style.visibility = "visible";
        service03.style.transition = "0.1s";
        service03.style.opacity = 0 + ((scl - 20200)*100/400) + "%";
    }
    if(scl >= 20600){
        service03.style.visibility = "visible";
        service03.style.transition = "0.1s";
        service03.style.opacity = "100%";
    }
    // 03서비스 기록물 보관함 앱 나오기 시작해볼까
    if(scl >= 21700){
        // 우선 기록물 지우기
        for(var i = 0;i<recordsEl_con.length;i++){
            recordsEl_con[i].style.visibility = "hidden";
            recordsEl_con[i].style.transition = "0.8s cubic-bezier(1,.05,.63,.88), opacity 0.6s ease-in 0.12s";
            recordsEl_con[i].style.opacity = "0%";
            recordsEl_con[i].style.left = "0px";
            recordsEl_con[i].style.top = "0px";
            recordsEl_con[i].style.filter = "blur(15px)";
        }
    }
    if(scl >= 21700 && scl < 23600){
        mmm_frame.style.transition = "0.7s ease 0.8s";
        mmm_frame.style.width = "322px";
        mmm_frame.style.height = "680px";
        mmm_frame.style.border = "1px solid #DBDBDB";
        mmm_frame.style.borderRadius = "35px";
        mmm_frame.style.top = "50%";
        mmm_frame.style.opacity = "100%";
        mmm_con.style.transition = "0.7s ease 0.8s";
        mmm_con.style.borderRadius = "30px";
        mmm_con.style.width = "295px";
        mmm_con.style.height = "640px";

        mmm_logo.style.transition = "0.2s 0.7s";
        mmm_logo.style.opacity = "0";
    }
    if(scl >= 23600){
        mmm_logo.style.transition = "0s";
        mmm_logo.style.opacity = "0";
    }
    if(scl >= 21700){
        service03.style.transition = "0.8s cubic-bezier(1,.05,.63,.88) 0.1s";
        service03.style.opacity = "0";
    }
    if(scl >= 21200 && scl < 21800){
        mainCharacter_con.style.transition = "0.1s";
        mt = 0 + ((scl - 21200)*62/600);
        mainCharacter_con.style.transform = "translateX(" + mt + "vw)";
        ground.style.transition = "0.1s";
        ground.style.height = 35 - ((scl - 21200)*35/600) + "px";
    }
    else if(scl < 21200 && scl >= 19000){
        mainCharacter_con.style.transition = "0.1s";
        ground.style.transition = "0.1s";
        ground.style.height = "35px";
    }
    else if(scl >= 21800 && scl < 28400){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.transform = "translateX(62vw)";
    }
    if(scl >= 21800 && scl < 26000){
        ground.style.transition = "0.1s";
        ground.style.height = "0";
    }
    // 여기부터 앱 03 등장
    if(scl >= 21700 && scl < 22400){
        service03_intro01.style.transition = "0.4s 0.2s";
        service03_intro01.style.opacity = "100%";
        service03_intro01.style.transform = "translateY(0)";

        service03_intro02.style.transition = "0.4s";
        service03_intro02.style.opacity = "0";
        service03_intro02.style.transform = "translateY(75px)";

        app03.style.visibility = "visible";
        app03.style.transition = "0.4s 1s";
        app03.style.opacity = "100%";

        app03_flex_con.style.transition = "0.5s, height ease 0.5s 0.4s, top 0.5s ease 0.4s";
        app03_flex_con.style.width = "124px";
        app03_flex_con.style.height = "163px";
        app03_flex_con.style.top = "198px";
        app03_flex_con.style.left = "19px";
        app03_flex_con.style.transform = "translate(0%,0%)";

        app03_flex01.style.visibility = "visible";
        app03_flex01.style.transition = "0.7s ease 0.25s";
        app03_flex01.style.opacity = "100%";

        app03_flex02.style.visibility = "hidden";
        app03_flex02.style.transition = "0.3s ease";
        app03_flex02.style.opacity = "0";

        app03_main01.style.visibility = "visible";
        app03_main01.style.transition = "0.7s ease 0.5s";
        app03_main01.style.opacity = "100%";

        app03_main02.style.visibility = "hidden";
        app03_main02.style.transition = "0.7s ease";
        app03_main02.style.opacity = "0";

        app03_main_el_con01.style.transition = "0.5s ease 0.2s";
        app03_main_el_con01.style.opacity = "100%";
        app03_main_el_con01.style.transform = "translateY(0)";
        app03_main_el_con02.style.transition = "0.5s ease";
        app03_main_el_con02.style.opacity = "0";
        app03_main_el_con02.style.transform = "translateY(45px)";

    }else if(scl < 21700){
        service03_intro01.style.transition = "0.4s"
        service03_intro01.style.opacity = "0";
        service03_intro01.style.transform = "translateY(75px)";

        app03.style.visibility = "hidden";
        app03.style.transition = "0.4s";
        app03.style.opacity = "0";
        
    }
    if(scl >= 22400 && scl < 23000){
        // 기록보관함 -> 하나 클릭해서 질문목록들 보이기.
        service03_intro01.style.transition = "0.4s"
        service03_intro01.style.opacity = "0";
        service03_intro01.style.transform = "translateY(75px)";

        service03_intro02.style.transition = "0.4s";
        service03_intro02.style.opacity = "100%";
        service03_intro02.style.transform = "translateY(0)";

        app03_flex_con.style.transition = "0.5s 0.2s";
        app03_flex_con.style.width = "219px";
        app03_flex_con.style.height = "95px";
        app03_flex_con.style.top = "261px";
        app03_flex_con.style.left = "54px";

        app03_flex01.style.visibility = "hidden";
        app03_flex01.style.transition = "0.3s ease";
        app03_flex01.style.opacity = "0";

        app03_flex02.style.visibility = "visible";
        app03_flex02.style.transition = "0.7s ease 0.5s";
        app03_flex02.style.opacity = "100%";

        app03_main01.style.visibility = "hidden";
        app03_main01.style.transition = "0.7s ease";
        app03_main01.style.opacity = "0";

        app03_main02.style.visibility = "visible";
        app03_main02.style.transition = "0.7s ease 0.25s";
        app03_main02.style.opacity = "100%";

        app03_main_el_con01.style.transition = "0.5s ease";        
        app03_main_el_con01.style.transform = "translateY(45px)";
        app03_main_el_con01.style.opacity = "0";
        app03_main_el_con02.style.transition = "0.5s ease 0.2s";
        app03_main_el_con02.style.opacity = "100%";
        app03_main_el_con02.style.transform = "translateY(0)";

        app03_record.style.visibility = "hidden";
        app03_record.style.transition = "opacity 0.4s ease";
        app03_record.style.opacity = "0";
        
        app03_video.currentTime = 0;
        app03_video.pause();
    }
    if(scl >= 23000 && scl < 23600){
        // 기록보관함 -> 질문 -> 질문 크게보기 동영상들어감
        mmm_frame.style.transition = "0.4s ease";
        mmm_con.style.transition = "0.4s ease, border 0.1s";
        app03_flex_con.style.transition = "0.7s ease";
        app03_flex_con.style.width = "100%";
        app03_flex_con.style.height = "100%";
        app03_flex_con.style.top = "0";
        app03_flex_con.style.left = "0";

        app03_main02.style.visibility = "hidden";
        app03_main02.style.transition = "0.7s ease";
        app03_main02.style.opacity = "0";

        app03_flex02.style.visibility = "hidden";
        app03_flex02.style.transition = "0.7s ease";
        app03_flex02.style.opacity = "0";

        app03_record.style.visibility = "visible";
        app03_record.style.transition = "opacity 0.4s ease";
        app03_record.style.opacity = "100%";

        service03_intro02.style.transition = "0.4s";
        service03_intro02.style.opacity = "100%";
        service03_intro02.style.transform = "translateY(0)";

        setTimeout(function(){
            app03_video.play();
        },1100);
    }
    /*기록물 제작하기 영역 시작하기! */
    if(scl < 23600){
        mmm_icon02.style.visibility = "hidden";
        mmm_icon02.style.opacity = "0";
    }
    if(scl >= 23600 && scl < 24200){
        mmm_frame.style.transition = "0.1s";
        mmm_frame.style.width = 322 - ((scl - 23600)*(322 - 64)/(24200-23600)) + "px";
        mmm_frame.style.height = 680 - ((scl - 23600)*(680-76)/(24200-23600)) + "px";
        mmm_frame.style.border = "none";
        mmm_frame.style.borderRadius = "15px 15px 0px 15px";
        mmm_frame.style.top = "50%";
        mmm_frame.style.opacity = "100%";
        mmm_con.style.transition = "0.1s";
        mmm_con.style.borderRadius = "15px 15px 0px 15px";
        mmm_con.style.width = 295 - ((scl - 23600)*(295 - 64)/(24200-23600)) + "px";
        mmm_con.style.height = 640 - ((scl - 23600)*(640 - 76)/(24200-23600)) + "px";

        app03.style.visibility = "visible";
        app03.style.transition = "0.1s";
        app03.style.opacity = 100 - ((scl - 23600)*100/(24200-23600)) + "%";

        mmm_icon02.style.visibility = "visible";
        mmm_icon02.style.opacity = 0 + ((scl - 23600)*100/(24200-23600)) + "%";
    }
    else if(scl >= 24200){
        app03.style.transition = "0.1s";
        app03.style.opacity = "0";

        mmm_frame.style.transition = "0.1s";
        mmm_frame.style.width = "64px";
        mmm_frame.style.height = "76px";
        mmm_frame.style.borderRadius = "15px 15px 0px 15px";
        mmm_con.style.transition = "0.1s";
        mmm_con.style.borderRadius = "15px 15px 0px 15px";
        mmm_con.style.width = "64px";
        mmm_con.style.height = "76px";

        app03_video.currentTime = 0;
        app03_video.pause();
    }
    if(scl >= 23600){
        service03_intro02.style.transition = "0.4s";
        service03_intro02.style.opacity = "0";
        service03_intro02.style.transform = "translateY(75px)";
    }
    if(scl < 24100 && scl > 22500){
        ground.style.transition = "0.1s, backgroundcolor 0s";
        ground.style.backgroundColor = "#63C7A4";
        ground.style.height = "0";
    }
    if(scl >= 23900 && scl < 24500){
        service04.style.visibility = "visible";
        service04.style.transition = "0.1s";
        service04.style.opacity = 0 + ((scl - 23900)*100/600) + "%";
        // 기록물 제작하기 캐릭터 나오기
        section09_sanmi.style.transition = "0.1s";
        section09_sanmi.style.bottom = -265 + ((scl - 23900)*(265 + 105)/600) + "px";
    }
    else if(scl >= 24500){
        ground.style.backgroundColor = "#C2A06C";
        service04.style.visibility = "visible";
        service04.style.transition = "0.1s";
        service04.style.opacity = "100%";

        section09_sanmi.style.transition = "0.1s";
        section09_sanmi.style.bottom = "105px";
    }
    if(scl < 23900){
        service04.style.visibility = "hidden";
        service04.style.transition = "0.1s";
        service04.style.opacity = "0";
        section09_sanmi.style.transition = "0.1s";
        section09_sanmi.style.bottom = "-265px";
    }
    if(scl >= 24100 && scl < 24500){
        // 기록물 제작하기 땅 테이블로 바꾸기
        ground.style.transition = "0.1s, backgroundcolor 0s";
        ground.style.backgroundColor = "#C2A06C";
        ground.style.height = 0 + ((scl - 24100)*206/400) + "px";
    }else if(scl >= 24500 && scl < 24700){
        ground.style.transition = "0.1s, backgroundcolor 0s";
        ground.style.height = "206px";
    }
    if(scl >= 24700 && scl < 25100){
        ground.style.transition = "0.1s, backgroundcolor 0s";
        ground.style.backgroundColor = "#C2A06C";
        ground.style.height = 206 - ((scl - 24700)*256/400) + "px";
    }
    if(scl >= 24700 && scl < 25300){
        section09_sanmi.style.transition = "0.1s";
        section09_sanmi.style.bottom = 105 - ((scl - 24700)*(265 + 105)/600) + "px";

        service04.style.visibility = "visible";
        service04.style.transtion = "0.1s";
        service04.style.opacity = 100 - ((scl - 24700)*100/600) + "%";
    }
    if(scl >= 25100){
        ground.style.transition = "0.1s";
        ground.style.height = "0";

        service04.style.visibility = "hidden";
        service04.style.transtion = "0.1s";
        service04.style.opacity = "0%";
    }
    if(scl >= 25300){
        section09_sanmi.style.transition = "0.1s";
        section09_sanmi.style.bottom = "-265px";
    }
    /*기록물 제작하기 앱 화면 나오기 */
    if(scl < 25300){
        service04_intro01.style.transition = "0.7s";
        service04_intro01.style.opacity = "0";
        service04_intro01.style.transform = "translateY(75px)";

        app04_video.style.visibility = "hidden";
        app04_video_con.style.visibility = "hidden";
        app04_video.style.opacity = "0";
        app04_video.style.transition = "0.7s";
        app04_video.pause();
        app04_video.currentTime = 0;
        
    }
    if(scl >= 25300 && scl <= 26800){
        mmm_frame.style.transition = "0.7s ease";
        mmm_frame.style.width = "322px";
        mmm_frame.style.height = "680px";
        mmm_frame.style.border = "1px solid #DBDBDB";
        mmm_frame.style.borderRadius = "35px";
        mmm_frame.style.top = "50%";
        mmm_frame.style.opacity = "100%";
        mmm_con.style.transition = "0.7s ease";
        mmm_con.style.borderRadius = "30px";
        mmm_con.style.width = "295px";
        mmm_con.style.height = "640px";

        mmm_icon02.style.transition = "0.7s";
        mmm_icon02.style.opacity = "0";

        app04_video_con.style.visibility = "visible";
        app04_video.style.visibility = "visible";
        app04_video.style.opacity = "100%";
        app04_video.style.transition = "0.7s 0.7s";
        setTimeout(function(){
            app04_video.play();
        },1100);
        
        service04_intro01.style.transition = "0.7s";
        service04_intro01.style.opacity = "100%";
        service04_intro01.style.transform = "translateY(0)";
    }
    else if(scl >= 24200 && scl < 25300){
        mmm_frame.style.transition = "0.7s ease";
        mmm_con.style.transition = "0.7s ease";
        mmm_icon02.style.opacity = "100%";
    }
    if(scl < 26000){

        app04_plus_btn.style.visibility = "visible";
        app04_plus_btn.style.transition = "0.3s";
        app04_plus_btn.style.opacity = "100%";

        app04_plus_btn_con.style.visibility = "visible";
        app04_plus_btn_con.style.transition = "0.3s";
        app04_plus_btn_con.style.opacity = "100%";

        app04_plusImg.style.transtion = "0.4s ease-in-out";
        app04_plusImg.style.backgroundColor = "#DFDFDF";
        app04_plusImg.style.border = "1px solid #707070";

        app04_addImg.style.transition = "0.5s ease-in-out";
        app04_addImg.style.transform = "translate(-50%,-50%) scale(0.8)";
        app04_addImg.style.opacity = "0";

        app04_flex.style.transition = "1s ease-in";
        app04_flex.style.transform = "scale(1) translate(0,165px)";

        /*app04 템플릿 초기화 */
        for(var i = 0;i<app04_praphR.length;i++){
            app04_praphR[i].innerHTML = "&nbsp";
            app04_praphR[i].style.transition = "0.4s";
            app04_praphR[i].style.color = "#BCBCBC";
        }
        app04Start = false;
        app04_praphR[0].innerHTML = "내용을 입력해주세요.";
        app04_title.innerHTML = "질문 기록 제목";

        app04.style.visibility = "hidden";
        app04.style.opacity = "0";
        app04.style.transition = "0.4s ease";

        app04_zoomP.innerHTML = "75%";

        app04_font_this.style.visibility = "hidden";
        app04_color_this.style.visibility = "hidden";

        service04_intro02.style.transition = "0.4s";
        service04_intro02.style.opacity = "0";
        service04_intro02.style.transform = "translateX(75px)";

        service04_intro03.style.transition = "0.4s";
        service04_intro03.style.opacity = "0";
        service04_intro03.style.transform = "translateX(75px)";

        service04_intro04.style.transition = "0.7s";
        service04_intro04.style.opacity = "0";
        service04_intro04.style.transform = "translateX(75px)";
    }
    if(scl >= 26000){
        service04_intro01.style.transition = "0.7s";
        service04_intro01.style.opacity = "0";
        service04_intro01.style.transform = "translateY(75px)";
    }
    if(scl >= 26000 && scl < 26800 ){

        mmm_frame.style.transition = "1s ease";
        mmm_frame.style.transform = "translate(-50%,-50%) rotateZ(90deg)";
        mmm_con.style.transition = "1s ease";

        app04_video.style.opacity = "0";
        app04_video.style.transition = "0.4s";
        setTimeout(function(){
            app04_video.pause();
            app04_video.currentTime = 0;
        },750);

        /*app04 템플릿 부분 */
        app04.style.visibility = "visible";
        app04.style.opacity = "100%";
        app04.style.transform = "translate(-50%,-50%) scale(1)";
        app04.style.transition = "0.8s 1s";

        if(!app04Start){
            service04_intro02.style.transition = "0.7s";
            service04_intro02.style.opacity = "100%";
            service04_intro02.style.transform = "translateX(0px)";
        }
        mmm_logo.style.transition = "0.7s, opacity 0.4s";
        mmm_logo.style.width = "100%";
        mmm_logo.style.height = "100%";
        mmm_logo.style.opacity = "100%";
    }
    if(scl >= 26800){
        app04_video.style.visibility = "hidden";
        app04_video_con.style.visibility = "hidden";
    }
    /* 템플릿에서 로고로 바꾸기 */
    if(scl < 26800){
        section09_book.style.visibility = "hidden";
    }
    if(scl >= 26800 && scl < 27600){
        titleAll.style.top = "50%";
        mmm_frame.style.transition = "0.1s, transform 1.5s ease";
        mmm_frame.style.width = 322 - ((scl - 26800)*(322-61)/800) + "px";
        mmm_frame.style.height = 680 - ((scl - 26800)*(680-61)/800) + "px";
        mmm_frame.style.border = "none";
        mmm_frame.style.borderRadius = 35 - ((scl - 26800)*(35-15)/800) + "px";
        mmm_frame.style.top = 50 - ((scl - 26800)*(50-38)/800) + "%";
        mmm_frame.style.opacity = "100%";
        mmm_con.style.transition = "0.1s";
        mmm_con.style.borderRadius = 30 - ((scl - 26800)*(30-15)/800) + "px";
        mmm_con.style.width = 322 - ((scl - 26800)*(322-61)/800) + "px";
        mmm_con.style.height = 640 - ((scl - 26800)*(640-61)/800) + "px";

        mmm_logo.style.transition = "0.4s, opacity 0.7s";
        mmm_logo.style.width = "100%";
        mmm_logo.style.height = "100%";
        mmm_logo.style.opacity = "100%";

        app04.style.visibility = "hidden";
        app04.style.opacity = "0";
        app04.style.transition = "0.2s";

        service04_intro02.style.transition = "0.4s";
        service04_intro02.style.opacity = "0";
        service04_intro02.style.transform = "translateX(75px)";

        service04_intro03.style.transition = "0.4s";
        service04_intro03.style.opacity = "0";
        service04_intro03.style.transform = "translateX(75px)";

        service04_intro04.style.transition = "0.7s";
        service04_intro04.style.opacity = "0";
        service04_intro04.style.transform = "translateX(75px)";

        ground.style.transition = "0s, backgroundcolor 0s";
        ground.style.backgroundColor = "#C2A06C";
        ground.style.height = 0 + ((scl - 26800)*206/800) + "px";
        
        section09_book.style.visibility = "visible";
    }
    if(scl >= 26600 && scl < 27600){
        section09_sanmi.style.transition = "0s";
        section09_sanmi.style.bottom = -265 + ((scl - 26600)*(265+105)/1000) + "px";
    }
    if(scl >= 27400 && scl < 27600){
        titleAll.style.transition = "0.1s, top 0s";
        titleAll.style.opacity = 0 + ((scl - 27400)*100/200) + "%";
        titleAll.style.top = "50%";
    }
    if(scl >= 27000 && scl < 28600){
        titleAll.innerHTML = "<span>하나뿐인</span> 여행 <span>포토북</span>을 만들었어요!";
    }
    if(scl >= 27600 && scl < 28400){
        mmm_frame.style.transition = "0.1s, transform 1.5s ease";
        mmm_frame.style.width = "61px";
        mmm_frame.style.height = "61px";
        mmm_frame.style.top = "38%";
        mmm_frame.style.opacity = "100%";
        mmm_con.style.transition = "0.1s";
        mmm_con.style.width = "61px";
        mmm_con.style.height = "61px";
        mmm_logo.style.opacity = "100%";

        section09_sanmi.style.transition = "0s";
        section09_sanmi.style.bottom = "105px";

        titleAll.style.transition = "0.1s, top 0s";
        titleAll.style.opacity = "100%";
        titleAll.style.top = "50%";

        ground.style.transition = "0s, backgroundcolor 0s";
        ground.style.height = "206px";
    }
    if(scl < 27800){
        section09_sanmi.style.transition = "0.1s";
        section09_sanmi.style.left = "50%";
        section09_book_con.style.transition = "0.1s";
        section09_book_con.style.left = "40%";
    }
    if(scl >= 27800 && scl < 28600){
        titleAll.style.transition = "0.1s";
        titleAll.style.opacity = 100 - ((scl - 27800)*100/800) + "%";
        titleAll.style.top = "50%";

        mmm_frame.style.transtion = "0.1s, top 0s";
        mmm_frame.style.opacity = 100 - ((scl - 27800)*100/800) + "%";
        mmm_frame.style.top = "38%";

        section09_sanmi.style.transition = "0s";
        section09_sanmi.style.visibility = "visible";
        section09_sanmi.style.bottom = 105 - ((scl - 27800)*(265-105)/800) + "px";
        section09_sanmi.style.transform = "translateX(-50%)";
        section09_sanmi.style.left = 50 - ((scl - 27800)*(110 - 50)/800) + "%";

        ground.style.transition = "0.1s, backgroundcolor 0s";
        colorR = 194 - ((scl - 27800)*(194-99)/800);
        colorG = 160 + ((scl - 27800)*(199-160)/800);
        colorB = 108 + ((scl - 27800)*(164-108)/800);
        ground.style.backgroundColor = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
        // 99, 199, 164 after
        // 194, 160, 108 before
        ground.style.height = 265 - ((scl - 27800)*(265-35)/800) + "px";
        section09_book_con.style.transition = "0.1s";
        section09_book_con.style.left = 40 - ((scl - 27800)*(110 - 40)/800) + "%";
    }
    if(scl >= 28600){
        mmm_frame.style.transtion = "0.1s";
        mmm_frame.style.opacity = "0";

        ground.style.height = "35px";
        ground.style.backgroundColor = "rgb(99, 199, 164)";
        titleAll.style.transition = "0.1s";
        titleAll.style.top = "50%";
        
        titleAll.style.opacity = "0";
        section09_sanmi.style.bottom = "-206px";
        section09_sanmi.style.visibility = "hidden";
        section09_book_con.style.transition = "0.1s";
        section09_book_con.style.left = "-110%";
    }
    /*section10 영역 */
    if(scl < 28400){
        icon05.style.visibility = "hidden";
        icon05.style.transition = "0.1s";
        icon05.style.opacity = "0";

        service05.style.visibility = "hidden";
        service05.style.transition = "0.1s";
        service05.style.opacity = "0";
    }
    if(scl >= 28400 && scl < 29000){
        icon05.style.visibility = "visible";
        icon05.style.transtion = "0.1s";
        icon05.style.opacity = 0 + ((scl - 28400)*100/600) + "%";

        service05.style.visibility = "visible";
        service05.style.transition = "0.1s";
        service05.style.opacity = 0 + ((scl - 28400)*100/600) + "%";

        mmm_frame.style.top = "38%";
        mainCharacter_con.style.transition = "0.1s";
        mt = 62 - ((scl - 28400)*62/600);
        mainCharacter_con.style.transform = "translateX(" + mt + "vw)";
    }
    if(scl >= 29000 && scl < 29700){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.transform = "translateX(0)";
    }
    else if(scl >= 29000 && scl < 32000){
        icon05.style.transtion = "0.1s";
        icon05.style.opacity = "100%";
    }
    if(scl >= 28400 && scl < 33000){
        amusement_park_con.style.transition = "0.1s";
        apcT = 0 - ((scl - 28400)*170/(33000-28400));
        amusement_park_con.style.transform = "translateX(" + apcT + "vw)";
    }else if(scl < 28400){
        amusement_park_con.style.transform = "translateX(0vw)";
    }else if(scl >= 33000){
        amusement_park_con.style.transform = "translateX(-170vw)";
    }
    if(scl >= 28400 && scl < 40500){
        balloon[0].style.transition = "0.1s";
        blt01 = 0 - ((scl - 28400)*(210)/(40500-28400));
        balloon[0].style.transform = "translateX(" + blt01 + "vw)";
    }else if(scl < 28400){
        balloon[0].style.transition = "0.1s";
        balloon[0].style.left = "110%";
    }
    if(scl >= 28700 && scl < 40000){
        balloon[1].style.transition = "0.1s";
        blt02 = 0 - ((scl - 28700)*(100)/(40000-28700));
        balloon[1].style.transform = "translateX(" + blt02 + "vw)";
    }else if(scl < 28700){
        balloon[1].style.transition = "0.1s";
        balloon[1].style.left = "110%";
    }
    if(scl >= 28200 && scl < 40200){
        balloon[2].style.transition = "0.1s";
        blt03 = 0 - ((scl - 28200)*(220)/(40200-28200));
        balloon[2].style.transform = "translateX(" + blt03 + "vw)";
    }else if(scl < 28200){
        balloon[2].style.transition = "0.1s";
        balloon[2].style.left = "110%";
    }
    if(scl >= 28600 && scl < 40800){
        balloon[3].style.transition = "0.1s";
        blt04 = 0 - ((scl - 28600)*(150)/(40800-28600));
        balloon[3].style.transform = "translateX(" + blt04 + "vw)";
    }
    else if(scl < 28600){
        balloon[3].style.transition = "0.1s";
        balloon[3].style.left = "110%";
    }
    if(scl < 31900){
        for(var i=0;i<balloon.length;i++){
            balloon[i].style.transition = "0.1s";
            balloon[i].style.opacity = "100%";
        }
    }
    if(scl >= 31900 && scl < 32400){
        for(var i=0;i<balloon.length;i++){
            balloon[i].style.transition = "0.1s";
            balloon[i].style.opacity = 100 - ((scl - 31900)*100/(32400-31900)) + "%";
        }
        service05.style.visibility = "visible";
        service05.style.transition = "0.1s";
        service05.style.opacity = 100 - ((scl - 31900)*100/(32400-31900)) + "%";
    }
    if(scl >= 32400){
        for(var i=0;i<balloon.length;i++){
            balloon[i].style.transition = "0.1s";
            balloon[i].style.opacity = "0";
        }
        service05.style.visibility = "hidden";
        service05.style.transition = "0.1s";
        service05.style.opacity = "0";
    }
    if(scl >= 29700 && scl < 32800){
        mainCharacter_con.style.transition = "0.1s";
        mt = 0 - ((scl - 29700)*(62)/(32800-29700));
        mainCharacter_con.style.transform = "translateX(" + mt + "vw)";
    }
    else if(scl >= 32800 && scl < 37200){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.transform = "translateX(-62vw)";
    }
    else if(scl < 29700 && scl >= 29000){
        mainCharacter_con.style.transition = "0.1s";
    }
    if(scl >= 32000 && scl < 32800){
        /*땅 전체 덮기 */
        fullHG = ((scl - 32000)*(100-3.38)/800);
        ground.style.transition = "0.1s";
        ground.style.height = "calc(35px + (" + fullHG  + "vh))";
        i05W = ((scl - 32000)*62/800);
        icon05.style.transition = "0.05s";
        icon05.style.width = "calc(64px + (" + i05W  + "%))";
        icon05.style.transform = "translate(-50%," + (-50 + ((scl - 32000)*35/800)) + "%)";
        icon05.style.opacity = 100 - ((scl - 32000)*(100-18)/800) + "%";
        i05B = 100 + ((scl - 32000)*400/800);
        i05S = 100 - ((scl - 32000)*50/800);
        icon05.style.filter = "brightness(" + i05B + "%) saturate(" + i05S + "%)";

        /*as is  99 199 164 */
        /*to be  70 198 197 */
        colorR = 99 - ((scl - 32000)*(99-70)/800);
        colorG = 199 - ((scl - 32000)*(199-198)/800);
        colorB = 164 + ((scl - 32000)*(197-164)/800);
        ground.style.backgroundColor = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
    }
    else if(scl >= 32800){
        ground.style.transition = "0.1s";
        ground.style.height = "100vh";
        icon05.style.transition = "0.1s";
        icon05.style.width = "62%";
        icon05.style.opacity = "18%";
        icon05.style.filter = "brightness(500%) saturate(50%)";
        ground.style.backgroundColor = "#46C6C5";
    }
    else if(scl < 32000){
        icon05.style.transition = "0.4s";
        icon05.style.width = "64px";
        icon05.style.transform = "translate(-50%,-15%)";
        icon05.style.filter = "brightness(100%) saturate(100%)";
    }
    //app05 설명 시작
    if(scl >= 33000){
        service05_intro01.style.visibility = "visible";
        service05_intro02.style.visibility = "visible";
        service05_intro03.style.visibility = "visible";
        logo_left_top.style.visibility = "hidden";
    }
    if(scl >= 33000 && scl < 33800){
        service05_intro01.style.transition = "0.7s ease, top 0.2s ease";
        service05_intro01.style.opacity = "100%";
        service05_intro01.style.transform = "translateY(0)";
        service05_intro01.style.top = 43.5 - ((scl - 33000)*(43.5)/800) + "%";

        icon05.style.transition = "0.2s ease";
        icon05.style.transform = "translate(-50%," + (-15 - ((scl - 33000)*(50-15)/800)) + "%)";
    }
    else if(scl < 33000){
        service05_intro01.style.transition = "0.4s ease";
        service05_intro01.style.opacity = "0";
        service05_intro01.style.transform = "translateY(75px)";

        service05_intro01.style.visibility = "hidden";
        service05_intro02.style.visibility = "hidden";
        service05_intro03.style.visibility = "hidden";
    }
    else if(scl >= 33800){
        service05_intro01.style.transition = "0.4s ease";
        service05_intro01.style.opacity = "0";
        service05_intro01.style.transform = "translateY(-75px)";
    }
    // 디지털기록물 공유
    if(scl >= 33800 && scl < 34500){
        service05_intro02.style.transition = "0.7s ease, top 0.2s ease";
        service05_intro02.style.opacity = "100%";
        service05_intro02.style.transform = "translateY(0)";
        service05_intro02.style.top = 43.5 - ((scl - 33800)*(43.5)/700) + "%";

        icon05.style.transition = "0.2s ease";
        icon05.style.transform = "translate(-50%," + (-50 - ((scl - 33800)*(50-15)/700)) + "%)";

        app05_flex.style.visibility = "visible";
        app05_flex.style.transition = "0.7s ease";
        app05_flex.style.transform = "translate(-50%,-50%)";
        app05_flex.style.opacity = "100%";

        app05_video01.play();
        app05_video01.style.visibility = "visible";
        app05_video01.style.opacity = "100%";
    }
    else if(scl < 33800){
        service05_intro02.style.transition = "0.4s ease";
        service05_intro02.style.opacity = "0";
        service05_intro02.style.transform = "translateY(75px)";

        app05_flex.style.visibility = "hidden";
        app05_flex.style.transition = "0.4s ease";
        app05_flex.style.transform = "translate(-50%,-40%)";
        app05_flex.style.right = "14%";
        app05_flex.style.opacity = "0";

        app05_video01.currentTime = 0;
        app05_video01.pause();
        app05_video01.style.visibility = "hidden";
        app05_video02.style.visibility = "hidden";
    }
    else if(scl >= 34500){
        service05_intro02.style.transition = "0.4s ease";
        service05_intro02.style.opacity = "0";
        service05_intro02.style.transform = "translateY(-75px)";

        app05_video01.style.visibility = "hidden";
        app05_video01.style.transition = "0.4s";
        app05_video01.style.opacity = "0";

        app05_video01.currentTime = 0;
        app05_video01.pause();

        icon05.style.transform = "translate(-50%,-85%)";
    }
    // 아날로그 기록물 공유
    if(scl >= 34500 && scl < 35200){
        service05_intro03.style.transition = "0.7s ease";
        service05_intro03.style.opacity = "100%";
        
        service05_intro03.style.transform = "translateY(0)";

        app05_flex.style.visibility = "visible";
        app05_flex.style.transition = "0.7s ease, right 1s ease-in-out";
        app05_flex.style.right = "56.5%";
        app05_flex.style.opacity = "100%";

        app05_video02.play();

        app05_video02.style.visibility = "visible";
        app05_video02.style.transition = "0.7s ease 0.3s";
        app05_video02.style.opacity = "100%";
    }
    else if(scl < 34500){
        service05_intro03.style.transition = "0.4s ease";
        service05_intro03.style.opacity = "0";
        service05_intro03.style.transform = "translateY(75px)";

        app05_flex.style.transition = "0.7s ease";
        app05_flex.style.right = "14%";

        app05_video02.currentTime = 0;
        app05_video02.pause();

        app05_video02.style.visibility = "hidden";
        app05_video02.style.transition = "0.4s ease";
        app05_video02.style.opacity = "0";
    }
    else if(scl >= 35200){
        service05_intro03.style.transition = "0.4s ease";
        service05_intro03.style.opacity = "0";
        service05_intro03.style.transform = "translateY(-75px)";

        app05_flex.style.visibility = "hidden";
        app05_flex.style.transition = "0.7s ease";
        app05_flex.style.transform = "translate(-50%,-60%)";
        app05_flex.style.right = "56.5%";
        app05_flex.style.opacity = "0%";

        app05_video02.currentTime = 0;
        app05_video02.pause();

        app05_video02.style.visibility = "hidden";
        app05_video02.style.transition = "0.4s ease";
        app05_video02.style.opacity = "0";
    }
    /* 여기서부터 책이 나오는 시점 */
    //우선 공유 아이콘 지우기
    if(scl < 35200){
        headerLogo.style.visibility = "visible";
    }
    if(scl >= 35200){
        section09_book.style.visibility = "hidden";
    }
    if(scl >= 35200 && scl < 36000){
        icon05.style.visibility = "visible";
        icon05.style.transition = "0.1s";
        icon05.style.opacity = 18 - ((scl - 35200)*18/(36000-35200)) + "%";
    }else if(scl >= 36000){
        icon05.style.visibility = "hidden";
        icon05.style.opacity = "0";
    }
    if(scl >= 35200){
        last_book_cover.style.visibility = "visible";
        ground.style.backgroundColor = "unset";
        last_records_con.style.visibility ="visible";
        last_section.style.visibility = "visible";
    }
    if(scl >= 35200 && scl < 37200){
        //to be = width:320px height:450px;
        lGW = 100 - ((scl - 35200)*100/(37200-35200));
        lGH = 100 - ((scl - 35200)*100/(37200-35200));
        ground.style.transition = "0.2s ease";
        ground.style.width = "calc(" + lGW + "% + 320px)";
        ground.style.height = "calc(" + lGH + "vh + 453px)";
        lBH = last_book.height;
        last_book_cover.style.transition = "0.1s, height 0s";
        last_book_cover.style.height = lBH + "px";
        last_book_cover.style.opacity = 100 - ((scl-35200)*100/(37200-35200)) + "%";
        
        ground.style.left = 0 + ((scl - 35200)*58.85/(37200-35200)) + "%";
        ground.style.bottom = 0 + ((scl - 35200)*247/(37200-35200)) + "px";

        last_book.style.transition = "0.1s";
        last_book.style.opacity = 0 + ((scl - 35200)*100/(37200-35200)) + "%";
    }
    if(scl >= 37200){
        ground.style.transition = "0.2s ease";
        ground.style.width = "320px";
        ground.style.height = "453px"
        ground.style.left = "58.85%";
        ground.style.bottom = "247px";

        last_book.style.transition = "0.1s";
        last_book.style.opacity = "100%";

        last_book_cover.style.transition = "0.1s, height 0s";
        last_book_cover.style.opacity = "0";
        last_book_cover.style.height = "453px";
    }
    if(scl < 35200){
        last_section.style.visibility = "hidden";

        ground.style.width = "100%";
        ground.style.transition = "0.2s ease";
        ground.style.left = "0";
        ground.style.bottom = "0";

        last_book.style.transition = "0.1s";
        last_book.style.opacity = "0";

        lBH = last_book.height;
        last_book_cover.style.transition = "0.1s, height 0s";
        last_book_cover.style.height = lBH + "px";
        last_book_cover.style.opacity = "100%";
        last_book_cover.style.visibility = "hidden";
    }
    if(scl >= 37200){
        mainCharacter_con.style.bottom = "140px";
    }
    if(scl >= 37200 && scl < 37850){
        mainCharacter_con.style.transition = "0.1s";
        mt = -62 + ((scl - 37200)*(62-25)/(37850-37200));
        mainCharacter_con.style.transform = "translateX(" + mt + "vw)";

        last_slogan_con.style.visibility = "visible";
        last_slogan_con.style.transition = "0.1s ease";
        last_slogan_con.style.opacity = 0 + ((scl - 37200)*100/(37850-37200)) + "%";

        last_inform.style.visibility = "visible";
        last_inform.style.transition = "0.1s ease";
        last_inform.style.opacity = 0 + ((scl - 37200)*100/(37850-37200)) + "%";

        for(var i=0;i<la_fix.length;i++){
            la_fix[i].style.visibility = "visible";
            la_fix[i].style.transition = "0.1s ease";
        }
        lcR = 0 - ((scl - 37200)*20/(37850-37200));
        last_cas.style.left = 50 - ((scl - 37200)*(50+55)/(37850-37200)) + "%";
        last_cas.style.transform = "translateX(-50%) rotateZ(" + lcR  + "deg)";

        lpR = 0 - ((scl - 37200)*10/(37850-37200));
        last_pic.style.left = 50 - ((scl - 37200)*(50+22)/(37850-37200)) + "%";
        last_pic.style.transform = "translateX(-50%) rotateZ(" + lpR + "deg)";

        last_stic.style.left = 50 + ((scl - 37200)*(135-50)/(37850-37200)) + "%";

        llR = 0 + ((scl - 37200)*7/(37850-37200));
        last_lp.style.left = 50 + ((scl - 37200)*(135-50)/(37850-37200)) + "%";
        last_lp.style.transform = "translateX(-50%) rotateZ(" + llR + "deg)";

        last_shadow.style.visibility = "visible";
        last_shadow.style.transition = "0.1s ease";
        last_shadow.style.opacity = 0 + ((scl - 37200)*100/(37850-37200)) + "%";
    }
    else if(scl < 37200){
        last_slogan_con.style.visibility = "hidden";
        last_slogan_con.style.transition = "0.1s ease";
        last_slogan_con.style.opacity = "0%";

        last_inform.style.visibility = "hidden";
        last_inform.style.transition = "0.1s ease";
        last_inform.style.opacity = "0%";

        for(var i=0;i<la_fix.length;i++){
            la_fix[i].style.visibility = "hidden";
            la_fix[i].style.transition = "0.1s ease";
        }
        last_cas.style.left = "50%";
        last_cas.style.transform = "translateX(-50%) rotateZ(0)";
        last_pic.style.left = "50%";
        last_pic.style.transform = "translateX(-50%) rotateZ(0)";
        last_stic.style.left = "50%";
        last_lp.style.left = "50%";
        last_lp.style.transform = "translateX(-50%) rotateZ(0)";

        last_shadow.style.visibility = "hidden";
        last_shadow.style.transition = "0.1s ease";
        last_shadow.style.opacity = "0";
    }
    else if(scl >= 37850){
        mainCharacter_con.style.transition = "0.1s";
        mainCharacter_con.style.transform = "translateX(-25vw)";

        last_slogan_con.style.visibility = "visible";
        last_slogan_con.style.transition = "0.1s ease";
        last_slogan_con.style.opacity = "100%";

        last_inform.style.visibility = "visible";
        last_inform.style.transition = "0.1s ease";
        last_inform.style.opacity = "100%";

        for(var i=0;i<la_fix.length;i++){
            la_fix[i].style.visibility = "visible";
            la_fix[i].style.transition = "0.1s ease";
        }
        last_cas.style.left = "-55%";
        last_cas.style.transform = "translateX(-50%) rotateZ(-20deg)";
        last_pic.style.left = "-22%";
        last_pic.style.transform = "translateX(-50%) rotateZ(-10deg)";
        last_stic.style.left = "135%";
        last_lp.style.left = "135%";
        last_lp.style.transform = "translateX(-50%) rotateZ(7deg)";

        last_shadow.style.visibility = "visible";
        last_shadow.style.transition = "0.1s ease";
        last_shadow.style.opacity = "100%";

        last_book.style.animation = "last_bookM 3s linear alternate infinite both";
    }
    if(scl < 37850){
        last_book.style.animation = "none";
    }
}
var app04Start = false;
//function
function onclickA04C(e){
    e.preventDefault();
    var a04CTarget = e.currentTarget;
    var a04CIndex = a04C.indexOf(a04CTarget);
    toggle04Color = true;
    colorReset();
    for(var i =0;i<a04C.length;i++){
        a04C[i].classList.remove('color_select');
    }
    a04C[a04CIndex].classList.add('color_select');
    if(a04CIndex == 0){
        app04_title.style.color = "#263C3C";
        for(var i=0;i<app04_praphR.length;i++){
            app04_praphR[i].style.color = "#263C3C";
        }
    }
    else if(a04CIndex == 1){
        app04_title.style.color = "#0E78E2";
        for(var i=0;i<app04_praphR.length;i++){
            app04_praphR[i].style.color = "#0E78E2";
        }
    }
    else if(a04CIndex == 2){
        app04_title.style.color = "#3EC6C6";
        for(var i=0;i<app04_praphR.length;i++){
            app04_praphR[i].style.color = "#3EC6C6";
        }
    }
    else if(a04CIndex == 3){
        app04_title.style.color = "#FCD63F";
        for(var i=0;i<app04_praphR.length;i++){
            app04_praphR[i].style.color = "#FCD63F";
        }
    }
}
for(var i=0;i<a04C.length;i++){
    a04C[i].addEventListener('click', onclickA04C);
}

function onClickSan(e){
    e.preventDefault();
    var sanTarget = e.currentTarget;
    var sanIndex = san_.indexOf(sanTarget);
    toggle04Font = true;
    fontRest();
    for(var i =0;i<san_.length;i++){
        san_[i].classList.remove('font_select');
    }
    san_[sanIndex].classList.add('font_select');
    if(sanIndex == 0){
        app04_title.style.fontFamily = 'GmarketSansMedium';
        for(var i=0;i<app04_praphR.length;i++){
            app04_praphR[i].style.fontFamily = "'Noto Sans KR', sans-serif";
        }
    }
    else if(sanIndex == 1){
        app04_title.style.fontFamily = "'Noto Serif KR', serif";
        app04_title.style.fontWeight = "700";
        for(var i=0;i<app04_praphR.length;i++){
            app04_praphR[i].style.fontFamily = "'Noto Serif KR', serif";
        }
    }
    app04_font_this.style.visibility = "hidden";
    app04_color_this.style.visibility = "visible";

    service04_intro03.style.transition = "0.4s";
    service04_intro03.style.opacity = "0";
    service04_intro03.style.transform = "translateX(-75px)";

    service04_intro04.style.transition = "0.7s";
    service04_intro04.style.opacity = "100%";
    service04_intro04.style.transform = "translateX(0px)";
}
for(var i =0;i<san_.length;i++){
    san_[i].addEventListener('click', onClickSan);
}

var toggle04Font = true;
function onClick04Font(e){
    e.preventDefault();
    app04Start = true;
    if(toggle04Font){
        app04_font_btn.style.transition = "0.2s,width 0.5s ";
        app04_font_btn.style.visibility = "visible";
        app04_font_btn.style.opacity = "100%";
        app04_font_btn.style.width = "135px";
    }else if(!toggle04Font){
        fontRest();
    }
    toggle04Font = !toggle04Font;
}
function fontRest(){
    app04_font_btn.style.transition = "0.5s,opacity 0.5s ";
    app04_font_btn.style.visibility = "visible";
    app04_font_btn.style.opacity = "0";
    app04_font_btn.style.width = "50px";
}
var toggle04Color = true;
function onClick04Color(e){
    e.preventDefault();
    app04Start = true;
    if(toggle04Color){
        app04_color_btn.style.transition = "0.2s,width 0.5s ";
        app04_color_btn.style.visibility = "visible";
        app04_color_btn.style.opacity = "100%";
        app04_color_btn.style.width = "230px";
    }else if(!toggle04Color){
        colorReset();
    }
    toggle04Color = !toggle04Color;
    app04_color_this.style.visibility = "hidden";
}
function colorReset(){
    app04_color_btn.style.transition = "0.5s,opacity 0.5s ";
    app04_color_btn.style.visibility = "visible";
    app04_color_btn.style.opacity = "0";
    app04_color_btn.style.width = "50px";
}
app04_font.addEventListener('click', onClick04Font);
app04_color.addEventListener('click', onClick04Color);
function onClick04PlusBtn(e){
    e.preventDefault();
    app04_plus_btn.style.visibility = "hidden";
    app04_plus_btn.style.transition = "0.3s";
    app04_plus_btn.style.opacity = "0";

    app04_plus_btn_con.style.visibility = "hidden";
    app04_plus_btn_con.style.transition = "0.3s";
    app04_plus_btn_con.style.opacity = "0";

    app04_plusImg.style.transtion = "0.5s ease-in-out 0.2s";
    app04_plusImg.style.backgroundColor = "#ffffff";
    app04_plusImg.style.border = "0";

    app04_addImg.style.transition = "0.4s ease-in-out 0.1s";
    app04_addImg.style.transform = "translate(-50%,-50%) scale(1)";
    app04_addImg.style.opacity = "100%";

    app04_title.innerHTML = "제주에서의 한달 생활.";

    app04_praphR[0].innerText = "어진이와 제주도 한달살이";
    app04_praphR[1].innerText = "난 아직 잊을 수가 없다.";
    app04_praphR[2].innerText = "산방산이 너무 커서 놀랐다.";
    app04_praphR[2].innerText = "이건 나의 최고의 추억";

    for(var i=0;i<app04_praphR.length;i++){
        app04_praphR[i].style.transition = "0.4s";
        app04_praphR[i].style.color = "#263C3C";
    }
    service04_intro02.style.transition = "0.4s";
    service04_intro02.style.opacity = "0";
    service04_intro02.style.transform = "translateX(-75px)";

    service04_intro03.style.transition = "0.7s";
    service04_intro03.style.opacity = "100%";
    service04_intro03.style.transform = "translateX(0px)";

    app04_flex.style.transition = "1s ease-in 1s";
    app04_flex.style.transform = "scale(1.55) translate(-130px,90px)";
    setTimeout(function(){
        app04_zoomP.innerHTML = "150%";
    },1000);
    
    app04_font_this.style.visibility = "visible";
}
app04_plus_btn.addEventListener('click', onClick04PlusBtn);
window.addEventListener('scroll', onScrollWindow, { passive: false });

Character_setting();
function Character_setting(){
    mcSrc01 = 0;
    mcSrc02 = 0;
}
function mainCharacter_motion(){
    setTimeout(function(){
        mcSrc02++;
        if(mcSrc02 > 9 ){
            mcSrc02 = 0;
            mcSrc01++;
        }
        else if(mcSrc01 == 4 && mcSrc02 == 7){
            mcSrc01 = 0;
            mcSrc02 = 0;
        }
    },24);
    mainCharacter.src = "./asset/motion/main_character/main_character_0" + mcSrc01 + mcSrc02 + ".png";
}
    
function Timestart01(){
        timeSet01 = setInterval(function(){
            app02T03_01++;
            if(app02T03_01 > 9){
                app02T03_01 = 0;
                app02T02_01++;
            }
            if(app02T02_01 > 5){
                app02T02_01 = 0;
                app02T01_01++;
            }
            if(app02T01_01 > 2){
                app02T01_01 = 0;
            }
            app02_time01.innerHTML = "0"+app02T01_01 + ":" + app02T02_01 +""+app02T03_01;
        },1000);
}
function Timestart02(){
        timeSet02 = setInterval(function(){
            app02T03_02++;
            if(app02T03_02 > 9){
                app02T03_02 = 0;
                app02T02_02++;
            }
            if(app02T02_02 > 5){
                app02T02_02 = 0;
                app02T01_02++;
            }
            if(app02T01_02 > 2){
                app02T01_02 = 0;
            }
            app02_time02.innerHTML = "0"+app02T01_02 + ":" + app02T02_02 +""+app02T03_02;
    },1000);
}
let vS01 = 0;
let vS02 = 0;
let vS03 = 0;
var mVIn;
function motionVoice(){
    mVIn = setInterval(function(){
        vS03++
        if(vS03 > 9){
            vS03 = 0;
            vS02++;
        }
        if(vS02 > 9){
            vS02 = 0;
            vS01 = 1;
        }
        if(vS01 == 1 && vS02 == 4 && vS03 == 5){
            vS01 = 0;
            vS02 = 0;
            vS03 = 0;
        }
        app02_inVoice.src = "./asset/motion/voice/voice_" + vS01 + "" + vS02 + "" + vS03 + ".png";
        app02_outVoice.src = "./asset/motion/voice/voice_" + vS01 + "" + vS02 + "" + vS03 + ".png";
    },48);
}

/* 네비게이션 디자인 에셋  */
function onClickAssetBtn(e){
    e.preventDefault();
    asset_con.style.visibility = "hidden";
    asset_background.style.visibility = "visible";
    asset_background.style.transition = "0.7s ease";
    asset_background.style.opacity = "75%";

    asset_content_con.style.visibility = "visible";
    asset_content_con.style.opacity = "100%";
    asset_content_con.style.transition = "0.4s ease 0.3s, transform 0.2s ease-out 0.3s";
    asset_content_con.style.transform = "translate(-50%,-50%) scale(1)";
}
function onClickAssetExit(e){
    e.preventDefault();
    asset_con.style.visibility = "hidden";
    asset_background.style.visibility = "hidden";
    asset_background.style.transition = "0.7s ease 0.2s";
    asset_background.style.opacity = "0";

    asset_content_con.style.visibility = "hidden";
    asset_content_con.style.opacity = "0";
    asset_content_con.style.transition = "0.4s ease, opacity 0.2s ease-out";
    asset_content_con.style.transform = "translate(-50%,-50%) scale(0.6)";
}
asset_exit.addEventListener('click', onClickAssetExit);
asset_btn.addEventListener('click', onClickAssetBtn);

let aSCH = asset_slider_con.clientHeight;
let asc = asset_content.scrollTop;
let sliderH = ((aSCH / asset_content.scrollHeight) * 100);
asset_slider.style.height = sliderH + "%";
function onScrollAssetContent(e){
    asc = asset_content.scrollTop;
    asset_slider.style.transition = "0.05s";
    asset_slider.style.top = ((asc*(100-sliderH))/1311) + "%";
}

asset_content.addEventListener('scroll', onScrollAssetContent);

// console.log(asset_content.scrollHeight);
    // var value = 13880;
    // window.scrollTo({ top: value, behavior: 'smooth' });

const bird01 = document.querySelector('.bird01');
let b01C = 1;
setInterval(function(){
    if(b01C > 6){
        b01C = 1;
    }
    bird01.src = "./asset/motion/bird/bird0" + b01C + ".png";
    b01C++;
},150);
const bird02 = document.querySelector('.bird02');
let b02C = 5;
setInterval(function(){
    if(b02C > 6){
        b02C = 1;
    }
    bird02.src = "./asset/motion/bird/bird0" + b02C + ".png";
    b02C++;
},200);
const bird03 = document.querySelector('.bird03');
let b03C = 2;
setInterval(function(){
    if(b03C > 6){
        b03C = 1;
    }
    bird03.src = "./asset/motion/bird/bird0" + b03C + ".png";
    b03C++;
},180);
const bird04 = document.querySelector('.bird04');
let b04C = 4;
setInterval(function(){
    if(b04C > 6){
        b04C = 1;
    }
    bird04.src = "./asset/motion/bird/bird0" + b04C + ".png";
    b04C++;
},200);
const bird05 = document.querySelector('.bird05');
let b05C = 6;
setInterval(function(){
    if(b05C > 6){
        b05C = 1;
    }
    bird05.src = "./asset/motion/bird/bird0" + b05C + ".png";
    b05C++;
},160);
function winWheel(e){
    e.preventDefault();
}
function sMouse(e){
    e.preventDefault();
    if(e.type === "mouseover"){
        window.addEventListener('wheel', winWheel, { passive: false });
    }
    else if(e.type === "mouseout"){
        window.removeEventListener('wheel', winWheel, { passive: true });
    }
    
}

start_background.addEventListener("mouseover", sMouse);
start_background.addEventListener("mouseout", sMouse);

function startBtnClick(e){
    e.preventDefault();
    start_background.style.transition = "1s ease";
    start_background.style.opacity = "0%";
    start_background.style.visibility = "hidden";
    background_music.play();
}

start_btn.addEventListener("click", startBtnClick);

function musicClick(e){
    e.preventDefault();
    if(musicToggle){
        background_music.pause();
        for(var i = 0;i < music_line.length;i++){
            music_line[i].style.animationPlayState = "paused";
        }
        music_muted.style.visibility = "visible";

    }else if(!musicToggle){
        background_music.play();
        for(var i = 0;i < music_line.length;i++){
            music_line[i].style.animationPlayState = "running";
        }
        music_muted.style.visibility = "hidden";
    }
    musicToggle = !musicToggle;
}

musicC_btn.addEventListener("click", musicClick);

