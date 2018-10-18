Ext.define('sisbotica_paulino.view.almacen.InventarioInicialEditarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.almacen-inventarioinicialeditar',
     
    //@Acciones
    onEditorCalcularDiferencia:function(editor, e){
        switch (e.field) {
            case 'inventero':
                s = e.record.get('entero');
                i = e.record.get('inventero');
                t = s - i;
                e.record.set('difeentero', t.toFixed(2));
            break;
            case 'invfraccion':
                s = e.record.get('fraccion');
                i = e.record.get('invfraccion');
                t = s - i;
                e.record.set('difefraccion', t.toFixed(2));
            break;       
    }
    },
    onClickGuardarInventario:function(btn){
        f =  Ext.ComponentQuery.query('#wRegInventarioInicialEditar')[0];    //this.lookupReference('frmRegCotizacion');
        if (f.isValid()) {

            d = [];
            st = this.lookupReference('dgvInvEditar').getStore();
            me = this;
            ca = st.getCount();

            for (i = 0; i < ca; i++) {
                re = st.getAt(i);
                //if(re.modified){
                    reg = {
                        "idprod"   : re.get('id'),
                        "entero"   : re.get('entero'),
                        "fraccion" : re.get("fraccion"),
                        "inventero"    : re.get("inventero"),
                        "invfraccion"  : re.get("invfraccion"),
                        "difeentero"   : re.get("difeentero"),
                        "difefraccion" : re.get("difefraccion"),
                        "generaserie"  : re.get("chk"),
                        "confirmado"   : 0
                    };
                    d.push(reg);
                //}
            }
            this.lookupReference('jsondetalle').setValue(JSON.stringify(d));
            f.submit({
                waitMsg: 'Guardando informacion...',
                success: function (form, action) {
                    me =  Ext.ComponentQuery.query('#wContenedorInventario')[0];    //this;
                    l = me.getLayout();
                    l.setActiveItem(0);
                    Ext.ComponentQuery.query('#dgvInvReg')[0].getStore().load();
                    sisbotica_paulino.util.Util.showToast('Inventario Guardado!');
                    Ext.ComponentQuery.query('#btnConfInventario')[0].setHidden(true);

                },
                failure: function (action) {
                    Ext.Msg.alert("AkinetFarma", action.result.msg);
                }
            });
        } else {
            sisbotica_paulino.util.Util.showErrorMsg('Ingresar los datos para el inventario!');
        }
    },
    onClickCancelarInventario:function(btn){
        try {
            me =  Ext.ComponentQuery.query('#wContenedorInventario')[0]; 
            Ext.ComponentQuery.query('#btnConfInventario')[0].setHidden(true);
            l = me.getLayout();
            l.setActiveItem(0);
          } catch (e) {
            console.log(e);
          }
    },
    onClickBuscarProductoSeries:function(btn){
        r  = btn.getWidgetRecord();
        st = this.lookupReference('dgvInvNuevo').getStore();
        w  = Ext.create('Ext.window.Window',{
           title : 'Listada de Productos',
           itemId : 'wProductosUnidadesInventario',
           width : 750 ,
           height :600,
           autoShow:true,
           modal : true,
           layout:{
             type:'fit',
             align:'stretch'
           },
           items:[
             {
               xtype    :'wListaSeriesInventario',
               codigo   : r.get('id'),
               cantidad : r.get('stockfisico'),
               registro : r
             }
           ]
        });
        Ext.ComponentQuery.query('#txtSerieUnico')[0].focus(false,100);
    }
});
