#!/bin/bash

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

read -p "Are you sure you want to continue? You are about to delete all ips from the mongodb whitelist. (y/n) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]
then
	FETCH_URL="https://cloud.mongodb.com/api/atlas/v2/groups/${MONGODB_GROUP_ID}/accessList"

	# Fetch the current IP Access List
	echo "Fetching current IP Access List..."
	IP_ENTRIES=$(curl --user "${MONGODB_PUBLIC_KEY}:${MONGODB_PRIVATE_KEY}" \
										--digest \
										--header "Accept: application/vnd.atlas.2023-11-15+json" \
										-X GET "${FETCH_URL}" | jq -r '.results[] | .ipAddress')

	# Check if IP entries are available
	if [ -z "$IP_ENTRIES" ]; then
			echo "No IP Access List entries found to delete."
			exit 0
	fi

	# Deleting each IP Access List entry
	echo "Deleting IP Access List entries..."
	for IP in $IP_ENTRIES; do
			DELETE_URL="https://cloud.mongodb.com/api/atlas/v2/groups/${MONGODB_GROUP_ID}/accessList/${IP}"
			curl --user "${MONGODB_PUBLIC_KEY}:${MONGODB_PRIVATE_KEY}" \
					--digest \
					--header "Accept: application/vnd.atlas.2023-11-15+json" \
					-X DELETE "${DELETE_URL}"
			echo "Deleted entry: $IP"
	done

	echo ""
	echo "All IP Access List entries have been deleted."
	echo ""
else
	echo ""
	echo "ABOUT ABOUT ABOUT!!!"
	echo ""
fi