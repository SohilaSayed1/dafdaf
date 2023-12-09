from odoo import fields, models, api


class StockPickingInherit(models.Model):
    _inherit = "stock.picking"

    xx_migrated_shipping_id = fields.Char(string='Migrated Shipping ID')

    @api.model
    def create(self, vals):
        rec = super(StockPickingInherit, self).create(vals)
        if rec.origin:
            so = self.env['sale.order'].search([('name', '=', rec.origin)])
            rec.carrier_id = so.xx_shipping_company_id.id
            rec.carrier_tracking_ref = so.xx_migrated_tracking_reference
            rec.xx_migrated_shipping_id = so.xx_migrated_shipping_id
        return rec
