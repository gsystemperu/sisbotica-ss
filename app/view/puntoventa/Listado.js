Ext.define('sisbotica_paulino.view.puntoventa.Listado',{
    extend: 'Ext.panel.Panel',
    xtype :'wListadoProducto',
    alias : 'wListadoProducto',
    requires: [
        'sisbotica_paulino.view.puntoventa.ListadoController',
        'Ext.toolbar.TextItem',
        'Ext.view.View',
        'Ext.ux.DataView.Animated'
    ],
    controller: 'puntoventa-listado',
    bodyPadding:1,
    layout:'fit',
    initComponent:function(){
        me = this;
        st     = Ext.create('sisbotica_paulino.store.Productos');
       
         Ext.apply(this,{
             items:[{
                   xtype: 'dataview',
                   layout:'fit',
                   autoScroll :true,
                   itemId : 'dvListaProductos',
                    tpl: [
                        '<tpl for=".">',
                            '<div class="cuarto">',
                                          '<table style="width:100%;" border="0" CELLPADDING="0" CELLSPACING="0">',
                                           /* '<tpl if="ventakilos==false && ventagramos ==false && sevendepordosis ==false && ventablister==false ">',
                                                  '<tr>',
                                                      '<td  align="left" class="productoprecio">Precio Venta : S./        {precioventa} <br> Precio Unidad : S/.        {preciounidad}  <br> A Mano :    (  {existencias} ) <br> Sección : <br>{seccion}</strong><br></td>',
                                                  '</tr>',
                                                  '<tr>',
                                                      '<td class="productonombre">{nombre}</td>',
                                                  '</tr>',
                                            '</tpl>',

                                            '<tpl if="ventakilos==false && ventagramos ==false && sevendepordosis ==false && ventablister ==true ">',*/
                                            /*'<tr>',
                                                '<td  align="left" class="productoprecio"> ',
                                                'Precio Venta : S./        {precioventa}  <br> Precio Blister : S/.        {precioblister} <br> Precio Unidad : S/.        {preciounidad}  <br> A Mano :    (  {existencias} )  <br> Sección : {seccion}</strong><br></td>',
                                            '</tr>',*/
                                            '<tr>',
                                                '<td  align="left" class="productoprecio"> ',
                                                'Precio Blister : S/.        {precioblister} <br> Precio Unidad : S/.        {preciounidad}  <br> A Mano :    (  {existencias} )  <br> Sección : {seccion}</strong><br></td>',
                                            '</tr>',
                                            '<tr>',
                                                '<td  align="left" class="productoprecio">Laboratorio : {marca}</strong><br></td>',
                                            '</tr>',
                                            '<tr>',
                                                '<td class="productonombre">{nombre}</td>',
                                            '</tr>',
                                            
                                           //'</tpl>',

                                        '</table>',
                            '</div>',
                        '</tpl>'
                    ],
                    plugins: {
                        xclass: 'Ext.ux.DataView.Animated'
                    },
                    multiSelect:true,
                    store:st,
                    trackOver: true,
                    overItemCls: 'x-item-over',
                    itemSelector: 'div.cuarto',
                    emptyText: ' ',
                    listeners:{ itemclick :'accionClickItem'}
                }
                
             ],
             dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                    pack: 'center'
                },
                items: [
                    {
                        xtype:'container',
                        layout:{
                            type: 'hbox',
                            align: 'stretch',
                            pack: 'center'
                        },
                        items:[
                            {
                                xtype:'label',
                                text :'Principio Activo',
                                padding: '5px 0 0 0',
                                border: true,
                                width: 110,
                                height: 25,
                                style: {
                                    background: '#6a4b5a',
                                    color: 'white',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '13px'
                                }
                            },
                            {
                                xtype: 'textfield',
                                reference: 'txtBuscarCodigoBarrasProd',
                                itemId: 'txtBuscarCodigoBarrasProd',
                                enableKeyEvents: true,
                                listeners:{
                                  change:'onChangeBuscarProductoBarras',
                                  keyup : 'onKeyUpCambiarBuscarNombre'
                                },
                                width: 5
                              },
                            {
                              xtype: 'textfield',
                              reference: 'txtBuscarActivoProd',
                              itemId: 'txtBuscarActivoProd',
                              flex: 1,
                              enableKeyEvents: true,
                              listeners:{
                                keyup:'onKeyUpBuscarProducto',
                                
                              }
                            }
                        ]
                    },
                    {
                        xtype:'container',
                        layout:{
                            type: 'hbox',
                            align: 'stretch',
                            pack: 'center'
                        },
                        items:[
                            {
                                xtype:'label',
                                text :'Producto',
                                padding: '5px 0 0 0',
                                border: true,
                                width: 110,
                                height: 25,
                                style: {
                                    background: '#6a4b5a',
                                    color: 'white',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '13px'
                                }
                            },
                            {
                              xtype: 'textfield',
                              reference: 'txtBuscarCodigoProd',
                              itemId: 'txtBuscarCodigoProd',
                              flex: 1,
                              enableKeyEvents: true,
                              listeners:{
                                keyup:'onKeyUpBuscarProducto'
                              }
                            }
                        ]
                    },
                    {
                        xtype:'container',
                        layout:{
                            type: 'hbox',
                            align: 'stretch',
                            pack: 'center'
                        },
                        items:[
                            {
                                xtype:'label',
                                text :'Laboratorio',
                                padding: '5px 0 0 0',
                                border: true,
                                width: 110,
                                height: 25,
                                style: {
                                    background: '#6a4b5a',
                                    color: 'white',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '13px'
                                }
                            },
                            {
                              xtype: 'textfield',
                              reference: 'txtBuscarMarcaProd',
                              itemId: 'txtBuscarMarcaProd',
                              flex: 1,
                              enableKeyEvents: true,
                              listeners:{
                                keyup:'onKeyUpMarcaProducto'
                              }
                            }
                        ]
                    },
                    

                ]
            }]
          
         });
        this.callParent(arguments);

    },

});
