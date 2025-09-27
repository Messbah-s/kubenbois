#!/bin/bash

echo " "
echo "#######################"
echo "Génération d'un fichier sql flyway"
echo " "

TIMESTAMP=$( date '+%Y%m%d%H%M%S')
touch src/main/resources/db/migration/V1.${TIMESTAMP}__XXXXXXXXX.sql
echo "V1.${TIMESTAMP}__XXXXXXXXX.sql généré avec succès !"
echo "#######################"
