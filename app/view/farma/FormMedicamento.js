
Ext.define('sisbotica_paulino.view.farma.FormMedicamento',{
    extend: 'sisbotica_paulino.view.almacen.FormProducto',
    requires: [
        'sisbotica_paulino.view.almacen.FormProducto',
        'sisbotica_paulino.view.farma.FormMedicamentoController',
        'sisbotica_paulino.view.farma.FormMedicamentoModel'
    ],
    controller: 'farma-formmedicamento',
    viewModel: {
        type: 'farma-formmedicamento'
    },

    html: 'Hello, World!!'
});
