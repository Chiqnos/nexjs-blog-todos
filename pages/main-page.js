import Link from "next/link";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";
import Layout from "../components/Layout";

const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();
  const logout = () => {
    cookie.remove("access_token", { path: "/" });
    router.push("/");
  };

  return (
    <Layout title="Main page">
      <div className="mb-10">
        <Link href="/blog-page">
          <a className="bgindigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded">
            Blog page
          </a>
        </Link>
        <Link href="/task-page">
          <a className="bgindigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded">
            Task page
          </a>
        </Link>
      </div>
      <svg
        onClick={logout}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="mt-10 cursor-pointer w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        />
      </svg>
    </Layout>
  );
}
