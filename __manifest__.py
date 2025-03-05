{
    'name' : 'Sale',
    'version' : '1.2',
    'summary': 'Custom POS management',
    'sequence': 10,
    'description': """
Invoicing & Payments
    """,
    'category': 'Sale',
    'depends' : ['base','sale','point_of_sale'],
    'data': [
    ],
    'assets': {
        'point_of_sale.assets': [
            'custom_pos/static/src/js/**/*',
            'custom_pos/static/src/xml/**/*',
        ],
    },
    'installable': True,
    'application': True,
    'license': 'LGPL-3',
}
