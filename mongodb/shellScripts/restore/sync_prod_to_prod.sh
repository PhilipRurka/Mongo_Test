#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
BOLD='\033[1m'
MOVE_CURSOR_LEFT_1='\033[1D'
CLEAR_TO_END_OF_LINE='\033[K'
NC='\033[0m'

echo -e "Are you sure, this can't be un-done? If you want to proceed with restoring Production with Production dump, ${RED}WITHOUT COPY PASTING${NC}, input the following:"
echo -e "${GREEN}Restore Prod with Prod Dump${NC}"

echo -ne "${BOLD}Input here:${GREEN} "
read -r INPUT

echo -ne "${MOVE_CURSOR_LEFT_1}${CLEAR_TO_END_OF_LINE}${NC}"

if [[ "$INPUT" == "Restore Prod with Prod Dump" ]]
then
  echo "Please enter your MongoDB password:"
  read -s MONGO_PASSWORD
  echo "Dropping the Staging database..."
  if mongosh "mongodb+srv://philip_rurka:$MONGO_PASSWORD@cluster0.pvszw5r.mongodb.net/" --eval "db.getSiblingDB('Staging').dropDatabase()"
  then
    echo "Database dropped successfully."
    if mongorestore --uri="mongodb+srv://philip_rurka:$MONGO_PASSWORD@cluster0.pvszw5r.mongodb.net/" --drop mongodb/dump/production
      then
        echo ""
        echo ""
        echo -e "██████╗${GREEN}░${NC}██████╗${GREEN}░░${NC}█████╗${GREEN}░${NC}██████╗${GREEN}░░░░░░░░░░░░░░░${NC}██╗${GREEN}░░░░${NC}██████╗${GREEN}░${NC}██████╗${GREEN}░░${NC}█████╗${GREEN}░${NC}██████╗${GREEN}░${NC}"
        echo -e "██╔══██╗██╔══██╗██╔══██╗██╔══██╗${GREEN}░░░░░░░░░░░░░░${NC}╚██╗${GREEN}░░░${NC}██╔══██╗██╔══██╗██╔══██╗██╔══██╗"
        echo -e "██████╔╝██████╔╝██║${GREEN}░░${NC}██║██║${GREEN}░░${NC}██║${GREEN}░░${NC}█████╗█████╗${GREEN}░${NC}╚██╗${GREEN}░░${NC}██████╔╝██████╔╝██║${GREEN}░░${NC}██║██║${GREEN}░░${NC}██║"
        echo -e "██╔═══╝${GREEN}░${NC}██╔══██╗██║${GREEN}░░${NC}██║██║${GREEN}░░${NC}██║${GREEN}░░${NC}╚════╝╚════╝${GREEN}░${NC}██╔╝${GREEN}░░${NC}██╔═══╝${GREEN}░${NC}██╔══██╗██║${GREEN}░░${NC}██║██║${GREEN}░░${NC}██║"
        echo -e "██║${GREEN}░░░░░${NC}██║${GREEN}░░${NC}██║╚█████╔╝██████╔╝${GREEN}░░░░░░░░░░░░░░${NC}██╔╝${GREEN}░░░${NC}██║${GREEN}░░░░░${NC}██║${GREEN}░░${NC}██║╚█████╔╝██████╔╝"
        echo -e "╚═╝${GREEN}░░░░░${NC}╚═╝${GREEN}░░${NC}╚═╝${GREEN}░${NC}╚════╝${GREEN}░${NC}╚═════╝${GREEN}░░░░░░░░░░░░░░░${NC}╚═╝${GREEN}░░░░${NC}╚═╝${GREEN}░░░░░${NC}╚═╝${GREEN}░░${NC}╚═╝${GREEN}░${NC}╚════╝${GREEN}░${NC}╚═════╝${GREEN}░${NC}"
        echo ""
        echo ""
        exit 0
      else
        echo "Error: Failed to restore the database."
        exit 1
      fi
  else
    echo "Error: Failed to drop the database."
    exit 1
  fi
else
  echo ""
  echo ""
  echo -e "╭━━╮${RED}╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱${NC}╭╮${RED}╱${NC}╭━━╮${RED}╱╱╱╱╱╱╱╱${NC}╭╮"
  echo -e "╰┫┣╯${RED}╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱${NC}╭╯╰╮╰┫┣╯${RED}╱╱╱╱╱╱╱${NC}╭╯╰╮"
  echo -e "${RED}╱${NC}┃┃╭━╮╭━━┳━━┳━┳━┳━━┳━┻╮╭╯${RED}╱${NC}┃┃╭━╮╭━━┳╮┣╮╭╯"
  echo -e "${RED}╱${NC}┃┃┃╭╮┫╭━┫╭╮┃╭┫╭┫┃━┫╭━┫┃${RED}╱╱${NC}┃┃┃╭╮┫╭╮┃┃┃┃┃"
  echo -e "╭┫┣┫┃┃┃╰━┫╰╯┃┃┃┃┃┃━┫╰━┫╰╮╭┫┣┫┃┃┃╰╯┃╰╯┃╰╮"
  echo -e "╰━━┻╯╰┻━━┻━━┻╯╰╯╰━━┻━━┻━╯╰━━┻╯╰┫╭━┻━━┻━╯"
  echo -e "${RED}╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱${NC}┃┃"
  echo -e "${RED}╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱${NC}╰╯"
  echo ""
  echo ""
  exit 1
fi