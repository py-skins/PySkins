import random

import requests
from bs4 import BeautifulSoup

from backend.test_dev.test_data.cases_data import CASES_DATA
from rest_framework.views import APIView
from rest_framework.response import Response
from backend.api.utils import *


# def checkCookie(request):
#     token = request.COOKIES.get('jwt')
#     if not token:
#         raise AuthenticationFailed('Unauthenticated!')
#
#     try:
#         return jwt.decode(token, 'secret', algorithms=["HS256"])
#     except jwt.ExpiredSignatureError:
#         raise AuthenticationFailed('Unauthenticated!')

def extract_test_data():
    cases_data = {}
    for case in CASES_DATA:
        case_name = case['case_data']['name']
        cases_data[case_name] = case
    return cases_data


cases_data_reworked = extract_test_data()


class CSGOOpenCaseView(APIView):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.cases_data = self.extract_test_data()

    def get(self, request):
        case_name = request.query_params.get('caseName', None).lower()

        if case_name not in self.cases_data:
            return Response({"error": "Case not found!"})

        case = self.cases_data[case_name]
        skins_rarity = {}

        for skin in case['skins']:
            skin_rarity = skin['skin_rarity']['rarity_name']
            if skin_rarity not in skins_rarity.keys():
                skins_rarity[skin_rarity] = []
            skins_rarity[skin_rarity].append(skin)

        winning_rarity = [[c_skin_rarity] * round(skin_rarity_data[c_skin_rarity.lower()]['chance']) for c_skin_rarity
                          in skins_rarity]
        winning_rarities_list = list(itertools.chain(*winning_rarity))
        winning_rarity = random.choice(winning_rarities_list)
        winning_skin = random.choice(skins_rarity[winning_rarity])
        winning_skin_condition = random.choice(skin_condition_data_list)
        stattrak = random.choice([*[False] * 9, True])
        chance_of_skin = skin_rarity_data[winning_rarity.lower()]['chance']

        if stattrak:
            winning_skin_condition = "stattrak " + winning_skin_condition
            chance_of_skin /= 10
        winning_skin_price = winning_skin['quality_prices'][winning_skin_condition]['price']

        print(stattrak)
        print('winning condition', winning_skin_condition)

        return Response({
            'id': winning_skin['id'],
            'name': winning_skin['name'],
            'condition': winning_skin_condition,
            'price': winning_skin_price,
            'stattrak': stattrak,
            'main_image_url': winning_skin['main_image_url'],
            'chance': chance_of_skin
        })

    def post(self, request):
        return Response({"error": "Method not setup"})

    def extract_test_data(self):
        cases_data = {}
        for case in CASES_DATA:
            case_name = case['case_data']['name']
            cases_data[case_name.lower()] = case
        return cases_data


class CSGOStickerView(APIView):

    def post(self, request):
        request_data = request.data
        url = f"https://csgostash.com/sticker/{request_data['item_id']}"

        response = requests.get(url)
        html_content = response.text
        soup = BeautifulSoup(html_content, "html.parser")
        div_with_all_sticker_data = soup.find("div", class_="row text-center")
        look_for_class_in_image = "item-details-img"
        span_elements = div_with_all_sticker_data.find_all("span")
        sticker_price = None
        for span_element in span_elements:
            if "€" in span_element.text:
                sticker_price = span_element.text
                break

        sticker_image = div_with_all_sticker_data.find("img", class_=look_for_class_in_image)
        sticker_image_src = sticker_image.get("src")
        return Response(
            {'image': sticker_image_src,
             'name': sticker_image.get("alt"),
             'price': sticker_price
             }
        )


class CSGOModelSkinView(APIView):

    def get(self, request):
        return Response("test")


