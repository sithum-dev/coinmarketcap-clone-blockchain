import Image from 'next/image'

function Footer() {
  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 px-3 md:grid-cols-2">
      <div className="mx-auto md:mx-0">
        <Image
          src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
          alt="logo"
          className="cursor-pointer"
          width={200}
          height={100}
          onClick={() => router.push('/')}
        />
      </div>
      <div className="grid grid-cols-2 gap-5 py-8 px-3 md:grid-cols-4 md:px-0">
        <div className="mx-auto">
          <h2 className="text-xl font-semibold text-white">Products</h2>
          <div className="mt-4">
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Blockchain Explorer
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Crypto API
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Crypto Indices
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Jobs Board
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Sitemap
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <h2 className="text-xl font-semibold text-white">Company</h2>
          <div className="mt-4">
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              About us
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Terms of use
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Privacy Policy
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Community Rules
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Disclaimer
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Methodology
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Careers{' '}
              <span className="rounded-xl bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
                We are hiring!
              </span>
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <h2 className="text-xl font-semibold text-white">Support</h2>
          <div className="mt-4">
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Request Form
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Contact Support
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              FAQ
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Glossary
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <h2 className="text-xl font-semibold text-white">Support</h2>
          <div className="mt-4">
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Facebook
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Twitter
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Telegram
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Instagram
            </p>
            <p className="cursor-pointer py-1 text-lg text-gray-400 hover:text-blue-300">
              Interactive Chat
            </p>
          </div>
        </div>
      </div>
      <div className="my-4 text-center text-gray-400 md:col-span-2">
        <p>© {new Date().getFullYear()} CMC. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
