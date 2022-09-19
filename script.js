var hideseek = true
$(document).ready(function () {
    function changeTimeZone(date, timeZone) {
        if (typeof date === 'string') {
          return new Date(
            new Date(date).toLocaleString('en-US', {
              timeZone,
            }),
          );
        }
      
        return new Date(
          date.toLocaleString('en-US', {
            timeZone,
          }),
        );
      }

    setInterval(time, 1)
    function time() {
      const date = changeTimeZone(new Date(), 'Asia/Yerevan');
        
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var weekday = date.getDay()
        $("#dayoftheweek").html(weekdays[weekday])
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var month = date.getMonth()
        $("#month").html(months[month])
        var monthday = date.getDate()
        $("#dayofthemonth").html(monthday)
        var year = date.getFullYear()
        $("#year").html(year)
        var hour = date.getHours()
        $("#hour").html(hour)
        var min = date.getMinutes()
        $("#min").html(min < 10 ? "0" + min : min)
        var sec = date.getSeconds()
        $("#sec").html(sec < 10 ? "0" + sec : sec)
    }
    let min_max = "max"
    $("#toggle").click(function () {
        $(".activate").toggle(1000)
    })

    $("#burger").click(function () {
        min_max = "max"
        $("#r").attr('src', 'restore-down.png')
        min_max = "max"
        $('#menu').css({

            "transform": "scale(1)",
            "background": "greenyellow"
        })
        $('#menu').slideDown(1000)
        hideseek = false

    })
    $("#c").click(function () {
        $("#menu").slideUp(1000)
        hideseek = true


    })
    $("#m").click(function () {
        if (min_max == "max") {
            $("#hidden").slideDown(1000)

        }
        else {
            $("#hidden").css({
                transform: "scale(0.75)",
                backgroundColor: "red"

            })
            $("#hidden").slideDown(1000)
        }
        $("#menu").slideUp(1000)
        hideseek = true
        $("#burger").hide(1000)
    })
    $("#hidden").click(function () {
        $("#menu").slideDown(1000)
        $("#hidden").slideUp(1000)
        $("#burger").show(1000)
        hideseek = false
    })
    $("#r").click(function () {

        if (min_max == "max") {
            $(this).attr('src', 'stop.png')
            min_max = "min"
            $('#menu').css({
                "transform": "scale(0.75)",
                "background": "red"
            })
        }
        else if (min_max == "min") {
            $(this).attr('src', 'restore-down.png')
            min_max = "max"
            $('#menu').css({

                "transform": "scale(1)",
                "background": "greenyellow"
            })
        }
    })
    $(function () {
        $("#map1").addClass("active")
    })
    $("#map1").click(function () {
        $(".ma").removeClass("active")
        $(this).addClass("active")
        $(".maps").hide(1).removeClass("activate")
        $("#img").show(1).addClass("activate")



    })
    $("#map2").click(function () {
        $(".ma").removeClass("active")
        $(this).addClass("active")
        $(".maps").hide(1).removeClass("activate")
        $("#img1").show(1).addClass("activate")
    })
    $("#map3").click(function () {
        $(".ma").removeClass("active")
        $(this).addClass("active")
        $(".maps").hide(1).removeClass("activate")
        $("#img2").show(1).addClass("activate")
    })







    $(".funfacts").click(function () {
        if ($(this).hasClass("act")) {
            $(this).removeClass("act")
            $(this).children().removeClass("ac")
            $(this).siblings(".info").slideUp(1000)

        }
        else {
            $(this).addClass("act")
            $(".fa").removeClass("ac")
            $(this).children().addClass("ac")
            $(".info").slideUp(1000)
            $(this).siblings(".info").slideDown(1000)
        }


    })
    
    $("#time").click(function () {
        $("#time").toggleClass("acti")
    })
    let flag = $("#flag")
    let width = 320;
    let height = 160;
    let radius = 0;
    let left = 50;
    let top = 75;
    let active = true

    $("#size").click(function () {
        if (active == true) {
            active = false


            if (width < 500 && height < 340) {
                flag.animate({
                    width: "+=10",
                    height: "+=10"
                }, function () {
                    active = true
                })
                width += 10
                height += 10

            }
            else if (width == 500 & height == 340) {
                active = true
                alert("The flag has reached max size")
            }
        }


    })




    $("#radius").click(function () {
        if (active == true) {
            active = false
            if (radius < 100) {
                flag.animate({
                    borderRadius: "+=10%"
                }, function () {
                    active = true
                })
                radius += 10

            }
            else if (radius == 100) {
                active = true
                alert("The flag has reached max border-radius")
            }
        }
    })



    $("#top").click(function () {
        if (active == true) {
            active = false
            if (top > 25) {
                flag.animate({
                    top: "-=5%"
                }, function () {
                    active = true
                })
                top -= 5

            }
            else if (top == 25) {
                active = true
                alert("The flag cannot go any higher than this")
            }
        }
    })

    $("#bottom").click(function () {

        if (active == true) {
            active = false
            if (top < 100) {

                flag.animate({
                    top: "+=5%"
                }, function () {
                    active = true
                })
                top += 5


            }
            else if (top == 100) {
                active = true
                alert("The flag cannot go any lower than this")
            }
        }
    })


    $("#left").click(function () {
        if (active == true) {
            active = false
            if (left > 15) {
                flag.animate({
                    left: "-=5%"
                }, function () {
                    active = true
                })
                left -= 5

            }
            else if (left == 15) {
                active = true
                alert("the flag cannot go any lefter than this")
            }
        }
    })


    $("#right").click(function () {
        if (active == true) {
            active = false
            if (left < 85) {
                flag.animate({
                    left: "+=5%"
                }, function () {
                    active = true
                })
                left += 5

            }
            else if (left == 85) {
                active = true
                alert("The flag cannot go any righter than this")
            }
        }
    })



    $("#size-").click(function () {
        if (active == true) {
            active = false
            if (width > 210 && height > 50) {
                flag.animate({
                    width: "-=10",
                    height: "-=10"
                }, function () {
                    active = true
                })
                height -= 10
                width -= 10

            }
            else if (width == 210 && height == 50) {
                alert("The flag has reached min size")
                active = true
            }
        }


    })

    $("#radius-").click(function () {
        if (active == true) {
            active = false
            if (radius > 0) {
                flag.animate({
                    borderRadius: "-=10%"
                }, function () {
                    active = true
                })
                radius -= 10

            }

        }
        else if (radius == 0) {

            alert("The flag has reached min border-radius")
            active = true
        }
    })
    

})

