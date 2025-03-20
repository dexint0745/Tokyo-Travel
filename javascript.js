let navbar_toggler = document.querySelector(".navbar-toggler");
let myCarousel = document.getElementById("myCarousel");
let content_area1 = document.getElementById("content_area1");
let content_area2 = document.getElementById("content_area2");
let content_area3 = document.getElementById("content_area3");
let content_area4 = document.getElementById("content_area4");
let content_title_1 = document.getElementById("content_title_1");
let content_1 = document.getElementById("content_1");
let content_title_2 = document.getElementById("content_title_2");
let content_2 = document.getElementById("content_2");
let content_title_3 = document.getElementById("content_title_3");
let content_3 = document.getElementById("content_3");
let content_title_4 = document.getElementById("content_title_4");
let content_4 = document.getElementById("content_4");
let content_button = document.getElementById("content_button");
let carousel_img1 = document.getElementById("carousel_img1");
let carousel_img2 = document.getElementById("carousel_img2");
let carousel_img3 = document.getElementById("carousel_img3");
let carousel_img4 = document.getElementById("carousel_img4");
let carousel_img5 = document.getElementById("carousel_img5");
let carousel_img6 = document.getElementById("carousel_img6");
let carousel_content_img1 = document.getElementById('carousel_content_img1');
let carousel_content_img2 = document.getElementById('carousel_content_img2');
let carousel_content_img3 = document.getElementById('carousel_content_img3');
let carousel_content_2_img1 = document.getElementById('carousel_content_2_img1');
let carousel_content_2_img2 = document.getElementById('carousel_content_2_img2');
let carousel_content_2_img3 = document.getElementById('carousel_content_2_img3');
let carousel_content_3_img1 = document.getElementById('carousel_content_3_img1');
let carousel_content_3_img2 = document.getElementById('carousel_content_3_img2');
let carousel_content_3_img3 = document.getElementById('carousel_content_3_img3');
let to_top = document.getElementById('to_top');
let to_top_phone = document.getElementById('to_top_phone');
let navbar_back = document.getElementById('navbar_back');


let navbar_toggler_opcl = false;
function navbar_back_func() {
    if (navbar_toggler_opcl == true) {
        navbar_toggler.click();
        navbar_back.style.display = "none";
        document.body.style.overflowY = 'scroll';
        navbar_toggler_opcl = false;
    }
}
navbar_toggler.addEventListener('click', function () {
    if (navbar_toggler_opcl == false) {
        navbar_back.style.display = "block";
        document.body.style.overflowY = 'hidden';
        navbar_toggler_opcl = true;
    }
    else {
        navbar_toggler.click();
        navbar_back.style.display = "none";
        document.body.style.overflowY = 'scroll';
        navbar_toggler_opcl = false;
    }
})

