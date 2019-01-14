define([
    'jquery',
    'uiComponent',
    'ko'
], function($,Component, ko) {
    'use strict';
    return Component.extend({

        testData: function () {
            var text_area_status = $('#cms_page_form_content').css('display');
            if(text_area_status === 'none'){
                $('#togglecms_page_form_content').click();
            }

            $('#advanced-wysiwyg').show();
            $('body').css('overflow','hidden');



        }

    });
});