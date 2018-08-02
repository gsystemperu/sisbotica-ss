Ext.define('sisbotica_paulino.store.tree.ControlVentas', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
             { text: 'Clientes', leaf: true, itemId: "wContenedorCliente", titulo :'Clientes',  glyph : 'xf022'},
             { text: 'Cotizaciones', leaf: true, itemId: "wContenedorCotizaciones", titulo :'Cotizaciones',  glyph : 'xf022'  },
             { text: 'Productos', leaf: true, itemId: "wContenedorProducto", titulo :'Productos',  glyph : 'xf022'},
             {
               text: 'Facturación',
               expanded: true,
                children: [
                 {
                   text: 'Cotizacion a facturar',
                   leaf: true,
                   itemId: "wContenedorCotizacionesFacturar",
                   titulo: "Proforma/Facturar",
                   glyph : 'xf022'
                 },
                 {
                  text: 'Crear Factura',
                  leaf: true,
                  itemId: "wRegistrarFacturaBoleta",
                  titulo: 'Factura / Bolera',
                  glyph : 'xf022'

                },
              
               ]
             },
             {
               text: 'Punto Venta',
               expanded: true,
                children: [
                 {
                   text: 'Botica',
                   leaf: true,
                   itemId: "wContenedorPuntoVenta",
                   titulo: ".:. Botica .:. ",
                   glyph : 'xf0fa' 
                 }
               ]
             }
        ]
    }
});
