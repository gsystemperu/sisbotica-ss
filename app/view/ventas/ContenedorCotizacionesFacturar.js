Ext.define('sisbotica_paulino.view.ventas.ContenedorCotizacionesFacturar', {
  extend: 'Ext.panel.Panel',
  xtype: 'wContenedorCotizacionesFacturar',
  itemId : 'wContenedorCotizacionesFacturar',
  requires: [
    'Ext.layout.container.Card',
    'sisbotica_paulino.util.Rutas',
    'sisbotica_paulino.view.ventas.AccionesContenedorCotizacionesFacturar'
  ],
  layout: {
    type: 'card',
    align: 'stretch',
    //deferredRender: true,
  },
  bodyPadding: 0,
  defaults: {
    bodyPadding: 0,
    border: false
  },
  controller :'acciones-contenedorcotizacionesfacturar',
  initComponent: function () {
    me = this;
    Ext.apply(this,
    {
      items: [
      {
        xtype: 'wListadoCotizacionesFacturar'
      },
      {
        xtype:'wRegistroCotizacionFacturar',
      },
      {
        xtype:'wGuiaRemision',
      },
      {
        xtype:'wVisualizarCotizacionFacturar',
      },
    ],
    tbar: me.getBotonesERP()

    });
    this.callParent();
  },
  getBotonesERP:function(){
    return obj = [
          /*{
              text: 'CREAR FACTURA',
              handler: "onClickCrearCotizacionFactura",
          },*/
          {
            text :'IMPRIMIR DOCUMENTO',
            handler : 'onClickDocumentoImprimir'
          },
         /* {
            text :'CREAR GUIA DE REMISIÓN',
            handler:'onClickGuiasRemision'
          },
          {
            text :'IMPRIMIR GUIA DE REMISIÓN',
            handler:'onClickGuiasRemisionImpresion'
          },
          {
            text :'ENVIAR A SUNAT',
            handler:'onClickEnviarSunatFacturas'
          },*/
         /* '->',
          {
            text :'IMPRIMIR LISTADO',
            handler:'onClickReporteVentas'
          }*/
    ];
  }
});
