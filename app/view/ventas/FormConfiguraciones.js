
Ext.define('sisbotica_paulino.view.ventas.FormConfiguraciones', {
    extend: 'Ext.form.Panel',
    alias: 'widget.wFormConfiguraciones',
    xtype: 'wFormConfiguraciones',
    reference: 'wFormConfiguraciones',
    requires: [
        'sisbotica_paulino.view.ventas.FormConfiguracionesController'

    ],
    controller: 'ventas-formconfiguraciones',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    padding: 20,
    url : '',
    initComponent:function(){
        me = this;
        Ext.apply(me,
            {
              items :me.getConfiguraciones(),
              bbar: ['->',
                  {
                      xtype: 'button',
                      text: 'Grabar',
                      scale: 'medium',
                      handler: 'onClickGuardar'
                  }
              ]
            });
        me.callParent(arguments);
    },
    getConfiguraciones:function(){
        return   [
            {
                xtype: 'fieldset',
                columnWidth: 0.5,
                title: 'INGRESO DE MERCADERIA',
                defaultType: 'checkboxfield',
                items: [
                    {
                        boxLabel: '<h3>Ingreso de mercaderia mediante orden de compra confirmada</h3>',
                        name: 'IIDN_1',
                        checked: true,
    
                    }, {
                        boxLabel: '<h3>Ingreso de mercaderia desde la orden de compra</h3>',
                        name: 'IIDN_2',
                    }
                ]
            },
            {
                xtype: 'fieldset',
                columnWidth: 0.5,
                title: 'PRODUCTO',
                defaultType: 'checkboxfield',
                items: [
                    {
                        boxLabel: '<h3>Precios de producto (caja, blister, unidad) ingreso manual</h3>',
                        name: 'IPROD_3',
                        checked: true,
    
                    }, {
                        boxLabel: '<h3>Precio de producto ingresado desde la orden de compra</h3>',
                        name: 'IPROD_4',
                    },
                    {
                        boxLabel: '<h3>Precios de producto (caja, blister, unidad) según porcentaje ingresado por usuario</h3>',
                        name: 'precioprodingresadousuario',
                        name: 'IPROD_5'
                    }
                ]
            }
        ];
    }
   

});
