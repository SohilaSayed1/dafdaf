from odoo import models, fields, api

class StockPicking(models.Model):
    _inherit = 'stock.picking'

    xx_migrated_shipping_id = fields.Char(string='Migrated Shipping ID')

    @api.model
    def create(self, vals):
        print('Create method called with vals:', vals)
        rec = super().create(vals)

        if rec.sale_id:
            print('sale_id exists:', rec.sale_id)
            rec.carrier_id = rec.sale_id.xx_shipping_company_id.id
            rec.carrier_tracking_ref = rec.sale_id.xx_migrated_tracking_reference
            rec.xx_migrated_shipping_id = rec.sale_id.xx_migrated_shipping_id
        else:
            print('No sale_id in vals or sale_id is False:', rec.sale_id)

        print('Final record:', rec)
        return rec
