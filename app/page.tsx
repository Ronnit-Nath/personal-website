import { Suspense } from 'react';
import { PreloadResources } from '../app/preload';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'; // Ensure React is imported
import ViewCounter from 'app/blog/view-counter';
import {
  getLeeYouTubeSubs,
  getVercelYouTubeSubs,
  getViewsCount,
} from 'app/db/queries';

// Import images correctly from the public folder
import smashing from 'public/images/001.jpg';
import summit from 'public/images/001.jpg';
import reactathon from 'public/images/001.jpg';
import ship from 'public/images/001.jpg';
import filming from 'public/images/001.jpg';
import meetups from 'public/images/001.jpg';
 
// Import avatar image correctly
import avatar from '/app/avatar.jpg';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function HomePage() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I'm ronnit 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a 17-year-old tech enthusiast and developer from India. I love all
        things tech and enjoy creating things, especially involving code. I
        particularly enjoy working on projects related to programming and
        electronics. Check out my{' '}
        <Link href="/work">
          <span className="text-blue-500">GitHub</span>
        </Link>{' '}
        for some awesome projects.
      </p>
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="React Summit"
            src={summit}
            layout="fill"
            objectFit="cover"
            priority={true}
            className="rounded-lg"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Reactathon"
            src={reactathon}
            layout="fill"
            objectFit="cover"
            priority={true}
            className="rounded-lg"
          />
        </div>
        <div className="relative">
          <Image
            alt="Vercel Ship"
            src={ship}
            layout="fill"
            objectFit="cover"
            priority={true}
            className="rounded-lg"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Filming at Next.js Conf"
            src={filming}
            layout="fill"
            objectFit="cover"
            priority={true}
            className="rounded-lg"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Vercel Meetups"
            src={meetups}
            layout="fill"
            objectFit="cover"
            priority={true}
            className="rounded-lg"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="SmashingConf"
            src={smashing}
            layout="fill"
            objectFit="cover"
            priority={true}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="Lorem Ipsum"
          slug="hello-world"
        />
        <BlogLink 
        name="Lorem Ipsum" 
        slug="career" />
        <BlogLink 
        name="Lorem Ipsum" 
        slug="heroku" />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
         Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum.
        </p>
      </div>

      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <Link href="https://github.com/Ronnit-Nath">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsGithubFill0)"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <Link href="https://x.com/RonnitNath">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41z"/>
            </svg>
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <Link href="https://www.linkedin.com/in/ronnitnath/">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0" clip-rule="evenodd"/>
            </svg>
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <Link href="https://www.instagram.com/ronnit_nath">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd"/>
            </svg>
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <Link href="https://bun.sh">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" viewBox="0 0 16 16"><path fill="currentColor" d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/>
            </svg>
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <Link href="https://bun.sh">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsSpotifyFill0)"><path fill="currentColor" d="M11.995 0C5.381 0 0 5.382 0 11.996C0 18.616 5.381 24 11.995 24C18.615 24 24 18.615 24 11.996C24 5.382 18.615 0 11.995 0M5.908 16.404a14.548 14.548 0 0 1 4.238-.638c2.414 0 4.797.612 6.892 1.77c.125.068.238.292.29.572c.05.28.03.567-.052.716a.61.61 0 0 1-.834.24A13.107 13.107 0 0 0 6.277 18.03a.61.61 0 0 1-.771-.402c-.107-.35.114-1.13.402-1.224m-.523-4.42a18.154 18.154 0 0 1 4.76-.635c2.894 0 5.767.7 8.31 2.026c.179.09.31.244.37.432a.747.747 0 0 1-.052.578c-.227.444-.493.743-.66.743a.769.769 0 0 1-.35-.086a16.33 16.33 0 0 0-7.617-1.854a16.34 16.34 0 0 0-4.366.585a.749.749 0 0 1-.92-.525c-.112-.422.145-1.16.525-1.264M5.25 9.098a.88.88 0 0 1-1.073-.641c-.123-.498.188-1.076.64-1.19a22.365 22.365 0 0 1 5.328-.649c3.45 0 6.756.776 9.824 2.307a.888.888 0 0 1 .4 1.19c-.143.288-.453.598-.795.598a.924.924 0 0 1-.388-.087A20.026 20.026 0 0 0 10.145 8.5c-1.635 0-3.282.201-4.895.598"/></g><defs><clipPath id="akarIconsSpotifyFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{' '}
          <Link href="/blog/developer-marketing">
            <span className="text-blue-500">Lorem Ipsum Lorem Ipsum</span>
          </Link>
          ,{' '}
          <Link href="/blog/devrel">
            <span className="text-blue-500">Lorem Ipsum Lorem Ipsum</span>
          </Link>
          , Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
        </p>
      </div>

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link href="https://twitter.com/RonnitNath">
            <span className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
              <ArrowIcon />
              <span className="ml-2 h-7">follow me</span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Ronnit-Nath">
            <span className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
              <ArrowIcon />
             <span className="ml-2 h-7">get email updates</span>
            </span>
          </Link>
        </li>
      </ul>
      
    </section>
  );
}
