FROM maxmcd/deno:jessie-v0.34.0

# Create app directory
WORKDIR /usr/src/app

COPY . .

EXPOSE 8000

CMD [ "deno", "run", "-A", "--importmap", "./imports.json", "--config", "./tsconfig.json", "./app.ts" ]
