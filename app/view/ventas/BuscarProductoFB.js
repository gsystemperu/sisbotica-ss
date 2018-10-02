Ext.define('sisbotica_paulino.view.ventas.BuscarProductoFB', {
    extend: 'Ext.window.Window',
    alias: 'widget.wBuscarProductoFB',
    xtype: 'wBuscarProductoFB',
    itemId: 'wBuscarProductoFB',
    requires: [
      'sisbotica_paulino.view.ventas.AccionesRegFacturaBoleta'
    ],
    config : {
      cliente : 0,
      detalle : null,
      comercial: '',
      generico : '',
      laboratorio:''
    },
    autoShow: true,
    width: 1000,
    height: 600,
    title: ' :: Buscar Producto :: ',
    iconCls: 'fa fa-address-card-o fa-2x',
    controller: 'acciones-regfacturaboleta',
    bodyPadding: 5,
    closable: true,
    autoShow:true,
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    initComponent: function () {
        st = Ext.create('sisbotica_paulino.store.ProductosPorPrecioPersona');
        me        = this;
        if(me.getComercial()){
            st.getProxy().extraParams={
                vDescripcion : me.getComercial(),
                vIdCliente : me.getCliente()
            };
        }
        if(me.getLaboratorio()){
            st.getProxy().extraParams={
                vIdCliente : me.getCliente(),
                vCategoria : me.getLaboratorio()
            };
        }

        st.load({
            callback : function(r, o, s) {
                re = r[0];
                g = Ext.ComponentQuery.query('#dgvBuscarProducto')[0];
                g.getSelectionModel().select(re);
                g.getView().focusRow(re);
            }
        });
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
                    itemId: 'dgvBuscarProducto',
                    store:st,
                    flex:1.5,
                    viewConfig:{
                        listeners:{
                            itemkeydown:'onItemkeydownRowProd'
                        }
                    },
                    columns: [
                         {
                            text:'Producto',
                            flex: 2,
                            dataIndex:'nombre',
                        },
                        {
                            xtype :'numbercolumn',
                            text:'Precio Entero',
                            flex: 0.5,
                            dataIndex:'precioprod',
                            align :'right',
                            renderer: Ext.util.Format.numberRenderer('0.00')
                        },

                       {
                            text:'Und.Medida',
                            flex: 0.5,
                            dataIndex:'unidadmedida',
                        },
                        {
                            xtype :'numbercolumn',
                            text:'Precio Fraccion',
                            flex: 0.5,
                            dataIndex:'precioprod',
                            align :'right',
                            renderer: Ext.util.Format.numberRenderer('0.00')
                        },

                       {
                            text:'Und.Medida',
                            flex: 0.5,
                            dataIndex:'unidadmedida',
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
                        
                    ]
                  
                }
            ],
            buttons:[
                {
                    text:'CANCELAR',
                    listeners :{
                        click : 'onClickSalirFB',
                    },
                    itemId:'btnSalirFB'
                }
            ]
        });
        me.callParent();
       
        

    }
});
