
Ext.define('sisbotica_paulino.view.dashboard.Compras',{
    extend: 'Ext.panel.Panel',

    requires: [
        'sisbotica_paulino.view.dashboard.ComprasController',
        'sisbotica_paulino.view.dashboard.ComprasModel'
    ],

    controller: 'dashboard-compras',
    viewModel: {
        type: 'dashboard-compras'
    },

    html: 'Hello, World!!'
});
