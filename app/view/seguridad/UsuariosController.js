Ext.define('sisbotica_paulino.view.seguridad.UsuariosController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.seguridad-usuarios',
    onClickItemUsuario:function( grid, record, index, eOpts ) {
        this.lookupReference('frmUsuario').loadRecord(record);
    },
    onClickNuevoUsuario:function(b){
        this.lookupReference('frmUsuario').reset();
    },
    onClickGuardarUsuario:function(b){
        f =  this.lookupReference('frmUsuario');
        me    = this;
        if (f.isValid()) {

             f.submit({
                waitMsg: 'Guardando informacion...',
                success: function (form, action) {
                    if(action.result.error!=0){
                      try {
                        me.lookupReference('dgvUsuarios').getStore().load();
                        f.reset();
                      } catch (e) {
                          console.log(e);return false;

                       }
                    }
                },
                failure: function () {
                    Ext.Msg.alert("AkinetFarma","Se perdió la conexión con el servidor!");
                }
            });
        }
    },
    onClickEliminarUsuario:function(btn){
        r = btn.getWidgetRecord();
        d = this.lookupReference('dgvUsuarios').getStore();
        data = {
          id : r.get('id')
        };
        sisbotica_paulino.util.Util.ajax(sisbotica_paulino.util.Rutas.usuarioEliminar,data,d)
        
    },

    

    

});
