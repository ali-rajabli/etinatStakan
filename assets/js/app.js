// Kontakt səhifəsindəki validation
$('#send-button').on('click', function() {
    var name = $('#name-input').val()
    var number = $('#number-input').val()
    var email = $('#email-input').val()
    var message = $('#message-textarea').val()
    if (
        name.trim() == '' ||
        number.trim() == '' ||
        email.trim() == '' ||
        message.trim() == ''
    ) {
        correctCase()
        check('#name-input', '.name-form')
        check('#number-input', '.number-form')
        check('#email-input', '.email-form')
        check('#message-textarea', '.message-form')
        $('<div class="warning-div"></div>').insertBefore('#send-button')
        $('.warning-div').append(
            `<p class="warning-p text-danger"><i class="me-2 fas fa-exclamation-triangle"></i>Пожалуйста, заполните все поля.</p>`
        )
    } else {
        correctCase()
    }
})

// İnput-a hərf yazanda yoxlaması üçün
$('.common-input').keyup(function(e) {
    if ($(this).is('#name-input')) {
        check('#name-input', '.name-form')
    } else if ($(this).is('#number-input')) {
        check('#number-input', '.number-form')
    } else if ($(this).is('#email-input')) {
        check('#email-input', '.email-form')
    } else if ($(this).is('#message-textarea')) {
        check('#message-textarea', '.message-form')
    }
    if (
        $('#name-input').val().trim() != '' &&
        $('#number-input').val().trim() != '' &&
        $('#email-input').val().trim() != '' &&
        $('#message-textarea').val().trim() != ''
    ) {
        $('.warning-div').remove()
    }
})

// Verilmiş elementləri boş olub olmadığına görə yoxlayıb uyğun görünüş verir
function check(input, form) {
    var value = $(`${input}`).val()
    if (value.trim() == '') {
        $(`${form}`).css('border', '2px solid #f00')
        $(`${form} i`).css('color', '#f00')
    } else {
        $(`${form}`).css('border', '1px solid #c7a17a')
        $(`${form} i`).css('color', '#000')
    }
}

// Düzgün vəziyyət - yəni ki, hərşey normal hala qayıdır və xəbərdarlıq yox olur
function correctCase() {
    $('.form-element').css('border', '1px solid #c7a17a')
    $('.form-element i').css('color', '#000')
    $('.warning-div').remove()
}

// Ana səhifədə kiçik stəkanlardan hansına basılsa, o stəkan slide-da görünür və arxa fonda ona uyğun dəyişir
$('.about-icon').on('click', function() {
    var color = $(this).css('background-color')
    $('.about-us').css(
        'background',
        `linear-gradient(0deg, rgb(255, 255, 255), ${color} 15%, rgb(255, 255, 255))`
    )
    var id = $(this).data('id')
    $('.carousel-item').removeClass('active')
    $(`#item-${id}`).addClass('active')
})

// Ana səhifədəki slayd dəyişəndə arxa fonunda ona uyğun dəyişməsi
$('.homepage-carousel').on('slid.bs.carousel', function() {
    var element_id = $('.carousel-item.active').attr('id');
    var id = element_id[element_id.length - 1];
    var color = $(`.icon-${id}`).data('color');

    $('.about-us').css(
        'background',
        `linear-gradient(0deg, rgb(255, 255, 255), ${color} 15%, rgb(255, 255, 255))`
    )

});

// Ana səhifədəki validation
$('#send-button-hm').on('click', function() {
    var name = $('#name-input-hm').val()
    var email = $('#email-input-hm').val()
    var message = $('#message-textarea-hm').val()
    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
        correctCase_hm();
        check_hm('#name-input-hm');
        check_hm('#email-input-hm');
        check_hm('#message-textarea-hm');
        $('<div class="warning-div"></div>').insertBefore('#send-button-hm')
        $('.warning-div').append(
            `<p class="warning-p text-danger"><i class="me-2 fas fa-exclamation-triangle"></i>Пожалуйста, заполните все поля.</p>`
        )
    } else {
        correctCase_hm();
    }
});

// Ana səhifədəki validation üçün inputları yoxlama funksiyası
function check_hm(input_element) {
    if ($(input_element).val().trim() == '') {
        $(input_element).css('border', '2px solid #f00');
    } else {
        $(input_element).css('border', '2px solid #306d34');
    }
}

// Ana səhifədəki validation üçün düzgün hal
function correctCase_hm() {
    $('#name-input-hm').css('border', '2px solid #306d34');
    $('#email-input-hm').css('border', '2px solid #306d34');
    $('#message-textarea-hm').css('border', '2px solid #306d34');
    $('.warning-div').remove();
}

// Ana səhifədəki validation üçün input daxil ediləndə yoxlanma
$('.common-input-hm').keyup(function(e) {
    if ($(this).is('#name-input-hm')) {
        check_hm('#name-input-hm');
    } else if ($(this).is('#email-input-hm')) {
        check_hm('#email-input-hm');
    } else if ($(this).is('#message-textarea-hm')) {
        check_hm('#message-textarea-hm');
    }
    if ($('#name-input-hm').val().trim() != '' && $('#email-input-hm').val().trim() != '' && $('#message-textarea-hm').val().trim() != '') {
        $('.warning-div').remove()
    }
})

// products
$('.tab-heading').click(function() {
    let dataName = $(this).data('name')
    let tabContents = $('.tab-content')
    tabContents.each(function(index, value) {
        let dataValue = $(value).data('name')
        $(value).removeClass('active')
        if (dataValue === dataName) {
            $(value).addClass('active')
        }
    })
    let tabImages = $('.tab-image')
    tabImages.each(function(index, value) {
        let imageValue = $(value).data('name')
        $(value).removeClass('active')
        if (imageValue === dataName) {
            $(value).addClass('active')
        }
    })

})

// Səbətin PopUp kimi açılması

$('#cart-button').on('click', function() {
    $('#basket-pop-up').css('display', 'block');
});

$('.close').on('click', function() {
    $('#basket-pop-up').css('display', 'none');
})

$(window).on('click', function(event) {
    if (event.target == $('#basket-pop-up')) {
        $('#basket-pop-up').css('display', 'none');
    }
})

// CallBack PopUp

$('.call-back').on('click', function() {
    $('#callback-popup').css('display', 'block');
});


$('.close').on('click', function() {
    $('#callback-popup').css('display', 'none');
})

$(window).on('click', function(event) {
    if (event.target == $('#basket-pop-up')) {
        $('#callback-popup').css('display', 'none');
    }
})

// CallBack Validation

$('#callback-send-button').on('click', function() {

    if ($('#callback-name-input').val().trim() == '') {
        $('#callback-name-input').css('border', '2px solid #f00');
    } else {
        $('#callback-name-input').css('border', '2px solid rgb(45, 129, 70)');
    }

    if ($('#callback-number-input').val().trim() == '') {
        $('#callback-number-input').css('border', '2px solid #f00');
    } else {
        $('#callback-number-input').css('border', '2px solid rgb(45, 129, 70)');
    }

    if ($('#callback-name-input').val().trim() != '' && $('#callback-number-input').val().trim() != '') {
        $('#callback-popup').css('display', 'none');
        $('#callback-name-input').val('')
        $('#callback-number-input').val('')
    }

});

$('.callback-input').keyup(function(e) {
    if ($(this).val().trim() == '') {
        $(this).css('border', '2px solid #f00');
    } else {
        $(this).css('border', '2px solid rgb(45, 129, 70)');
    }

});