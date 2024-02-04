from rest_framework.views import APIView
from rest_framework.response import Response
import random


# Casino information
class Casino(APIView):
    def get(self, request):
        return Response({
            'Case_Battle': {
                "name": "Case Battle",
                "information": "The user selects a themed case or he can make a custom one. Up to four player and/or "
                               "bots can participate. The player with the most expensive skin wins."
            },
            'Wingman_Battle': {
                "name": "Wingman Battle",
                "information": "This game involves four players split into two teams. Whichever team's combined value "
                               "of skins is higher wins."
            },
            'Roulette': {
                "name": "Roulette",
                "information": "Typical casino roulette."
            },
            'Coin_Flip': {
                "name": "Coin Flip",
                "information": "A game where everything comes down to a fifty-fifty coin toss. An option "
                               "Double-or-nothing could be a fun addition. "
            },
            'Crash': {
                "name": "Crash",
                "information": "Typical game of crash where a stock builds up until sooner or later it crashes."
            }
        })

    def post(self, request):
        return Response({

        })


class Roulette(APIView):
    def __int__(self, **kwargs):
        super().__init__(**kwargs)

        self.pockets = ["Red"] * 18 + ["Black"] * 18 + ["Green"] * 2

        self.messages = {
            "win": "Congratulations, you WON!",
            "loss": "You LOST!"
        }

        self.bankroll_ratio = {
            "Red": 2,
            "Black": 2,
            "Green": 35
        }

    def spin_roulette(self, amount, color, balance):

        winning_color = random.choice(self.pockets)

        if color == winning_color:
            message = self.messages["win"]
            balance += amount * self.bankroll_ratio[winning_color]

            result = {"message": message,
                      "player_balance": balance}

        else:
            message = self.messages["loss"]
            balance -= amount

            result = {"message": message,
                      "player_balance": balance}

        return result

    def get(self, request):
        return Response({
            "colors": {
                'Green': {
                    "payout": 35,
                    "odds": "2.7%"
                },
                'Red': {
                    "payout": 1,
                    "odds": "48.65%"
                },
                'Black': {
                    "payout": 1,
                    "odds": "48.65%"
                }
            },

            "numbers": {
                "Even": {
                    "payout": 1,
                    "odds": "48.65%"},
                "Odd": {
                    "payout": 1,
                    "odds": "48.65%"}
            }
        })

    def post(self, request):

        req_data = request.data
        player_balance = req_data["player_balance"]
        bet_amount = req_data['bet_amount']
        bet_on_color = req_data['bet_on_color']

        spin = self.spin_roulette(bet_amount, bet_on_color, player_balance)
        message = spin['message']
        money = spin['balance']

        return Response({
            "message": message,
            "player_balance": money
        }
        )


class CoinFlip(APIView):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.sides = ["Heads", "Tails", "Draw"]

        # TO DO: MAKE PLAYER NAMES DYNAMIC
        self.messages = {
            "player1_win": "Congratulations player1, you WON!",
            "player2_win": "Congratulations player2, you WON!",
            "draw": "It's a draw, both players WIN!"
        }

    def coin_toss(self, bet_amount, player1, player2):

        # TO DO: CHECK IF SIDES ARE NOT THE SAME
        player1_side = player1["side"]
        player1_balance = player1["balance"]

        player2_side = player2["side"]
        player2_balance = player2["balance"]

        winning_side = random.choice(self.sides)

        if player1_side == winning_side:
            message = self.messages["player1_win"]
            player1_balance += bet_amount
            player2_balance -= bet_amount

            result = {
                "message": message,
                "player1_balance": player1_balance,
                "player2_balance": player2_balance
            }

        elif player2_side == winning_side:
            message = self.messages["player2_win"]
            player1_balance -= bet_amount
            player2_balance += bet_amount

            result = {
                "message": message,
                "player1_balance": player1_balance,
                "player2_balance": player2_balance
            }

        else:
            message = self.messages["draw"]
            player1_balance += bet_amount
            player2_balance += bet_amount

            result = {
                "message": message,
                "player1_balance": player1_balance,
                "player2_balance": player2_balance
            }

        return result

    def get(self, request):
        return Response({
            "coin_side_chances": {
                "Heads": 49.8,
                "Tails": 49.8,
                "Draw": 0.4
            },

        })

    def post(self, request):
        req_data = request.data

        bet_amount = req_data['bet_amount']
        player1 = req_data['player1']
        player2 = req_data['player2']

        toss = self.coin_toss(bet_amount, player1, player2)
        message = toss["message"]
        player1_balance = toss['player1_balance']
        player2_balance = toss['player2_balance']

        return Response({
            "message": message,
            "player1_balance": player1_balance,
            "player2_balance": player2_balance
        })


