import { promises as fs, existsSync } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const template = `---
title: 'Hello, World!'
publishedAt: '2023-01-01'
summary: 'This is your first blog post.'
---

Hello, World!`;

const homePage = `export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my portfolio</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is your new portfolio.
      </p>
    </section>
  );
}
`;

const workPage = `export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is where your work experience goes.
      </p>
    </section>
  );
}
`;

const setupDirectories = async () => {
  const contentDir = path.join(process.cwd(), 'content');
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const appDir = path.join(process.cwd(), 'app');
  const workDir = path.join(process.cwd(), 'app', 'work');

  try {
    // Ensure directories exist or create them
    if (!existsSync(contentDir)) {
      await fs.mkdir(contentDir, { recursive: true });
    }

    if (!existsSync(imagesDir)) {
      await fs.mkdir(imagesDir, { recursive: true });
    }

    // Write initial template files if they don't exist
    const templateFilePath = path.join(contentDir, 'hello-world.mdx');
    if (!existsSync(templateFilePath)) {
      await fs.writeFile(templateFilePath, template);
    }

    const homePageFilePath = path.join(appDir, 'page.tsx');
    if (!existsSync(homePageFilePath)) {
      await fs.writeFile(homePageFilePath, homePage);
    }

    const workPageFilePath = path.join(workDir, 'page.tsx');
    if (!existsSync(workPageFilePath)) {
      await fs.writeFile(workPageFilePath, workPage);
    }
  } catch (err) {
    console.error('Error setting up directories and files:', err);
  }
};

(async () => {
  dotenv.config();

  if (process.env.IS_TEMPLATE === 'false') {
    // This means it's not the template, it's my legit site
    // Override the env variable for your site setup here
    return;
  }

  await setupDirectories();
})();
