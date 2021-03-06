Ext.define('sisbotica_paulino.view.puntoventa.ContenedorMain', {
  extend: 'Ext.panel.Panel',
  xtype: 'wContenedorPuntoVenta',
  itemId : 'wContenedorPuntoVenta',
  reference : 'wContenedorPuntoVenta',
  requires: [
    'Ext.layout.container.Card',
    'sisbotica_paulino.view.puntoventa.AccionesContenedorMain',
    'sisbotica_paulino.view.puntoventa.Main',
    'sisbotica_paulino.view.puntoventa.Pago'
  ],
  layout: {
    type: 'card',
    align: 'stretch',
    deferredRender: true,
  },
  bodyPadding: 0,
  defaults: {
    bodyPadding: 0,
    border: false
  },
  controller :'acciones-contenedormain',
  initComponent: function () {
    me = this;
    Ext.apply(this, {
      items: [{
        id: 'pdv-0',
        xtype: 'wPdv'
      },
      {
        id : 'pdv-1',
        xtype:'wPuntoVentaPago'
      },
      {
        id : 'pdv-2',
        xtype:'wListadoPdv'
      }

    ],
    tbar: me.getBotonesERP()

    });
    this.callParent();
  },
  getBotonesERP:function(){
    sc  = Ext.create('sisbotica_paulino.store.Clientes');
    return obj = [
      {
        xtype:'combo',
        flex: 2.9,
        fieldStyle : 'font-size:18px;font-weight:bold; text-transform:uppercase;',
        store  :sc,
        valueField : 'idper',
        displayField : 'nombreper',
        queryMode : 'local',
        itemId :'cboCliente',
        editable:true,
        allowBlank:false,
        emptyText: 'SELECCIONAR AL CLIENTE',
        listeners:{
          'select' : 'onSelectCliente'
        },
        value : 0
        
      },
      {
        xtype:'button',
        itemId : 'btnNuevoClientePdv',
        glyph: sisbotica_paulino.util.Glyphs.getGlyph('nuevo'),
        combo : 'cboCliente',
        flex: 0.2,
        handler:'onClickNuevoClientePDV',
        tooltip: 'Nuevo Cliente'
      },
      {
        xtype:'button',
        itemId : 'btnEditarClientePdv',
        glyph: sisbotica_paulino.util.Glyphs.getGlyph('refrescar'),
        combo : 'cboCliente',
        record : '',
        flex: 0.2,
        handler:'onClickEditarClientePDV',
        tooltip: 'Editar Cliente'
      },
      '->',
      {
        text : 'APERTURAR',
        itemId:'btnAperturar',
        scale : 'medium',
        handler:'onClickApeturarCaja',
        hidden:false
      },
      {
        text : 'REGRESAR',
        itemId:'btnRegresar',
        scale : 'medium',
        handler:'onClickRegresarPago'
      },
       {
         text : 'PAGO',
         itemId:'btnVentasPdv',
         scale : 'medium',
         handler:'onClickIngresarPago'
       },
       {
         text : 'VENTAS',
         itemId:'btnListadoVentasPdv',
         scale : 'medium',
         handler:'onClickListadoVentaPdv'
       },


    ];
  },


});
