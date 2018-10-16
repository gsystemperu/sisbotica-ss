Ext.define('sisbotica_paulino.view.ventas.RegistrarFacturaBoleta', {
    extend: 'Ext.panel.Panel',
    xtype: 'wRegistrarFacturaBoleta',
    alias: 'widget.wRegistrarFacturaBoleta',
    requires: [
        'Ext.grid.plugin.*',
        'Ext.form.field.*',
        'sisbotica_paulino.util.Rutas',
        'Ext.grid.plugin.RowEditing'
    ],
    itemId: 'wRegistrarFacturaBoleta',
    bodyPadding: 5,
    controller: 'acciones-regfacturaboleta',
    initComponent: function () {
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false
        });
        storeClientes = Ext.create('sisbotica_paulino.store.Clientes');
        storeProductos = Ext.create('sisbotica_paulino.store.Productos');
        storeDetCotizacion = Ext.create('sisbotica_paulino.store.DetalleCotizacion');
        storeFormaPago = Ext.create('sisbotica_paulino.store.FormaPago');
        storeModoEntrega = Ext.create('sisbotica_paulino.store.ModoEntrega');
        storeVendedores = Ext.create('sisbotica_paulino.store.Vendedores');
        storeMonedas = Ext.create('sisbotica_paulino.store.Monedas');
        storeDocumentoVenta = Ext.create('sisbotica_paulino.store.DocumentoVenta');
        storeFormaPago.load({
            callback: function (r, o, s) {
                re = r[0];
                if (re) {
                    Ext.ComponentQuery.query('#idfopag')[0].setValue(re.get('idfopag'));
                }
            }
        })
        m = Ext.create('sisbotica_paulino.store.ModoVenta');
        me = this;
        Ext.applyIf(me, {
            items: [{
                xtype: "form",
                itemId: 'frmRegFacturaBoleta',
                reference: 'frmRegFacturaBoleta',
                padding: 10,
                url: sisbotica_paulino.util.Rutas.facturacionGuardar,
                items: [{
                    xtype: 'panel',
                    flex: 1,
                    frame: false,
                    border: false,
                    items: [{
                        xtype: 'hiddenfield',
                        itemId: 'txtJsonDetalle',
                        name: 'vjsondetalle'
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'idfacturacion',
                        value: 0
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'idcoti',
                        itemId: 'idcoti',
                        value: 0
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'vusuario',
                        itemId: 'vusuario',
                        value: ''
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'posicion',
                        value: 0
                    },
                    {
                        xtype: 'fieldset',
                        defaultType: 'textfield',
                        title: 'Datos Generales',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    align: 'streach'
                                },
                                margin: '0 0 5 0',
                                columnWidth: 1,
                                items: [{
                                    xtype: 'combobox',
                                    itemId: 'cboDatosCliente',
                                    name: 'idper',
                                    flex: 2,
                                    allowBlank: false,
                                    editable: true,
                                    forceSelection: true,
                                    store: storeClientes,
                                    labelAlign: 'left',
                                    queryMode: 'local',
                                    displayField: 'nombreper',
                                    valueField: 'idper',
                                    fieldStyle: 'font-size:30px;text-transform:uppercase',
                                    emptyText: 'CLIENTE : MIQUEAS FERRER',
                                    value: 0
                                },
                                {
                                    xtype: 'button',
                                    glyph: sisbotica_paulino.util.Glyphs.getGlyph('nuevo'),
                                    handler: 'onClickNuevoCliente',
                                    height: 40
                                },
                                /* {
                                     xtype: 'button',
                                     text :'Cotizaciones',
                                     glyph: sisbotica_paulino.util.Glyphs.getGlyph('buscar'),
                                     handler: 'onClickBuscarCotizacionesAnteriores'
                                 },*/
                                {

                                    xtype: 'datefield',
                                    fieldLabel: 'Fecha Venta',
                                    value: new Date(),
                                    labelAlign: 'right',
                                    flex: 0.8,
                                    itemId: 'dtFechaVenta',
                                    name: 'fechacoti'
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Válido Hasta',
                                    labelAlign: 'right',
                                    editable: false,
                                    name: 'fechavalidohasta',
                                    value: new Date(),
                                    flex: 0.8,
                                    readOnly: true,
                                    name: 'validohasta',
                                    hidden: true
                                },
                                {

                                    xtype: 'textfield',
                                    fieldLabel: 'Referencia',
                                    labelAlign: 'right',
                                    flex: 1,
                                    itemId: 'txtReferencia',
                                    name: 'vreferencia',
                                    hidden: true

                                }


                                ]
                            }, {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    align: 'streach'
                                },
                                columnWidth: 0.5,
                                defaults: {
                                    labelWidth: 80,

                                },
                                padding: '5 0 5 0',
                                items: [
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Forma Pago',
                                        store: storeFormaPago,
                                        displayField: 'descripcion',
                                        valueField: 'idfopag',
                                        queryMode: 'local',
                                        allowBlank: false,
                                        name: 'idfopag',
                                        editable: false,
                                        itemId: 'idfopag',
                                        flex: 1,
                                        value: 0


                                    },
                                    {
                                        xtype: 'button',
                                        glyph: sisbotica_paulino.util.Glyphs.getGlyph('nuevo'),
                                        handler: 'onClickMantenimiento'
                                    },
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Documento',
                                        store: storeDocumentoVenta,
                                        displayField: 'descripcion',
                                        valueField: 'id',
                                        queryMode: 'local',
                                        allowBlank: false,
                                        name: 'documentoventa',
                                        labelAlign: 'right',
                                        editable: false,
                                        itemId: 'documentoventa',
                                        value: 2,
                                        flex: 1
                                    },
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Entrega',
                                        store: storeModoEntrega,
                                        displayField: 'descripcion',
                                        valueField: 'idmodo',
                                        queryMode: 'local',
                                        allowBlank: true,
                                        name: 'idmodo',
                                        labelAlign: 'right',
                                        editable: false,
                                        itemId: 'vmodoentrega',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'button',
                                        glyph: sisbotica_paulino.util.Glyphs.getGlyph('nuevo'),
                                        handler: 'onClickMantenimiento'
                                    },
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'Serie/Número',
                                        labelAlign: 'right',
                                        name: 'serie',
                                        flex: 0.5,
                                        value: '--',
                                        readOnly: true,
                                        hidden: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        labelAlign: 'right',
                                        name: 'numerodoc',
                                        flex: 0.3,
                                        value: '**Generando**',
                                        readOnly: true,
                                        hidden: true
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                defaults: {
                                    labelWidth: 80,
                                    margin: '5 0 5 0',
                                },
                                items: [{
                                    xtype: 'combo',
                                    fieldLabel: 'Moneda',
                                    store: storeMonedas,
                                    displayField: 'descripcion',
                                    valueField: 'id',
                                    queryMode: 'local',
                                    allowBlank: false,
                                    name: 'idmoneda',
                                    editable: false,
                                    itemId: 'idmoneda',
                                    value: 1,
                                    flex: 1,
                                    hidden: true
                                },
                                {
                                    xtype: 'checkboxfield',
                                    boxLabel: '<b style="color:red;">Precio incluye el I.G.V.</b>',
                                    name: 'incluyeigv',
                                    reference: 'incluyeigv',
                                    itemId: 'incluyeigv',
                                    readOnly: false,
                                    value: true,
                                    hidden: true,
                                    listeners: {
                                        change: {
                                            fn: 'onSelectedIncluyeIGV'
                                        }
                                    }
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'A Cuenta',
                                    name: 'pagoacuenta',
                                    value: 0,
                                    flex: 2,
                                    labelWidth: 75,
                                    labelAlign: 'right',
                                    hidden: true
                                }
                                ]
                            },


                        ]//fin items
                    },//fin datos generales
                    {
                        xtype: 'fieldset',
                        columnWidth: 0.1,
                        defaultType: 'textfield',
                        items: [
                                 
                                {
                                xtype: 'container',
                                margin: '0 0 0 -5',
                                layout: {
                                    type: 'fit',
                                    align: 'streach'
                                },
                                frame: true,
                                border: false,
                                padding: 5,
                                items: [
                                    {
                                        xtype: 'container',
                                        layout: {
                                            type: 'hbox',
                                            align: 'streach'
                                        },
                                        padding: '0 0 5 0',
                                        defaultType: 'textfield',
                                        items: [{
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
                                            flex: 1,
                                            queryMode: 'local',
                                            itemId: 'cboProducto',
                                            store: storeProductos,
                                            displayField: 'filtro',
                                            emptyText : ' DIGITAR NOMBRE DEL PRODUCTO',
                                            valueField: 'id',
                                            queryMode :'remote',
                                            fieldStyle : 'font-size:20px;',
                                            listeners: {
                                                select : 'onSelectProducto'
                                            }
                                        },
                                        {
                                            xtype: 'button',
                                            glyph: sisbotica_paulino.util.Glyphs.getGlyph('nuevo'),
                                            handler: 'onClickProducto',
                                            height: 33
                                        },
                                    ]
                                   }
                            ]
                        },
                        {
                            xtype: 'panel',
                            layout: 'fit',
                            margin: '0 0 5 0',
                            items: [{
                                xtype: 'grid',
                                flex: 1,
                                reference: 'dgvDetalleVentaFacturaBoleta',
                                itemId: 'dgvDetalleVentaFacturaBoleta',
                                store: storeDetCotizacion,
                                plugins: [rowEditing],
                                selModel: 'cellmodel',
                                plugins: {
                                    ptype: 'cellediting',
                                    clicksToEdit: 1
                                },
                                scrollable: true,
                                columns: [{
                                    text: 'Descripción',
                                    dataIndex: 'descripcion',
                                    flex: 3
                                },
                                {
                                    xtype: 'numbercolumn',
                                    text: 'Cantidad',
                                    dataIndex: 'cantidad',
                                    flex: 0.5,
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
                                    dataIndex: 'mv',
                                    text : '(p)',
                                    flex: 0.2,
                                    editor :{
                                        xtype:'combo',
                                        store : m,
                                        displayField :'descripcion',
                                        valueField : 'descripcion',
                                        editable:false,
                                        listeners : {
                                            change  : 'onChangeMv'
                                        }
                                    }
                                },
                                {
                                    xtype:'numbercolumn',
                                    text: 'Precio',
                                    dataIndex: 'precio',
                                    flex: 0.6,
                                    align: 'right',
                                    renderer: Ext.util.Format.numberRenderer('0.00'),
                                    editor: {
                                        xtype: 'numberfield',
                                        format: '0.00',
                                        decimalPrecision: 5,
                                        decimalSeparator: '.'
                                    }
                                },
                                {
                                    xtype:'numbercolumn',
                                    text: 'Total',
                                    dataIndex: 'total',
                                    flex: 0.5,
                                    align: 'right',
                                    renderer: Ext.util.Format.numberRenderer('0.00'),

                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'vencimiento',
                                    flex: 0.5,
                                    format: 'd/m/Y',
                                    text: 'Vencimiento',
                                    editor: {
                                        xtype: 'datefield',
                                        format: 'd/m/Y',
                                        value: new Date()
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
                                    edit: 'onEditorCalcularTotal'
                                }

                            }]

                        }
                        ]

                    }, // fin fieldset Detalle
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [{
                            xtype: 'textarea',
                            flex: 1.5,
                            height: 100,
                            name: 'comentario',
                            fieldStyle: 'font-size:12px;text-transform:uppercase;',
                            emptyText: 'Comentario facturación :'
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            padding: '0 0 0 0',
                            items: [{
                                xtype: 'textfield',
                                reference: 'Subtotalventas',
                                itemId: 'Subtotalventas',
                                name: 'valventacont',
                                // value: "0.00",
                                fieldLabel: 'Sub Total',
                                readOnly: true,
                                width: 280,
                                labelWidth: 120,
                                fieldStyle: 'text-align: right;font-size:16px;',
                                labelAlign: 'right'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Igv',
                                reference: 'igvventas',
                                itemId: 'igvventas',
                                name: 'valigvcont',
                                //value: "0.00",
                                minValue: 0,
                                readOnly: true,
                                width: 280,
                                labelWidth: 120,
                                fieldStyle: 'text-align: right;font-size:16px;',
                                labelAlign: 'right'
                                // hidden:true
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Total General ',
                                labelAlign: 'right',
                                reference: 'TotalGeneral',
                                itemId: 'TotalGeneral',
                                name: 'valtotalcont',
                                //   decimalPrecision: 3,
                                //  maxValue: 9999,
                                minValue: 0,
                                //                                            step: 0.01,
                                //                                            decimalSeparator: '.',
                                readOnly: true,
                                width: 280,
                                labelWidth: 120,
                                fieldStyle: 'text-align: right;font-size:16px;'
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
                            text: 'Guardar',
                            scale: 'medium',
                            handler: 'onClickGuardarFacturaBoleta'
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
        Ext.ComponentQuery.query('#vusuario')[0].setValue(sisbotica_paulino.util.Data.usuario);
    }
});
