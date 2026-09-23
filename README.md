# Portfolio Rebuild

A Next.js + TypeScript + Tailwind portfolio rebuild based on the supplied design reference.

## 1. Install

```powershell
npm install
```

## 2. Run

```powershell
npm run dev
```

Open http://localhost:3000

## 3. Images

Place your real assets here:

```text
public/images/myPicture.jpg
public/images/logo.png

public/projects/docstudy.png
public/projects/gomla.png
public/projects/khatmatuk.png
public/projects/sharyan.png
public/projects/zad.png
```

The project is already wired to those exact paths.

## 4. Main structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/[slug]/page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── icons/
└── data/
```

The project detail route is included because the supplied design contains dedicated project-detail screens in addition to the one-page portfolio sections.


## Design mapping

The provided PDF reference is implemented as follows:

- Main portfolio: Hero, About, Services, Marquee, Technologies & Tools, By The Numbers, Projects, Education/Languages, Contact.
- Project detail: hero/project preview, key features, gallery, and the red conversation CTA shown in the later reference screens.

## Important

The project intentionally does not include `node_modules`, because installation is left to you.

The placeholder copy in the source is easy to replace with your exact personal profile data and project URLs.
