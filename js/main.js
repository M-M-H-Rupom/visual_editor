
; (function () {
    tinyMCE.PluginManager.add('tmcd_plugin', function (editor, url) {
        editor.addButton('tmcd_button_one', {
            text: 'B1',
            // image : url+"image/cart.png",
            'onclick': function () {
                editor.insertContent('hello friend');
            }
        });
        editor.addButton('tmcd_button_two', {
            type: 'listbox',
            text: 'select',
            values: [
                { text: 'Apple', value: 'you are selected <b>Apple</b>' },
                { text: 'Mango', value: 'you are selected <b>Mango</b>' },
                { text: 'Banana', value: 'you are selected <b>banana</b>' },
            ],
            // image : url+"image/cart.png",
            'onselect': function () {
                editor.insertContent(this.value())
            }
        });
        editor.addButton('tmcd_menu_one',{
            type :'menubutton',
            text :'choices',
            menu: [
                {
                    text:'Option A',
                    menu : [
                        {
                            text:'Option A 1',
                            onclick : function(){
                               editor.insertContent('Option A 1')
                            }
                        },
                        {
                            text:'Option A 2',
                            onclick : function(){
                               editor.insertContent('Option A 2')
                            }
                        },
                        {
                            text:'Option A 3',
                            onclick : function(){
                               editor.insertContent('Option A 3')
                            }
                        }
                    ]
                },
                {
                    text:'Option B',
                    onclick : function(){
                       editor.insertContent('option b')
                    }
                },
                {
                    text:'Option C',
                    onclick : function(){
                       editor.insertContent('option c')
                    }
                }
            ]
        });
        editor.addButton('tmcd_form_button', {
            text: 'form',
            onclick:function(){
                editor.windowManager.open({
                title: 'user input form',
                body: [
                    {
                        type: 'textbox',
                        name: 'userinput1',
                        label: 'Some Text',
                        value: 'Hello'
                    },
                    {
                        type: 'colorpicker',
                        name: 'userinput2',
                        label: 'Color',
                        value: '#222222'
                    },
                    {
                        type: 'listbox',
                        name: 'userinput3',
                        label: 'options',
                        values: [
                            {text: 'option 1' , value:1},
                            {text: 'option 2' , value:2},
                            {text: 'option 3' , value:3},
                        ]
                    }
                ],
                onsubmit: function(e){
                    editor.insertContent(e.data.userinput2);
                }
                })
            } ,
        });

    })
})();