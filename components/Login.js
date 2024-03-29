export default function Login () {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto py-24">
          <div className="w-full bg-zinc-950 rounded-2xl shadow dark:border-4 border-zinc-900 md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign In
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                          <input type="email" name="email" id="email" className="bg-zinc-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" name="password" id="password" className="bg-zinc-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div className="flex items-center justify-between">
                          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot Password?</a>
                      </div>
                      <button type="submit" className="bg-zinc-900 w-full text-white bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign In</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
  

}