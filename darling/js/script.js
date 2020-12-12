const sleep = ms => new Promise(res => setTimeout(res, ms));

$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () {
        open();
    });
    btn_open.click(async function () {
        open();
        await sleep(5000);
        alert("Darling, " +
            "我为你准备的生日礼物是一年的牙医保险." +
            "没有什么是比我们一家人健健康康平平安安的在一起更重要的\n" +
            "你来已经一年没有回去了吧, 肯定也没有做牙保洁.如果说眼睛是心灵之窗，那牙齿就是微笑的门面\n" +
            "你保护好牙齿, 才能吃嘛嘛香呀, 笑口常开喔!" +
            "具体的plan在这个册子里呢, 我给你准备好了, 就差你的一个签名啦!")
        location.href="./dentalCare.pdf";
    });
    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }
});

