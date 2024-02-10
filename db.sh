#!/bin/bash

docker-compose -f postgres.yml up -d postgres && npx --yes prisma db push && npx --yes prisma generate