class Crash(APIView):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.outcomes = ['lose' * 75 + 'win' * 20 + 'huge_win' * 5]

        self.messages = {
            "win": "You WON!",
            "lose": "You CRASHED!",
            "huge_win": "HUGE WIN!"
        }

    def crash_stock(self, balance, amount, multiplier):
        outcome = random.choice(self.outcomes)

        if outcome == 'lose':
            message = self.messages['lose']
            lost_amount = multiplier * amount * -1
            balance += lost_amount

            result = {
                "message": message,
                "lost_amount": lost_amount,
                "player_balance": balance
            }

        elif outcome == 'win':
            message = self.messages['win']
            won_amount = multiplier * amount
            balance += won_amount

            result = {
                "message": message,
                "won_amount": won_amount,
                "player_balance": balance
            }

        else:
            message = self.messages['huge_win']
            won_amount = multiplier * amount * 4
            balance += won_amount

            result = {
                "message": message,
                "won_amount": won_amount,
                "player_balance": balance
            }

        return result

    def get(self, request):
        return Response({
            "multipliers": [
                "MIN", "MAX", "1", "10", "2", "0.5"
            ],
            "betting players": {}
        })

    def post(self, request):
        req_data = request.data()
        player_balance = req_data["player_balance"]
        bet_amount = req_data['bet_amount']
        multiplier = req_data['multiplier']

        attempt = self.crash_stock(player_balance, bet_amount, multiplier)

        return Response({
            "message": attempt['message'],
            "money": attempt['money'],
            "player_balance": attempt['player_balance']
        })


class CaseBattle(APIView):
    def open_case(self, skins):
        opened_skin = random.choice(skins)
        skin_price = opened_skin['price']

        result = {
            "skin": opened_skin,
            "skin_price": skin_price
        }

        return result

    def get(self, request):
        return Response({
            "cases_catalogue": {
                "case1": "placeholder",
                "case2": "placeholder",
                "case3": "placeholder",
                "create custom case": "placeholder"
            },
            "betting_players": {
                "player": "placeholder"
            }
        })

    def post(self, request):
        req_data = request.data

        selected_case = req_data['selected_case']
        selected_case_skins = selected_case['selected_case_skins']

        players = req_data['players']
        player1_bet_amount = players["player1"]
        player2_bet_amount = players["player2"]

        cases_count = req_data['cases_count']

        for case in cases_count:
            player1_opening = self.open_case(selected_case_skins)
            player2_opening = self.open_case(selected_case_skins)

            player1_bet_amount += player1_opening['skin_price']
            player2_bet_amount += player2_opening['skin_price']

        winner = players["player1"]

        """

        request_data -> 
        1. Case
        2. Players
        3. case count
        pl_1_money = 0
        pl_2_money = 0
        for case_i in case_count:
            player_1_item = open_case(case)
            player_2_item = open_case(case)

            pl_1_money += player_1_item['price']
            pl_2_money += player_2_money['price']

        winner = player_1 if pl_1_money>pl_2_money else player_2
        return winner
        """

        return Response({

        })