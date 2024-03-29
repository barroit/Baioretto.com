import type { V2_MetaFunction, LoaderFunction } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

export const meta: V2_MetaFunction = () => ([
  {
    title: "Junction",
  },
]);

const _TempURL = "https://admin.baioretto.com/unstable/file/";

export const loader: LoaderFunction = async () => {
  throw new Error("not implemented😅");
};

export default function Junction() {
  const { data } = useLoaderData();

  return (
    <main className="h-full my-32 container mx-auto flex flex-col gap-y-10">
      <Suspense fallback={ <div>?</div> }>
        <Await resolve={ data }>
          { res => (
            <ul className="h-full flex flex-col justify-center items-center">
              { res.map((name: string) => (
                <li className="mb-7" key={ name }>
                  <a className="underline text-4xl text-royal-blue" href={ _TempURL + name }>{ name }</a>
                </li>
              )) }
            </ul>
          ) }
        </Await>
      </Suspense>
    </main>
  );
}