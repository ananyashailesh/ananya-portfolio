<h1 align="center">Ananya Shailesh — Portfolio</h1>

My personal portfolio site. I'm a Computer Science student specializing in
AI and Robotics at VIT Chennai, currently interning on the Excalibur team at
Dell Technologies, where I build AI-driven tools, robotics systems, and
full-stack applications.

**Live site:** [portfolio-63m.pages.dev](https://portfolio-63m.pages.dev)

## Featured projects

- **[PolarisGCS](https://github.com/PolarisGCS)** — a cloud ground control
  system for coordinating fleets of up to 150 drones, with live WebSocket
  telemetry and a React/TypeScript operator dashboard.
- **Guardian Bot** — a ROS-based assistive robot for elderly care, combining
  autonomous person-following, wearable IoT health monitoring, and automated
  emergency response.
- **[PawGuard](https://github.com/ChauhanKrish4763/Pawguard)** — a Flutter +
  Firebase mobile app connecting users with animal shelters, vets, and rescue
  teams, with real-time location tracking and secure donations.

## Tech stack

Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and
[Framer Motion](https://www.framer.com/motion/), hosted on Cloudflare Pages.
The contact form runs on [Web3Forms](https://web3forms.com) — no backend
required.

## Running locally

Requires Node.js `19.9.0`+ and npm `9.6.3`+.

```bash
npm install     # install dependencies
npm run dev     # start the local dev server
```

To view the components storybook:

```bash
npm run dev:storybook
```

## Deployment

Hosted on Cloudflare Pages, connected to this repo for automatic builds on
push to `master`. To deploy manually:

```bash
npm run deploy
```

## Credits

Based on the open-source [portfolio template](https://github.com/HamishMW/portfolio)
by Hamish Williams, restyled and rebuilt around my own projects and content.