let body_click;
let carousel_target = 0;
function carousel_animation() { //輪播縮小後放大
    myCarousel.classList.add('carousel_animation');
    myCarousel.style.animationName = "carousel_zoom";
    setTimeout(() => {
        myCarousel.style.animationName = "carousel_zoom_back";
    }, 700);
}
function contentTFS_change() { //文字透明後浮現
    if (document.body.offsetWidth < 995) {
        if (body_click == "Tokyo_button" || body_click == "Fujisan_button" || body_click == "Sendai_button") {
            navbar_toggler.click();
        }
        content_button.classList.add('content_button_animation_phone');
        content_button.style.animationName = "content_button_phone_zoom";
    }
    else {
        content_button.classList.add('content_button_animation');
        content_button.style.animationName = "content_button_zoom";
    }
    content_area1.classList.add('content_area_animation');
    content_area1.style.animationName = "content_area_zoom";
    content_area2.classList.add('content_area_animation');
    content_area2.style.animationName = "content_area_zoom";
    content_area3.classList.add('content_area_animation');
    content_area3.style.animationName = "content_area_zoom";
    content_area4.classList.add('content_area_animation');
    content_area4.style.animationName = "content_area_zoom";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setTimeout(() => {
        content_area1.style.animationName = "content_area_zoom_back";
        content_area2.style.animationName = "content_area_zoom_back";
        content_area2.style.display = "block";
        content_area3.style.animationName = "content_area_zoom_back";
        content_area3.style.display = "block";
        content_area4.style.animationName = "content_area_zoom_back";
        content_area4.style.display = "block";
        content_button.style.display = "none";
    }, 700);
}
document.body.onclick = function (event) {
    body_click = event.target.id;
    switch (body_click) {  //內容及輪播圖片更換
        case "index_button":
            if (carousel_target != 0) {
                carousel_animation()
                setTimeout(() => {
                    carousel_img1.src = "../Tokyo Travel/picture/東京/東京1.jpg";
                    carousel_img2.src = "../Tokyo Travel/picture/富士山/富士山1.jpg";
                    carousel_img3.src = "../Tokyo Travel/picture/仙台/仙台1.jpg";
                    carousel_img4.src = "../Tokyo Travel/picture/東京/東京2.jpg";
                    carousel_img5.src = "../Tokyo Travel/picture/富士山/富士山2.jpg";
                    carousel_img6.src = "../Tokyo Travel/picture/仙台/仙台2.jpg";
                    content_area1.style.animationName = "content_area_zoom_back";
                    content_title_1.textContent = "旅遊簡介";
                    content_1.textContent = `本次旅遊10天9夜目的地為東京、富士山腳下和仙台，過程中和同行的人拍攝了大量的照片，
                    其中精選的照片會在個別地區介紹展示，而其他照片則會放在旅遊雜圖區供人閱覽。之後會個別介紹旅遊行程及各地當時季節所呈現的風景，
                    大致的行程為東京⭢富士山⭢東京⭢仙台，可以藉由上方或下方地點選項選取要觀看的地區。`;
                    content_area2.style.display = "none";
                    content_area3.style.display = "none";
                    content_area4.style.display = "none";
                }, 700);
                if (document.body.offsetWidth < 995) {
                    navbar_toggler.click();
                    navbar_back.style.display = "none";
                    document.body.style.overflowY = 'scroll';
                    content_button.style.animationName = "content_button_phone_zoom_back";
                }
                else {
                    content_button.style.animationName = "content_button_zoom_back";
                }
                content_area1.style.animationName = "content_area_zoom";
                content_area2.style.animationName = "content_area_zoom";
                content_area3.style.animationName = "content_area_zoom";
                content_area4.style.animationName = "content_area_zoom";
                content_button.style.display = "block";
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                carousel_target = 0;
            }
            break;
        case "Tokyo_button":
        case "Tokyo_content_button":
            if (carousel_target != 1) {
                carousel_animation()
                setTimeout(() => {
                    carousel_img1.src = "../Tokyo Travel/picture/東京/東京5.jpg";
                    carousel_img2.src = "../Tokyo Travel/picture/東京/東京3.jpg";
                    carousel_img3.src = "../Tokyo Travel/picture/東京/東京2.jpg";
                    carousel_img4.src = "../Tokyo Travel/picture/東京/東京4.jpg";
                    carousel_img5.src = "../Tokyo Travel/picture/東京/東京1.jpg";
                    carousel_img6.src = "../Tokyo Travel/picture/東京/東京6.jpg";
                    carousel_content_img1.src = '../Tokyo Travel/picture/東京/千鳥淵綠道1.jpg';
                    carousel_content_img2.src = '../Tokyo Travel/picture/東京/千鳥淵綠道2.jpg';
                    carousel_content_img3.src = '../Tokyo Travel/picture/東京/千鳥淵綠道3.jpg';
                    carousel_content_2_img1.src = '../Tokyo Travel/picture/東京/江之島1.jpg';
                    carousel_content_2_img2.src = '../Tokyo Travel/picture/東京/江之島2.jpg';
                    carousel_content_2_img3.src = '../Tokyo Travel/picture/東京/江之島3.jpg';
                    carousel_content_3_img1.src = '../Tokyo Travel/picture/東京/東京市區1.jpg';
                    carousel_content_3_img2.src = '../Tokyo Travel/picture/東京/東京市區2.jpg';
                    carousel_content_3_img3.src = '../Tokyo Travel/picture/東京/東京市區3.jpg';
                    content_title_1.innerHTML = "東京行程介紹";
                    content_1.innerHTML = `由於我們是搭晚上12點的飛機到羽田機場，到達時差不多日本時間半夜3點，所以就在機場等到差不多早上6.7點出發。
                    第一天行程是東京市區皇居周圍的千鳥淵綠道，再來的東京行程就要等到第四天的江之島後接續東京行程。<br>
                    第四天傍晚: 江之島<br>
                    第五天: 東京淺草及晴空塔<br>
                    第六天: 秋葉原<br>
                    由於秋葉原基本都在逛街，所以就不多作介紹`;
                    content_title_2.innerHTML = "千鳥淵綠道";
                    content_2.innerHTML = `旅遊時正好是櫻花盛開的時候，沿路上都能看到綻放的櫻花，走著走著正好看到日本最標誌性的場館"東京武道館"。`;
                    content_title_3.innerHTML = "江之島";
                    content_3.innerHTML = `從富士山回到東京，中途安排了江之島半日遊，從本島走江之島大橋登島參觀江之島有名的燈塔。<br>參觀前要先爬山，
                    可以選擇搭手扶梯或靠雙腳上山，上燈塔頂時已經晚上了，正好可以欣賞燈光秀及整個海灣的夜景。`;
                    content_title_4.innerHTML = "東京市區";
                    content_4.innerHTML = `早上的淺草旅客非常多，拍完著名的"雷門"後裡面有非常多攤販可以邊逛街邊吃東西。
                    <br>到了傍晚準備前往晴空塔，裡面基本上就是百貨公司，逛著逛著正好遇到了台灣祭，裡面有眾多台灣著名的小吃，彷彿回到了台灣夜市。<br>
                    接著就登上塔頂俯瞰東京夜景，人潮一樣是非常多，也又販售一些晴空塔小物可供遊客做紀念。`;
                }, 700);
                contentTFS_change();
                carousel_target = 1;
            }
            break;
        case "Fujisan_button":
        case "Fujisan_content_button":
            if (carousel_target != 2) {
                carousel_animation()
                setTimeout(() => {
                    carousel_img1.src = "../Tokyo Travel/picture/富士山/富士山5.jpg";
                    carousel_img2.src = "../Tokyo Travel/picture/富士山/富士山3.jpg";
                    carousel_img3.src = "../Tokyo Travel/picture/富士山/富士山2.jpg";
                    carousel_img4.src = "../Tokyo Travel/picture/富士山/富士山4.jpg";
                    carousel_img5.src = "../Tokyo Travel/picture/富士山/富士山1.jpg";
                    carousel_img6.src = "../Tokyo Travel/picture/富士山/富士山6.jpg";
                    carousel_content_img1.src = '../Tokyo Travel/picture/富士山/大湧谷1.jpg';
                    carousel_content_img2.src = '../Tokyo Travel/picture/富士山/大湧谷2.jpg';
                    carousel_content_img3.src = '../Tokyo Travel/picture/富士山/大湧谷3.jpg';
                    carousel_content_2_img1.src = '../Tokyo Travel/picture/富士山/箱根蘆之湖1.jpg';
                    carousel_content_2_img2.src = '../Tokyo Travel/picture/富士山/箱根蘆之湖2.jpg';
                    carousel_content_2_img3.src = '../Tokyo Travel/picture/富士山/箱根蘆之湖3.jpg';
                    carousel_content_3_img1.src = '../Tokyo Travel/picture/富士山/河口湖1.jpg';
                    carousel_content_3_img2.src = '../Tokyo Travel/picture/富士山/河口湖2.jpg';
                    carousel_content_3_img3.src = '../Tokyo Travel/picture/富士山/河口湖3.jpg';
                    content_title_1.innerHTML = "富士山行程介紹";
                    content_1.innerHTML = `第一天晚上從東京來到富士山，住宿的位置在御殿場，之後展開為期三天的富士山之旅。<br>
                    第二天: 大湧谷及箱根蘆之湖<br>
                    第三天: 河口湖<br>
                    第四天早上: 御殿場outlet<br>
                    outlet基本上都在逛街買東西，所以也不多作介紹`;
                    content_title_2.innerHTML = "大湧谷";
                    content_2.innerHTML = `這裡是位於箱根的火山地形，可以從山下搭纜車上山，沿途欣賞火山地形的樣貌。<br>
                    這裡最有名的特產就是黑蛋，是外殼黑色裡面白色的蛋，也有許多跟黑蛋相關的伴手禮可供選購。`;
                    content_title_3.innerHTML = "箱根蘆之湖";
                    content_3.innerHTML = `從大湧谷的纜車接著搭下去即可到蘆之湖，下纜車後可以購票搭乘海盜船到蘆之湖對岸。<br>
                    這裡有名的拍照景點就是海上的鳥居，由於人潮眾多為了能拍張照得大排長龍。`;
                    content_title_4.innerHTML = "河口湖";
                    content_4.innerHTML = `這裡可以說是觀賞富士山最好的景點，隨便拍都是富士山。<br>來到這裡可以租腳踏車繞河口湖一圈，
                    由於正好是櫻花盛開的期間所以可以沿途欣賞櫻花，礙於時間不夠只繞了約三分之一就打道回府了。`;
                }, 700);
                contentTFS_change();
                carousel_target = 2;
            }
            break;
        case "Sendai_button":
        case "Sendai_content_button":
            if (carousel_target != 3) {
                carousel_animation()
                setTimeout(() => {
                    carousel_img1.src = "../Tokyo Travel/picture/仙台/仙台5.jpg";
                    carousel_img2.src = "../Tokyo Travel/picture/仙台/仙台3.jpg";
                    carousel_img3.src = "../Tokyo Travel/picture/仙台/仙台2.jpg";
                    carousel_img4.src = "../Tokyo Travel/picture/仙台/仙台4.jpg";
                    carousel_img5.src = "../Tokyo Travel/picture/仙台/仙台1.jpg";
                    carousel_img6.src = "../Tokyo Travel/picture/仙台/仙台6.jpg";
                    carousel_content_img1.src = '../Tokyo Travel/picture/仙台/船岡城址公園1.jpg';
                    carousel_content_img2.src = '../Tokyo Travel/picture/仙台/船岡城址公園2.jpg';
                    carousel_content_img3.src = '../Tokyo Travel/picture/仙台/船岡城址公園3.jpg';
                    carousel_content_2_img1.src = '../Tokyo Travel/picture/仙台/松島1.jpg';
                    carousel_content_2_img2.src = '../Tokyo Travel/picture/仙台/松島2.jpg';
                    carousel_content_2_img3.src = '../Tokyo Travel/picture/仙台/松島3.jpg';
                    carousel_content_3_img1.src = '../Tokyo Travel/picture/仙台/仙台城1.jpg';
                    carousel_content_3_img2.src = '../Tokyo Travel/picture/仙台/仙台城2.jpg';
                    carousel_content_3_img3.src = '../Tokyo Travel/picture/仙台/仙台城3.jpg';
                    content_title_1.innerHTML = "仙台行程介紹";
                    content_1.innerHTML = `這趟旅程最後的地點仙台，從東京搭新幹線得要花2個小時左右，雖然距離有點遠，但這裡還是有很多值得參觀拜訪的地方。<br>
                    第七天: 船岡城址公園<br>
                    第八天: 松島<br>
                    第九天: 仙台城`;
                    content_title_2.innerHTML = "船岡城址公園";
                    content_2.innerHTML = `仙台著名的觀音像就是在這個地方，可以選擇搭小火車或步行上山。
                    <br>山頂能眺望整個白石川河畔的櫻花樹，作為賞櫻的地點也是不能錯過的。`;
                    content_title_3.innerHTML = "松島";
                    content_3.innerHTML = `這裡的海灣有非常多的小島，可以搭乘觀光船繞行一周欣賞每座小島的樣貌。<br>
                    其中一座島可以從本島走橋上島，這座橋叫"福浦島"又稱"日本台灣友情之橋"，是為了感謝311大海嘯台灣的捐款而起的。
                    <br>雖然島上沒什麼東西，但可以從島上欣賞海灣的風景。`;
                    content_title_4.innerHTML = "仙台城";
                    content_4.innerHTML = `是江戶時代初期所建造的城，雖然現場大部分都已經被拆光了，但有博物館可以參觀，來了解江戶時代的歷史。
                    <br>伊達政宗是這座城的建造者，所以也立了伊達政宗像在遺址裡。遺址附近的瑞鳳殿，則是供奉伊達政宗的地方。`;
                }, 700);
                contentTFS_change();
                carousel_target = 3;
            }
            break;
    }
}

