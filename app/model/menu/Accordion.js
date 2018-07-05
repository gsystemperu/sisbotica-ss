Ext.define('sisbotica_paulino.model.menu.Accordion', {
    extend: 'Ext.data.Model',
    requires: [
       'sisbotica_paulino.model.menu.TreeNode'
   ],
   fields: [
       { name: 'id', type: 'int'},
       { name: 'text' },
       { name: 'iconCls' }
   ],
   hasMany: {
       model: 'sisbotica_paulino.model.menu.TreeNode',
       foreignKey: 'parent_id',
       name: 'items'
   }
});
