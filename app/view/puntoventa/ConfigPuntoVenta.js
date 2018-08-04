Ext.define('sisbotica_paulino.view.puntoventa.ConfigPuntoVenta', {
  extend: 'Ext.form.Panel',
  xtype: 'wconfigpuntoventa',
  reference: 'wconfigpuntoventa',
  requires: [
    'sisbotica_paulino.view.puntoventa.ConfigPuntoVentaController'
  ],
  controller: 'confpuntoventa',
  layout: {
    type: 'vbox',
    pack: 'start',
    align: 'stretch'
  },
  padding: 20,
  url: '',
  listeners : {
    render : 'onRender'
  },
  initComponent: function () {
    me = this;
    Ext.apply(me, {
      bbar: ['->',
        {
          xtype: 'button',
          text: 'Grabar',
          scale: 'medium',
          handler: 'onClickGuardar'
        }
      ]
    });
    me.callParent(arguments);
  }
});
