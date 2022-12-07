import json
import pandas as pd
import os 

dir_path = os.path.dirname(os.path.realpath(__file__))

input = pd.read_csv(dir_path + '/pokemon.csv')
output = open(dir_path + '/pokemon.JSON', 'w')
output.truncate(0)
pokedex = {}

name = ''
stats = ['HP','Att','Def','S.Att','S.Def','Spd']
for idx, row in input.iterrows():
    # Creates a new entry
    if not pd.isna(row['Name']):
        name = row['Name']
        pokedex[name] = {}

        entry = pokedex[name]
        entry['Name'] = row['Name']
        entry['Abilities'] = {}
        entry['Abilities']['Ability_1'] = row['Abilities']
        entry['Stats'] = {}
        entry['Stats']['Stats_1'] = row[stats].to_dict()

    # Updates the entry if there are additional abilities or formes
    if pd.isna(row['Name']):
        entry = pokedex[name]
        if not pd.isna(row['Abilities']):
            no = str(len(entry['Abilities']) + 1)
            entry['Abilities']['Ability_' + no] = row['Abilities']
        if not pd.isna(row['HP']):
            no = str(len(entry['Stats']) + 1)
            entry['Stats']['Stats_' + no] = row[stats].to_dict()
json.dump(pokedex, output)


