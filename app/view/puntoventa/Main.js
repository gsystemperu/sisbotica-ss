Ext.define('sisbotica_paulino.view.puntoventa.Main', {
    extend: 'Ext.form.Panel',
    alias: 'wPdv',
    xtype: 'wPdv',
    itemId: 'wPdv',
    requires: [
        'sisbotica_paulino.view.puntoventa.Listado',
        'sisbotica_paulino.view.puntoventa.MainController',
        'Ext.grid.plugin.*',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
    ],
    controller: 'puntoventa-main',
    layout: {
       type:'hbox',
       pack: 'start',
       align: 'stretch'
    },
    url: '',
    initComponent: function () {
        me = this;
        s = Ext.create('sisbotica_paulino.store.CajaDetalleVenta');
        m = Ext.create('sisbotica_paulino.store.ModoVenta');
        Ext.apply(me, {
            items: me.getItems(s, 1,m),

        });
        this.callParent(arguments);
    },
    getItems: function (sd, _numeromesa,m) {
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false
        });
        var _obj = [
            {
                xtype: 'panel',
                flex: 1.5,
                border:true,
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'panel',
                        flex: 2,
                        layout: 'fit',
                        items: [{
                            xtype: 'gridpanel',
                            itemId: 'dgvDetalleCaja',
                            store: sd,
                            plugins: [rowEditing],
                            selModel: 'cellmodel',
                            plugins: {
                                ptype: 'cellediting',
                                clicksToEdit: 1
                            },
                            columns: [{
                                    dataIndex: 'producto',
                                    text: 'Producto',
                                    flex: 3,

                                },
                                {
                                    dataIndex: 'cantidad',
                                    text: 'Cant.',
                                    flex: 0.5,
                                    align: 'center',
                                    editor: {
                                        xtype:'textfield',
                                        value: 0,
                                        itemId: 'txtCantidadUnidad'
                                    },
                                },
                                {
                                    dataIndex: 'mv',
                                    text : '(p)',
                                    flex: 0.5,
                                    editor :{
                                        xtype:'combo',
                                        store : m,
                                        displayField :'descripcion',
                                        valueField : 'descripcion',
                                        listeners : {
                                            change  : 'onChangeMv'
                                        }
                                    }
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'precio',
                                    text: 'Precio',
                                    flex: 1,
                                    align: 'right'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'total',
                                    text: 'Total',
                                    flex:1,
                                    align: 'right',

                                },
                                {
                                    xtype: 'widgetcolumn',
                                    flex: 0.5,
                                    widget: {
                                        xtype: 'button',
                                        flex: 1,
                                        glyph: 0xf014,
                                        handler: 'onClickEliminarItem'
                                    }
                                }
                            ],
                            listeners: {
                                edit: 'onEditorCalcularTotal'
                            }
                        }],

                        bbar: [
                            '->',
                            {
                                xtype: 'numberfield',
                                fieldLabel: '<b><div style="font-size:20px;margin-top:12px;">Total </div></b>',
                                itemId: 'txtTotalVentaCaja',
                                decimalSeparator: '.',
                                readOnly: true,
                                fieldStyle: 'text-align: right;font-size:35px;font-weight:bold; ',

                            }
                        ],
                    },

                ]
            },
            {
                xtype: 'panel',
                flex: 1.5,
                region: 'center',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'stretch'
                },
                items: [{
                        xtype: 'wListadoProducto',
                        flex: 3
                    },
                    /*{
                          xtype:'wListadoGenericos',
                          flex: 1
                    }*/
                ]

            }


        ];

        return _obj;


    }

});