let active2 = true

var left2 = 50;

var top2 = 75;

$(document).keyup(function (e) {
    let flag = $("#flag")



    if (hideseek == false) {

        if (e.which == 37) {
            if (active2 == true) {
                active2 = false

                if (left2 > 15) {
                    flag.animate({
                        left: "-=5%"
                    }, 1, function () {
                        active2 = true
                    })
                    left2 -= 5;


                }
                else if (left2 == 15) {
                    alert("the flag cannot go any lefter than this")
                    active2 = true
                }
            }
        }
        if (e.which == 38) {
            if (active2 == true) {
                active2 = false

                if (top2 > 25) {


                    flag.animate({
                        top: "-=5%"
                    }, 1, function () {
                        active2 = true
                    })
                    top2 -= 5


                }
                else if (top2 == 25) {
                    active2 = true
                    alert("The flag cannot go any higher than this")
                }
            }
        }
        if (e.which == 39) {
            if (active2 == true) {
                active2 = false

                if (left2 < 85) {
                    flag.animate({
                        left: "+=5%"
                    }, 1, function () {
                        active2 = true
                    })
                    left2 += 5

                }
                else if (left2 == 85) {
                    active2 = true
                    alert("The flag cannot go any righter than this")
                }
            }
        }
        if (e.which == 40) {

            if (active2 == true) {
                active2 = false

                if (top2 < 100) {
                    top2 += 5

                    flag.animate({
                        top: "+=5%"
                    }, 1, function () {
                        active2 = true
                    })


                }
                else if (top2 >= 100) {
                    alert("The flag cannot go any lower than this")
                    active2 = true
                }
            }
        }
    }
})