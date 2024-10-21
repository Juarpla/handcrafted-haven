import FooterMenu from "@/app/ui/layout/footer-menu";
import Logos from "@/app/ui/logos.webp";
import Image from "next/image";
import Link from "next/link";
import {Suspense} from "react";

export type MenuItem = {
  title: string;
  path: string;
};

export type Menu = MenuItem[];

const COMPANY_NAME = "Handcrafted Haven";

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const skeleton =
    "w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700";
  const copyrightName = COMPANY_NAME || "";

  const menu: Menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Sellers",
      path: "/sellers",
    },
    {
      title: "Login",
      path: "/dashboard/login",
    },
  ];

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link
            className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
            href="/"
          >
            <Image
              src={Logos}
              alt="handlecraft-haven-logo"
              width={80}
              height={60}
              className="my-0 ml-2 rounded-lg object-contain py-1"
            />
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Remote Repository"
            href="https://github.com/Juarpla/handcrafted-haven"
          >
            <span className="px-3">▲</span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">GitHub</span>
          </a>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{" "}
            All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-px border-l border-neutral-400 md:inline-block" />
          <p>
            <a href="https://github.com/users/Juarpla/projects/3/views/1">
              View Project Status
            </a>
          </p>
          <p className="md:ml-auto">
            <a
              href="https://github.com/Juarpla/handcrafted-haven/blob/main/README.md"
              className="text-black dark:text-white"
            >
              Created by ▲ Group 7 - WDD430
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
