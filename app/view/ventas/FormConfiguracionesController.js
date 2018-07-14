Ext.define('sisbotica_paulino.view.ventas.FormConfiguracionesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ventas-formconfiguraciones',
    onClickGuardar:function(b){
        f= this.lookupReference('wFormConfiguraciones');
        if(f.isValid()){
            f.submit({
                
            });
        }
    }

});
