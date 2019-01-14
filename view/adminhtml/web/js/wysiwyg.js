require([
    'jquery',
],function ($) {

    var editor = grapesjs.init({
        showOffsets: 1,
        noticeOnUnload: 0,
        container: '#advanced-wysiwyg',
        plugins: ['gjs-navbar','gjs-component-countdown','gjs-preset-webpage'],
        height: '100%',
        fromElement: true,
        storageManager: { autoload: 0 },
        styleManager : {
            sectors: [{
                name: 'General',
                open: false,
                buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
            },{
                name: 'Dimension',
                open: false,
                buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
            },{
                name: 'Typography',
                open: false,
                buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
            },{
                name: 'Decorations',
                open: false,
                buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
            },{
                name: 'Extra',
                open: false,
                buildProps: ['transition', 'perspective', 'transform'],
            }
            ],
        },
    });


    const panelManager = editor.Panels;

    panelManager.addPanel({
        id: 'customPanel',
        visible    : true,
        buttons    : [{
            id          : 'smile',
            className   : 'fa fa-save',
            attributes  : { title: 'Update Promo' },
            command     : 'customCommand'
        }],
    });

    const commands  = editor.Commands;

    const storageManager = editor.StorageManager;

    commands.add('customCommand', {
        run:  function(editor, sender){
            storageManager.load(['css', 'html'], function(res) {

                var htmlContent = res.html;
                var cssContent = res.css;
                cssContent = `<style>${cssContent}</style>`;

                $('#cms_page_form_content').val(cssContent+htmlContent);
                $('#togglecms_page_form_content').click();
                $('body').css('overflow','visible');
                $('#advanced-wysiwyg').hide();
            })
        }
    });


});