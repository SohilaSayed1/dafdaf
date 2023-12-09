from odoo import models, fields


class ResPartner(models.Model):
    _inherit = 'res.partner'
    xx_eds_id = fields.Char('EDS ID')
