Ext.define('sisbotica_paulino.view.puntoventa.ListadoController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.puntoventa-listado',
  onKeyUpCambiarBuscarNombre:function(obj,e,opts){
    if (e.keyCode == 113) {
      sisbotica_paulino.util.Util.focusControl('txtBuscarCodigoProd'); 
    }
  },
  onKeyUpMarcaProducto:function(obj,e,opts){
    if (e.keyCode == 113) {
      sisbotica_paulino.util.Util.focusControl('txtBuscarCodigoProd')  
    }
    if (e.keyCode == 13) {
      if(obj.getValue().length>=3){
      _combo = Ext.ComponentQuery.query('#cboCliente')[0].getValue();
      if (_combo == null) { sisbotica_paulino.util.Util.showToast('Seleccionar un cliente para buscar sus precios !!'); return false; }
      s = Ext.ComponentQuery.query('#dvListaProductos')[0].getStore();
      s.load({
        params: {
          nombre: 'x',
          idclie: 'x',
          marca: obj.getValue()
        }
      });
     }
    }
  },
  onKeyUpBuscarProducto: function (obj, e, eOpts) {
    if (e.keyCode == 113) { 
        switch (obj.itemId) {
          case 'txtBuscarCodigoProd': sisbotica_paulino.util.Util.focusControl('txtBuscarActivoProd');     break;
          case 'txtBuscarActivoProd': sisbotica_paulino.util.Util.focusControl('txtBuscarMarcaProd');     break;
        }   
    }
    if (e.keyCode == 13) {
      _combo = Ext.ComponentQuery.query('#cboCliente')[0].getValue();
      if (_combo == null) { sisbotica_paulino.util.Util.showToast('Seleccionar un cliente para buscar sus precios !!'); return false; }
      s = Ext.ComponentQuery.query('#dvListaProductos')[0].getStore();
      if(obj.getValue().length>=3){
      s.load({
        params: {
          nombre: obj.getValue(),
          idclie: _combo,
          tb   : (obj.itemId=='txtBuscarCodigoProd'?1:2)
        }
      });
     }
    }
  },
  onKeyBuscarProductoBarras: function (obj, e, eOpts) {
    if (e.keyCode == 113) { sisbotica_paulino.util.Util.focusControl('txtBuscarCodigoProd'); }
  },
  onChangeBuscarProductoBarras: function (obj, newValue, oldValue, eOpts) {
    me = this;
    _combo = Ext.ComponentQuery.query('#cboCliente')[0].getValue();
    if (_combo == null) { sisbotica_paulino.util.Util.showToast('Seleccionar un cliente para buscar sus precios !!'); return false; }
    l = Ext.ComponentQuery.query('#dvListaProductos')[0];
    st = l.getStore();
    if (newValue != '') {
      st.load({
        params: {
          codigobarras: obj.getValue(),
          idclie: _combo,
          nombre: '*'
        },
        scope: this,
        callback: function (records, operation, success) {
          r = records[0];
          if (r) {
            var _data = {
              idprod: r.get('id'),
              producto: r.get('nombre'),
              cantidad: 1,
              precio: r.get('precioventa'),
              total: r.get('precioventa') * 1,
              minutos: r.get('minutos'),
              dosis: 0,
              preciodosis: r.get('preciounidad'),
              gramos: 0,
              kilos: 0,
              blister:0,
              preciokilo: r.get('preciokilo'),
              preciogramo: r.get('preciogramo'),
              precioblister:r.get('precioblister'),
              precioventa:r.get('precioventa')
            };
            _grid = Ext.ComponentQuery.query('#dgvDetalleCaja')[0];
            if (_grid.getStore().findRecord('idprod', parseInt( r.get('id') ))) {
              Ext.Msg.alert('Información','El producto ingresado se encuentra en lista, solo puede modificar la cantidad.');return false;
             }
             if(r.get('ventaconreceta')){
              Ext.Msg.confirm('AkinetFarma','Este Medicamento es con receta médica! desea incluir en la venta?',function(b){
                if(b=='yes'){
                  _grid.getStore().insert(0, _data);
                  me.onCalcularTotalVenta();      
                }
              });
             }else{
              _grid.getStore().insert(0, _data);
              me.onCalcularTotalVenta();  
             }
          }
        }
      });
      obj.setValue('');
    }
  },
  accionClickItem: function (listview, record, item, index, e, eOpts) {
    me = this;
    if (Ext.ComponentQuery.query('#cboCliente')[0].getValue()) {
      mv = 1;
      p  = 0;
      switch (record.get('ventapordefecto')) {
        case 1: 
          mv='U'; 
          p = record.get('precioventa');
        break;
        case 2: 
          mv='P'; 
          p = record.get('preciounidad');
        break;
        case 3: 
          mv='B'; 
          p = record.get('precioblister');
        break;
        default: 
          mv = 'U';
          p = record.get('precioventa');
        break;
      }
      var _data = {
        idprod: record.get('id'),
        producto: record.get('nombre'),
        cantidad: 1,
        precio: parseFloat(p),    //record.get('precioventa'),
        total:  parseFloat(p) * 1,   //record.get('precioventa') * 1,
        minutos: record.get('minutos'),
        dosis : 0,
        gramos: 0,
        kilos : 0,
        preciodosis: record.get('preciounidad'),
        preciokilo: record.get('preciokilo'),
        preciogramo: record.get('preciogramo'),
        precioblister: record.get('precioblister'),
        precioventa : record.get('precioventa'),
        mv : mv
      }; 
      _grid = Ext.ComponentQuery.query('#dgvDetalleCaja')[0];
      if (_grid.getStore().findRecord('idprod', parseInt( record.get('id') ))) {
        Ext.Msg.alert('Información','El producto ingresado se encuentra en lista, solo puede modificar la cantidad.');return false;
       }
       if(record.get('ventaconreceta')){
        Ext.Msg.confirm('AkinetFarma','Este Medicamento es con médica! desea incluir en la venta?',function(b){
          if(b=='yes'){
            _grid.getStore().insert(0, _data);
            me.onCalcularTotalVenta();      
          }
        });
       }else{
        _grid.getStore().insert(0, _data);
        me.onCalcularTotalVenta();  
       }
      
    } else {
      sisbotica_paulino.util.Util.showToast('TIENE QUE SELECCIONAR AL CLIENTE O CREARLO !!'); return false;
    }
  },
  onCalcularTotalVenta: function () {
    me = this;
    var store = Ext.ComponentQuery.query('#dgvDetalleCaja')[0].getStore();
    var _tot = 0;

    store.each(function (record) {
      _tot = parseFloat(_tot) + record.get('total');
    });
    Ext.ComponentQuery.query('#txtTotalVentaCaja')[0].setValue(_tot.toFixed(2));
  },

});
