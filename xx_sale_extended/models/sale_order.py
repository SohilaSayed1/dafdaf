from odoo import fields, models


class SaleOrderExtended(models.Model):
    _inherit = 'sale.order'
    xx_order_type = fields.Selection([
        ('one_to_one', 'One To One'),
        ('child', 'Child'),
        ('parent', 'Parent'),
        ('manual_bulk', 'Manual Bulk'),
    ], string='Order Type', default='one_to_one')

    xx_migrated_order_id = fields.Char('Migrated Order ID')
    xx_migrated_payment_id = fields.Char('Migrated Payment ID')
    xx_migrated_shipping_id = fields.Char('Migrated Shipping ID')
    xx_migrated_tracking_reference = fields.Char('Migrated Tracking Reference')

    xx_shipping_company_id = fields.Many2one('delivery.carrier', "Carrier")
