FROM maxmcd/deno:jessie-v1.0.0

# Create app directory
WORKDIR /usr/src/app

COPY . .

EXPOSE 8000

CMD [ "deno", "run", "-A", "--unstable", "--importmap", "./imports.json", "--config", "./tsconfig.json", "./app.ts" ]
