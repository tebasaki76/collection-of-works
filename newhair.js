'use strict';

// ハンバーガーメニュー
const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納
const list = document.querySelector('#js-list'); //js-listの要素を取得し、変数listに格納


ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
    // console.log('ok!'); 
    ham.classList.toggle('open'); // ハンバーガーメニューにopenクラスを付け外し
    nav.classList.toggle('open'); // ナビゲーションメニューにopenクラスを付け外し
    list.classList.toggle('list-open'); // list-boxにlist-openクラスを付け外し
});


// top画像切り替え

const main = document.querySelector('#js-main');
const circle1= document.querySelector('#js-circle1');
const circle2= document.querySelector('#js-circle2');
const circle3= document.querySelector('#js-circle3');
const circle4= document.querySelector('#js-circle4');


// クリックで切り替え
main.addEventListener('click', function () { 
    if (main.classList.contains('m-img1') === true) {
        main.classList.remove('m-img1');
        main.classList.add('m-img2');
        circle1.classList.remove('black-circle');
        circle1.classList.add('white-circle');
        circle2.classList.remove('white-circle');
        circle2.classList.add('black-circle');

    }
    else if (main.classList.contains('m-img2') === true) {
        main.classList.remove('m-img2');
        main.classList.add('m-img3');
        circle2.classList.remove('black-circle');
        circle2.classList.add('white-circle');
        circle3.classList.remove('white-circle');
        circle3.classList.add('black-circle');
    }
    else if (main.classList.contains('m-img3') === true) {
        main.classList.remove('m-img3');
        main.classList.add('m-img4');
        circle3.classList.remove('black-circle');
        circle3.classList.add('white-circle');
        circle4.classList.remove('white-circle');
        circle4.classList.add('black-circle');
    }
    else if (main.classList.contains('m-img4') === true) {
        main.classList.remove('m-img4');
        main.classList.add('m-img1');
        circle4.classList.remove('black-circle');
        circle4.classList.add('white-circle');
        circle1.classList.remove('white-circle');
        circle1.classList.add('black-circle');
    }
});

// 自動で切り替え
function fade() {
    if (main.classList.contains('m-img1') === true) {
        main.classList.remove('m-img1');
        main.classList.add('m-img2');
        circle1.classList.remove('black-circle');
        circle1.classList.add('white-circle');
        circle2.classList.remove('white-circle');
        circle2.classList.add('black-circle');
    }
    else if (main.classList.contains('m-img2') === true) {
        main.classList.remove('m-img2');
        main.classList.add('m-img3');
        circle2.classList.remove('black-circle');
        circle2.classList.add('white-circle');
        circle3.classList.remove('white-circle');
        circle3.classList.add('black-circle');
    }
    else if (main.classList.contains('m-img3') === true) {
        main.classList.remove('m-img3');
        main.classList.add('m-img4');
        circle3.classList.remove('black-circle');
        circle3.classList.add('white-circle');
        circle4.classList.remove('white-circle');
        circle4.classList.add('black-circle');
    }
    else if (main.classList.contains('m-img4') === true) {
        main.classList.remove('m-img4');
        main.classList.add('m-img1');
        circle4.classList.remove('black-circle');
        circle4.classList.add('white-circle');
        circle1.classList.remove('white-circle');
        circle1.classList.add('black-circle');
    }
}
    setInterval(fade, 4000);

    // カレンダー

    const week = ["月", "火", "水", "木", "金", "土", "日"];// 曜日の配列を定数weekに定義
    const today = new Date();// 本日の日付を定数todayに定義
    var showDate = new Date(today.getFullYear(), today.getMonth(), 1);// 表示する日付(年、月)オブジェクトとtoday＋1を変数showDateに定義

    window.onload = function () {
        showProcess(today,calendar)
    };


// 前の月
    function prev(){
        showDate.setMonth(showDate.getMonth() - 1);
        showProcess(showDate);
    }// showDateオブジェクトのgetMonth-1(-1月)
// 次の月
    function next(){
        showDate.setMonth(showDate.getMonth() - 1);
        showProcess(showDate);
    }// showDateオブジェクトのgetMonth＋1(＋1月)


// カレンダー表示
    function showProcess(date) {
        var year = date.getFullYear();// 年を変数yearに定義
        var month = date.getMonth();// 月を変数monthに定義
        document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";
    // id=headerを取得しHTMLを年月に書き換え(monthは0始まりのため＋1)
        var calendar = createProcess(year, month);
        document.querySelector('#calendar').innerHTML = calendar;
    // id=calendarを取得しHTMLを変数calendarに書き換え
    } 


// カレンダー作成↓???
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();// (表示する月の)1日の曜日
    var endDate = new Date(year, month + 1, 0).getDate();// (表示する月の)末日
    var lastMonthEndDate = new Date(year, month, 0).getDate();// (表示する月の)先月の末日
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);// カレンダーの日付の行数

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if(year == today.getFullYear()
                    && month == (today.getMonth())
                    && count == today.getDate()){
                    calendar += "<td class='today'>" + count + "</td>";
                } else {
                    calendar += "<td>" + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}