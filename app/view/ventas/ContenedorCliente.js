Ext.define('sisbotica_paulino.view.ventas.ContenedorCliente', {
  extend: 'Ext.panel.Panel',
  xtype: 'wContenedorCliente',
  itemId: 'wContenedorCliente',
  reference: 'wContendedorCliente',
  requires: [
    'Ext.layout.container.Card',
    'sisbotica_paulino.util.Rutas',
    'sisbotica_paulino.view.ventas.FormCliente',
    'sisbotica_paulino.view.ventas.AccionesContenedorClientes'
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
  controller: 'acciones-contenedorclientes',
  initComponent: function () {
    me = this;
    Ext.apply(this, {
      items: [{
        id: 'clie-0',
        xtype: 'wRegCliente'
      },
      {
        id: 'clie-1',
        xtype: 'wFormClienteListado'
      },
      {
        id: 'clie-2',
        xtype: 'wListadoClienteCotizacion'
      },
      {
        id: 'clie-3',
        xtype: 'wListadoClienteFacturacion'
      }
      ],
      tbar: me.getBotonesERP()

    });
    this.callParent();
  },
  getBotonesERP: function () {
    _cotizaciones = 0;
    _txt1 = Ext.String.format('PEDIDOS  : {0}', _cotizaciones);
    _documentos = 0;
    _txt2 = Ext.String.format('FACTURACIÓN  : {0}', _documentos);

    return obj = [
      {

        text: 'LISTAR',
        glyph: 0xf007,
        textAlign: 'right',
        itemId: 'btnClientes',
        handler: 'onClickVerClientes'
      },
      {

        text: 'NUEVO',
        glyph: 0xf007,
        textAlign: 'right',
        itemId: 'btnNuevoCliente',
        handler: 'onClickNuevoCliente'
      },
      {

        text: _txt1,
        glyph: 0xf007,
        textAlign: 'right',
        itemId: 'btnCotizaciones',
        handler: 'onClickVerCotizaciones'
      },
      {
        text: _txt2,
        glyph: 0xf007,
        textAlign: 'right',
        itemId: 'btnFacturasBoletas',
        handler: 'onClickVerFacturacionCliente'

      }
    ];
  }

});