class CSGOSkinView(APIView):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.skin_qualities = [
            'factory new', 'minimal wear', 'field-tested',
            'well-worn', 'battle-scarred', 'stattrak factory new',
            'stattrak minimal wear', 'stattrak field-tested',
            'stattrak well-worn', 'stattrak battle-scarred'
        ]
        self.rarity_colors = skin_rarity_data

    def get_skin_data(self, skin_id):
        url = f"https://csgostash.com/skin/{skin_id}"

        response = requests.get(url)
        html_content = response.text
        soup = BeautifulSoup(html_content, "html.parser")
        div_elements = soup.find("div", class_="skin-details-previews")

        skin_rarity = soup.find("div", class_="quality")
        main_skin_image_url = None
        skin_main_image = soup.find("img", class_="main-skin-img")

        if skin_main_image:
            main_skin_image_url = skin_main_image.get('src')

        if skin_rarity:
            skin_rarity = skin_rarity.find('p').text

        skin_image = div_elements.find("img")
        if not skin_image:
            return False
        skin_name = skin_image.get("alt")
        skin_image_url = skin_image.get("src")

        skin_prices_table = soup.find("table")
        skin_prices_tr = skin_prices_table.find_all("tr")
        skin_quality_data = {}
        for skin_tr in skin_prices_tr:
            skin_td_list = skin_tr.find_all("td")
            current_quality = None
            for skin_td in skin_td_list:
                td_text = skin_td.text.lower().strip()
                if td_text:
                    if td_text in self.skin_qualities:
                        skin_quality_data[td_text] = {}
                        current_quality = td_text

                    if "€" in td_text:
                        if current_quality:
                            skin_quality_data[current_quality]['price'] = float(
                                '.'.join((td_text.strip().replace('€', '').replace('-', '').split(','))).replace(' ',
                                                                                                                 ''))

                    if td_text.isdigit():
                        if current_quality:
                            skin_quality_data[current_quality]['listings'] = td_text

        skin_rarity_data_string = '-'.join(skin_rarity.split(' ')).strip()
        skin_rarity_data_split = skin_rarity_data_string.split('-')
        weapon_type = skin_rarity_data_split.pop()
        rarity_type = ' '.join(skin_rarity_data_split)
        if rarity_type.lower() not in self.rarity_colors.keys():
            weapon_type += skin_rarity_data_split.pop()
            rarity_type = ' '.join(skin_rarity_data_split)

        return {
            "skin_rarity": {
                'rarity_name': rarity_type,
                'weapon_type': weapon_type,
                'rarity_color': self.rarity_colors[rarity_type.lower()]['color'],
                'chance': self.rarity_colors[rarity_type.lower()]['chance']
            },
            "id": url.split('/')[-1],
            "name": skin_name,
            "preview_image_url": skin_image_url,
            "main_image_url": main_skin_image_url,
            "quality_prices": skin_quality_data,
            'item_type': 'skin'
        }

    def post(self, request):
        request_data = request.data
        skin_id = request_data['skin_id']

        skin_data = self.get_skin_data(skin_id)
        return Response(skin_data)


class CSGOCaseView(APIView):
    def __init__(self):
        super().__init__()
        self.skin_types = ['capsule', 'case', 'package']
        self.item_types = ['skin', 'sticker']
        self.case_ids = [
            376, 355, 339, 321, 315, 308,
            307, 38, 48, 141, 238, 1, 4,
            10, 293, 259, 2, 5, 19, 50, 144,
            172, 179, 244, 17, 3, 18, 208,
            11, 29, 112, 274, 303, 111, 80,
            277, 207, 220, 7
        ]
        self.extract_skin_data = CSGOSkinView().get_skin_data

    def find_skin_id_in_anker(self, anker):
        href = anker.get("href")
        if not href or anker.find("img"):
            return None

        item_in_href = False
        for item_type in self.item_types:
            if item_type in href.split("/"):
                skin_id = href.split("/")[-2]
                return skin_id

        return None

    def get_skin_data_from_div(self, div):
        all_anker_elements = div.find_all("a")
        skin_id = None
        for anker in all_anker_elements:
            skin_id = self.find_skin_id_in_anker(anker)
        if skin_id:
            skin_data = self.extract_skin_data(skin_id)

            return skin_data
        return None

    def get_case(self, case_id):
        url = f"https://csgostash.com/case/{case_id}"
        response = requests.get(url)
        html_content = response.text
        soup = BeautifulSoup(html_content, "html.parser")
        div_elements = soup.find_all("div")
        skins = []
        skins_ids = []
        # GET ALL SKINS
        for div in div_elements:
            skin = self.get_skin_data_from_div(div)
            if not skin:
                continue

            if skin['id'] not in skins_ids:
                skins_ids.append(skin['id'])
                skins.append(skin)

        rows = soup.find_all("div", class_="row")
        case_price = 0
        for row in rows:
            row_image = row.find('img')
            if not row_image or not row_image.get('alt'):
                continue

            image_alt = row_image.get('alt')
            if "Case" not in image_alt and "Capsule" not in image_alt:
                continue

            case_name = row_image.get('alt')
            case_image_url = row_image.get('src')

            row_ankers = row.find_all('a')

            for anker in row_ankers:
                if "€" in anker.text:
                    anker_text = anker.text.replace('\n', '')
                    case_price = anker_text.strip()
                    case_price = case_price.replace("BitSkins", '')
            return {
                "case_id": case_id,
                "case_data": {
                    'name': case_name,
                    'image_url': case_image_url,
                    'price': float(
                        '.'.join((case_price.strip().replace('€', '').replace('-', '').split(','))).replace(' ', ''))
                },
                "skins": skins}

    def get(self, request):
        cases = []

        for case_id in self.case_ids:
            cases.append(self.get_case(case_id))

        return Response(cases)

    def post(self, request):
        data = self.get_case(request.data['case_id'])
        if not data:
            data = {'error': "No case found."}
        return Response(
            data
        )

    # def post(self, request):
    #     serializer = SkinSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data)


class CSGOGetCasesView(APIView):

    def get(self, request):
        reworked_data = {}
        cases = cases_data_reworked
        for case_name in cases:
            case_data = cases[case_name]['case_data']
            reworked_data[case_name] = case_data
        print(reworked_data)

        return Response({"data": reworked_data})


class CSGOGetCaseDataView(APIView):

    def get(self, request):
        case_name = request.query_params.get("caseName", None)

        if case_name not in cases_data_reworked:
            return Response({"error": "Case not found!"})

        return Response({"data": cases_data_reworked[case_name]})
