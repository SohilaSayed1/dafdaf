from odoo import http
from odoo.http import request
from odoo.exceptions import ValidationError


def create_partner_record(partner_data):
    partner_values = {
        'xx_eds_id': partner_data.get('eds_id'),
        'name': '',
        'street': partner_data.get('street1'),
        'street2': partner_data.get('street2'),
        'city': partner_data.get('city'),
        'state_id': partner_data.get('state'),
        'country_id': partner_data.get('country'),
        # 'tags': partner_data.get('tags'),
        'phone': partner_data.get('phone'),
        'mobile': partner_data.get('mobile'),
        'email': partner_data.get('email'),
        'website': partner_data.get('website'),
        'vat': partner_data.get('tax_id'),
        'comment': partner_data.get('notes'),
        'customer_rank': 1 if partner_data.get('customer_rank', 0) > 0 else 0,
    }

    partner = request.env['res.partner'].sudo().create(partner_values)


class PartnerAPI(http.Controller):
    @http.route('/sale_order_partner', type='json', auth='public', methods=['POST'])
    def create_partner(self, **kw):
        try:
            # Parse incoming JSON data
            partners_data = kw.get('partners', [])

            # Process each partner
            for partner_data in partners_data:
                create_partner_record(partner_data)

            return {"status": "201 Created", "message": "Partners created successfully"}



        except ValidationError as ve:
            return {"status": "400 Bad Request", "message": f"Error: {ve.name}"}


        except Exception as e:
            return {"status": "400 Bad Request", "message": f"Error: {str(e)}"}
