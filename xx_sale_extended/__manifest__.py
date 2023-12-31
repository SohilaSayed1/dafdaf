# -*- coding: utf-8 -*-
{
    'name': "DAF - Operation",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "daf team",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['sale_stock',
                'sale_management',
                'delivery'],

    # always loaded
    'data': [
        'views/sale_order.xml',
        'views/delivery_carrier.xml',
        'views/stock_picking.xml',
        'views/res_partner.xml',
        'views/sales_order_line.xml',


    ],

}
