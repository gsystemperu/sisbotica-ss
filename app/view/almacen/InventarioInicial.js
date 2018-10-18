Ext.define('sisbotica_paulino.view.almacen.InventarioInicial', {
  extend: 'Ext.form.Panel',
  xtype: 'wRegInventarioInicial',
  alias: 'widget.wRegInventarioInicial',
  itemId: 'wRegInventarioInicial',

  requires: [
    'Ext.layout.container.HBox',
    'sisbotica_paulino.view.almacen.InventarioInicialController',
    'Ext.grid.*',
    'Ext.form.field.*',
    'Ext.grid.plugin.*',
    'sisbotica_paulino.util.Rutas'
  ],
  layout: {
    type: 'vbox',
    pack: 'start',
    align: 'stretch'
  },
  defaults: {
    frame: false,
    bodyPadding: 5
  },
  url: sisbotica_paulino.util.Rutas.inventarioAgregar,
  controller: 'almacen-inventarioinicial',
  initComponent: function () {
    var st = Ext.create('sisbotica_paulino.store.ProductoInventarioLista');
    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
      clicksToMoveEditor: 1,
      autoCancel: false
    });

    me = this;
    Ext.apply(this, {
      items: [
        me.getTituloFormulario(),
        me.getGrillaDetalle(st, rowEditing),
      ],
      bbar: [
        '->',
        { xtype: 'button', text: 'CANCELAR', handler: 'onClickCancelarInventario' },
        { xtype: 'button', text: 'GUARDAR', handler: 'onClickGuardarInventario' }
      ]
    });
    this.callParent();
  },
  getTituloFormulario: function () {
    return {
      xtype: 'panel',
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      bodyPadding: 20,
      flex: 1,
      items: [
        {
          xtype: 'hiddenfield',
          name: 'id',
          reference: 'id',
          value: 0
        },
        {
          xtype: 'hiddenfield',
          name: 'jsondetalle',
          reference: 'jsondetalle',

        },
        {
          xtype: 'label',
          text: 'Inventario / Nuevo',
          itemId: 'lblTituloProducto',
          padding: '5 0 5 0',
          style: {
            color: '#775c80',
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: '20px'
          }

        },
        {
          xtype: 'container',
          layout: {
            type: 'hbox',
            align: 'stretch'
          },
          defaults: {
            flex: 1
          },
          items: [
            {
              xtype: 'label',
              text: 'Referencia',
              style: {
                color: '#775c80',
                textAlign: 'left',
                fontWeight: 'bold',
                fontSize: '20px'
              },
              padding: '5 0 5 0',

            },
            {
              xtype: 'label',
              text: 'Fecha',
              style: {
                color: '#775c80',
                textAlign: 'left',
                fontWeight: 'bold',
                fontSize: '20px'
              },
            },
          ]
        },
        {
          xtype: 'container',
          layout: {
            type: 'hbox',
            align: 'stretch'
          },
          defaults: {
            flex: 1
          },
          items: [
            {
              xtype: 'textfield',
              name: 'referencia',
              fieldStyle: 'font-size:20px;font-weight:bold;',
              allowBlank: false
            },
            {
              xtype: 'datefield',
              name: 'fechainventario',
              value: new Date()

            }
          ]
        },


      ]

    };
  },
  getGrillaDetalle: function (st, rowEditing) {
    return {
      flex: 3,
      margin: '0 3 0 0',
      layout: 'fit',
      items: [
        {
          xtype: 'grid',
          reference: 'dgvInvNuevo',
          itemId: 'dgvInvNuevo',
          store: st,
          sortableColumns: false,
          plugins: [rowEditing],
          plugins: {
            ptype: 'cellediting',
            clicksToEdit: 1
          },
          selModel: 'cellmodel',
          columns: [
            {
              text: 'Producto',
              dataIndex: 'nombre',
              flex: 3,
              align: 'left'
            }, {
              text: 'Marca',
              dataIndex: 'marca',
              flex: 2,
              align: 'left'
            }, {
              text: 'Entero',
              dataIndex: 'entero',
              flex: 0.5,
              align: 'right',
              editor: {
                xtype: 'numberfield'
              },
              renderer: function (value, metaData, record) {
                if (value <= 0)
                  metaData.style = "color:red;font-Size:15px";
                else
                  metaData.style = "font-Size:15px";

                return value;
              }
            },
            {
              text: 'Fracción',
              dataIndex: 'fraccion',
              flex: 0.5,
              align: 'right',
              editor: {
                xtype: 'numberfield'
              },
              renderer: function (value, metaData, record) {
                if (value <= 0)
                  metaData.style = "color:red;font-Size:15px";
                else
                  metaData.style = "font-Size:15px";

                return value;
              }
            },
            {
              text: 'Inv. Entero',
              dataIndex: 'inventero',
              flex: 0.5,
              align: 'right',
              editor: {
                xtype: 'numberfield'
              },
              renderer: function (value, metaData, record) {
                if (value <= 0)
                  metaData.style = "color:red;font-Size:15px";
                else
                  metaData.style = "font-Size:15px";

                return value;
              }
            },
            {
              text: 'Inv. Fracción',
              dataIndex: 'invfraccion',
              flex: 0.5,
              align: 'right',
              editor: {
                xtype: 'numberfield'
              },
              renderer: function (value, metaData, record) {
                if (value <= 0)
                  metaData.style = "color:red;font-Size:15px";
                else
                  metaData.style = "font-Size:15px";

                return value;
              }
            },
            {
              text: 'Dif. Entero',
              dataIndex: 'difeentero',
              flex: 0.5,
              align: 'right',
              editor: {
                xtype: 'numberfield'
              },
              renderer: function (value, metaData, record) {
                if (value <= 0)
                  metaData.style = "color:red;font-Size:15px";
                else
                  metaData.style = "font-Size:15px";

                return value;
              }
            },
            {
              text: 'Dif. Fracción',
              dataIndex: 'difefraccion',
              flex: 0.5,
              align: 'right',
              editor: {
                xtype: 'numberfield'
              },
              renderer: function (value, metaData, record) {
                if (value <= 0)
                  metaData.style = "color:red;font-Size:15px";
                else
                  metaData.style = "font-Size:15px";

                return value;
              }
            },
            {
              text: 'Genera Serie?',
              xtype: 'checkcolumn',
              flex: 1,
              hidden:true,
              dataIndex: 'chk',
            }

          ],
          listeners: {
            edit: 'onEditorCalcularDiferencia'
          }

        }]
    };
  }

});
