Ext.define('sisbotica_paulino.view.puntoventa.AccionesListadoPdv', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.acciones-listadopdv',
    requires:['sisbotica_paulino.util.Rutas'],
    init:function(){},
    onClickIngresarPagoAcuentaPdv:function(btn){
      __rec = btn.getWidgetRecord();
      Ext.widget('wPagosAcuentaPdv', {
        codigo :__rec.get("idfacturacion"),
        nombre :__rec.get("nomcompleto") ,
        monto  :__rec.get("totalcoti")
      });
    },
    onClickEliminarPagoAcuentaPdv:function(btn){
        
    },
    onClickVisualizarVenta:function(btn){
      r  = Ext.ComponentQuery.query('#dgvVentasFacturarPdv')[0].getSelectionModel().getSelection()[0];
      if(r){
        var objrpt = window.open( sisbotica_paulino.util.Rutas.rptVisualizarNota+ 
        'id='+ r.get('idfacturacion'), "", "width=700,height=900");
      }
    },
    onClickImprimirComprobante:function(btn){
      r  = Ext.ComponentQuery.query('#dgvVentasFacturarPdv')[0].getSelectionModel().getSelection()[0];
      console.log(r);
      if(r){
        switch (r.get('tipodoc')) {
          case 'BOL':objrpt = window.open( sisbotica_paulino.util.Rutas.rptImprimirNota+ 'id='+ r.get('idfacturacion'), "", "width=700,height=900");break;
          case 'FAC':objrpt = window.open( sisbotica_paulino.util.Rutas.rptImprimirNota+ 'id='+ r.get('idfacturacion'), "", "width=700,height=900");break;
          case 'NOT':objrpt = window.open( sisbotica_paulino.util.Rutas.imprimirTicket+ 'id='+ r.get('idfacturacion'), "", "width=700,height=900");break;
        }
        
        
      }
    },
    onClickBuscarCotizacionesPorFechas:function(){
        d=this.lookupReference('dfDesde').getRawValue();
        h=this.lookupReference('dfHasta').getRawValue();
        s=Ext.ComponentQuery.query('#dgvVentasFacturarPdv')[0].getStore();
        s.load({
          params:{
            desde : d,
            hasta : h
          }
        });
    },
    onClickImprimirListado:function(b){
       d=this.lookupReference('dfDesde').getRawValue();
       h=this.lookupReference('dfHasta').getRawValue();
       var objrpt = window.open( sisbotica_paulino.util.Rutas.listadoVentas+ 
        '?desde='+ d.toString() +'&hasta='+ h.toString(), "", "width=700,height=900");
    },
    onClickCierreCaja:function(b){
      Ext.Msg.confirm('AkinetFarma', 'Este procedimiento bloqueara las ventas y no se podran anular, desea continuar?',
      function (choice) {
          if (choice === 'yes') {
            g = Ext.ComponentQuery.query('#dgvVentasFacturarPdv')[0]
            console.log(sisbotica_paulino.Global.usuario);
            data = {};
            sisbotica_paulino.util.Util.ajax(sisbotica_paulino.util.Rutas.cerrarCaja,data,g.getStore());
          }
      });
    },
    onClickResumenticketera:function(b){
      window.open( sisbotica_paulino.util.Rutas.cierreVentasTicketera+ '?usuario='+ sisbotica_paulino.util.Data.usuario);
      }
});
