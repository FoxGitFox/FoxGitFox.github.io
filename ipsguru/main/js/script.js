
(function() {
    var i = 1;
    var widthel = 260; /*ширина элемента*/
    var prob = 2; /*расстояние между элементами*/
    var nr_el = 14; /*кол. элементов*/

    var caseOpenAudio = new Audio();
    caseOpenAudio.src = "/case/open.wav";
    caseOpenAudio.volume = 0.2;

    var caseCloseAudio = new Audio();
    caseCloseAudio.src = "/case/close.wav";
    caseCloseAudio.volume = 0.2;

    var caseScrollAudio = new Audio();
    caseScrollAudio.src = "/case/scroll.wav";
    caseScrollAudio.volume = 0.2;

    var dubl = $('#case_elements').html();
    $('#case_elements').prepend(dubl);
    $(".case_element").each(function() {
        $(this).addClass("case_element" + i);
        i++;
    })
    $('#case_elements').css('width', 2 * nr_el * (widthel + prob));
    Math.rand = function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function openCase() {
        $('#case_elements').css('margin-left', '0px');
        var el = Math.rand(1, nr_el);
        var min = (el - 1) * (widthel + prob);
        var src = $(".case_element" + el).find("img").attr('src');
        var url = $(".case_element" + el).find(".case-url").html();
        var a = ((nr_el) * (widthel + prob) + (el - 2) * (widthel + prob)); {
            $('#case_elements').animate({
                marginLeft: -1 * Math.rand(a - widthel / 2 + 2, a + widthel / 2 - 2)
            }, {
                duration: 8000,
                easing: 'swing',
                start: function() {
                    caseOpenAudio.play();

                    $('.OpenCaseBtn').text("Открываем...").attr('disabled', 'disabled');
                },
                complete: function() {
                    caseCloseAudio.play();
                    $('.OpenCaseBtn').text("КРУТИТЬ!").removeAttr('disabled');

                    $.fancybox({
                    	wrapCSS: 'roulette-result',
                    	type:'html',
                    	content: '<img alt="" src="'+src+'"><a href="' + url + '">!Ура!</a><div id="spin-again">Крутить еще раз</div>',
                    	afterShow: function () {
                    		$('#spin-again').on('click', function() {
                    			$.fancybox.close();
                    			openCase();
                    		});
                    	}
                    });
                }
            })
        }

    };

    $('.OpenCaseBtn').click(openCase);
})();
