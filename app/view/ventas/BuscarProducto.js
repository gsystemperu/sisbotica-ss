Ext.define('sisbotica_paulino.view.ventas.BuscarProducto', {
    extend: 'Ext.window.Window',
    alias: 'widget.wBuscarProducto',
    xtype: 'wBuscarProducto',
    requires: [
      'sisbotica_paulino.view.ventas.AccionesRegCotizacion'
    ],
    config : {
      cliente : 0,
      detalle : null
    },
    autoShow: true,
    width: 1200,
    height: 600,
    title: ' :: Buscar Producto :: ',
    iconCls: 'fa fa-address-card-o fa-2x',
    controller: 'acciones-regcotizacion',
    bodyPadding: 5,
    modal: true,
    layout: {
        type: 'fit',
        align: 'stretch',
        pack: 'start'
    },

    initComponent: function () {
        var store = Ext.create('sisbotica_paulino.store.ProductosPorPrecioPersona');
        me        = this;
        store.getProxy().extraParams={vIdCliente : me.getCliente()};
        store.load();
        me = this;
        Ext.apply(me, {
            items: [
                  {
                    xtype:'hiddenfield',
                    itemId:'tipopreciopersona',
                    reference :'tipopreciopersona',
                    value : me.getCliente()
                  },
                  {
                    xtype: 'grid',
                    reference: 'dgvBuscarProducto',
                    store:store,
                    columns: [
                         {
                            text:'Producto',
                            flex: 2,
                            dataIndex:'nombre',
                        },
                       {
                            text:'Unida Medida',
                            flex: 1,
                            dataIndex:'unidadmedida',
                        },
                        {
                             text:'Presentacion',
                             flex: 1,
                             dataIndex:'presentacion',
                         },
                         {
                             xtype :'numbercolumn',
                              text:'Stock',
                              flex: 0.5,
                              dataIndex:'existencias',
                              align :'center',
                              renderer: function (value, metaData, record) {
                                if(value == 0){
                                  metaData.style = ";color:red;fontSize:13px;";
                                  return value;
                                }else{
                                  metaData.style = "color:#0404B4;fontSize:15px;";
                                  return value;
                                }


                              }
                          },
                         /* {
                            xtype :'numbercolumn',
                               text:'Stock Dosis',
                               flex: 0.5,
                               dataIndex:'stock_dosis',
                               align :'center'
                           },
                           {
                             xtype :'numbercolumn',
                                text:'Stock Kilos',
                                flex: 0.5,
                                dataIndex:'stock_kilos',
                                align :'center'
                            },
                            {
                              xtype :'numbercolumn',
                                 text:'Stock Gramos',
                                 flex: 0.5,
                                 dataIndex:'stock_gramos',
                                 align :'center'
                             },*/
                        {
                            //xtype :'numbercolumn',
                            text:'Precio',
                            flex: 0.5,
                            dataIndex:'precioprod',
                            align :'right',
                            renderer: Ext.util.Format.numberRenderer('0.00'),
                        }

                    ],
                     /*features: [{

                        ftype: 'grouping',
                        groupHeaderTpl: '{name}',
                        hideGroupedHeader: true,
                        startCollapsed: true
                    }],*/
                     listeners: {
                            cellclick: 'onClickRowProducto'
                        }
                }

            ],
            tbar:[
                {
                    xtype:'textfield',
                    fieldLabel :'<b>Producto</b>',
                    reference : 'txtProductoNombre',
                    flex: 1,
                    selectOnFocus:true,
                    enableKeyEvents : true,
                    listeners:{
                      keypress:'onKeyPressTextoDeBusquedaProducto2'
                    }
                },
                {
                    xtype:'button',
                    glyph: sisbotica_paulino.util.Glyphs.getGlyph('buscar'),
                    handler :'onClickBuscarProductoPorNombre'

                }
            ]

        });
        me.callParent();
    }
});
