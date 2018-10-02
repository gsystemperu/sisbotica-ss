Ext.define('sisbotica_paulino.view.puntoventa.ListadoProdGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'wLitadoProdGrid',
    alias: 'widget.wLitadoProdGrid',
    requires: [
      'Ext.layout.container.HBox',
      'Ext.grid.*',
      'Ext.form.field.*',
      'Ext.grid.plugin.*'
    ],
    layout: {
      type: 'fit',
    },
    defaults: {
      frame: false,
      bodyPadding: 0
    },
    initComponent: function () {
      st     = Ext.create('sisbotica_paulino.store.Productos');
      var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false
      });

      me = this;
      Ext.apply(this, 
                    {
                      store: st ,
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
                            dataIndex: 'nombregenerico',
                            flex: 2,
                            align: 'left'
                          },
                        {
                          xtype:'numbercolumn',
                          text: 'A mano',
                          dataIndex: 'existencias',
                          flex: 1,
                          align: 'left'
                        },
                        {
                          text: 'Precio',
                          dataIndex: 'precioventa',
                          flex: 1,
                          align: 'left'
                        }
                      
                      ]
                    }
                    
        );
      this.callParent();
    },
 
  });
  