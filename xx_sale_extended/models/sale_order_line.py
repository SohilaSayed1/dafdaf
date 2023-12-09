from odoo import fields, models, api
from functools import reduce

class SaleOrderLineInherited(models.Model):
    _inherit = 'sale.order.line'
    xx_original_qty = fields.Float("Original Quantity")
    xx_remaining_qty = fields.Float(string='Remaining Quantity', compute='_compute_xx_remaining_qty')
    xx_child_line_id = fields.Many2one('sale.order.line', string='Child Line')
    xx_child_so_id = fields.Char(string='Sale Order', related='order_id.name')
    xx_so_type = fields.Selection(related='order_id.xx_order_type')

    @api.depends('xx_original_qty', 'order_id')
    def _compute_xx_remaining_qty(self):
        for line in self:
            if line.order_id.xx_order_type == 'parent':
                remaining_qty = line.xx_original_qty - sum(self.env['sale.order.line'].search([
                    ('state', '!=', 'cancel'),
                    ('xx_child_line_id', '=', line.xx_child_line_id.id)
                ]).mapped('product_uom_qty'))
            elif line.order_id.xx_order_type == 'child':
                remaining_qty = line.xx_original_qty - sum(self.env['sale.order.line'].search([
                    ('state', '!=', 'cancel'),
                    ('xx_child_line_id', '=', line.id)
                ]).mapped('product_uom_qty'))
            else:
                remaining_qty = 0
            line.xx_remaining_qty = remaining_qty



