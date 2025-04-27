🚀 WowDash Admin Dashboard

Project Beschrijving

Een professioneel Next.js 15.3.1 admin dashboard, gebouwd als basis voor meerdere projecten.
Gedeployed via Coolify, automatisch verbonden met GitHub.
SSL wordt geregeld via Cloudflare.

Features

Next.js 15 (met App Router)

Dockerfile deployment ready

Cloudflare DNS & SSL integratie

Automatische deploys via Coolify bij GitHub push

Admin Template (WowDash) als basis

Strakke en snelle builds voor productie

Systeem Vereisten

Node.js 18+

NPM 9+

Docker (voor productie builds)

GitHub account

Coolify geïnstalleerd op server

Installatie (Development)

Clone de repository

git clone https://github.com/[jouw-gebruiker]/[jouw-repo].git
cd [jouw-repo]

Installeer dependencies

npm install

Start de development server

npm run dev

De app draait nu op:

http://localhost:3000

Deployment (Productie)

Build Docker image:

docker build -t wowdash-admin .

Start container:

docker run -d -p 3000:3000 wowdash-admin

Of via Coolify:

Project is verbonden met GitHub

Automatische deploys bij push naar main

Best practices

Gebruik git branch voor grote nieuwe functies

Push altijd naar main als het getest is

Houd de repo schoon (verwijder niet gebruikte templates/componenten)

Belangrijke mappen

Pad

Omschrijving

/src/app

Pages en routing

/src/components

Herbruikbare componenten

/public

Assets (afbeeldingen, icons, fonts)

TODO's



🔄 Standaard Workflow

Ontwikkelen op localhost

Committen & pushen naar GitHub

Coolify pakt nieuwe build automatisch op

Deployment zichtbaar op admin.onlinewerkplek.cloud

Contact

Developer: Daan Koolhaas

Hosting: WebsUp.nl / OnlineWerkplek.cloud
