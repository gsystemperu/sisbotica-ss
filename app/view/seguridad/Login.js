Ext.define('sisbotica_paulino.view.seguridad.Login', {
    extend: 'Ext.window.Window',
    alias: 'wlogin',
    requires: [
        'sisbotica_paulino.view.seguridad.LoginController',
    ],
    controller: 'seguridad-login',
    layout: {
        type: 'fit',
        align: 'center',
        pack: 'center'
    },
    autoShow: true,
    width: 400,
    height: 450,
    padding: 0,
    closable: false,
    itemId: 'wlogin',
    items: [
        {
            xtype: 'form',
            frame: false,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            // url :sisbotica_paulino.util.Rutas.usuarioLogin,
            reference: 'frmlogin',
            items: [
                {
                    xtype: 'container',
                    flex: 0.5,
                    reference: 'nomempresa',
                    padding: 5,
                    style: { borderColor: '#000000', borderWidth: '1px', backgroundColor: '#469E9F', textAlign: 'center' }
                },
                {
                    xtype: 'image',
                    reference: 'logo',
                    width: 100,
                    height: 150,
                    padding: '5 80 5 80',
                    flex: 2,


                },

                {
                    xtype: 'textfield',
                    value: 'root',
                    reference: 'usuario',
                    padding: '5 5 5 5',
                    name: 'usuario',
                    allowBlank: false,
                    labelAlign: 'right',
                    fieldLabel: '<b style="font-size:18px;">Usuario</b>',
                    fieldStyle: 'text-align: center;font-size:25px;font-weight:bold; '
                },
                {
                    xtype: 'textfield',
                    value: '64y4.634##$%',
                    reference: 'clave',
                    name: 'clave',
                    inputType: 'password',
                    allowBlank: false,
                    labelAlign: 'right',
                    padding: '5 5 5 5',
                    enableKeyEvents: true,
                    fieldLabel: '<b style="font-size:18px;">Clave</b>',
                    fieldStyle: 'text-align: center;font-size:25px;font-weight:bold; ',
                    listeners: {
                        keydown: 'onKeyDownClave'
                    }
                }

            ],
            bbar: [
                '->',
                {
                    xtype: 'button',
                    text: 'INGRESAR',
                    reference: 'btningresar',
                    listeners: {
                        click: 'onClickSeleccionar'
                    }

                }
            ]

        }]
});
