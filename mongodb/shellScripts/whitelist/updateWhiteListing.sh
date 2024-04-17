#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

# Load environment variables from .env.local
SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
if [ -f "$SCRIPT_DIR/../../../.env.local" ]; then
    export $(cat "$SCRIPT_DIR/../../../.env.local" | sed 's/#.*//g' | xargs)
else
    echo "Error: .env.local file not found."
    exit 1
fi

MONGODB_PUBLIC_KEY=$MONGODB_PUBLIC_KEY
MONGODB_PRIVATE_KEY=$MONGODB_PRIVATE_KEY
MONGODB_GROUP_ID=$MONGODB_GROUP_ID

CURRENT_IP=$(curl -s https://api.ipify.org)

JSON_DATA='[
  {
    "ipAddress": "'"$CURRENT_IP"'"
  }
]'

FETCH_URL="https://cloud.mongodb.com/api/atlas/v2/groups/${MONGODB_GROUP_ID}/accessList"

curl --user "${MONGODB_PUBLIC_KEY}:${MONGODB_PRIVATE_KEY}" \
  --digest \
  --header "Content-Type: application/vnd.atlas.2023-11-15+json" \
  --header "Accept: application/vnd.atlas.2023-11-15+json" \
  -X POST \
  -d "${JSON_DATA}" \
  "${FETCH_URL}" \
  -s -o /dev/null

echo ""
if [ $? -eq 0 ]; then
  echo -e "Ip ${BOLD}${CURRENT_IP}${NC} has ${GREEN}successfully${NC} been added."
else
  echo -e "Ip ${BOLD}${CURRENT_IP}${NC} has ${GREEN}failed${NC} to be added"
fi
echo ""