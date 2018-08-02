
Ext.define('sisbotica_paulino.view.dashboard.PuntoVenta',{
    extend: 'Ext.panel.Panel',

    requires: [
        'sisbotica_paulino.view.dashboard.PuntoVentaController',
        'sisbotica_paulino.view.dashboard.PuntoVentaModel'
    ],

    controller: 'dashboard-puntoventa',
    viewModel: {
        type: 'dashboard-puntoventa'
    },

    html: 'Hello, World!!'
});
