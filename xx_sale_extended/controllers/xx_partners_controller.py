from odoo import http
from odoo.http import route,request
from odoo.exceptions import ValidationError
from odoo.addons.auth_api_key.controllers.api import AuthApiKey

def create_or_update_tags(tag_names):
    tag_ids = []
    for tag_name in tag_names:
        tag = request.env['res.partner.category'].sudo().search([('name', '=', tag_name)], limit=1)
        if not tag:
            tag = request.env['res.partner.category'].sudo().create({'name': tag_name})
        tag_ids.append(tag.id)
    return tag_ids


def create_partner_record(partner_data):
    xx_eds_id = partner_data.get('xx_eds_id')
    name = partner_data.get('name')
    street = partner_data.get('street1')
    street2 = partner_data.get('street2')
    city = partner_data.get('city')
    state = partner_data.get('state')
    country = partner_data.get('country')
    phone = partner_data.get('phone')
    mobile = partner_data.get('mobile')
    email = partner_data.get('email')
    website = partner_data.get('website')
    tax_id = partner_data.get('tax_id')
    notes = partner_data.get('notes')
    tags = partner_data.get('tags',[])

    tag_ids = create_or_update_tags(tags)

    partner = request.env['res.partner'].sudo().create({
        'xx_eds_id': xx_eds_id,
        'name': name,
        'street': street,
        'street2': street2,
        'city': city,
        'state_id': state,
        'country_id': country,
        'category_id': tag_ids,
        'phone': phone,
        'mobile': mobile,
        'email': email,
        'website': website,
        'vat': tax_id,
        'comment': notes,
        'customer_rank': 1,
    })


class PartnerAPI(AuthApiKey):
    @route('/partner', type='json', auth='api_key', methods=['POST'])
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
