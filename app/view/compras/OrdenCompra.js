Ext.define('sisbotica_paulino.view.compras.OrdenCompra', {
  extend: 'Ext.panel.Panel',
  xtype: 'wOrdenCompra',
  alias: 'widget.wOrdenCompra',
  requires: [
    'Ext.layout.container.HBox',
    'Ext.container.ButtonGroup',
    'Ext.grid.column.*',
    'Ext.form.field.*',
    'Ext.panel.Panel',
    'sisbotica_paulino.store.DataTemp',
    'sisbotica_paulino.view.compras.AccionesOrdenCompra'
  ],
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  bodyPadding: 0,
  defaults: {
    bodyPadding: 0,
    border: false
  },
  controller: 'acciones-ordencompra',
  initComponent: function () {
    var storeAbastecimiento = Ext.create('sisbotica_paulino.store.OrdenesCompras');
    var storeProveedores = Ext.create('sisbotica_paulino.store.Proveedores');
    var storeAbastecimientoDet = Ext.create('sisbotica_paulino.store.AbastecimientoDetalle');

    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
      clicksToMoveEditor: 1,
      autoCancel: false
    });

    Ext.apply(this, {
      items: [{
        xtype: 'panel',
        flex: 1,
        margin: '0 3 0 0',
        layout: 'fit',
        border: false,
        items: [
          this.getPanelAbastecimiento(storeAbastecimiento)
        ],
        tbar: [
          this.getPanelToolBarAbastecimiento(storeProveedores)
        ]
      },
        // this.getPanelDetalle(storeAbastecimientoDet)
      ]
    });
    this.callParent();

    /*storeAbastecimiento.load({
      params: {
        desde: Ext.ComponentQuery.query('#dfDesde')[0].getRawValue(),
        hasta: Ext.ComponentQuery.query('#dfHasta')[0].getRawValue(),
        proveedor: 0
      }
    });*/
  },
  getPanelToolBarAbastecimiento: function (storeProveedores) {
    return obj = {
      xtype: 'container',
      bodyPadding: 0,
      layout: {
        type: 'hbox',
        anchor: '100%'
      },
      columnWidth: 10,
      items: [{
        xtype: 'label',
        text: 'Fecha Desde',
        padding: '5px 0 0 0',
        border: false,
        width: 100,
        height: 25,
        style: {
          background: '#6a4b5a',
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '13px'
        }
      }, {
        xtype: 'datefield',
        value: new Date(),
        reference: 'dfDesde',
        itemId: 'dfDesdeOC',
        width: 100,
        format: 'd/m/Y'
      }, {
        xtype: 'label',
        text: 'Fecha Hasta',
        padding: '5px 0 0 0',
        border: false,
        width: 100,
        height: 25,
        style: {
          background: '#6a4b5a',
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '13px'
        }
      }, {
        xtype: 'datefield',
        value: new Date(),
        reference: 'dfHastaOC',
        itemId: 'dfHastaOC',
        width: 100,
        format: 'd/m/Y'
      }, {
        xtype: 'button',
        glyph: sisbotica_paulino.util.Glyphs.getGlyph(
          'buscar'),
        tooltip: 'Buscador por rangos de fechas : { Desde , Hasta }',
        handler: 'onClickBuscarOrdenCompraPorFechas'
      }, {
        xtype: 'label',
        text: 'Proveedor',
        padding: '5px 0 0 0',
        border: true,
        width: 100,
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
        xtype: 'combo',
        store: storeProveedores,
        itemId: 'cboProveedores',
        valueField: 'id',
        displayField: 'razonsocial',
        queryMode: 'local',
        flex: 1,
        width: 400,
        editable: false
      },
      {
        xtype: 'button',
        glyph: sisbotica_paulino.util.Glyphs.getGlyph(
          'buscar'),
        tooltip: 'Buscar Pedidos Por Proveedor',
        handler: 'onClickBuscarOrdenCompraPorProveedor'
      },
      {
        xtype: 'button',
        glyph: sisbotica_paulino.util.Glyphs.getGlyph(
          'nuevo'),
        tooltip: 'Formulario de proveedor',
        handler: 'onClickFormularioProveedor',
        control: 'cboProveedores'
      }


      ]
    };

  },
  getPanelAbastecimiento: function (storeAbastecimiento) {
    return obj = {
      xtype: 'grid',
      itemId: 'gridOrdenesCompra',
      reference: 'gridOrdenesCompra',
      store: storeAbastecimiento,
      columnLines: true,
      sortableColumns: false,
      requires: [
        'Ext.grid.selection.SpreadsheetModel',
        'Ext.grid.plugin.Clipboard'
      ],
      emptyText: 'NO HAY REGISTROS PARA MOSTRAR SEGUN EL RANGO DE FECHAS',
      features: [{
        id: 'group',
        ftype: 'groupingsummary',
        groupHeaderTpl: 'Fecha : {name}',
        hideGroupedHeader: true,
        enableGroupingMenu: false
      }],
      viewConfig: {
        getRowClass: function (record, index, rowParams, ds) {
          if (record.get('estado') == 'OC ANULADA') {
            return "red-row";
          } else {
            return "black-row";
          }

        }
      },
      columns: [
        { xtype: 'rownumberer' },
        {
          text: 'Fecha Orden',
          dataIndex: 'fordencompra',
          flex: 1,
          align: 'center',
        },
        {
          text: 'Nombre / Razon Social',
          dataIndex: 'razonsocial',
          flex: 4
        },
        {
          xtype: 'numbercolumn',
          text: 'Total',
          dataIndex: 'totalorden',
          align: 'right',
          flex: 1,
          format: '0.00'
        },
        {

          xtype: 'numbercolumn',
          text: 'Acuenta',
          dataIndex: 'pagoacuenta',
          flex: 1,
          align: 'right',
          format: '0.00',

        },
        {
          xtype: 'numbercolumn',
          text: 'Saldo',
          dataIndex: 'saldopagar',
          flex: 1,
          align: 'right',
          format: '0.00',
          renderer: function (value, style, record) {
            if (record.get('pagoacuenta') == 0) {
              n = 0;
              return n.toFixed(2);
            } else {
              return value;
            }
          }
        },
        {
          xtype: 'widgetcolumn',
          width: 50,
          widget: {
            xtype: 'button',
            width: 50,
            glyph: 0xf0d6,
            tooltip: 'Ingresar el documento de pago al proveedor',
            handler: 'onClickIngresarPagoAcuenta'
          }

        },
        {
          xtype: 'widgetcolumn',
          width: 50,
          widget: {
            xtype: 'button',
            width: 50,
            glyph: 0xf0c5,
            tooltip: 'Crea una copia de la orden de compra',
            handler: 'onClickCopiarOrdenCompra'
          }

        },
        {
          xtype: 'widgetcolumn',
          width: 50,
          widget: {
            xtype: 'button',
            width: 50,
            glyph: 0xf044,
            tooltip: 'Edita la orden de compra',
            handler: 'onClickEditarOrdenCompra'
          }

        },
        {
          xtype: 'widgetcolumn',
          width: 50,
          widget: {
            xtype: 'button',
            width: 50,
            glyph: 0xf014,
            tooltip: 'Anula la orden de compra',
            handler: 'onClickAnularOrdenCompra'

          }

        }
      ]
    };
  }
});
