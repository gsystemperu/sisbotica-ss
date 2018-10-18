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
        storeDetalle = Ext.create('sisbotica_paulino.store.DetalleOrdenCompra');
        storeMonedas = Ext.create('sisbotica_paulino.store.Monedas');
        storeProductos = Ext.create('sisbotica_paulino.store.Productos');
        sfpag = Ext.create('sisbotica_paulino.store.FormaPago');
        sfpag.load();
        sAlam = Ext.create('sisbotica_paulino.store.Almacenes');
        stdoc = Ext.create('sisbotica_paulino.store.DocumentoVenta');
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
                            xtype: 'hiddenfield',
                            name: 'usuario',
                            itemId: 'usuario',
                            value: ''
                        },
                        {
                            xtype: 'hiddenfield',
                            name: 'posicion',
                            itemId: 'posicion',
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
                                            itemId: 'cboProveedoresf',
                                            store: storeProveedores,
                                            valueField: 'id',
                                            displayField: 'razonsocial',
                                            queryMode: 'local',
                                            flex: 2,
                                            editable: true,
                                            name: 'vidproveedor',
                                            forceSelection: true,
                                            fieldStyle: 'font-size:30px;text-transform:uppercase',
                                            emptyText: 'EJEMPLO: ROXFARMA LAB.',

                                        },
                                        {
                                            xtype: 'button',
                                            glyph: sisbotica_paulino.util.Glyphs.getGlyph('nuevo'),
                                            handler: 'onClickFormularioProveedor',
                                            control: 'cboProveedoresf',
                                            height: 40
                                        },
                                        {
                                            xtype: 'button',
                                            glyph: sisbotica_paulino.util.Glyphs.getGlyph('refrescar'),
                                            handler: 'onClickRefrescarProveedor',
                                            height: 40
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
                                            labelAlign: 'right',
                                            store: sfpag,
                                            queryMode: 'local',
                                            valueField: 'idfopag',
                                            displayField: 'descripcion',
                                            flex: 1.5,
                                            editable: false,
                                            name: 'idformapago',
                                            allowBlank: false
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
                                            labelAlign: 'left',
                                            store: storeMonedas,
                                            queryMode: 'local',
                                            valueField: 'id',
                                            displayField: 'descripcion',
                                            value: 1,
                                            editable: false,
                                            name: 'idmoneda',
                                            flex: 1.5
                                        },
                                        {
                                            xtype: 'combo',
                                            fieldLabel: 'Documento',
                                            store: stdoc,
                                            displayField: 'descripcion',
                                            valueField: 'id',
                                            queryMode: 'local',
                                            allowBlank: false,
                                            name: 'documentoventa',
                                            labelAlign: 'right',
                                            editable: false,
                                            value: 1,
                                            flex: 2

                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Serie/Número',
                                            labelAlign: 'right',
                                            name: 'serie',
                                            value: '001',
                                            flex: 1,
                                            allowBlank: false,
                                            fieldStyle: 'font-size:15px; background-color:#6a4b5a;color:white;align:center;'
                                         },
                                        {
                                            xtype: 'textfield',
                                            labelAlign: 'right',
                                            name: 'numerodoc',
                                            flex: 0.5,
                                            allowBlank: false,
                                            value: '',
                                            fieldStyle: 'font-size:15px; background-color:#6a4b5a;color:white;align:center;'
                                        }
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
                                            xtype: 'checkboxfield',
                                            boxLabel: '<b>Precios Incluye I.g.v. </b>',
                                            name: 'flagestadoigv',
                                            value: true,
                                            listeners: {
                                                change: 'onChangeInIgv'
                                            }

                                        },
                                        {
                                            xtype: 'combo',
                                            fieldLabel: 'Almacen Destino',
                                            margin: '0 0 5 6',
                                            itemId: 'cboAlmacen',
                                            labelAlign: 'right',
                                            store: sAlam,
                                            valueField: 'id',
                                            displayField: 'descripcion',
                                            queryMode: 'local',
                                            flex: 1,
                                            editable: false,
                                            name: 'idalmacen',
                                            allowBlank: false,
                                            labelWidth: 150
                                        }
                                    ]
                                },


                            ]
                        },
                        {
                            xtype: 'fieldset',
                            columnWidth: 0.1,
                            padding: 5,
                            layout:'fit',
                            flex:1,
                            defaultType: 'textfield',
                            items: [
                                 {
                                    xtype: 'container',
                                    margin: '0 0 0 0',
                                    layout: {
                                        type:'hbox',
                                        align: 'streach'
                                    },
                                    frame: true,
                                    border: false,
                                    items: [
                                                      {
                                                        xtype: 'label',
                                                        text: 'Producto',
                                                        width: 120,
                                                        height: 32,
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
                                                            xtype: 'combo',
                                                            flex: 3,
                                                            queryMode: 'local',
                                                            itemId: 'cboProducto',
                                                            store: storeProductos,
                                                            listConfig : {
                                                                itemTpl : '<b>{nombre}</b>  <br> <strong style="color:red;"> Precio </strong>  Unidad : {precioventa}      -      Fracción : {preciounidad} <br> <strong style="color:red;"> Stock  </strong>    Unidad : {entero}     -   Fracción : {fraccion} '
                                                            },
                                                            emptyText: ' DIGITAR NOMBRE DEL PRODUCTO',
                                                            valueField: 'id',
                                                            queryMode: 'remote',
                                                            fieldStyle: 'font-size:20px;',
                                                            listeners: {
                                                                select : 'onSelectProducto'
                                                            }
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            glyph: sisbotica_paulino.util.Glyphs.getGlyph('nuevo'),
                                                            handler: 'onClickNuevoProducto',
                                                            //control: 'cboProveedoresf',
                                                            height: 32
                                                        },
                                                        {
                                                            xtype: 'label',
                                                            text: 'NRO° ORDEN COMPRA ',
                                                            width: 210,
                                                            height: 32,
                                                            style: {
                                                                paddingTop: '3px',
                                                                background: '#6a4b5a',
                                                                color: 'white',
                                                                textAlign: 'center',
                                                                fontWeight: 'bold',
                                                                fontSize: '15px',
                                                                textAlign: 'center'
                                                            }
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            itemId: 'txtNumeroPedido',
                                                            value: '000000000',
                                                            readOnly: true,
                                                            flex: 1,
                                                            fieldStyle: 'font-size:20px;text-transform:uppercase;text-aling:center;',
                                                        }
                                          


                                    ]
                                }
                            ]  
                        },
                        {
                            xtype: 'fieldset',
                            columnWidth: 0.1,
                            padding: 10,
                            defaultType: 'textfield',
                            items: [
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
                                            xtype: 'numbercolumn',
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
                                            xtype: 'numbercolumn',
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
                                            xtype: 'numbercolumn',
                                            text: 'Total',
                                            dataIndex: 'total',
                                            flex: 0.6,
                                            align: 'right'

                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            text: 'Precio Venta',
                                            dataIndex: 'precioventa',
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
                                            xtype: 'numbercolumn',
                                            text: 'Precio Fracción',
                                            dataIndex: 'preciopastilla',
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
                                            xtype: 'numbercolumn',
                                            text: 'Precio Blister',
                                            hidden:true,
                                            dataIndex: 'precioblister',
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
                                    labelAlign: 'right'
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
                                    labelAlign: 'right'
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
                                    labelAlign: 'right'
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
