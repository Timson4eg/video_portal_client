# video_portal_client

Frontend client for **Video Portal**, built with **Next.js**, **React**, **TypeScript**, and
**Tailwind CSS**. It provides a modern UI for browsing, uploading, and managing videos, and connects
to the [video_portal_server](https://github.com/Timson4eg/video_portal_server) backend.

---

## 🚀 Installation

```bash
git clone https://github.com/Timson4eg/video_portal_client.git
cd video_portal_client
npm install
# or
yarn install
# or
bun install
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_RECAPTCHA_KEY=your_public_recaptcha_key
```

---

## 📡 Available Scripts

```bash
npm run dev       # start in development mode
npm run build     # build for production
npm run start     # start production server
npm run lint      # run eslint
```

---

## 🖥 Development

Start the dev server:

```bash
npm run dev
```

By default, the app will run at [http://localhost:3000](http://localhost:3000).

---

## 🎨 Styling

The project uses **Tailwind CSS** for styling. Utility classes are used for building responsive and
accessible UI.

---

## 👤 Author

Maintained by **[Timson4eg](https://github.com/Timson4eg)**
