def create_teams(players):
    """
    Divide a lista de jogadores em duas equipes de 4 jogadores cada.
    """
    if len(players) != 8:
        raise ValueError("É necessário exatamente 8 jogadores para criar equipes 4vs4.")
    
    team1 = players[:4]
    team2 = players[4:]
    
    return team1, team2

players = ["Player1", "Player2", "Player3", "Player4", "Player5", "Player6", "Player7", "Player8"]

team1, team2 = create_teams(players)

print("Equipe 1:", team1)
print("Equipe 2:", team2)