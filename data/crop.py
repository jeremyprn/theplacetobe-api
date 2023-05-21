import pandas as pd
import os

def filter_csv(csv_file_path, output_directory):
    dtypes = {
        'CODGEO_2022': str,
        'annee': int,
        'classe': str,
        'unité.de.compte': str,
        'valeur.publiée': str,
        'faits': str,
        'tauxpourmille': str,
        'complementinfoval': str,
        'complementinfotaux': str,
        'POP': int,
        'millPOP': int,
        'LOG': str,
        'millLOG': int
    }

    # Lecture du fichier CSV complet
    df = pd.read_csv(csv_file_path, delimiter=';', dtype=dtypes)

    # Parcourir les deux premiers caractères du code géographique
    for codgeo_prefix in df['CODGEO_2022'].str[:2].unique():
        filtered_df = df[df['CODGEO_2022'].str.startswith(codgeo_prefix)]
        if not filtered_df.empty:
            file_name = f"{codgeo_prefix}-data.gouv-2022.csv"
            output_file_path = os.path.join(output_directory, file_name)
            filtered_df.to_csv(output_file_path, index=False, sep=';', decimal=',')

csv_file_path = 'data/data.gouv-2022.csv'
output_directory = 'security'

if not os.path.exists(output_directory):
    os.makedirs(output_directory)

filter_csv(csv_file_path, output_directory)

print("Fichiers CSV créés avec succès.")