function modify_Carousel_size() { //轉換手機版版面位置
    if (document.body.offsetWidth < 995) {
        myCarousel.style.width = "95%"
    }
    else {
        myCarousel.style.width = "50%"
    }
}
modify_Carousel_size();
function modify_content_area_size() {
    if (document.body.offsetWidth < 995) {
        content_area1.style.marginLeft = "2%";
        content_area1.style.marginRight = "2%";
        content_area2.style.marginLeft = "2%";
        content_area2.style.marginRight = "2%";
        content_area3.style.marginLeft = "2%";
        content_area3.style.marginRight = "2%";
        content_area4.style.marginLeft = "2%";
        content_area4.style.marginRight = "2%";
    }
    else {
        content_area1.style.marginLeft = "30%";
        content_area1.style.marginRight = "30%";
        content_area2.style.marginLeft = "30%";
        content_area2.style.marginRight = "30%";
        content_area3.style.marginLeft = "30%";
        content_area3.style.marginRight = "30%";
        content_area4.style.marginLeft = "30%";
        content_area4.style.marginRight = "30%";
    }
}
modify_content_area_size();
function modify_content_button_size() {
    if (document.body.offsetWidth < 995) {
        content_button.style.marginLeft = "2%";
        content_button.style.marginRight = "2%";
        to_top.style.display = "none";
        to_top_phone.style.display = "flex";
    }
    else {
        content_button.style.marginLeft = "30%";
        content_button.style.marginRight = "30%";
        to_top_phone.style.display = "none";
    }
}
modify_content_button_size();
let debounceTimeout;
window.addEventListener('resize', function () {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(function () {
        modify_Carousel_size();
        modify_content_area_size();
        modify_content_button_size();
    }, 200);
});

function to_top_func() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function to_top_phone_func() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 100 && document.body.offsetWidth > 995) {
        to_top.style.display = "block";
    }
    else {
        to_top.style.display = "none";
    }
});
