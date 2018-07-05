
Ext.define('sisbotica_paulino.view.dashboard.Ventas',{
    extend: 'Ext.panel.Panel',

    requires: [
        'sisbotica_paulino.view.dashboard.VentasController',
        'sisbotica_paulino.view.dashboard.VentasModel'
    ],

    controller: 'dashboard-ventas',
    viewModel: {
        type: 'dashboard-ventas'
    },

    html: 'Hello, World!!'
});
