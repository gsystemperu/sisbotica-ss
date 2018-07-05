Ext.define('sisbotica_paulino.view.compras.IngresarOrdenCompra', {
    extend: 'Ext.panel.Panel',
    xtype: 'wingresarordencompra',
    requires: [
        'Ext.grid.plugin.*',
        'sisbotica_paulino.view.compras.AccionesOrdenCompra',
        'sisbotica_paulino.util.Rutas'
    ],
    itemId: 'wingresarordencompra',
    padding: 10,
    controller: 'acciones-ordencompra',
    initComponent: function () {
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false
        });

        storeProveedores = Ext.create('sisbotica_paulino.store.Proveedores');
        storeDetalle     = Ext.create('sisbotica_paulino.store.DetalleOrdenCompra');
        storeMonedas     = Ext.create('sisbotica_paulino.store.Monedas');
        sfpag            = Ext.create('sisbotica_paulino.store.FormaPago');
        sAlam            = Ext.create('sisbotica_paulino.store.Almacenes');
        me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: "form",
                    itemId: 'frmOrdenCompra',
                    reference: 'frmOrdenCompra',
                    url: sisbotica_paulino.util.Rutas.ordenCompraGuardar,
                    items: [{
                            xtype: 'panel',
                            flex: 1,
                            frame: false,
                            border: false,
                            items: [{
                                    xtype: 'hiddenfield',
                                    itemId: 'txtJsonDetalleOC',
                                    name: 'vjsondetalle'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    name: 'vid',
                                    itemId: 'vid',
                                    value: 0
                                },
                                {
                                    xtype: 'fieldset',
                                    defaultType: 'textfield',
                                    title: 'Datos Principales',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '0 0 5 6',
                                            columnWidth: 0.5,
                                            defaults: {
                                                allowBlank: false
                                            },
                                            items: [
                                               
                                                {
                                                    xtype: 'combo',
                                                    fieldLabel: 'Razon Social',
                                                    itemId: 'cboProveedoresf',
                                                    store: storeProveedores,
                                                    valueField: 'id',
                                                    displayField: 'razonsocial',
                                                    queryMode: 'local',
                                                    flex: 2,
                                                    editable: true,
                                                    name: 'vidproveedor'

                                                },
                                                {
                                                    xtype: 'button',
                                                    glyph: sisbotica_paulino.util.Glyphs.getGlyph('nuevo'),
                                                    handler: 'onClickFormularioProveedor',
                                                    control: 'cboProveedoresf'
                                                },
                                                {
                                                    xtype: 'button',
                                                    glyph: sisbotica_paulino.util.Glyphs.getGlyph('refrescar'),
                                                    handler: 'onClickRefrescarProveedor',
                                                    //control: 'cboProveedoresf'
                                                },
                                              
                                                {
                                                    xtype: 'datefield',
                                                    fieldLabel: 'Fecha Pedido',
                                                    value: new Date(),
                                                    labelAlign: 'right',
                                                    flex: 1,
                                                    name: 'vfecha',
                                                    format: 'd/m/Y'

                                                },
                                                {
                                                    xtype: 'combo',
                                                    fieldLabel: 'Forma Pago',
                                                    labelAlign : 'right',
                                                    store :sfpag,
                                                    queryMode    : 'local',
                                                    valueField   : 'id',
                                                    displayField : 'descripcion',
                                                    flex: 1.5,
                                                    editable     : false,
                                                    name         : 'idformapago',
                                                    allowBlank:false
                                                },


                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '0 0 5 6',
                                            columnWidth: 0.5,
                                            defaults: {
                                                allowBlank: false
                                            },
                                            items: [
                                                {
                                                    xtype: 'combo',
                                                    fieldLabel: 'Moneda',
                                                    labelAlign : 'left',
                                                    store :storeMonedas,
                                                    queryMode    : 'local',
                                                    valueField   : 'id',
                                                    displayField : 'descripcion',
                                                    value        : 1,
                                                    editable     : false,
                                                    name         : 'idmoneda'
                                                },
                                                {
                                                    xtype: 'combo',
                                                    fieldLabel: 'Almacen Destino',
                                                    itemId: 'cboAlmacen',
                                                    labelAlign : 'right',
                                                    store: sAlam,
                                                    valueField: 'id',
                                                    displayField: 'descripcion',
                                                    queryMode: 'local',
                                                    flex: 2,
                                                    editable: false,
                                                    name: 'idalmacen',
                                                    allowBlank:false
                                                }
                                              

                                            ]
                                        },

                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    columnWidth: 0.1,
                                    padding:10,
                                    defaultType: 'textfield',
                                    items: [{
                                            xtype: 'container',
                                            margin: '0 0 0 -5',
                                            layout: 'fit',
                                            frame: true,
                                            border: false,
                                            items: [{
                                                    xtype: 'container',
                                                    layout: 'vbox',
                                                    columnWidth: 0.5,
                                                    margin: '0 0 10 6',
                                                    items: [


                                                        {
                                                            xtype: 'container',
                                                            layout: 'hbox',
                                                            padding: '0 0 0 0',
                                                            items: [{
                                                                    xtype: 'label',
                                                                    text: 'Producto',
                                                                    width: 80,
                                                                    height: 23,
                                                                    style: {
                                                                        paddingTop: '3px',
                                                                        background: '#6a4b5a',
                                                                        color: 'white',
                                                                        textAlign: 'center',
                                                                        fontWeight: 'bold',
                                                                        fontSize: '13px'
                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    // text: 'Buscar Producto',
                                                                    glyph: sisbotica_paulino.util.Glyphs.getGlyph('buscar'),
                                                                    handler: 'onClickBuscarProducto'

                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    width: 20
                                                                },

                                                                {
                                                                    xtype: 'label',
                                                                    text: 'NRO° ORDEN COMPRA ',
                                                                    width: 210,
                                                                    height: 23,
                                                                    style: {
                                                                        paddingTop: '3px',
                                                                        background: '#6a4b5a',
                                                                        color: 'white',
                                                                        textAlign: 'center',
                                                                        fontWeight: 'bold',
                                                                        fontSize: '15px',
                                                                        textAlign:'center'
                                                                    }
                                                                },
                                                                {
                                                                    xtype:'textfield',
                                                                    itemId :'txtNumeroPedido',
                                                                    value : 'OC000000000',
                                                                    readOnly :true
                                                                },
                                                                {
                                                                    xtype: 'checkboxfield',
                                                                    boxLabel: '<b>El Precio incluye I.G.V</b>',
                                                                    name: "flagestadoigv",
                                                                    itemId : 'ckbAplicarIgv',
                                                                    hidden:true

                                                                }

                                                            ]
                                                        }
                                                    ]
                                                },

                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            layout: 'fit',
                                            margin: '0 0 5 0',
                                            items: [{
                                                xtype: 'grid',
                                                flex: 1,
                                                itemId: 'dgvDetalleOrdenCompra',
                                                reference: 'dgvDetalleOrdenCompra',
                                                store: storeDetalle,
                                                plugins: [rowEditing],
                                                selModel: 'cellmodel',
                                                plugins: {
                                                    ptype: 'cellediting',
                                                    clicksToEdit: 1
                                                },
                                                columns: [{
                                                        text: 'Producto',
                                                        dataIndex: 'producto',
                                                        flex: 1.8
                                                    },

                                                    {
                                                        xtype:'numbercolumn',
                                                        text: 'Cant.',
                                                        dataIndex: 'cantidad',
                                                        flex: 0.3,
                                                        align: 'center',
                                                        editor: {
                                                            xtype: 'numberfield',
                                                            value: 0,
                                                            //maxValue: 1000,
                                                            minValue: 0,
                                                            itemId: 'txtCantidadUnidad'

                                                        }
                                                    },
                                                    {
                                                        xtype:'numbercolumn',
                                                        text: 'Precio Compra',
                                                        dataIndex: 'precio',
                                                        flex: 0.6,
                                                        align: 'right',
                                                        editor: {
                                                            xtype: 'numberfield',
                                                            format: '0.00',
                                                            decimalPrecision: 2,
                                                            decimalSeparator: '.'
                                                        }
                                                    },
                                                    {
                                                        xtype:'numbercolumn',
                                                        text: 'Total',
                                                        dataIndex: 'total',
                                                        flex: 0.6,
                                                        align: 'right'

                                                    },

                                                    {
                                                        xtype: 'widgetcolumn',
                                                        flex: 0.2,
                                                        widget: {
                                                            xtype: 'button',
                                                            width: 24,
                                                            glyph: 0xf014,
                                                            listeners: {
                                                                click: 'onClickEliminarDetalle'
                                                            }
                                                        }

                                                    }


                                                ],
                                                cls: '',
                                                height: 300,
                                                listeners: {
                                                    edit: 'onEditorCalcularTotalOrdenCompra'
                                                }

                                            }]

                                        }
                                    ]

                                }, // fin fieldset Detalle
                                {
                                    xtype: 'panel',
                                    layout: 'hbox',
                                    items: [{
                                            xtype: 'panel',
                                            flex: 1.8
                                        },
                                        {
                                            xtype: 'panel',
                                            flex: 1,
                                            padding: '0 0 15 0',
                                            items: [{
                                                    xtype: 'textfield',
                                                    itemId: 'txtSubtotalOrdenCompra',
                                                    name: 'subtotal',
                                                    fieldLabel: '<b>Sub Total</b>',
                                                    value: "0.00",
                                                    minValue: 0,
                                                    step: 0.01,
                                                    readOnly: true,
                                                    width: 280,
                                                    labelWidth: 120,
                                                    fieldStyle: 'text-align: right;font-size:16px;',
                                                    labelAlign :'right'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '<b>I.g.v.  </b>',
                                                    itemId: 'txtIgvOrdenCompra',
                                                    name: 'igv',
                                                    value: "0.00",
                                                    minValue: 0,
                                                    readOnly: true,
                                                    width: 280,
                                                    labelWidth: 120,
                                                    fieldStyle: 'text-align: right;font-size:16px;',
                                                    labelAlign :'right'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '<b>Total General </b>',
                                                    itemId: 'txtTotalGeneralOrdenCompra',
                                                    value: "0.00",
                                                    name: 'totalgeneral',
                                                    minValue: 0,
                                                    readOnly: true,
                                                    width: 280,
                                                    labelWidth: 120,
                                                    fieldStyle: 'text-align: right;font-size:16px;',
                                                    labelAlign :'right'
                                                }
                                            ]
                                        }

                                    ]

                                },
                                {
                                    xtype: 'panel',
                                    buttons: [

                                        {
                                            xytpe: 'button',
                                            text: 'Cancelar',
                                            scale: 'medium',
                                            handler: 'onClickSalirOrdenCompra'
                                        }, '-',

                                        {
                                            xytpe: 'button',
                                            text: 'Guardar',
                                            scale: 'medium',
                                            itemId: 'btnGuardarVenta',
                                            handler: 'onClickGuardarOrdenCompra'
                                        }


                                    ]


                                }
                            ]

                        }

                    ]
                }


            ]
        });

        me.callParent(arguments);
    }
});
