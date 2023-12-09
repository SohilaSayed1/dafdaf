from odoo import models, fields


class DeliveryCarrierExtended(models.Model):
    _inherit = 'delivery.carrier'

    xx_eds_id = fields.Char(string='EDS ID')
