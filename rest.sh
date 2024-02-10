#!/bin/bash

cd ../propromo.rest
sudo apt install -y podman
podman run --network host --detach --rm -v "$(pwd):/app" -w /app docker.io/oven/bun run dev
