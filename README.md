# cyclos4-ui-server

## Usage:

```bash
npm i
npm run build
npm start
```

## Explination

Running the UI directly from https://github.com/cyclosproject/cyclos4-ui doesn't work due to CORS (cross origin resource sharing) limitations in browsers.

This simple express server acts as a proxy for all requests destined for Cyclos core.
